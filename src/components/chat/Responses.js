import React from 'react';
import { Player } from 'video-react';


import { useSpring, animated } from 'react-spring';

// import assets
import short from "./../../assets/img/short.svg";
import long from "./../../assets/img/long.svg";
import acid from "./../../assets/img/acide.jpg";
import smocky from "./../../assets/img/smocky.jpg";
import fruity from "./../../assets/img/fruity.jpg";


const tabVideo = {
    "Coktail Artist" : "hennessy-cocktails-tutorial-1440x770-05-the-artist.mp4",

    'Cocktail Summer Delight': "https://www.hennessy.com/sites/hennessy/files/2020-05/hennessy_summer_delight_cocktail.mp4",
    
    'Cocktail French 75': "https://www.hennessy.com/sites/hennessy/files/2020-06/thefrench75-1440x770.mp4",
    
    'Cocktail Sangria': "https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-06-hennessy-sangria.mp4",
    
    'Cocktail Horse Neck': "https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-19-horse-neck.mp4",
    
    'Cocktail Hennessy Ginger': "https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_ginger_cocktail.mp4",
    
    'Cocktail Punch Royal': "",
    
    'Cocktail Tamarindo': "",
    
    'Cocktail Hennessy Coqui': "",
    
    'Cocktail Sidecar': "",
    
    'Cocktail Mata Hari': "",
    
    'Cocktail Flor de Jamaica': "",
    
    'Cocktail North Star': "",
    
    'Cocktail Sazerac': "",
}

export default function Responses({dataResponses, dataHandleSubmit}) {

    const animation = useSpring({ to: {transform: `translateY(10px)`, opacity: 1 }, opacity: 1, from: {transform: `translateY(50px)`, opacity: 0 }, delay: 500 });

    return (
        <div className="chat-responses">
                        {dataResponses.map((user)=>(
                            <animated.div style={animation}>
                            {(() => {
                            switch(user.content) {
                                case 'Short':
                                    return <img className="glass-short" height={80} src={short} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
                                case 'Long':
                                    return <img className="glass-long" height={80} src={long} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
                                case 'Acid':
                                    return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={acid} alt={user.content} key={user.id}  value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                                case 'Smocky':
                                    return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={smocky} alt={user.content} key={user.id} value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                                case 'Fruity':
                                    return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={fruity} alt={user.content} key={user.id} value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                                case 'URL_COCKTAIL:Cocktail Sidecar':
                                    return <Player playsInline src="hennessy-cocktails-tutorial-1440x770-05-the-artist.mp4" />
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
