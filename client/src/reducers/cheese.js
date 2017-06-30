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
    case actions.CHEESE_GET_SUCCESS:
      const cheeses = action.cheeses.map(cheese => cheese.cheese);
      return Object.assign({}, state, {
        cheeses,
        loading: false,
        error: null
      });
    case actions.CHEESE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    case actions.CHEESE_POST_SUCCESS:
      return Object.assign({},state,{
        cheeses: [...state.cheeses,action.cheeses.cheese],
        loading:false,
        error:null
      })
    default:
      return state;
  }
}