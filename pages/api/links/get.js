import Links from "@helpers/links";

export default async function handler(req, res) {
    try {
        if (req.method === "GET" || req.method === "POST") {
            const { userId } = req?.body;
            const link = await Links.getLink(userId);

            if (!link) {
                throw new Error("Link not found");
            }

            res.send({
                data: {
                    success: true,
                    link,
                },
            });
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}
