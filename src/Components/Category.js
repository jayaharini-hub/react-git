import { Grid } from "@mui/material";
const Category = () => {
    const linkStyle = {
        textDecoration: 'none', // Removes the underline
        color: 'darkblue', // Inherits the default text color
        cursor: 'pointer', // Shows pointer cursor on hover
      };
    return (
        <>
        <marquee style={{direction:'right',fontSize:'50',color:'white'}} bgcolor={'black'} ><h1>Categories of Books</h1></marquee>
      <div style={{ paddingLeft: '250px', paddingTop: '100px' }}>
      
          <ul>
          <Grid
          container
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 10fr)',
            gap: '30px'
          }}
        >
         <li> <a href="/category/fiction" style={linkStyle}><b>Fiction</b></a></li>
         <li><a href="/category/sci-fi" style={linkStyle}><b>Science Fiction</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Mystery</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Horror</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Thriller</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Music</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Novel</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Devotion</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Myth</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Adventure</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Romance</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Cooking</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Languages</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Art</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Literature</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>History</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Maths</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Physics</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Law</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Fantasy</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Finanace</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Poetry</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>War</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Poetry</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Business</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Biology</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Tutorials</b></a></li>
        </Grid>
          </ul>
      </div>
      </>
    );
  };
  
  export default Category;