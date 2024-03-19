import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/user.css'; 

export const User = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users1')
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='full5'>
    <div className="user-grid">
      {post.map((x, index) => (
        <div key={index} className="user-item">
         <img src={x.image} alt={x.name} />
     <h1>Name: {x.name}</h1>
          <h1>Age: {x.age}</h1>
          <h1>{x.subscription}</h1>
        </div>
      ))}
    </div>
    </div>
  );
};
