import {defineEventHandler, sendRedirect} from 'h3'

export default defineEventHandler(async (event) => {
  const url = event.req.originalUrl.split(/[?&]+/)
  const location = url[0]

  let redirect = ''

  if (location[location.length - 1] !== '/' && location !== '/') {
    redirect = location + '/'
  }

  if (redirect) {
    if (url.length > 1) {
      redirect += `?${url.slice(1).join('&')}`
    }

    redirect = redirect.replace(/(\/\/+)/, '/')

    if (redirect[0] !== '/') {
      redirect = `/${redirect}`;
    }

    await sendRedirect(event, redirect, 301)
  }
})
