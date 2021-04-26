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
  } from "../actions/types";
  
  // Initial state
  const initialState = {
    messagesChat: [],
    messages: [],
    
  };
  
  // Switch statement - update state
  export default (state = initialState, action) => {
    const { type, payload } = action;
    let { messagesChat, messages, session } = state;

    switch (type) {
      case RESPONSE_USER_SUCCESS:
        // messagesChat = [...messagesChat, messages];
        return {
          ...state,
          messagesChat,
        };
      case RESPONSE_USER_FAIL:
        return {
          ...state,
        };
      case SESSION_SUCCESS:
        localStorage.setItem("session", payload); 
        return {
          ...state,
        };
      case SESSION_FAIL:
        return {
          ...state,
        };
      case RESPONSE_BOT_SUCCESS:
        messages = [...messages,{ message: payload, type:"bot"}];
       
        return {
          ...state,
          messages
        };
      case RESPONSE_BOT_FAIL:
        return {
          ...state,
        };      
      case MESSAGE_SUCCESS:
        messages = [...messages, { message: payload, type:"user"}];
        
        return {
          ...state,
          messages
        };
      case MESSAGE_FAIL:
        return {
          ...state,
        };
      default:
        return {
          ...state,
        };
    }
  };
  