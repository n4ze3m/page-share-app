import { type ActionFunctionArgs, data } from "react-router";
import { db } from "~/db/client.server";
import { chat } from "~/db/schema";
import { eq, and } from "drizzle-orm";

type CreateBody = {
    share_id: string;
    owner_id: string;
}

export async function action({ request }: ActionFunctionArgs) {
    const body = await request.json() as CreateBody;
    const { share_id, owner_id } = body;

    if (!share_id || !owner_id) {
        return data({ message: "Missing required fields" }, {
            status: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }



    const [existingChat] = await db.select()
        .from(chat)
        .where(and(
            eq(chat.id, share_id),
            eq(chat.ownerId, owner_id)
        ))
        .limit(1);

    if (!existingChat) {
        return data({ message: "Chat not found" }, {
            status: 404,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }

    await db.delete(chat)
        .where(eq(chat.id, share_id))

    return data({
        message: "Chat deleted",
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    })
}
