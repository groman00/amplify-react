// export const getAllCalls = () => {
//     return [
//         {
//             id: 0,
//             text: 'foo 1'
//         },
//         {
//             id: 0,
//             text: 'foo 1'
//         }
//     ]
// };


export function getAllCalls() {
    return {};
}



/*
import fetch from 'isomorphic-fetch';

function requestMovieSearch() {
    return {
        type: 'REQUEST_MOVIESEARCH'
    }
}

function receiveMovieSearch(json) {
    return {
        type: 'RECEIVE_MOVIESEARCH',
        items: json.results,
        receivedAt: Date.now()
    }
}

export function fetchMovieSearch(query) {
    return function (dispatch) {
        dispatch(requestMovieSearch());
        return fetch('./api/?action=search&q=' + encodeURIComponent(query))
            .then(response => response.json())
            .then(json =>
                dispatch(receiveMovieSearch(json))
            );
    }
}
*/