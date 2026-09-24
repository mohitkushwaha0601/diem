---
mode: agent
name: brief
description: Research significant India, DRDO, defence, domestic, political, economic and world news for an SSB daily brief.
argument-hint: <date, e.g. 24 September 2026>
---
Produce an SSB preparation brief for the date below. Research and verify important news **as of that date** before writing. The beats below are reference points to jog your search, not a fixed checklist or quota — think from an SSB-preparation lens (what a candidate should be able to discuss intelligently) and include any genuinely consequential story from any subject area, even one not listed here. Scan broadly, not just general top-headline lists:

- **Indian defence and security:** DRDO tests/programmes, Army/Navy/Air Force/Coast Guard, procurement and indigenisation, border security, cyber/space security, exercises and defence diplomacy. Include a verified DRDO or Indian armed-forces development when there is a genuinely significant one; do not force one in when there isn't, and do not treat this beat as more important than other consequential news of the day.
- **Domestic India:** governance, law and courts, public health, education, society, environment, infrastructure, agriculture, disasters and internal security.
- **Indian politics and policy:** Parliament, elections, major government decisions, federal/state issues and institutional accountability; attribute disputed claims and include responses.
- **Indian economy:** RBI, inflation, jobs, GDP, trade, energy, industry, budget/tax and markets; explain key figures in context.
- **International affairs and geopolitics:** India's neighbours and Indo-Pacific, major-power relations, UN/multilateral diplomacy, wars and humanitarian developments that affect India or global stability.
- **Science/technology and sports:** include consequential Indian research or technology developments and major results or milestones, not routine announcements.
- **Anything else of real eminence:** if the most SSB-relevant story of the day sits outside these beats, include it anyway — the beats exist to widen your search, not to cap it.

Aim for **10–16 distinct, consequential stories** if sourcing supports them; fewer is better than filler, and more is fine for an exceptionally consequential day. Rank purely by actual significance to SSB preparation, not by category quotas or beat coverage — a day with three major defence stories and no notable sports news is fine, and so is the reverse. Allow multiple stories from one beat when merited. If a beat (including DRDO) has no verified significant update on the date, skip it and mention the gap in your report instead of fabricating news.

**Compare with the previous brief before writing:** find the most recent existing page under `Dates/` (the one dated immediately before this brief) and read it. For each story you plan to cover today, check whether it continues something already reported:
- If it's a continuation (an ongoing operation, negotiation, trial, investigation, series, etc.), make the "What happened?" text explicitly state what changed since the earlier report (e.g. "Since the 23 Sep brief, talks progressed from X to Y") rather than re-describing the same status quo as if it were new.
- If a story from the previous brief has clearly concluded or been superseded, you may note that resolution briefly instead of silently dropping it.
- Do not carry a story forward with no material development just to keep it in the archive.
- Make one of the three revision-section points an explicit "Compared with <previous date>" connection, naming at least one concrete thing that changed, advanced, or resolved since the last brief. If this is the first brief in the archive, skip this comparison and note that in your report.

Use dated, working source URLs for each story; cross-check consequential or contested claims with another independent outlet or an official primary source (e.g. DRDO, PIB, Ministry of Defence, Parliament, RBI, UN). Distinguish an announcement or proposal from a completed result, and mark inference about India's interests separately from an official Indian position.

For each headline, research it with real sources (no fabrication, include working source links) and give me, in this order:
1. Category (e.g. "India · Defence")
2. Headline
3. Summary (50-75 words)
4. What happened? (detailed but crisp)
5. Why it matters? (eminence of the news story)
6. India's stance/perspective — why this news matters to India specifically, or India's stated position (tie non-India stories back to Indian interest/strategy; if there's genuinely no angle, say so)
7. Competing viewpoints (balanced, both sides, no partisan conclusion)
8. SSB cue — one practical line for how to talk about this in a GD / Lecturette / PI
9. Explore — a small section at the bottom of each news item with 3-6 one/two-word keywords to dig into further (e.g. for a NATO-Russia-Ukraine story: NATO, Global impact, Baltics, Sanctions)
10. Source(s) — real link(s), outlet + date

Then:
- Build today's brief page using `templates/daily-brief-template.html`, filling `{{DATE_LABEL}}`, `{{DATE_FULL}}`, `{{NAV_ITEMS}}`, `{{NEWS_ITEMS}}`, `{{REVISION_POINTS}}` (see `skills/daily-ssb-brief/SKILL.md` for the exact markup contract and file-naming rules).
- Save it as `Dates/<dd><month-lowercase><yyyy>.html`.
- Update `index.html`: add a new entry for the date in descending date order (skip if it already exists). Keep "Last updated on <date>" at the newest published brief date, even when backfilling an older date.
- Report the date generated, headlines grouped by beat, any researched beats with no significant verified story, the previous brief you compared against and what changed, and the index update.

Date: ${input:date:e.g. 24 September 2026}
