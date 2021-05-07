import { OPEN_MODAL_ACTION, OPEN_MODAL_CLOSE } from '../types/modalTypes';

export const openModal = (id) => {
  return { type: OPEN_MODAL_ACTION, payload: { id } };
};

export const closeModal = () => {
  return { type: OPEN_MODAL_CLOSE };
};
