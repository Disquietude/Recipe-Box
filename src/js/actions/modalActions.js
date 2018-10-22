import { OPEN_MODAL, CLOSE_MODAL, CHANGE_INPUT } from './types';

export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload: payload
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function changeInput(input) {
  return {
    type: CHANGE_INPUT,
    input: input
  }
}