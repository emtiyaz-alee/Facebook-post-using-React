import React from 'react';
import ReactDOM from 'react-dom';

import { HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";
import './style.css'
import postImage from './post1.jpg'
import myProfile from './profile.jpeg'


function Post(props) {
    return (
        <div className='main-div'>
            <div className='postHead'>
                <img src={props.myProfile} id='profile' />
                <div>
                    <h2>{props.name}</h2>
                    <span className='date'>{props.date}</span>
                </div>
            </div>
            <p>{props.text}</p>
            <img className='postImage' src={props.postImage} />
            <div className="postFooter">
                <div className="button">
                    <HandThumbsUp />
                    Like
                </div>
                <div className="button">
                    <ChatLeftText /> Comment
                </div>
                <div className="button">
                    <Share /> Share
                </div>
            </div>
        </div>


    )
};

ReactDOM.render(
<div>
    <Post
        myProfile={myProfile}
        name="Imtiaz Ali"
        date="3-0ct-1992 "
        postImage={postImage}
        text="Amidst the verdant forest, sunlight filtered through dense leaves, creating dappled patterns on the forest floor. Birds chirped melodiously, their songs intermingling with the gentle rustling of leaves in the breeze. A babbling brook meandered through the scene, its crystalline waters reflecting the azure sky above. Moss-covered rocks provided a resting place for weary travelers, while butterflies danced in the air."
    />
   <br/>  <br/>  <br/>
   <Post
        myProfile="https://woodfibreinsulation.co.uk/wp-content/uploads/2017/04/blank-profile-picture-973460-1-1-1080x1080.png"
        name="Sharjeel Shah"
        date="17-May-2022 "
        postImage="https://th.bing.com/th/id/R.0563f29abc517eec5c5b21d5b2193d60?rik=HZcpBC4EdMSAmg&pid=ImgRaw&r=0"
        text="The fact that it’s not a string might seem like an unimportant detail, but it’s actually pretty cool: you can insert bits of JS code inside the JSX tags, and React will run them dynamically. We’ll see that in a minute."
    />
      <br/>  <br/>  <br/>
   <Post
        myProfile="https://woodfibreinsulation.co.uk/wp-content/uploads/2017/04/blank-profile-picture-973460-1-1-1080x1080.png"
        
        name="Waseem Malik"
        date="20-July-2019 "
        postImage="https://th.bing.com/th/id/R.804ec076eeb830a19eed119bf2c70d8e?rik=K1mqeeTTtDNyQw&pid=ImgRaw&r=0"
        text="The tranquility of the moment was interrupted by distant laughter as a group of friends embarked on a hiking adventure. Their footsteps echoed in the woods, a harmonious blend with nature's symphony. In this hidden oasis, time seemed to stand still."
    />
   
   



</div>, document.querySelector('#root'));

