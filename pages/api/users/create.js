import Users from "@helpers/users";

export default async function handler(req, res) {
  try {
    const { data, userId } = req?.body;
    const created = await Users.create(userId, data);
    res.send({ created: created ? true : false });
  } catch (error) {
    throw error;
  }
}
