import React, {useEffect ,useState} from 'react'
export default function Lifecycle (){
    const[X,setX]=useState(0);
    const[Y,setY]=useState(0);
    const logMouseMovement=(event)=>{
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(()=>{
        console.log('mouse is moving')
        window.addEventListener('mousemove',logMouseMovement)
    })
    return(
        <div>
            X-{x} Y-{y}
        </div>
    )
}