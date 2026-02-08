import { type ActionFunctionArgs, data } from "react-router";
import { db } from "~/db/client.server";
import { chat } from "~/db/schema";
import { createId } from '@paralleldrive/cuid2';

type CreateBody = {
    title: string;
    messages: any[];
    owner_id: string;
}

export async function action({ request }: ActionFunctionArgs) {
    const body = await request.json() as CreateBody;
    const { title, messages, owner_id } = body;

    if (!title || !messages || !owner_id) {
        return data({ message: "Missing required fields" }, {
            status: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }

    if (messages.length === 0) {
        return data({ message: "Messages cannot be empty" }, {
            status: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }

    const [newChat] = await db.insert(chat).values({
        id: createId(),
        ownerId: owner_id,
        messages,
        title,
    }).returning({
        id: chat.id,
        title: chat.title,
    });

    // const url = new URL(request.url);

    return data({
        chat_id: newChat.id,
        title: newChat.title,
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    })
}
