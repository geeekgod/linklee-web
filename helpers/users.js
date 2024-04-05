import { users } from "@utils/firebaseAdmin";

const create = async (id, data) => {
  const created = await users.doc(id).set(data, { merge: true });
  return created ? { id, ...data } : null;
};

const get = async (id) => {
  const user = await users.doc(id).get();

  if (user.exists) {
    return { id: user.id, ...user.data() };
  }

  return null;
};

export default { create, get };
