// Import types
import {
    RESPONSE_USER_SUCCESS,
    RESPONSE_USER_FAIL,
    SESSION_SUCCESS,
    SESSION_FAIL,
    RESPONSE_BOT_SUCCESS,
    RESPONSE_BOT_FAIL,
    MESSAGE_SUCCESS,
    MESSAGE_FAIL
  } from "./types";
  
  //  Import axios
  import axios from "axios";
  
  //  Function that handles  users response
  // export const userMessage = (selectResponse) => async (dispatch) => {
  //   try {
  //     dispatch({ type: RESPONSE_USER_SUCCESS, payload: selectResponse});
  //   } catch (err) {
  //     dispatch({ type: RESPONSE_USER_FAIL });
  //   }
  // };

  // import variable .env
  const { REACT_APP_URL_API } = process.env

  //  Creates a session - API CALL

  export const createSession = () => async (dispatch) => {
    try {
      const res = await axios.post(`${REACT_APP_URL_API}`);
      dispatch({ type: SESSION_SUCCESS, payload: res.data.session }, console.log(res.data.session, "num de session") );
    } catch (err) {
      dispatch({ type: SESSION_FAIL });
    }
  };

  // First bot message - API CALL

  export const botMessage = () => async (dispatch) => {
    try {
      const res = await axios.post(`${REACT_APP_URL_API}`);
      dispatch({ type: RESPONSE_BOT_SUCCESS, payload: res.data.data});
    } catch (err) {
      dispatch({ type:  RESPONSE_BOT_FAIL});
    }
  };
  
  //  Sends the message to the bot - API CALL
  export const sendMessage = (resData) => async (dispatch) => {
    try {
      const res = await axios.post(`${REACT_APP_URL_API}`, resData);
      dispatch({
        type: MESSAGE_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({ type: MESSAGE_FAIL });
    }
  };
  