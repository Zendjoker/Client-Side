import {useContext, useEffect, useState} from 'react';
import Post from '../post/Post';
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({firstName , lastName}) {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = firstName + lastName 
            ? await axios.get("/posts/profile/" + user._id)
            : await axios.get("posts/timeline/" + user._id);
            setPosts(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }
            ));
        };
        fetchPosts();
    }, [user._id, firstName , lastName]);


   return (
    <div className="feed">
    <div className="feedWrapper">
      {((!firstName && !lastName) || ((firstName === user.firstName) && (lastName === user.lastName))) &&  null }
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  </div>
  
   )    
};
 