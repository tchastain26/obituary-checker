# Obituary Checker

- **Owner:** Tucker Chastain
- **Live URL:** https://obituary-checker.pages.dev
- **Hosting:** Cloudflare Pages

## Purpose

Shows recent obituaries from Oakley-Cook Funeral Home, Akard Funeral Home, and Oak Hill Funeral Home so Tucker can see at a glance whether there were services in the past week and prepare accordingly for cleaning.

## Tech Stack

- Single-file HTML/CSS/JS frontend (index.html)
- Cloudflare Pages Functions (functions/api/) as server-side proxies to Tribute Technology API
- No database, no auth, no environment variables needed

## API Details

Both funeral homes use Tribute Technology (tributecenteronline.com). The Pages Functions proxy requests to:
`https://api.secure.tributecenteronline.com/ClientApi/obituaries/GetObituariesExtended`

- Akard domain ID: 67518621-83f9-4a0d-aa33-7b11c4c73ce9
- Oakley-Cook domain ID: ac386460-9069-4d71-8a48-0a6ab1f5f511
- Oak Hill domain ID: 71db2950-dc10-4a1b-8c2c-98d8a6ad0a03

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
- Deployed to Cloudflare Pages on 2026.05.21
- UI update 2026.05.21: removed `WED` and `THU` from funeral home headers, made Service Details always visible, removed location addresses from the service table, and kept Full Obituary as a plain-text collapsible section
- UI update 2026.05.21 (2): calendar dots now only appear when a service event is actually at Akard or Oakley-Cook, with Akard shown in green and Oakley-Cook in red; those same colors now carry through the panels and badges while the service table stays neutral except for Akard/Oakley-Cook location names
- UI update 2026.05.21 (3): obituary cards now sort by actual Akard/Oakley-Cook service or visitation timing instead of death date, and only obituaries with an in-house Akard/Oakley-Cook service or visitation get highlighted
- UI update 2026.05.21 (4): header count pills are back, but now they show obituary deaths from the past 7 days for each funeral home so private showings still affect the count
- UI update 2026.07.20: added Oak Hill panel, API proxy, calendar dot color, and shared service-detail lookup support
- UI update 2026.07.26: changed Oak Hill's panel, badge, calendar dot, and service-location accent from yellow/brown to blue
- No environment variables or secrets needed
- The functions/ directory is deployed alongside the static HTML by wrangler pages
