import Users from "@helpers/users";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { data, userId } = req?.body;
      const created = await Users.create(userId, data);

      res.send({
        data: {
          created: created ? true : false,
        },
      });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
}
