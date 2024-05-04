import Links from "@helpers/links";

export default async function handler(req, res) {
    try {
        const { id, data } = req?.body;
        const created = await Links.createLink(id, data);

        res.send({
            data: {
                created: created ? true : false,
            },
        });
    } catch (error) {
        res.send({ error: error.message });
    }
}