import { factionList } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const factionId = event.context.params?.id as string;
    const faction = db
      .select()
      .from(factionList)
      .where(eq(factionList.id, parseInt(factionId)))
      .get();
    return { faction };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
