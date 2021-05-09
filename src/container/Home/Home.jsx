import React, { Component } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import BlogPost from '../BlogPost/BlogPost';
// import Product from '../Product/Product';

class Home extends Component{
    render(){
        return(
           <div>
               {/* <p>Youtube Component</p>
               <hr/>
                <YoutubeComp 
                    time="1.5" 
                    title="Tutorial React js 1" 
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YoutubeComp 
                    time="1.6" 
                    title="Tutorial React js 2" 
                    desc="2x ditonton, 3 hari yang lalu"/>
                <YoutubeComp 
                    time="1.7" 
                    title="Tutorial React js 3" 
                    desc="2x ditonton, 5 hari yang lalu"/>
                <YoutubeComp 
                    time="1.9" 
                    title="Tutorial React js 4" 
                    desc="2x ditonton, 9 hari yang lalu"/>
                <YoutubeComp /> */}
                {/* <p>Product</p>
                <hr/>
                <Product/> */}
                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
           </div>
        );
    }
}

export default Home;
