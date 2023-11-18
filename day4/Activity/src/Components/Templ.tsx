import {useState} from 'react';
import { AppBar,Toolbar,Typography,Stack,Button,Autocomplete,TextField } from "@mui/material";
const T=()=>
{
    const ci=['Delhi','Chennai','Kovai'];
    const [val,setval]=useState<string|null>(null);
    console.log({val})
    return(
        <div>
            <AppBar >
                <Toolbar >
                    <Typography variant='h5' sx={{flexGrow:1}}>Food</Typography>
                    <Stack direction='row' spacing={3}>
                            <Button variant='contained' color='inherit'>Home</Button>
                            <Button variant='contained' color='inherit'>About</Button>
                            <Button variant='text' color='inherit'>Contact</Button>
                    </Stack>
                </Toolbar>
                    
            </AppBar>
            <AppBar color="error" sx={{marginTop:"70px",color:"white"}}>
            <Autocomplete options={ci} renderInput={parms=><TextField {...parms} label="Cities" color='secondary' size='medium'/>}
                    value='Delhi'
                    onChange={(event:any,newValue:string|null)=>setval(newValue)}
                    />
            </AppBar>
        </div>
    )
}
export default T;