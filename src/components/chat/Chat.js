import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useSpring, animated } from 'react-spring';


//  Import action
import { userMessage, botMessage, sendMessage } from '../../actions/kwalys';
import Messages from "./Messages";
import Responses from "./Responses";
import SelectResponse from "./SelectResponse";

const Chat = ({ chat, botMessages, token, userMessage, botMessage, sendMessage}) => {  

    // Handle Users message
    const [message, setMessage] = useState("");
    const endOfMessages = useRef(null);
    // Toggle chatbot
    const [toggle, setToggle] = useState(false);
    const [chatBot, setChatbot] = useState(false);
    const [bartender, setBartender] = useState(true);
    const [selectResponse, setSelectResponse] = useState([])
    // Function handles user submission
    // const handleClick = async (e) => {
    //     userMessage(message)
    //     botMessage(message)
    //     setMessage("")
    // } 
    
    // Function handles response
    const handleSubmit = (e) => {
        e.preventDefault();
        const resData = {
            "session": token,
            "tracking": e.target.name,
            "text": e.target.value 
        }
        sendMessage(resData)
        // const updateSelect = [...botMessages]
        // updateSelect.push(resData);
        // setSelectResponse(resData)
        // userMessage(e.target.value)
        // const selectRes = {
        //     message : {
        //         select : [resData]
        //     } 
        // }
    
        //  botMessages.push(selectRes)
    }

    const clearSession = () => {
        localStorage.clear(token)
    }
    // Function toggle chat
    const toggleBartender = () => {
        setToggle(!toggle)

    }
    const closeChatbot = () => {
        setBartender(!bartender);
        setChatbot(!chatBot);
        botMessages.splice(0, botMessages.length);
        clearSession()
    }
    const openChatBot = () => {
        botMessage();
        setBartender(!bartender);
        setChatbot(!chatBot);
    }
    console.log(botMessages, "le chat")


    
      useEffect(() => {
    if (botMessages && endOfMessages.current) {
      endOfMessages.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [botMessages]);
  
  const animation = useSpring({ to: {transform: chatBot ? `translateY(0%)` : `translateY(100%)`},  delay: 10 });
  const animation1 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
    const animation2 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
    const animation3 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
    return (
        <div className="chatbot">
            {/* Handle Messages */}
            {chatBot ?  
                <animated.div  style={animation} className="chat"> 
                    <div className="chat-header">
                        <div className="close" onClick={closeChatbot}>&times;</div>
                    </div>       
                    <div className="historyContainer" >
                        <div className="hello">
                        <animated.p style={animation1}>Hello !</animated.p>
                        <animated.p style={animation2}>I am Hennessy</animated.p>
                        <animated.p style={animation3}>virtual bartender.</animated.p>
                        </div>   
                        <div className="chatBotUser" >     
                            {botMessages.map((mess) => ( 
                            <>
                                    <Messages dataMessages={mess.message.messages} />
                                    <Responses dataResponses={mess.message.responses} dataHandleSubmit={handleSubmit}/>
                    
                                <div className="scrollbar" ref={endOfMessages} ></div>
                            </> 
                            ))}
                            {/* {selectResponse.map((select) => ( 
                                <input 
                                    className="bot-responses" 
                                    type="submit"  
                                    value={select.text} />
                        ))} */}
                        </div>
                        {/* <div>
                        {botMessages.map((mess) => ( 
                            <Responses dataResponses={mess.message.responses} dataHandleSubmit={handleSubmit}/>
                        ))}
                        </div> */}
                    </div>
                </animated.div> 
            : ""}
            {bartender ?
            <div onClick={toggleBartender}>
                <div className="bartender" >
                    <div className="logo-left"></div>
                    <button className="logo"  onClick={openChatBot} />
                    <div className="logo-left"></div>
                    <div>
                    <p className="bartender-title">VIRTUAL BARTENDER</p>
                    {/* {!toggle ? <p className="bartender-title">VIRTUAL BARTENDER</p> 
                        :
                        <div className="go" >^</div>
                    } */}
                    </div>
                </div>
                {/* <div> 
                    {toggle ? 
                        <p className="bartender-message">
                        Hi!
                        <br />
                        I am Hennessy virtual bartender.
                        <br />
                        Let me guide you to find your perfect cocktail match!
                    </p> : ""
                    }   
                    
                </div> */}
            </div> : ""}
      
        </div>
          
    )
}

const mapStateToProps = (state) => ({
    chat: state.kwalys.messagesChat,
    botMessages: state.kwalys.messages,
    token: localStorage.session
  });
  
  export default connect(mapStateToProps, { userMessage, botMessage, sendMessage })(Chat);
  

