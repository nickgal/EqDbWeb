import { and, inArray, SQL } from "drizzle-orm";
import { items } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";

export default defineEventHandler(async (event) => {
  const filters: SQL[] = []

  const { id: ids, page } = getQuery(event)
  const perPage = 250
  const pageOffset = page ? (page as number - 1) * perPage : 0

  if (ids) {
    filters.push(inArray(items.id, ids))
  }

  try {
    const itemsResp = db.select().from(items)
      .where(and(...filters))
      .limit(perPage).offset(pageOffset).all();
    return { "items" : itemsResp}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
