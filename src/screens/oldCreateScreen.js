import React from 'react'
import Mess from './images/Product-Mock.jpg';
import Mess2 from './images/Create-Mock.jpg';

function CreateScreen() {
    return (
        <div>
            <h1>List your item for sale or trade</h1>
            <img src={Mess} alt="card background" className="card-img" />
            <img src={Mess2} alt="card background" className="card-img" />
            {/* <img src='images/Messaging-Mock.jpg' alt=''/> */}
            {/* <img src="https://via.placeholder.com/350x150" alt=''/> */}
        </div>
    )
}

export default CreateScreen;
