import { spellsNew } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";

export default defineEventHandler(async (event) => {
  try {
    const spellsResp = db.select().from(spellsNew).all();
    return { "spells" : spellsResp }
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
