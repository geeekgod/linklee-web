import axios from "axios";

export default async function fetcher(url, payload) {
  const req = await axios.post(url, payload);
  return req.data;
}