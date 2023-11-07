 import {Award} from 'lucide-react';
 const Form = () => {
    return (
    <>
    <h1>Registration for hackathon</h1>
    <form className="f1">
    <input type="text" name="" id="" placeholder="Name"
    className="fx1"/>
    <input type="email" name="" id="" placeholder="Email"
    className="fx1"/>
    <input type="number" name="" id="" placeholder="Phone"
    className="fx1"/>
    <input type="text" name="" id="" placeholder="Username"
    className="fx1"/>
    <input type="password" name="" id="" placeholder="Password"
    className="fx1"/>
    <button className='fx2'><Award/>Register</button>
    </form>
    </>
    )
    }
export  default Form;