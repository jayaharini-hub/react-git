import React from 'react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//import SearchBar from './Searchbar';
//import SearchBar from './Searchbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useCart } from './CartContext';

import { Grid } from '@mui/material';
import '../Assests/Navbar.css';
import SearchAutocomplete from './SearchAutocomplete';
const AppWrapper = styled('div')({
  flexGrow: 1,
});

const StyledAppBar = styled(AppBar)({
  background: '#093637',
  borderRadius: '8px',
});


const ContentWrapper = styled('div')({
    margin:'0px',
    
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
});

const NavBarButton = styled(Button)({
  color: 'white',
  marginLeft: '20px',
  '&:hover': {
    background: '#44A08D',
  },
});
const NavBaButton = styled(Button)({
  color: 'white',
  marginLeft: '520px',
  '&:hover': {
    background: '#44A08D',
  },
});

const Navbar = () => {
  
    
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();

  const handleLoginClick = () => {
    navigate('/Login');
  };
  const handleCategory = () => {
    navigate('/Category');
   };
  const handleAuthor = () => {
    navigate('/Author');
   };

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log('Item added to cart:', item);
    
  };
  const handleShowCart = () => {
    console.log(cartItems);
    
  };
  return (
    <>
    <ContentWrapper>
      <AppWrapper style={{ width: "1200px" }}>
        <StyledAppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>

            <div style={{ alignItems: 'center' }}>
              <NavBarButton variant="outlined" color="inherit" className='home'>
                Home
              </NavBarButton>
              <NavBarButton variant="outlined" color="inherit" className='home'>
                About
              </NavBarButton>
              <NavBarButton variant="outlined" color="inherit" className='home' onClick={()=>handleCategory()}>
                Category
              </NavBarButton>
              <NavBarButton variant="outlined" color="inherit" className='home' onClick={()=>handleAuthor()}>
                Author
              </NavBarButton>
              <NavBaButton variant="outlined" color="inherit" className='home' onClick={handleLoginClick}>
                Login
              </NavBaButton>
             <NavBarButton onClick={()=>handleShowCart({})} >
              <ShoppingCartIcon
        style={{  fontSize: '2.5rem' }}>
        
      </ShoppingCartIcon>
      </NavBarButton>
            </div>

          </Toolbar>
        </StyledAppBar>
        <br /><br /><br />
        <h1 style={{font:'inherit',color:'black',fontSize:'70px', fontWeight:'bold', marginLeft:'385px'}}>Nobel Novels</h1>
        <div style={{ paddingRight: '200px', paddingLeft: '300px', borderRadius: '10px' }}>
          <SearchAutocomplete />
        </div><br /><br /><br /><br />
        <Grid container style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '5px'
        }}>

          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7t1MLmS5LyYIEDneloYju9R4qvIQRCx4ZQ&usqp=CAU" />

            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({  id: 1,
    name: 'The new Name',
    price: 19.99, })}
>
  Add to Cart
</Button></div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD58PmSESPHGJ2ESrRdYlvOlYw59uAImsb7MLWRoe_B_88G8SMtNzYtfCnk-xzb8oLRtQ&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({id: 2,
    name: 'Gone Baby Gone',
    price: 19.99,   })}
>
  Add to Cart
</Button>
          </div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jezVDL1GSn0aV_Wy1sevyLlNoF1qMhrSMZzyREmE5Gqvm9EK8MUMwuj0nGvXmeByMLQ&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 3,
    name: 'The Haunted',
    price: 19.99,  })}
>
  Add to Cart
</Button>
          </div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQItbJGLajyhdGa2JFCFUjsV3SQygG9eEDGQ3fFYzE2Lt0z9c1r4vubCQCiPu9IJD0z8&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 4,
    name: 'Harvest',
    price: 19.99,  })}
>
  Add to Cart
</Button>
          </div>

        </Grid><br /><br /><br />

        <Grid container style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '3px'
        }}>

          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-BeGPJf0n0HdIaM3IfodHNdYD952yD8dQQ&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 5,
    name: 'May Be Now',
    price: 19.99, })}
>
  Add to Cart
</Button></div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8meF_h0TJTRyChDEmDnDLhMLa1XNhbAY9kA&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 6,
    name: 'regretting You',
    price: 19.99,  })}
>
  Add to Cart
</Button>
          </div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSuYaC2HHbZ24MhIlvJ3DO5lzLS1Mprb4rQ&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({id: 7,
    name: 'Volver A Empezer',
    price: 19.99,  })}
>
  Add to Cart
</Button>
          </div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32eg-UO-pe7f_2MFedZwph8z9L7cmoDxJ7khoHgujW-Z3qbjyxBQMS3Mn9HlJ42EnOKM&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 8,
    name: 'Ugly love',
    price: 19.99,  })}
>
  Add to Cart
</Button>
          </div>

        </Grid>
        <br /><br /><br /><br />
        <Grid container style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '3px'
        }}>

          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNGdjadapsk0j67KVTUGtRWB97hE5ULTrJQ3I9ugGlAOlpfhcb3YohLK7vQXAXDooRh8&usqp=CAU" />

            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 9,
    name: 'Never Say Die',
    price: 19.99,  })}
>
  Add to Cart
</Button></div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBY7PqwnV3oSCtv37XzHIizmvEfHE0hKhEuQ&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 10,
    name: 'Stolen',
    price: 19.99, })}
>
  Add to Cart
</Button>
          </div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr78eseoTB3YN7TlSQXTqJffV-wb8Vsb7YgQ&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 11,
    name: 'I know a Secret',
    price: 19.99, })}
>
  Add to Cart
</Button>
          </div>
          <div className='image-conatiner hover-image hover-images'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN48sscChpFvdZNiH56nHd4PEsH3QFBGVXQ&usqp=CAU" />
            <Button variant="contained" color="primary" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              Buy Now
            </Button>
            <Button
  variant="contained"
  color="secondary"
  onClick={() => handleAddToCart({ id: 12,
    name: 'Do or Die',
    price: 19.99, })}
>
  Add to Cart
</Button>
          </div>

        </Grid><br /><br /><br />
      </AppWrapper>
    </ContentWrapper>
    </>
  );
};
export default Navbar;