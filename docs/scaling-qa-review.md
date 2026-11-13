# Follow-up QA case study — review notes

Prepared November 13, 2026 on branch `scaling-qa-case-study`.

## What changed

- Added `/case-studies/scaling-ai-assisted-qa/`, preserving the full supplied narrative and approximate observational claims.
- Added six independent, initially collapsed practical resources with customization guidance, exact copyable prompts, verification exercises, and prompt downloads.
- Included five supplied fictional teaching images with captions, full-size links, and adjacent HTML transcripts.
- Included the visitor-facing starter ZIP and the matching 16 editable files (Markdown, JSON, CSV, and prompt text). The internal handoff documents are not published assets.
- Linked the new article from the homepage and original article. Preserved homepage metrics and the first article’s historical narrative and confidentiality disclosure.
- Updated the first article’s current-status section without presenting unfinished library or automation work as complete.
- Kept the existing static HTML/CSS/JavaScript architecture and navy/slate/teal design. No dependencies were added.
- Calculated an eight-minute reading time at 225 words per minute for the article narrative, excluding optional resources.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000/case-studies/scaling-ai-assisted-qa/` in your own browser. The homepage and first case study also link to it. Use an HTTP server rather than opening HTML as a local file so directory links and clipboard permissions behave normally.

## Verification completed

- JavaScript syntax and Git whitespace checks passed.
- The full supplied narrative was checked against the rendered article.
- Unrelated homepage content and the original article’s historical narrative were compared against the starting commit and preserved.
- Native disclosures tested using clicks, Enter, and Space; several resources can remain open simultaneously.
- All six copy buttons tested against the actual browser clipboard. Exact text, placeholders, multiline copying, polite success feedback, restored labels, and denied-clipboard guidance passed. Copying does not close a resource.
- Article, prompt text, examples, and file downloads remain usable with JavaScript disabled; copy buttons stay hidden.
- ZIP extraction/integrity and byte-for-byte correspondence to individual files checked. JSON parses and CSV templates have valid headers. All individual links and the downloaded ZIP were verified.
- Homepage, first-article, follow-up, sidebar, return, and full-size image links checked. Existing Snake/To-Do disclosures and resume link also passed.
- Expanded and collapsed layouts checked at 1440, 768, 390, 375, and 320 CSS pixels with no horizontal body overflow.
- Checked a 720-CSS-pixel viewport with 2× pixel density as a 1440px/200%-zoom equivalent, plus skip-link and keyboard focus behavior. This is an emulated zoom-equivalent check, not a manual operating-system zoom test.
- No JavaScript errors or failed local HTTP responses observed. Supplied images and public examples are explicitly fictional; no employer evidence or internal handoff files were added to public assets.

Review captures were saved outside the repository as `article-collapsed.png`, `resource-expanded.png`, and `phone.png` in `/tmp/qa-followup-review/`.

## Review and release

Review the narrative, date, and fictional examples before publishing. `git diff` shows tracked changes; `git diff --no-index /dev/null case-studies/scaling-ai-assisted-qa/index.html` shows the new page before staging. This work does not require a backend or a build step. The existing Cloudflare Pages static-site configuration can serve the nested route when deployment is authorized.

No merge or deployment was performed for this update. Follow the author’s explicit publication instruction before releasing it.
