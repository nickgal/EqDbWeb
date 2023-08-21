import { npcTypes } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const npcId = event.context.params?.id as string;
    const npc = db
      .select()
      .from(npcTypes)
      .where(eq(npcTypes.id, parseInt(npcId)))
      .get();
    return { npc };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
