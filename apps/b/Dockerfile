FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .
RUN yarn install --immutable --immutable-cache
RUN yarn b build
RUN yarn cache clean
RUN yarn workspaces focus --production b
RUN rm -rf .yarn/unplugged .yarn/sdks

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
COPY --from=builder /app/apps/b/.next ./apps/b/.next
COPY --from=builder /app/apps/b/public ./apps/b/public
COPY --from=builder /app/apps/b/package.json ./apps/b

RUN chown -R nextjs:nodejs ./apps/b/.next
USER nextjs

EXPOSE 3000

CMD yarn b start
