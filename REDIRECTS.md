# Pointing the old site here

The drinks were published at their own address before this site put the
two halves together. Everything below is about not breaking links that
already exist.

## What this repo already handles

`next.config.ts` carries two permanent (308) redirects:

| Old path | Goes to |
|---|---|
| `/menu` | `/backbar` |
| `/menu/:slug` | `/backbar/:slug` |

The slugs are unchanged, because both sites derive them the same way -
Bar Assistant's slug with its trailing `-N` revision counter stripped. So
`/menu/black-magic-margarita` lands on
`/backbar/black-magic-margarita` and no link needs rewriting by hand.

`lib/backbar.ts` also resolves a drink by Bar Assistant's raw slug (with
the `-N` still on it) or by its numeric id, so links shared before the
suffix was being stripped still resolve rather than 404.

## What still needs doing

Those redirects only fire for requests that reach **this** site. They do
nothing for the old origin.

Two options, depending on what happens to the old domain:

**If the old domain is retired.** Point its DNS at this site. The
redirects above then catch the old paths and everything resolves.

**If the old domain stays up.** Add a redirect at that host, before the
old app gets the request:

```
/menu       →  https://<new-domain>/backbar        308
/menu/:slug →  https://<new-domain>/backbar/:slug   308
/           →  https://<new-domain>/                308
```

On Vercel that is a `redirects` block in the old project's
`vercel.json`; behind a reverse proxy it is a `return 308` rule.

Prefer 308 over 302 either way: these addresses are not coming back, and
a permanent redirect is what moves the search ranking across rather than
splitting it.

## The name

The old site was branded **Entre Deux Verres**. That name is retired -
it survives as a line on the Backbar masthead saying where the drinks
were published before, and as the `source` field Bar Assistant stamps
into every recipe, which is what the pull script reads to tell my own
drinks from anything else in the book.

`FORMER_NAME` in `lib/config.ts` is the single place it is spelled.
