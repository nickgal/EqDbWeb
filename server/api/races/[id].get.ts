import { races } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const raceId = event.context.params?.id as string;
    const race = db
      .select()
      .from(races)
      .where(eq(races.id, parseInt(raceId)))
      .get();
    return { race };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
