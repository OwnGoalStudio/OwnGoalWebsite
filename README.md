# Own Goal Studio Website

The source for [owngoal.dev](https://owngoal.dev/).

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run deploy
```

The Cloudflare Worker serves the Vite build at the root domain and forwards
`/relaxin` to the existing Relaxin Worker.
