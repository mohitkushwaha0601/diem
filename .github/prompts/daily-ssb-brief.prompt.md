---
mode: agent
name: brief
description: Generate today's SSB current-affairs brief page from real headlines and update the archive.
argument-hint: <date, e.g. 24 September 2026>
---
Walk me through today's news that holds eminence for SSB preparation — real, current headlines across India, Defence, Geopolitics, International affairs, Politics, Economy, Sports (skip a category if nothing genuinely notable happened; don't invent one).

For each headline, research it with real sources (no fabrication, include working source links) and give me, in this order:
1. Category (e.g. "India · Defence")
2. Headline
3. Summary (50-75 words)
4. What happened?
5. Why it matters?
6. India's stance/perspective — why this news matters to India specifically, or India's stated position (tie non-India stories back to Indian interest/strategy; if there's genuinely no angle, say so)
7. Competing viewpoints (balanced, both sides, no partisan conclusion)
8. SSB cue — one practical line for how to talk about this in a GD / Lecturette / PI
9. Explore — a small section at the bottom of each news item with 3-6 one/two-word keywords to dig into further (e.g. for a NATO-Russia-Ukraine story: NATO, Global impact, Baltics, Sanctions)
10. Source(s) — real link(s), outlet + date

Then:
- Build today's brief page using `templates/daily-brief-template.html`, filling `{{DATE_LABEL}}`, `{{DATE_FULL}}`, `{{NAV_ITEMS}}`, `{{NEWS_ITEMS}}`, `{{REVISION_POINTS}}` (see `skills/daily-ssb-brief/SKILL.md` for the exact markup contract and file-naming rules).
- Save it as `Dates/<dd><month-lowercase><yyyy>.html`.
- Update `index.html`: refresh the "Last updated on <date>" line and add a new entry for this date (skip the new entry if it already exists).
- Report the date generated, the list of headlines by category, and confirm the index.html update.

Date: ${input:date:e.g. 24 September 2026}
