const TRIBUTE_API = 'https://api.secure.tributecenteronline.com/ClientApi';
const DOMAIN_IDS = {
  'oakley-cook': 'ac386460-9069-4d71-8a48-0a6ab1f5f511',
  'oak-hill':    '71db2950-dc10-4a1b-8c2c-98d8a6ad0a03',
};

export async function onRequestGet({ request }) {
  const url        = new URL(request.url);
  const obituaryId = url.searchParams.get('obituaryId');
  const src        = url.searchParams.get('src');
  const domainId   = DOMAIN_IDS[src];

  if (!obituaryId || !domainId) {
    return new Response(JSON.stringify({ error: 'Missing obituaryId or src' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  const upstream = await fetch(
    `${TRIBUTE_API}/obituaries/GetObituaryInfo?obituaryId=${encodeURIComponent(obituaryId)}`,
    { headers: { DomainId: domainId } }
  );

  if (!upstream.ok) {
    return new Response(JSON.stringify({ error: `Upstream error ${upstream.status}` }), {
      status: 502, headers: { 'Content-Type': 'application/json' },
    });
  }

  const data     = await upstream.json();
  const info     = data?.ObituaryAndServiceInfo ?? {};
  const services = info.ServiceInfoes ?? [];
  const cemetery = info.Cemetery ?? null;

  return new Response(JSON.stringify({ services, cemetery }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
