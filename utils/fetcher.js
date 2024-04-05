export default async function fetcher(url, payload) {
  const req = await fetch(url, {
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  return await req.json();
}
