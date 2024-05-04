import Links from "@helpers/links";

export default async function handler(req, res) {
    try {
        if (req.method === "GET" || req.method === "POST") {
            const { username } = req?.body;
            const link = await Links.getLinkFromUsername(username);

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
