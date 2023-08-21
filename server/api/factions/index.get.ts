import { factionList } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";

export default defineEventHandler(async () => {
  try {
    const factionsResp = db.select().from(factionList).all();
    return { "factions" : factionsResp}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
