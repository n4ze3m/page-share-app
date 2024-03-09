import { ActionFunctionArgs, json } from "@remix-run/node";
import { prisma } from "~/db.server";

type CreateBody = {
    share_id: string;
    owner_id: string;
}

export async function action({ request }: ActionFunctionArgs) {
    const body = await request.json() as CreateBody;
    const { share_id, owner_id } = body;

    if (!share_id || !owner_id) {
        return json({ message: "Missing required fields" }, {
            status: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }



    const chat = await prisma.chat.findFirst({
        where: {
            id: share_id,
            owner_id: owner_id,
        }
    });

    if (!chat) {
        return json({ message: "Chat not found" }, {
            status: 404,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    }

    await prisma.chat.delete({
        where: {
            id: share_id,
        }
    })

    return json({
        message: "Chat deleted",
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    })
}