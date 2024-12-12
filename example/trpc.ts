import { initTRPC } from "@trpc/server";
import { Context } from './context'

export { Context } from './context'

export type Metadata = {}

export const trpc = initTRPC
  .context<Context>()
  .meta<Metadata>()
  .create({
    defaultMeta: {

    }
  });

export const procedure = trpc.procedure;

export type TRPC = typeof trpc;