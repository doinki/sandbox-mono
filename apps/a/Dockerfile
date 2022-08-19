FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .
RUN yarn install --immutable --immutable-cache
RUN yarn a build
RUN yarn cache clean && yarn workspaces focus --production a

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder \
/app/.pnp.cjs \
/app/.pnp.loader.mjs \
/app/.yarnrc.yml \
/app/package.json \
/app/yarn.lock \
./
COPY --from=builder /app/apps/a/.next ./apps/a/.next
COPY --from=builder /app/apps/a/public ./apps/a/public
COPY --from=builder /app/apps/a/package.json ./apps/a

RUN chown -R nextjs:nodejs ./apps/a/.next
USER nextjs

EXPOSE 3000

CMD yarn a start
