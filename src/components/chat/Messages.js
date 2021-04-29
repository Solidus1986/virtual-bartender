import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

export default function Messages({dataMessages}) {

    //animation for messages
    const animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1050 });

    // return messages of bot
    return (
        <div className="chat-messages">
            {dataMessages.map((bot)=> (
                <animated.div className="mess" type={bot.type} style={animation} >
                    {bot.type ==="media" ? 
                        <img className="media" src={bot.content}/>
                        : <div>{bot.content.replace(/<(?:.|\n)*?>/gm, ' ')}</div>
                    }
                </animated.div>   
            ))}
        </div>
    )
}
