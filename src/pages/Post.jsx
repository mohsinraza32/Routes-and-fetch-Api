import axios from "axios";
import { useEffect, useState } from "react";


const Post = () =>{


    const [post,setPost] = useState([]);



    const getPost = async  () =>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const {data} = res;
            setPost(data);
          } catch (error) {
            console.error(error);
          }
    }


    useEffect(()=>{
        getPost();
    },[])


    return(
        <>
        <div className="post_container">
            <h1>Post</h1>
            <div className="post_wrap">

                {
                    post.map((item,index)=>{
                        return(
                            <>
                            <div key={index} className="post">
                            <h2 className="post_title">{item.title} </h2>
                            <p>{item.body}</p>
                             </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
        </>
    )
}


export default Post;