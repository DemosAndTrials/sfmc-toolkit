import { FETCH_CA_CONFIGS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CA_CONFIGS:
      return action.payload;
    default:
      return state;
  }
}