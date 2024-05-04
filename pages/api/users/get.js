import Users from "@helpers/users";

export default async function handler(req, res) {
  try {
    if (req.method === "POST" || req.method === "PUT" || req.method === "GET") {
      const { userId } = req?.body;
      const user = await Users.get(userId);

      if (!user) {
        throw new Error("User not found");
      }

      res.send({
        data: {
          success: true,
          user,
        },
      });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
}
