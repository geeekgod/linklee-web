import Links from "@helpers/links";

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const { username } = req?.body;
            const link = await Links.checkUsernameExists(username);

            if (!link) {
                res.send({
                    data: {
                        success: false,
                        message: "Username not found",
                    },
                });
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
