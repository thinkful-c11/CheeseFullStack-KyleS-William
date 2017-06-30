export const CHEESE_REQUEST = 'CHEESE_REQUEST';
export const cheeseRequest = () => ({
  type: CHEESE_REQUEST
});

export const CHEESE_GET_SUCCESS = 'CHEESE_GET_SUCCESS';
export const cheeseGetSuccess = (cheeses) => ({
  type: CHEESE_GET_SUCCESS,
  cheeses
});

export const CHEESE_POST_SUCCESS = 'CHEESE_POST_SUCCESS';
export const cheesePostSuccess = (cheeses) => ({
  type: CHEESE_POST_SUCCESS,
  cheeses
});

export const CHEESE_FAILURE = 'CHEESE_FAILURE';
export const cheeseFailure = (error) => ({
  type: CHEESE_FAILURE,
  error
});


export const fetchCheeses = () => (dispatch) => {
  dispatch(cheeseRequest());
  return fetch('https://hidden-mountain-34149.herokuapp.com/api/cheeses')
  //return fetch('http://localhost:8080/api/cheeses')
  .then(res=>{
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(res => {
    return dispatch(cheeseGetSuccess(res));
  })
  .catch(error=> {
    return dispatch(cheeseFailure(error));
  });
}

export const addCheese = (cheese) => (dispatch) => {
  dispatch(cheeseRequest());
  return fetch('https://hidden-mountain-34149.herokuapp.com/api/cheeses', {
  //return fetch('http://localhost:8080/api/cheeses', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({cheese})
  })
  .then(res=> {
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(res=> {
    return dispatch(cheesePostSuccess(res));
  })
  .catch(error=> {
    return dispatch(cheeseFailure(error));
  });
}