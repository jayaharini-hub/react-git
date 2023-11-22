import {toast,Toaster} from 'react-hot-toast';
import { useState } from 'react';
const Form = () => {
    const [data,setdata]=useState({
        name:'Jayaharini ',
        email:'727722eucs070@skcet.ac.in ',
        number:8490344896,
        text:'harini',
        password:' krjke'
    })
    const handlechange =(e)=>{
        setdata({...data,[e.target.id]:e.target.value})
        console.log('event triggered')
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(data);
        toast.success('Successfully Registered! 🤩')
    }
   return (
   <>
   <p><h1>Regitration for Hackathon</h1></p>
   <form className="f1" onSubmit={handleSubmit}>
   <input type="text" name="" id="name" placeholder="Name"
   className="fx1" onChange={handlechange} value={data.name}/>
   <input type="email" name="" id="email" placeholder="Email"
   className="fx1" onChange={handlechange} value={data.email}/>
   <input type="number" name="" id="number" placeholder="Phone"
   className="fx1" onChange={handlechange} value={data.number}/>
   <input type="text" name="" id="text" placeholder="Username"
   className="fx1" onChange={handlechange} value={data.text}/>
   <input type="password" name="" id="password" placeholder="Password"
   className="fx1" onChange={handlechange} value={data.password}/>
   <button className='fx2'>Register</button>
   </form>
   <Toaster
  position="top-center"
  reverseOrder={true}
/>
   </>
   )
   }
export  default Form;