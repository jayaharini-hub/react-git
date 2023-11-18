import React , {useState} from 'react'
import Lifecycle from './Components/Lifecycle';
import { Button } from '@mui/material';

function Unmount (){
    const [mount,setmount]=useState(true)
    return(
        <div>
            <Button onClick={()=>setmount(!mount)}>Toggle</Button>
            {mount?<Lifecycle/>:''}
        </div>
    )
}
export default Unmount