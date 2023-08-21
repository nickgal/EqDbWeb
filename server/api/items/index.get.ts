import { items } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";

export default defineEventHandler(async () => {
  try {
    const itemsResp = db.select().from(items).limit(250).all();
    return { "items" : itemsResp}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
