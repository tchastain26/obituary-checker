const TRIBUTE_API = 'https://api.secure.tributecenteronline.com/ClientApi';
const DOMAIN_ID = 'ac386460-9069-4d71-8a48-0a6ab1f5f511';

export async function onRequestGet() {
  const url = `${TRIBUTE_API}/obituaries/GetObituariesExtended?skip=0&take=50`;
  const response = await fetch(url, { headers: { DomainId: DOMAIN_ID } });
  if (!response.ok) {
    return new Response(JSON.stringify({ error: `Upstream error ${response.status}` }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const data = await response.text();
  return new Response(data, {
    headers: { 'Content-Type': 'application/json' },
  });
}
