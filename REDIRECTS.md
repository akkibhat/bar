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

Both addresses sit on the same zone, which makes this simpler than it
would otherwise be:

| | Where |
|---|---|
| New | `bar.pi.co.nz`, on Cloudflare Pages |
| Old | `cocktails.pi.co.nz` |

**Likely: the old domain is retired.** Point `cocktails.pi.co.nz` at this
site. The redirects above then catch `/menu` and `/menu/:slug` and
everything resolves, with nothing to configure at either end.

**If it stays up instead.** The redirect has to happen at that host,
before the old app sees the request. Both names are on the same
Cloudflare zone, so that is a redirect rule at the edge rather than a
change to either codebase:

```
/menu       →  https://bar.pi.co.nz/backbar        308
/menu/:slug →  https://bar.pi.co.nz/backbar/:slug  308
/           →  https://bar.pi.co.nz/               308
```

Prefer 308 over 302 either way: these addresses are not coming back, and
a permanent redirect is what moves the search ranking across rather than
splitting it.

## The name

The old site was branded **Entre Deux Verres**. That name is retired -
it survives as a line on the Backbar masthead saying where the drinks
were published before, and as the `source` field Bar Assistant stamps
into every recipe, which is what the pull script reads to tell my own
drinks from anything else in the book.

`FORMER_NAME` in `lib/site.ts` is the single place it is spelled.
