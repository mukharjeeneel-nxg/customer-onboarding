import {SELLER_SUBMIT_REQUEST, SELLER_SUBMIT_SUCCESS, SELLER_SUBMIT_FAIL} from "../constants/contactConstants"

export const contactReducer = (state = { loading: true, contactInfo: [] }, action) => {
  console.log("reducer constant");
  switch (action.type) {
    case SELLER_SUBMIT_REQUEST:
      return { loading: true };
    case SELLER_SUBMIT_SUCCESS:
      return { loading: false, contactInfo: action.payload };
    case SELLER_SUBMIT_FAIL:
      return { loading: false, contactInfo: action.payload };
    default:
      return state;
  }
};