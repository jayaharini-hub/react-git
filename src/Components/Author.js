import { Grid } from "@mui/material";
const Author = () => {
    const linkStyle = {
        textDecoration: 'none', // Removes the underline
        color: 'darkblue', // Inherits the default text color
        cursor: 'pointer', // Shows pointer cursor on hover
      };
    return (
        <>
        <marquee style={{position:'relative',fontSize:'50',color:'white'}} bgcolor={'black'}><h1>Authors</h1></marquee>
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
         <li> <a href="/category/fiction" style={linkStyle}><b>Agastha Cristie</b></a></li>
         <li><a href="/category/sci-fi" style={linkStyle}><b>James Patterson</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Coollen Hover</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Tess Gerritsen</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Bently Little</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Jon fosse</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Dennis Lehane</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Alex</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Michael</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>James</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Ana Huang</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Chetan Bagat</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Ganganadhan</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>William Shakespeare</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>J.K Rowling</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Stephen King</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Jess kidd</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Martha McPhee</b></a></li>
         <li> <a href="/category/mystery" style={linkStyle}><b>Megan Miranda</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Helen keller</b></a></li>
         <li><a href="/category/mystery" style={linkStyle}><b>Sara Canon</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Rebecca</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Sally Rooney</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Lisa Jewell</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Hector Gracia</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Frasnsenc Miralles</b></a></li>
          <li><a href="/category/mystery" style={linkStyle}><b>Maria</b></a></li>
        </Grid>
          </ul>
      </div>
      </>
    );
  };
  
  export default Author;