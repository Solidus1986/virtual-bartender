import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

//  Import action
import { userMessage, botMessage, sendMessage} from '../../actions/kwalys';

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
        localStorage.clear()
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
    console.log(chat)
    console.log(botMessages)


    
      useEffect(() => {
    if (botMessages && endOfMessages.current) {
      endOfMessages.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [botMessages]);
   
    return (
        <div className="chat">
            
            {/* Handle Messages */}
            {chatBot ?  
                <> 
                <div className="chat-header">
                    <div className="close" onClick={closeChatbot}>X</div>
                </div>       
                <div className="historyContainer" >
                    <div className="chatBotUser" >     
                    {botMessages.map((mess) => ( 
                        <>
                        <div className="chat-messages">       
                        {mess.message.messages.map((bot)=> (
                            <div className="mess" type={bot.type}>
                                {bot.type ==="slideshow" ? 
                                    <img src={bot.content}/>
                                    : <p>{bot.content}</p>
                                }
                            </div>
                            
                        ))}
                        </div>
                        <div className="chat-responses">
                        {mess.message.responses.map((user)=>(
                            <input 
                                className="bot-responses" 
                                type="submit" 
                                key={user.id} 
                                onClick={handleSubmit} 
                                value={user.content} 
                                name={user.tracking} />
                        ))}
                        </div>
                    </> 
                    ))}
                   {/* Input Box */}
                    {/* <input
                        id="chatBox"
                        onChange={(e) => setMessage(e.target.value)}
                        onClick={handleClick}
                        value={message}
                    ></input> */}
                    <div className="scrollbar" ref={endOfMessages} ></div>
                    </div>
                </div>
                </> 
            : ""}
        
        {bartender ?
        <div onClick={toggleBartender}>
            <div className="bartender" >
                <button className="logo" />
                <div>
                {!toggle ? <p className="bartender-title">VIRTUAL BARTENDER</p> 
                    :
                    <div className="go" onClick={openChatBot}>^</div>
                }
                </div>
            </div>
            <div> 
                {toggle ? 
                    <p className="bartender-message">
                    Hi!
                    <br />
                    I am Hennessy virtual bartender.
                    <br />
                    Let me guide you to find your perfect cocktail match!
                </p> : ""
                }   
                
            </div>
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