import { zone } from "~/drizzle/schema";
import { db } from "~/server/sqlite-service";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const zoneId = event.context.params?.id as string;
    // FIXME: Add where spawn2.enabled
    const zoneResponse = await db.query.zone.findFirst({
      where: eq(zone.id, parseInt(zoneId)),
      with: {
        spawns: {
          with: {
            spawnEntries: true
          }
        }
      },
    });
    return { zone: zoneResponse };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
