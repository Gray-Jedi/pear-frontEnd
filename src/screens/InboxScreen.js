import React from 'react'
import Mess from './images/Inbox-Mock1.jpg';
import Mess2 from './images/Inbox-Mock2.jpg'
import Mess3 from './images/Meetup-Mock.jpg'

function InboxScreen() {
    return (
        <div>
            <h1>Inbox</h1>
            <img src={Mess} alt="card background" className="card-img" />
            <img src={Mess2} alt="card background" className="card-img" />
            <img src={Mess3} alt="card background" className="card-img" />
            {/* <img src='images/Messaging-Mock.jpg' alt=''/> */}
            {/* <img src="https://via.placeholder.com/350x150" alt=''/> */}
        </div>
    )
}

export default InboxScreen;
