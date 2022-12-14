import axios from "axios";

import { SELLER_REGISTER_FAIL, SELLER_REGISTER_REQUEST, SELLER_REGISTER_SUCCESS, SELLER_BILLING_FAIL, SELLER_BILLING_REQUEST, 
    SELLER_BILLING_SUCCESS, SELLER_URL_FAIL, SELLER_URL_REQUEST,SELLER_URL_SUCCESS } from "../constants/registerConstants";

export const RegisterAction = (email, password, store_name, category) => async (dispatch) => {
    dispatch({ type: SELLER_REGISTER_REQUEST, payload: { store_name, email, password, category } });

    try {


        const { data } = await axios.post(`https://api.nxgsolutions.in/admin/seller/register`, { store_name, email, password, category });
        // const {data} = await axios.post(`https://api.nxgsolutions.in/admin/seller/run-henkins-job`, {store_name, email, password});
        console.log('data', data);
        if (data.response_code == 0) {
            dispatch({
                type: SELLER_REGISTER_FAIL,
                payload: data.error,
            });
        }
        else {
            dispatch({ type: SELLER_REGISTER_SUCCESS, payload: data });
            //dispatch({type: SELLER_SIGNIN_SUCCESS, payload: data});
            console.log('sellerData', data);
            localStorage.setItem("sellerInfo", JSON.stringify(data));
        }


    } catch (error) {

        dispatch({
            type: SELLER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};

export const billingAction = (fname, lname, mobile, address1, address2, city, state, pincode, terms, storName, sellerId) => async (dispatch) => {
    dispatch({ type: SELLER_BILLING_REQUEST, payload: { fname, lname, mobile, address1, address2, city, state, pincode, terms, storName, sellerId } });
    console.log('Action Billing', fname, lname, mobile, address1, address2, city, state, pincode, terms, storName, sellerId);

    try {


        const { data } = await axios.post(`https://api.nxgsolutions.in/admin/seller/add-billing`, { fname, lname, mobile, address1, address2, city, state, pincode, terms, storName, sellerId });

        console.log('data', data);
        if (data.response_code == 0) {
            dispatch({
                type: SELLER_BILLING_FAIL,
                payload: data,
            });

        }
        else {
            console.log('billing success', data);
            dispatch({ type: SELLER_BILLING_SUCCESS, payload: data });
            //dispatch({type: SELLER_SIGNIN_SUCCESS, payload: data});
            //localStorage.removeItem('sellerInfo');
            // window.location.replace(`https://${storName}.nxgsolutions.in/admin?run_database_structure`);
            //localStorage.setItem("sellerInfo", JSON.stringify(data));     
        }

    } catch (error) {

        dispatch({
            type: SELLER_BILLING_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};

export const checkurl = (url) => async (dispatch) => {
    dispatch({ type: SELLER_URL_REQUEST, payload: { url } });
    console.log('Action Billing', url);

    try {
        const { data } = await axios.post(`https://api.nxgsolutions.in/admin/seller/check-shop-url`, { url });
        console.log('data', data);
        if (data.response_code == 1 || data.response_code == 2 ) {
            dispatch({
                type: SELLER_URL_FAIL,
                payload: data,
            });

        }
        else {
            console.log('billing success', data);
            dispatch({ type: SELLER_URL_SUCCESS, payload: data });
            //dispatch({type: SELLER_SIGNIN_SUCCESS, payload: data});
            //localStorage.removeItem('sellerInfo');
            // window.location.replace(`https://${storName}.nxgsolutions.in/admin?run_database_structure`);
            //localStorage.setItem("sellerInfo", JSON.stringify(data));     
        }

    } catch (error) {

        dispatch({
            type: SELLER_URL_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};


