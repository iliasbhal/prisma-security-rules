import { initTRPC } from "@trpc/server";

export type Context = {
  requestId: string;
}

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