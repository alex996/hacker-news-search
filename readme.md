# Hacker News Search

> See [live demo](https://alex996.github.io/hacker-news-search/) on GitHub Pages.

[Hacker News](https://news.ycombinator.com/) feed search with autocomplete.

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
