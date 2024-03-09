import { ActionFunctionArgs, json } from "@remix-run/node";
import { prisma } from "~/db.server";

type CreateBody = {
    title: string;
    messages: any[];
    owner_id: string;
}

export async function action({ request }: ActionFunctionArgs) {
    const body = await request.json() as CreateBody;
    const { title, messages, owner_id } = body;

    if (!title || !messages || !owner_id) {
        return json({ message: "Missing required fields" }, {
            status: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }

    if (messages.length === 0) {
        return json({ message: "Messages cannot be empty" }, {
            status: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }

    const newChat = await prisma.chat.create({
        data: {
            messages,
            owner_id,
            title,
        }
    });

    // const url = new URL(request.url);

    return json({
        chat_id: newChat.id,
        title: newChat.title,
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    })
}