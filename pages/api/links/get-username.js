import Links from "@helpers/links";

export default async function handler(req, res) {
    try {
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
    } catch (error) {
        res.send({ error: error.message });
    }
}
