import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-warpper">
           <div className="img-thumb">
               <img src="https://i.ytimg.com/vi/_EatT18zjmw/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCgCAXixMayGY3yYoH01mVYAlBvDg" alt=""/>
               <p className="time">{props.time}</p>
           </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
}

YoutubeComp.defaultProps= {
    time: "00.00",
    title:"Title here",
    desc:"xx ditonton, xx hari yang lalu",
}

export default YoutubeComp;