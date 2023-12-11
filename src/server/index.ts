import db from "@/prisma";
import { publicProcedure, router } from "./trpc";
import { randomInt } from "crypto";

export const appRouter = router({
  ping: publicProcedure.query(() => {
    return "pong";
  }),
  getPatientsCounts: publicProcedure.query(async () => {
    return randomInt(1000);
  }),
  getAppointmentsCounts: publicProcedure.query(async () => {
    return randomInt(1000);
  }),
  getHistoriesCounts: publicProcedure.query(async () => {
    return randomInt(1000);
  }),
});

export type AppRouter = typeof appRouter;
