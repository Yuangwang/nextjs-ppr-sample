FROM node:20-alpine
WORKDIR /app

# 1. Copy Next.js Standalone
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
COPY .apphosting ./.apphosting

# 2. FIX: Copy the REAL Build Manifest
# We use the one from the root .next folder as it is the source of truth.
COPY .next/build-manifest.json ./.next/build-manifest.json

# 3. FIX: Generate Dummy Loadable Manifest
# This file is genuinely missing in Canary, so we still need this dummy.
RUN echo "{}" > .next/react-loadable-manifest.json

# 4. CREATE VALID DUMMY MIDDLEWARE
RUN mkdir -p .next/server && \
    echo "module.exports = { \
      middleware: function() { \
        return { \
          waitUntil: Promise.resolve(), \
          response: new Response(null, { headers: { 'x-middleware-next': '1' } }) \
        } \
      } \
    }" > .next/server/middleware.js

# 5. Copy the Adapter
COPY local-adapter/dist ./adapter/dist

# 6. Clean up
RUN rm -rf node_modules package-lock.json

# 7. Install Dependencies (Using Canary)
RUN echo '{ \
  "name": "runtime", \
  "type": "module", \
  "dependencies": { \
    "fastify": "^5.0.0", \
    "@connectrpc/connect-fastify": "^2.1.1", \
    "@bufbuild/protobuf": "^2.1.0", \
    "fs-extra": "^11.2.0", \
    "next": "canary" \
  } \
}' > package.json

RUN npm install --force

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# 8. Symlink
RUN ln -s /app/node_modules ./adapter/dist/node_modules

# 9. Run
CMD ["node", "adapter/dist/bin/serve.js", "."]