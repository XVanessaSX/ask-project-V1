import {
  CHANGE_TOKEN_VALUE,
} from 'src/actions/verifyPage';

export const initialState = {
  value: 'poulet',
};

const verifyPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TOKEN_VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export default verifyPage;
