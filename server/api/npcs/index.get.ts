import { npcTypes } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";

export default defineEventHandler(async () => {
  try {
    const npcsResp = db.select().from(npcTypes).limit(250).all();
    return { "npcs" : npcsResp }
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
