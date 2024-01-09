export const getSearchParamsFromURL = () => new URLSearchParams(window.location.search)

export const getQueryParams = (params: Record<string, string>) => {
  const searchParams = getSearchParamsFromURL()

  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(key, value)
  })

  return `?${searchParams.toString()}`
}

export const addQueryParams = (params: Record<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params))
}
