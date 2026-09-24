---
name: daily-ssb-brief
description: Use when the user asks to generate today's (or a given date's) SSB current-affairs brief page for this repo — researching real headlines across India, Defence, Geopolitics, International, Politics, Economy, Sports, etc., writing SSB-style pointers for each, filling templates/daily-brief-template.html, saving it under Dates/, and updating index.html with the new date link.
---

# Daily SSB current-affairs brief

Produces one static HTML page per day for an SSB-prep news archive, built from real, sourced headlines.

## 1. Research (do this first, every time)

- Use web search/fetch to find **today's real news** (or the date given by the user) across: India, Defence, Geopolitics, International affairs, Politics, Economy, Sports.
- Pick 6–10 stories total. Prefer one strong story per category; skip a category if nothing genuinely notable happened — never invent a story to fill a slot.
- For every story, get a real, working source URL (Reuters, BBC, AP, PIB, major outlets, etc.). Never fabricate a headline, quote, figure or link.
- Note the outlet + date in the citation text (e.g. "Reuters, 24 Sep").

## 2. Neutrality rules

- Distinguish a reported allegation from an established finding. Distinguish an announced proposal from a completed outcome.
- No partisan conclusions. Attribute claims to the party making them ("X alleges…", not "X did…") when unproven.
- Keep SSB cues practical and balanced, not ideological.

## 3. Per-story content (write all of these for each headline)

- `category`: e.g. `India · Defence`, `Geopolitics · Indo-Pacific`.
- `headline`: short, factual, no clickbait.
- `summary`: ~50 words, standalone precis.
- `event` (What happened?): 1–2 sentences, factual.
- `importance` (Why it matters?): 1–2 sentences.
- `india_angle` (India's stand/perspective): 1–2 sentences on why this news matters to India specifically, or India's stated position — even for non-India stories, tie it to Indian interest, strategy or precedent. If genuinely no India angle exists, say so briefly rather than forcing one.
- `viewpoints` (Competing viewpoints): 1–2 sentences presenting both sides fairly.
- `cue` (SSB cue): one practical line telling the reader how to talk about this in a GD/Lecturette/PI.
- `explore`: 3–6 short one/two-word keywords for further reading, directly related to the story (e.g. for a NATO–Russia–Ukraine story: `NATO`, `Global impact`, `Baltics`, `Sanctions`).
- `source`: one or more real `<a href="URL">Outlet, DD Mon</a>` links, semicolon-separated if more than one. Use "Source:" singular or "Sources:" plural depending on count.

## 4. Fill the template

Read `templates/daily-brief-template.html` and replace these placeholders (do not change the surrounding markup/CSS):

- `{{DATE_LABEL}}` → e.g. `24 September 2026`
- `{{DATE_FULL}}` → e.g. `Thursday, 24 September 2026`
- `{{NAV_ITEMS}}` → one `<a href="#slug">Short Label</a>` per story, concatenated with no separator. `slug` is a short descriptive anchor id (e.g. `defence`, `sanctions`, `summit`) — not `topic-1`.
- `{{NEWS_ITEMS}}` → one `<article id="slug">` block per story, in this exact shape:
  ```html
  <article id="slug">
    <p class="tag">NN / Category</p>
    <h2>Headline</h2>
    <p class="summary"><span class="label">In ~50 words:</span> Summary text.</p>
    <dl>
      <dt>What happened?</dt><dd>Event text.</dd>
      <dt>Why it matters</dt><dd>Importance text.</dd>
      <dt>India's stance</dt><dd>India angle text.</dd>
      <dt>Competing viewpoints</dt><dd>Viewpoints text.</dd>
    </dl>
    <p class="cue"><strong>SSB cue:</strong> Cue text.</p>
    <p class="explore"><strong>Explore:</strong> <span class="chip">Keyword</span> <span class="chip">Keyword</span> <span class="chip">Keyword</span></p>
    <p class="source">Source(s): <a href="URL">Outlet, DD Mon</a>.</p>
  </article>
  ```
  `NN` is a two-digit sequence number (`01`, `02`, …). Number of `<article>` blocks is not fixed — one per researched story.
- `{{REVISION_POINTS}}` → exactly 3 `<li><strong>Connective theme:</strong> one sentence tying two or more of today's stories together.</li>` items.

The template already includes the `.home-link` element pointing back to `../index.html` — leave it as is.

## 5. Save the file

- Filename: `Dates/<dd><full-month-lowercase><yyyy>.html`, e.g. `Dates/24september2026.html`.
- Write the completed HTML (template + replacements) to that path.

## 6. Update index.html

- Open `index.html`.
- Update the `<p class="updated">Last updated on ...</p>` line to the date being generated.
- Insert a new entry immediately after the opening `<ul>` tag (so the newest date appears first):
  ```html
  <li>
    <span class="meta">Date</span>
    <a href="./Dates/<filename>"><dd Month yyyy label></a>
  </li>
  ```
- If an `<li>` linking to that same `Dates/<filename>` already exists, do not add a duplicate — leave the list unchanged but still refresh the "Last updated" line.

## 7. Report back

Summarize: date generated, list of headlines with categories, and confirmation that `index.html` was updated (or already up to date).
