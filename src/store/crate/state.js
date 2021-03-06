// Crates List

// Initial State
import {
  CRATES_GET_FAILURE,
  CRATES_GET_LIST_FAILURE,
  CRATES_GET_LIST_REQUEST,
  CRATES_GET_LIST_RESPONSE,
  CRATES_GET_REQUEST, CRATES_GET_RESPONSE,
} from './actions';

const cratesInitialState = {
  isLoading: false,
  error: null,
  list: [],
};

export const crates = (state = cratesInitialState, action) => {
  switch (action.type) {
    case CRATES_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null,
      };
    case CRATES_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list,
      };
    case CRATES_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// Single crate

// Initial State
const crateInitialState = {
  isLoading: false,
  error: null,
  item: {},
};

// State
export const crate = (state = crateInitialState, action) => {
  switch (action.type) {
    case CRATES_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null,
      };
    case CRATES_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item,
      };
    case CRATES_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
