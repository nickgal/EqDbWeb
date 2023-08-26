import { npcTypes } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const npcId = event.context.params?.id as string;
    const npc = await db.query.npcTypes.findFirst({
      where: eq(npcTypes.id, parseInt(npcId)),
      with: {
        loottable: {
          with: {
            loottableEntries: {
              with: {
                lootdropEntries: true
              }
            }
          }
        },
      },
    });
    return { npc };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
