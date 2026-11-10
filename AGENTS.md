# valentina.dev

## Copy

- Sentence case everywhere: capitalize the first word of every heading, label,
  link, button, title and sentence. Proper nouns keep their capitals. Nothing
  else gets a capital.

## Design

- Keep it minimal. Ship the smallest version first and add more incrementally.
- Font: Instrument Sans, and nothing else.
- Type: only the scales in `app/typekit.css` (`text-title`, `text-body`,
  `text-caption`). Add a scale only when a page needs one.
- Layout: everything sits on the grid in `app/grid.css`. Vertical sidebar on
  the left, content to its right, left-aligned and capped at
  `--grid-max-width`. Press `Ctrl+G` to toggle the grid overlay.
- Colors: only the tokens in `app/globals.css` (`foreground`, `muted`,
  `border`, `background`).

## Content

- Sections: About (`/`), Work, Records (posts, X posts, talks), Interests.
- Entries live in `data/`. Interest images are static imports so they get
  their size and blur placeholder.
