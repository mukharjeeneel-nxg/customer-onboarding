import {
    SELLER_REGISTER_FAIL, SELLER_REGISTER_REQUEST, SELLER_REGISTER_SUCCESS, SELLER_BILLING_REQUEST, SELLER_BILLING_SUCCESS,
    SELLER_BILLING_FAIL, SELLER_URL_FAIL, SELLER_URL_REQUEST, SELLER_URL_SUCCESS
} from "../constants/registerConstants";

export const registerReducer = (state = { loading: true, sellerInfo: [] }, action) => {

    console.log('reducer register')
    switch (action.type) {
        case SELLER_REGISTER_REQUEST:
            return { loading: true };
        case SELLER_REGISTER_SUCCESS:
            return { loading: false, sellerInfo: action.payload };
        case SELLER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
export const billingReducer = (state = { loadingBill: true, billingInfo: [] }, action) => {

    console.log('reducer Billing')
    switch (action.type) {
        case SELLER_BILLING_REQUEST:
            return { loadingBill: true };
        case SELLER_BILLING_SUCCESS:
            return { loadingBill: false, errorBill: action.payload, billingInfo: action.payload };
        case SELLER_BILLING_FAIL:
            return { loadingBill: false, errorBill: action.payload };
        default:
            return state;
    }
};

export const checkUrlReducer = (state = { loadingUrl: true, urlStatus: [] }, action) => {

    console.log('reducer Url')
    switch (action.type) {
        case SELLER_URL_REQUEST:
            return { loadingUrl: true };
        case SELLER_URL_SUCCESS:
            return { loadingUrl: false, errorUrl: action.payload, urlStatus: action.payload };
        case SELLER_URL_FAIL:
            return { loadingUrl: false, errorUrl: action.payload };
        default:
            return state;
    }
};