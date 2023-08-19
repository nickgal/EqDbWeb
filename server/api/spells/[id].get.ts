import { spellsNew } from "../../../drizzle/schema";
import { db } from "../../sqlite-service";
import { eq } from "drizzle-orm";
export default defineEventHandler(async (event) => {
  try {
    // get id as function parameter from route params
    const spellId = event.context.params?.id as string;
    const spell = db
      .select()
      .from(spellsNew)
      .where(eq(spellsNew.id, parseInt(spellId)))
      .get();
    return { spell };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
