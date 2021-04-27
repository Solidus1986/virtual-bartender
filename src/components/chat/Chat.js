import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

//  Import action
import { userMessage, botMessage, sendMessage, cre} from '../../actions/kwalys';
import Messages from "./Messages";
import Responses from "./Responses";

const Chat = ({ chat, botMessages, token, userMessage, botMessage, sendMessage}) => {  

    // Handle Users message
    const [message, setMessage] = useState("");
    const endOfMessages = useRef(null);
    // Toggle chatbot
    const [toggle, setToggle] = useState(false);
    const [chatBot, setChatbot] = useState(false);
    const [bartender, setBartender] = useState(true);

    // Function handles user submission
    const handleClick = async (e) => {
        userMessage(message)
        botMessage(message)
        setMessage("")
    } 
    
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
    return (
        <div className="chatbot">
            {/* Handle Messages */}
            {chatBot ?  
                <div className="chat"> 
                    <div className="chat-header">
                        <div className="close" onClick={closeChatbot}>X</div>
                    </div>       
                    <div className="historyContainer" >
                        <div className="chatBotUser" >     
                            {botMessages.map((mess) => ( 
                            <>
                                <Messages dataMessages={mess.message.messages}/>
                                <Responses dataResponses={mess.message.responses} dataHandleSubmit={handleSubmit}/>
                            </> 
                            ))}
                            <div className="scrollbar" ref={endOfMessages} ></div>
                        </div>
                    </div>
                </div> 
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
  


  /**
   * <div className="chat-messages">
                {botMessages.length === 0
                    ? ""
                    : botMessages.message.messages.map((botMessage) => (
                    <div key={botMessage.type}>
                            {botMessage.content}
                            {console.log(botMessage.content)}
                    </div>
                ))}
                </div>
                <div className="chat-responses">
                {botMessages.length === 0
                    ? ""
                    :botMessages.message.responses.map((botResponse) => (
                    <> 
                    {botResponse.content === "Sucré" ? <p>fruit</p> : ""}
                    <input className="bot-responses" type="submit" key={botResponse.id} onClick={handleSubmit} value={botResponse.content} name={botResponse.tracking} />   
                    </>    
                ))}
                </div>
            </div>
            : ""
   */