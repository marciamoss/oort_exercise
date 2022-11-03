import { CHANGE_SORT, PAGE_CLICKED } from '../actions/types';
import _ from 'lodash';

const INTIAL_STATE = {
    column: null,
    data: null,
    direction: null,
  };

const sortReducer = (state=INTIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      if (state.column === action.payload.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }
      return {
        column: action.payload.column,
        data: _.sortBy(action.payload.data, [action.payload.column]),
        direction: action.payload.direction === 'ascending' ? 'descending' : 'ascending',
      }
      case PAGE_CLICKED:
        return INTIAL_STATE;

      default:
        return state;
  }
}

export default sortReducer;
