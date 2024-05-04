import { links } from "@utils/firebaseAdmin";

/**
 * Link schema
 * id: string
 * data: {
 *  username: string
 *  url: string
 *  createdAt: number
 *  updatedAt: number
 *  updatedLinkCount: number
 * }
 */

const createLink = async (id, data) => {
    const created = await links.doc(id).set(data, { merge: true });
    return created ? { id, ...data } : null;
}

const getLink = async (id) => {
    const link = await links.doc(id).get();

    if (link.exists) {
        return { id: link.id, ...link.data() };
    }

    return null;
};

const getLinkFromUsername = async (username) => {
    const link = await links.where("username", "==", username).get();

    if (link.docs.length > 0) {
        return { id: link.docs[0].id, ...link.docs[0].data() };
    }

    return null;
}

const updateLink = async (id, data) => {
    const updated = await links.doc(id).set(data, { merge: true });
    return updated ? { id, ...data } : null;
}

const checkUsernameExists = async (username) => {
    const link = await links.where("username", "==", username).get();
    return link.docs.length > 0;
}

export default { createLink, getLink, getLinkFromUsername, updateLink, checkUsernameExists };