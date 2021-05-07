import { OPEN_MODAL_ACTION, OPEN_MODAL_CLOSE } from './../types/modalTypes';

const reducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case OPEN_MODAL_ACTION:
      return {
        ...state,
        isOpen: true,
        id: action.payload.id,
      };
    case OPEN_MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        id: null,
      };

    default:
      return state;
  }
};

export default reducer;
