import React from 'react'

// import assets
import short from "./../../assets/img/short.svg";
import long from "./../../assets/img/long.svg";
import acid from "./../../assets/img/acide.jpg";
import smocky from "./../../assets/img/smocky.jpg";
import fruity from "./../../assets/img/fruity.jpg";

export default function Responses({dataResponses, dataHandleSubmit}) {
    return (
        <div className="chat-responses">
                        {dataResponses.map((user)=>(
                            <>
                            {(() => {
                            switch(user.content) {
                                case 'Short':
                                    return <img className="imgResponse" height={80} src={short} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
                                case 'Long':
                                    return <img className="imgResponse" height={80} src={long} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
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
                            </>
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
