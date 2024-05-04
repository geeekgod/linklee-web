import Links from "@helpers/links";

export default async function handler(req, res) {
    try {
        const { userId, data } = req?.body;
        const created = await Links.createLink(userId, data);

        res.send({
            data: {
                created: created ? true : false,
            },
        });
    } catch (error) {
        res.send({ error: error.message });
    }
}