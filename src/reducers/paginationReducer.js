import { PAGE_CLICKED } from '../actions/types';

const INTIAL_STATE = {
  ec2sPerPage: 10,
  totalEC2s: null,
  currentPage: 1
};

const paginationReducer = (state=INTIAL_STATE, action) => {

  switch (action.type) {
    case PAGE_CLICKED:
      return {
        ...state,
        currentPage: action.payload.currentPage
      }
      default:
        return state;
  }
}

export default paginationReducer;
