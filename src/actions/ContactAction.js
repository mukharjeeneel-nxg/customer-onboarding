import axios from "axios";
import {
  SELLER_SUBMIT_SUCCESS,
  SELLER_SUBMIT_FAIL,
  SELLER_SUBMIT_REQUEST,
} from "../constants/contactConstants"

export const ContactAction =(name,email,mobile,message) => async(dispatch) => {
    dispatch({type:SELLER_SUBMIT_REQUEST ,payload:{name,email,mobile,message}});
     // console.log("phone", phone);
    try {
      const { data } = await axios.post(
        `https://api.nxgsolutions.in/admin/seller/contact`,
        { name, email, mobile, message }
      
      );
      console.log("data", data);
      if (data.response_code == 0) {
        dispatch({
          type: SELLER_SUBMIT_FAIL,
          payload: data,
        });
      } else {
        dispatch({ type: SELLER_SUBMIT_SUCCESS, payload: data });
        // console.log("sellerData", data);
        // localStorage.setItem("sellerInfo", JSON.stringify(data));
        
           console.log("contactData", data);
           localStorage.setItem("contactInfo", JSON.stringify(data));
         
      }
    } catch (error) {
      dispatch({
        type: SELLER_SUBMIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
}