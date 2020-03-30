import {
  SAVE_ANSWERS,
  CHANGE_SORTED,
  FETCH_POST_ANSWER,
} from 'src/actions/answers';

export const initialState = {
  list: [],
  tagId: 'default',
  content: '',
  sorted: 'created_at',
};

// reducer = traducteur d'une intention/action vers une modification du state
const answers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ANSWERS:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        list: action.answers,
      };
    case CHANGE_SORTED:
      return {
        ...state,
        sorted: action.sorted,
      };
    case FETCH_POST_ANSWER:
      return {
        ...state,
        sorted: action.sorted,
      };
    default:
      return state;
  }
};

export default answers;