# Obituary Checker

- **Owner:** Tucker Chastain
- **Live URL:** https://a33a22ef.obituary-checker.pages.dev
- **Hosting:** Cloudflare Pages

## Purpose

Shows recent obituaries from Akard Funeral Home (Thu) and Oakley-Cook Funeral Home (Wed) so Tucker can see at a glance whether there were services in the past week and prepare accordingly for cleaning.

## Tech Stack

- Single-file HTML/CSS/JS frontend (index.html)
- Cloudflare Pages Functions (functions/api/) as server-side proxies to Tribute Technology API
- No database, no auth, no environment variables needed

## API Details

Both funeral homes use Tribute Technology (tributecenteronline.com). The Pages Functions proxy requests to:
`https://api.secure.tributecenteronline.com/ClientApi/obituaries/GetObituariesExtended`

- Akard domain ID: 67518621-83f9-4a0d-aa33-7b11c4c73ce9
- Oakley-Cook domain ID: ac386460-9069-4d71-8a48-0a6ab1f5f511

## Deploy

```
cd "84_Apps/obituary-checker"
chmod +x deploy.sh
./deploy.sh
```

First deploy will prompt to create the project in Cloudflare (accept defaults).
After deploying, set the live URL above and add it to the cleaning notes in /71_Cleaning/.

## Notes

- Built 2026.05.21
- No environment variables or secrets needed
- The functions/ directory is deployed alongside the static HTML by wrangler pages
