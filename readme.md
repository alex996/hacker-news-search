# Hacker News Search

> See [live demo](https://alex996.github.io/hacker-news-search/) on GitHub Pages.

[Hacker News](https://news.ycombinator.com/) feed search with autocomplete. Inspired by Google search.

## Installation

```sh
# Clone the repo
git clone https://github.com/alex996/hacker-news-search.git
cd hacker-news-search

# Install deps
npm install
```

### Development

```sh
# Launch dev server
npm start
```

### Production

```sh
# Build prod bundle
npm run build

# Serve on localhost
npm run serve
```

## Specifications

- autocomplete search when typing
- story with a title, link, author, & score
- React with [Algolia API](https://hn.algolia.com/api)

## Retrospective

### UI/UX

- timeout is laggy; perhaps decrease it or use debounce instead
- typeahed could be more like Algolia with paginated results, or
  - autocomplete `input` (empty) + virtual list of `query=''` results, scrollable
  - on type, fetch new results (or potentially, filter initial results?), update virtual list
- also allow to use arrow keys (a11y)
- allow to choose number of results

### Perf

- use an a11y lib, e.g. `downshift`
- use UI lib, e.g. `bulma` etc.
- split into logical components (`Input`, `Stories`, `Story`)
- optimize rendering
  - `useMemo` on list item to avoid wasteful renders
  - `useCallback` to memoize callbacks
- styling would not scale, split it by component e.g. `/Input/style.scss`
  - also make it scoped by tweaking the style loader
- implement caching in local storage (?)
