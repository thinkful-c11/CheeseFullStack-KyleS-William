import * as actions from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case actions.CHEESE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case actions.CHEESE_SUCCESS:
      return Object.assign({}, state, {
        cheeses: action.cheeses,
        loading: false,
        error: null
      });
    case actions.CHEESE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}