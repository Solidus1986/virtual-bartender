import React from 'react';

import { useSpring, animated } from 'react-spring';

// import assets
import short from "./../../assets/img/short.svg";
import long from "./../../assets/img/long.svg";
import acid from "./../../assets/img/acide.jpg";
import smocky from "./../../assets/img/smocky.jpg";
import fruity from "./../../assets/img/fruity.jpg";

export default function Responses({dataResponses, dataHandleSubmit}) {

    const animation = useSpring({ to: {transform: `translate(10px)`, opacity: 1 }, opacity: 1, from: {transform: `translate(500px)`, opacity: 0 }, delay: 500 });

    return (
        <div className="chat-responses">
                        {dataResponses.map((user)=>(
                            <animated.div style={animation}>
                            {(() => {
                            switch(user.content) {
                                case 'Short':
                                    return <img className="taste" height={80} src={short} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
                                case 'Long':
                                    return <img className="taste" height={80} src={long} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
                                case 'Acid':
                                    return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={acid} alt={user.content} key={user.id}  value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                                case 'Smocky':
                                    return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={smocky} alt={user.content} key={user.id} value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                                case 'Fruity':
                                    return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={fruity} alt={user.content} key={user.id} value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                               default:
                               return <Response user={user}  dataHandleSubmit={dataHandleSubmit} />;
                            }
                             })()}
                            </animated.div>
                        ))}
        </div>
    )
}


function Response({user, dataHandleSubmit}) {
    return (
        <input 
                                className="bot-responses" 
                                type="submit" 
                                key={user.id} 
                                onClick={dataHandleSubmit} 
                                value={user.content} 
                                name={user.tracking} />
                           
    )
}
