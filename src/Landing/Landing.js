import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { ReactComponent as Logo } from './logo.svg';
import {Modal} from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {'Copyright © '}
      <Link color="#fff" href="http://czero.vercel.app/">
        Czero
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
    {
        img: './img/CZ.png',
        name: 'Nearby CZs',
        content: 'Collecting your CZ to redeem prizes'
    },
    {
        img: './img/rewards.png',
        name: 'Prizes/Rewards',
        content: 'List of amzing prizes avaiblae here'
    },
    {
        img: './img/public.jpeg',
        name: 'Public Spaces',
        content: 'Check out where are the public spaces around you'
    }
];

const theme = createTheme();

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#2b2b2b',
    boxShadow: 24,
    p:5 ,
    borderRadius: '16px'
  };

export default function Landing() {
    const [open, setOpen] = React.useState()
    const handleModal = () => {
        setOpen(!open)
    }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ flexWrap: 'wrap', backgroundColor:'#2AA92A' }}>
          <Logo style={{height:'60px'}} width='60px' />
          <nav>
            
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1 }}
              style={{color:'white'}}
            >
              Profile
            </Link>
            <PlaceIcon style={{position:'absolute', left: '165px', top: '20px', color: 'white'}}/>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{position:'absolute', left: '180px', top: '12px', color: 'white'}}
            >
              Adelaide
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{position:'absolute', right: '20px', top: '10px', color: 'white'}}
            >
              Login
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#2B2B2B',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h3"
              fontFamily={'monospace'}
              align="left"
              color="#fff"
              gutterBottom
              style={{marginBottom:'10px', fontWeight:'600', width:'70%'}}
            >
              We at Czero are helping in our own way to contribute to Net Zero Emission
            </Typography>
            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph style={{fontFamily:'monospace', fontWeight:'600'}}>
            Australia has committed to Net Zero Emissions by 2050. This does an overall balance between greenhouse gas produced, and greenhouse gas taken out of the atmosphere
            </Typography>

            <Stack
              sx={{ pt: 4, pb: 4 }}
              direction="row"
              spacing={2}
              justifyContent="left"
              fontFamily={'monospace'}
            >
                <Button style={{backgroundColor:'#2AA92A', color:'#fff', width:'300px', fontFamily:'monospace', fontWeight:'600'}} variant="contained">Join us</Button>
                
            </Stack>
            <iframe width="100%" height="315" allow='autoplay' allowfullscreen style={{border:'none', borderRadius:'16px'}}
                src="https://www.youtube.com/watch?v=NX7uQJ4cqXc?autoplay=1&mute=1">
            </iframe>
            <Stack
              sx={{ pt: 4, pb: 4 }}
              direction="row"
              spacing={2}
              justifyContent="space-between"
              fontFamily={'monospace'}
            >
                <Button style={{backgroundColor:'#2b2b2b', color:'#fff', width:'300px', borderColor:'#fff', fontFamily:'monospace', fontWeight:'600'}} variant="outlined" onClick={handleModal}>About us</Button>
                <Modal
                open={open}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Container maxWidth="md" style={{backgroundColor:'#2b2b2b', justifyContent:'center'}}>
                        <Typography variant="h4" align="center" color="#fff" fontFamily={'monospace'} sx={{fontWeight:'600'}} style={{marginBottom:'20px'}} >
                        About Us
                        </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph >
                            Czero aims to promote collaboration in a carbon controlled way.  We are a technology company that aims to reduce carbon emission through the utilisation of modern transport systems, and public landscapes
                            </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph >
                            Czero incentivises people to utilise public landscapes by providing the CZ shared value property rewards system. Business is creating the CZ for their own public spaces and which can be the chance to get tax deduction. Visitors of the public spaces will also get the shared value of the CZ and which can be redeemed to real prizes
                            </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} >
                            We believe at Czero that everyone has a part to play in reaching Net 2050
                            </Typography>
                    </Container>
                </Box>
                </Modal>
                <Button style={{backgroundColor:'#2b2b2b', color:'#fff', width:'300px', borderColor:'#fff', fontFamily:'monospace', fontWeight:'600'}} variant="outlined" onClick={handleModal}>How does it work?</Button>
                <Modal
                open={open}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Container maxWidth="md" style={{backgroundColor:'#2b2b2b', justifyContent:'center'}}>
                        <Typography variant="h4" align="center" color="#fff" fontFamily={'monospace'} sx={{fontWeight:'600'}} style={{marginBottom:'20px'}} >
                        How does it work?
                        </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph >
                            Czero aims to promote collaboration in a carbon controlled way.  We are a technology company that aims to reduce carbon emission through the utilisation of modern transport systems, and public landscapes
                            </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph >
                            Czero incentivises people to utilise public landscapes by providing the CZ shared value property rewards system. Business is creating the CZ for their own public spaces and which can be the chance to get tax deduction. Visitors of the public spaces will also get the shared value of the CZ and which can be redeemed to real prizes
                            </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} >
                            We believe at Czero that everyone has a part to play in reaching Net 2050
                            </Typography>
                    </Container>
                </Box>
                </Modal>
                <Button style={{backgroundColor:'#2b2b2b', color:'#fff', width:'300px', borderColor:'#fff', fontFamily:'monospace', fontWeight:'600'}} variant="outlined" onClick={handleModal}>Coming soon..</Button>
                <Modal
                open={open}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Container maxWidth="md" style={{backgroundColor:'#2b2b2b', justifyContent:'center'}}>
                        <Typography variant="h4" align="center" color="#fff" fontFamily={'monospace'} sx={{fontWeight:'600'}} style={{marginBottom:'20px'}} >
                        Coming soon..
                        </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph >
                            Czero aims to promote collaboration in a carbon controlled way.  We are a technology company that aims to reduce carbon emission through the utilisation of modern transport systems, and public landscapes
                            </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph >
                            Czero incentivises people to utilise public landscapes by providing the CZ shared value property rewards system. Business is creating the CZ for their own public spaces and which can be the chance to get tax deduction. Visitors of the public spaces will also get the shared value of the CZ and which can be redeemed to real prizes
                            </Typography>
                            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} >
                            We believe at Czero that everyone has a part to play in reaching Net 2050
                            </Typography>
                    </Container>
                </Box>
                </Modal>
            </Stack>
          </Container>
          <hr style={{backgroundColor:'#2b2b2b', marginTop: '100px', color:'#fff', width:'40%'}} />
        </Box>
        <Box
          sx={{
            bgcolor: '#2B2B2B',
            pt: 8,
            pb: 6,
          }}
        >
        <Container maxWidth="md" style={{backgroundColor:'#2b2b2b', display:'flex', justifyContent:'center'}}>
        <Typography variant="h4" align="center" color="#fff" fontFamily={'monospace'} sx={{fontWeight:'600', fontFamily:'monospace'}} >
           Public Transport + Public Spaces
        </Typography>
            <Container maxWidth="md" style={{backgroundColor:'#2b2b2b', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph sx={{fontWeight:'500', fontFamily:'monospace'}}>
            Australia’s transport industry is the third highest emitter of greenhouse gasses. A aspect of reaching Net2050 is to address the mode of transport within Australia through micro-mobility. Greater vegetation in open city spaces is known to help absorb carbon dioxide thus helping offset emissions
            </Typography>
            <Typography variant='subtitle2' align="left" color="#fff" fontFamily={'monospace'} paragraph sx={{fontWeight:'500', fontFamily:'monospace'}}>
            Czero sees this as an opportunity to connect both aspects to promote a better and healthier environment for our future generation
            </Typography>
            </Container>
        </Container>
        <hr style={{marginTop: '20px', color:'#fff', width:'50%'}} />
        </Box>
        <Box
          sx={{
            bgcolor: '#2B2B2B',
            pb: 6,
          }}
        >
        <Container sx={{ py: 8, color:'#fff', bgcolor:'#2b2b2b' }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                  style={{backgroundColor:'#2b2b2b' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height:'200px'
                    }}
                    image={card.img}
                    alt="random"
                    style={{backgroundSize:'contain', objectFit:'contain'}}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{color:'#fff', fontWeight:'600', fontFamily:'monospace'  }}>
                      {card.name}
                    </Typography>
                    <Typography style={{color:'#fff', fontWeight:'500', fontFamily:'monospace'  }}>
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button style={{fontWeight:'600', fontFamily:'monospace' }} size="medium">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container maxWidth='sm' style={{display:'flex', justifyContent:'space-around'}}>
            <Button style={{backgroundColor:'#2AA92A', color:'#fff', fontWeight:'600', fontFamily:'monospace' }} variant="contained" size='large'>Download App</Button>
            <Button style={{backgroundColor:'#2AA92A', color:'#fff', fontWeight:'600', fontFamily:'monospace' }} variant="contained" size='large'>Contact Us</Button>
        </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#2b2b2b', p: 6 }} component="footer">
        <Typography style={{ color:'#fff', fontWeight:'600', fontFamily:'monospace' }} variant="h6" align="center" gutterBottom>
          Resource link
        </Typography>
        <div style={{display:'flex', justifyContent:'center', marginTop:'10px', marginBottom:'30px'}}>
        <Button
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
          style={{color:'orange', fontWeight:'600', fontFamily:'monospace' }}
          onClick={() => window.open('https://github.com/traviswang1997/Czero')}
        >
          Github
        </Button>
        <Button
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
          style={{marginLeft:'20px', color:'orange', fontWeight:'600', fontFamily:'monospace' }}
          onClick={() => window.open('https://www.figma.com/file/qlqnxUpFztXMo6whDYQTCF/GovHack---NetZero---SSH?node-id=12%3A1390')}
        >
          Figma
        </Button>
        </div>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}