import { useState } from "react";
const State = ()=>{
    const [data,setdata]=useState(false);
    const handlecolor =()=>{
        setdata(!data);
    }
    return(
        <>
        <p className={data ? 'container green':'container red'}>
            hello
        </p>
        <br></br>
        <button onClick={handlecolor} className="k1">
            change color
        </button>
        </>
    )
}
export default State;