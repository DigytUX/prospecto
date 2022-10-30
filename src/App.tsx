
import './App.css';
import {Container, Paper,Typography} from '@mui/material';

function App() {
  const styles = {
    Container: {
      height:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center'
    },
    Title:{
      fontWeight:700
    },
    FlexBox:{
      display:'flex',
      flexDirection:'column',
      gap:2,
      padding:5
    }
  }
  return (
    <Container sx={styles.Container}>
      <Paper sx={styles.FlexBox} elevation={0}>
        <Typography sx={styles.Title} variant="h3" component="h1">React without the crap!</Typography>
        <Typography variant="body1" component="p">Get right to building your SaaS product with the best UI library. No more bullshit boilerplate code!</Typography>
        <code><a target="_blank" href="https://digyt.co">Made with love by Digyt</a></code>
      </Paper>
    </Container>
  );
}

export default App;