import { items } from "../../../drizzle/schema";
import { db } from "../../sqlite-service";
import { eq } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const itemId = event.context.params?.id as string;
    const itemsResp = db
      .select()
      .from(items)
      .where(eq(items.id, parseInt(itemId)))
      .get();
    return { item: itemsResp };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
