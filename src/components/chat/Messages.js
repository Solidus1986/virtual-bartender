import React from 'react'

export default function Messages({dataMessages}) {
    return (
        <div className="chat-messages">       
                        {dataMessages.map((bot)=> (
                            <div className="mess" type={bot.type}>
                                {bot.type ==="media" ? 
                                    <img className="media" src={bot.content}/>
                                    : <div>{bot.content.replace(/<(?:.|\n)*?>/gm, ' ')}</div>
                                }
                            </div>
                            
                        ))}
        </div>
    )
}
