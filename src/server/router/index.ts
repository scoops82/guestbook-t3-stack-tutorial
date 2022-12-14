// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { guestbookRouter } from "./guestbook";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("guestbook", guestbookRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
