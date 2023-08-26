import { zone } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";

export default defineEventHandler(async () => {
  try {
    const zonesResp = db.select().from(zone).all();
    return { "zones" : zonesResp}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
