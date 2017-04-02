export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const requestData = () => ({
  type: REQUEST_DATA
})

export const receiveData = (json) => ({
  type: RECEIVE_DATA,

  dataItems: json._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    .map((d) => {
      return {
        "imgL": d.content.images.landscape.url.concat("&width=480&height=270"),
        "imgS": d.content.images.landscape.url.concat("&width=240&height=135"),
        "title": d._links.self.title,
        "href": d._links.self.title
      }
    }),
  receivedAt: Date.now()
})


const fetchData = () => dispatch => {
  dispatch(requestData())
  // TODO : async await try catch
  return fetch(`https://content.viaplay.se/pc-se/serier/samtliga`)
    .then(response => response.json())
    .then((json) => dispatch(receiveData(json)))
  // let response = await fetch(`https://content.viaplay.se/pc-se/serier/samtliga`)
  // let json = await response.json();
  // dispatch(receiveData(json))
}

const shouldFetchData = (state) => {
  console.log("should fetch", !!state.playData)
  const playData = state.playData['data']
  if (!playData) {
    return true
  }
  if (playData.isFetching) {
    return false
  }
  return true;
}

export const fetchDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchData(getState())) {
    return dispatch(fetchData())
  }
}
