import React, { Component, Fragment } from'react';
import Post from '../../component/post/Post';
import axios from 'axios';
import './BlogPost.css';

class BlogPost extends Component{
    state = {
        post: []
    }

    handleGetAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        });
    }

    handelRemove = (data) => {
       axios.delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
       .then(res => {
            console.log(res);
            this.handleGetAPI();
       })
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
       this.handleGetAPI();  
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog post</p>
                {
                    this.state.post.map(post => {
                        return  <Post key={post.id} data={post} remove={this.handelRemove}/>
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;