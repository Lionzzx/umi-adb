import serve from './request';

export function logo(params?: any) {
  return serve({
    url: '/web/get?id=1',
    method: 'GET',
    params,
  });
}

export function carouselList(params?: any) {
  return serve({
    url: '/web/index.php',
    method: 'GET',
    params,
  });
}
