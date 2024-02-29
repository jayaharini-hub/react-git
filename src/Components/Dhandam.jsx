import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,  CardActions } from '@mui/material';
export default function home(){
   return(
    
        
      <div className='card' style={{display:'flex', justifyContent:'space-around', paddingTop:'60px'}}>
       <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img" height="140"
          image="https://m.media-amazon.com/images/I/413MutvJjwL.AC_UF1000,1000_QL80.jpg" alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>RPM</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Revolutions per minute is a unit of rotational speed for rotating machines. One revolution per minute is equivalent to 1/60 hertz
          </Typography>
        </CardContent>
         <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
       <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img" height="140"
          image="https://play-lh.googleusercontent.com/HGLcDBPHxUzEjLOp7szdweIhL0uEQKsyl7pGMqpcEFuM_sXAOpoKD1eWK7KfMO3AbQ=w526-h296-rw" alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>OBJECT COUNT</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Object counting applications are important in manufacturing, retail, and logistics to recognize and count products, pieces, and boxes produced.
          </Typography>
        </CardContent>
         <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
       <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img" height="140"
          image="https://worcscale.com/wp-content/uploads/2014/11/wtconvey.gif" alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>OVER WEIGHT</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Overweight load.Your conveyor belt can only handle so much weight based on its pulleys and overall size
          </Typography>
        </CardContent>
         <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
       <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img" height="140"
          image="https://comphydraulic.com/wp-content/uploads/Pneumatic-Services.jpg" alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>BELT FAULT</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          If a belt begins to falter in its ability to carry its load, it will begin to slip. 
          The cause of this is that the drive is often not sized correctly or there is insufficient tension in the belt
          </Typography>
        </CardContent>
         <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </div>

   ) 
}