import serve from './request'

export function logo(params?: any) {
  return serve({
    url: '/logo',
    method: 'GET',
    params
  })
}

export function carouselList(params?: any) {
  return serve({
    url: '/carousel',
    method: 'GET',
    params
  })
}
