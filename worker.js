const RELAXIN_ORIGIN = 'https://relaxin-web.lakr-aream.workers.dev';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/relaxin' || url.pathname.startsWith('/relaxin/')) {
      const upstream = new URL(url.pathname + url.search, RELAXIN_ORIGIN);
      return fetch(new Request(upstream, request));
    }

    return env.ASSETS.fetch(request);
  },
};
