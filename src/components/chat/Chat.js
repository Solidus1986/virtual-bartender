import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useSpring, animated } from 'react-spring';


//  Import action
import { userMessage, botMessage, sendMessage } from '../../actions/kwalys';
import Messages from "./Messages";
import Responses from "./Responses";

// import asset
import path from './../../assets/img/Path.svg'
import path2 from './../../assets/img/path-2.svg'

const Chat = ({ botMessages, token, botMessage, sendMessage}) => {  

    // scroll chat
    const endOfMessages = useRef(null);

    // Toggle chatbot
    const [toggle, setToggle] = useState(false);
    const [chatBot, setChatbot] = useState(false);
    const [bartender, setBartender] = useState(true);
    
    
    // Function handles response
    const handleSubmit = (e) => {
        e.preventDefault();
        const resData = {
            "session": token,
            "tracking": e.target.name,
            "text": e.target.value 
        }
        sendMessage(resData)
    }

    const clearSession = () => {
        // localStorage.clear(token)
    }
    // Function toggle chat
    const toggleBartender = () => {
        setToggle(!toggle)

    }
    // Function close chatbot
    const closeChatbot = () => {
        setBartender(!bartender);
        setChatbot(!chatBot);
        botMessages.splice(0, botMessages.length);
        clearSession()
    }

     // Function Open chatbot
    const openChatBot = () => {
        botMessage();
        setBartender(!bartender);
        setChatbot(!chatBot);
    }
    console.log(botMessages, "le chat")

    useEffect(() => {
        if (botMessages && endOfMessages.current) {
            endOfMessages.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [botMessages]);

    // animation open and hello
    const animation1 = useSpring({ opacity: chatBot ? 1 :0 , delay: 200 });
    const animation2 = useSpring({ opacity: chatBot ? 1 :0 , delay: 600 });
    const animation3 = useSpring({ opacity: chatBot ? 1 :0 , delay: 1000 });
    const animation = useSpring({ to: {transform: chatBot ? `translateY(0%)` : `translateY(100%)`},  delay: 10 });
  
    return (
        <div className="chatbot">
            {/* Handle Messages */}
            {chatBot ?  
                <animated.div  style={animation} className="chat"> 
                    <div className="chat-header">
                        <div className="close" onClick={closeChatbot}><img src={path}/></div>
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
                        </div>
                    </div>
                </animated.div> 
            : ""}
            {bartender ?
                <div onClick={toggleBartender}>
                    <div className="circle"/>
                        <div className="bartender" >
                            <button className="logo"  onClick={openChatBot} />
                            <div>
                                <p className="bartender-title">VIRTUAL BARTENDER</p>
                            <div className="close-2">
                                <img src={path2}/>
                            </div>
                        </div>  
                    </div>
                
                </div> : ""
            }
        </div>
          
    )
}

const mapStateToProps = (state) => ({
    chat: state.kwalys.messagesChat,
    botMessages: state.kwalys.messages,
    token: localStorage.session
  });
  
  export default connect(mapStateToProps, { userMessage, botMessage, sendMessage })(Chat);
  

