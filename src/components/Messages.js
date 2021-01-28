import React from 'react';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {
    const msg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="mesgs">
            <div className="msg_history">
                {
                    msg.map((msg) => (
                        ( msg % 2 ) 
                            ? <IncomingMessage key={ msg }/>
                            : <OutgoingMessage key={ msg }/>
                    ))
                }
                {/* <IncomingMessage/>
                <OutgoingMessage/> */}
            </div>
            <SendMessage/>
        </div>
    )
}
