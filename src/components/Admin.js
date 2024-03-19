import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/admin.css';

export const Admin = () => {
  const [post, setPost] = useState([]);
  const[id,setid]=useState('')
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const[sub,setsub]=useState('');
  const [popup, setPopup] = useState(false);
  const[id1,setid1]=useState('')
  const [img1, setImg1] = useState('');
  const [name1, setName1] = useState('');
  const [age1, setAge1] = useState('');
  const[sub1,setsub1]=useState('');
  useEffect(()=>{
    axios.get('http://localhost:3001/users1')
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })
  const handleSubmit = () => {
    axios.post('http://localhost:3001/users1', { "id":id,"image": img, "name": name, "age": age,"subscription":sub })
      .then(res => { console.log(res) })
      .catch(res1 => console.log(res1));
  };

  const openPopup = (d) => {
    setPopup(true);
    setid1(d.id);
    setName1(d.name);
    setImg1(d.image);
    setAge1(d.age);
    setsub1(d.sub);
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/users1/${id1}`, { "id":id1,"image": img1, "name": name1, "age": age1 ,"subscription":sub1})
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/users1/${id}`)
      .then(res => { console.log(res) })
      .catch(er => { console.log(er) });
  };

  return (
    <div>
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='user-form'>
        <label>Enter Id</label>
        <input type="text" value={id} onChange={(e) => setid(e.target.value)} /><br />
        <label>User Image</label>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} /><br />
        <label>User Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label>User Age</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <label>Subscription</label>
        <select value={sub} onChange={(e)=>setsub(e.target.value)}>
          <option>Click Here</option>
          <option >Subscriped</option>
          <option >Unsubscriped</option>
        </select>
        <button type='submit'>Add</button>
      </form>
      </div>
      <div className='table-container'>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Subscription</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {post.map(x => (
          <tr>
            <td>{x.id}</td>
          <td><img src={x.image} width={150} height={150} alt={x.name} /></td>
          <td><h1>{x.name}</h1></td>
          <td><p>{x.age}</p></td>
          <td><p>{x.subscription}</p></td>
          <td><button onClick={() => openPopup(x)}>Update</button>
          <button onClick={() => handleDelete(x.id)}>Delete</button></td>
          </tr>
      ))}
        </tbody>
      </table>
      </div>
      <div className='popup'>
  {popup &&
    <form onSubmit={handleUpdate} className="popup-form">
      <button className="close-button" onClick={() => { setPopup(false) }}>X</button>
      
      <input type='text' id="popup-id" value={id1} placeholder='Id'onChange={(e) => setid1(e.target.value)} /><br />
      <input type='text' id="popup-image" value={img1}  placeholder='Image' onChange={(e) => setImg1(e.target.value)} /><br />
      <input type='text' id="popup-name" value={name1}  placeholder='Name' onChange={(e) => setName1(e.target.value)} /><br />
      <input type='text' id="popup-age" value={age1} placeholder='Age' onChange={(e) => setAge1(e.target.value)} /><br />
      <select value={sub1} onChange={(e)=>setsub1(e.target.value)}>
      <option>Click Here</option>
          <option >Subscribed</option>
          <option >Unsubscribed</option>
      </select>
      <button type='submit' className="submit-button">Submit</button>
    </form>
  }
</div>

    </div>
  );
};
