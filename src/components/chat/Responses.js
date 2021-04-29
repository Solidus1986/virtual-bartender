import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { useSpring, animated } from 'react-spring';

// import assets
import short from "./../../assets/img/short.svg";
import long from "./../../assets/img/long.svg";
import acid from "./../../assets/img/acide.jpg";
import smocky from "./../../assets/img/smocky.jpg";
import fruity from "./../../assets/img/fruity.jpg";

//import video-react
import "video-react/dist/video-react.css";


export default function Responses({dataResponses, dataHandleSubmit}) {

    //animation for responses
    const animation = useSpring({ to: {transform: `translateY(10px)`, opacity: 1 }, opacity: 1, from: {transform: `translateY(50px)`, opacity: 0 }, delay: 1060 });

    // return with switch for type response
    return (
        <div className="chat-responses">
            {dataResponses.map((user, index)=>(
                <animated.div key={index} style={animation}>
                    {(() => {
                        switch(user.content) {
                            case 'Short':
                                return <img className="glass-short" height={80} src={short} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
                            case 'Long':
                                return <img className="glass-long" height={100} src={long} alt={user.content} key={user.id} onClick={dataHandleSubmit} value={user.content} name={user.tracking}/>;
                            case 'Acid':
                                return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={acid} alt={user.content} key={user.id}  value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                            case 'Smocky':
                                return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={smocky} alt={user.content} key={user.id} value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                            case 'Fruity':
                                return <div className="taste" onClick={dataHandleSubmit}><img className="imgResponse" height={80} src={fruity} alt={user.content} key={user.id} value={user.content} name={user.tracking}/><p>{user.content}</p></div>;
                            case 'URL_COCKTAIL:Cocktail Sidecar':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_ginger_cocktail.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Summer Delight':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-05/hennessy_summer_delight_cocktail.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail French 75':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-06/thefrench75-1440x770.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Sangria':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-06-hennessy-sangria.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Horse Neck':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-19-horse-neck.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Hennessy Ginger':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_ginger_cocktail.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Coktail Artist':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-05-the-artist.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Punch Royal':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-12-punch-royal.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Tamarindo':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_tamarindo_cocktail.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Hennessy Coqui':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_coqui_cocktail.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Mata Hari':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-20-mata-hari.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Flor de Jamaica':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-04-flor-de-jamaica.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail North Star':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-04/the_hennessy_north_star_cocktail.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Sazerac':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2021-03/hennessy-cocktails-tutorial-1440x770-24-sazerac.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;
                            case 'URL_COCKTAIL:Cocktail Aritochat_bot':
                                return <div className="video"> <Player  src="https://www.hennessy.com/sites/hennessy/files/2020-04/hennessy_aristocrat_cocktail.mp4"  fluid={false} width={320} height={190}><BigPlayButton position="center" /></Player></div>;  
                           default:
                                return <Response user={user}  dataHandleSubmit={dataHandleSubmit} />;
                        }
                    })()}
                </animated.div>
            ))}
        </div>
    )
}

// Input for send response
function Response({user, dataHandleSubmit}) {

    return(
        <input 
            className="bot-responses" 
            type="button" 
            key={user.id} 
            onClick={dataHandleSubmit} 
            value={user.content} 
            name={user.tracking} 
        />
    )                       
}
