export const CHEESE_REQUEST = 'CHEESE_REQUEST';
export const cheeseRequest = () => ({
  type: CHEESE_REQUEST
});

export const CHEESE_SUCCESS = 'CHEESE_SUCCESS';
export const cheeseSuccess = (cheeses) => ({
  type: CHEESE_SUCCESS,
  cheeses
});

export const CHEESE_FAILURE = 'CHEESE_FAILURE';
export const cheeseFailure = (error) => ({
  type: CHEESE_FAILURE,
  error
});


export const fetchCheeses = () => (dispatch) => {
  dispatch(cheeseRequest());
  return fetch('http://localhost:8080/api/cheeses')
  .then(res => {
    dispatch(cheeseSuccess(res));
  })
  .catch(error=> {
    dispatch(cheeseFailure(error));
  });
}