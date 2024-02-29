import React from 'react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../Assests/Navbar.css';
const AppWrapper = styled('div')({
  flexGrow: 1,
});
const StyledAppBar = styled(AppBar)({
  background: '#8F00FF',
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
    background: '#c300ff',
  },
});
const NavBaButton = styled(Button)({
  color: 'white',
  marginLeft: '820px',
  '&:hover': {
    background: '#c300ff',
  },
});

const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/Login');
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
              <NavBaButton variant="outlined" color="inherit" className='home' onClick={handleLoginClick}>
                Login
              </NavBaButton>
             
            </div>

          </Toolbar>
        </StyledAppBar>

      </AppWrapper>
    </ContentWrapper>
    </>
  );
};
export default Navbar;