export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const requestData = () => ({
    type: REQUEST_DATA
})

export const receiveData = (json, service) => ({
    type: RECEIVE_DATA,
    dataItems: service.extractPlayData(json),
    receivedAt: Date.now()
})

const fetchData = (dataService) => async dispatch => {
    let json;
    dispatch(requestData())

    try {
        json = await dataService.get();
    } catch (error) {
        console.error(error);
    }
    return dispatch(receiveData(json, dataService))      
}

const shouldFetchData = (state) => {
    const playData = state.playData['data']

    if (!playData) {
        return true
    }
    if (playData.isFetching) {
        return false
    }

    return true;
}

export const fetchDataIfNeeded = (dataService) => (dispatch, getState) => {
    if (shouldFetchData(getState())) {
        return dispatch(fetchData(dataService))
    }
}
