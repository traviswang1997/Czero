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

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {'Copyright © '}
      <Link color="#fff" href="https://mui.com/">
        Your Website
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
        content: 'This is a media card. You can use this section to describe the content.'
    },
    {
        img: './img/rewards.png',
        name: 'Prizes/Rewards',
        content: 'This is a media card. You can use this section to describe the content.'
    },
    {
        img: './img/public.jpeg',
        name: 'Public Spaces',
        content: 'This is a media card. You can use this section to describe the content.'
    }
];

const theme = createTheme();

export default function Landing() {
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
              Dashboard
            </Link>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1 }}
              style={{color:'white'}}

            >
              Profile
            </Link>
            <PlaceIcon style={{position:'absolute', left: '265px', top: '20px', color: 'white'}}/>
            <Link
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              style={{position:'absolute', left: '280px', top: '12px', color: 'white'}}
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
              variant="h5"
              fontFamily={'Monospace'}
              align="center"
              color="#fff"
              gutterBottom
              style={{marginBottom:'50px'}}
            >
              What's Net Zero Emission (NZO)?
            </Typography>
            <Typography variant="h6" align="center" color="#fff" fontFamily={'Monospace'} paragraph>
            Net zero refers to achieving an overall balance between greenhouse gas emissions produced and green house gas emission taken out of the atmosphere. 
            </Typography>
            <Typography variant="h6" align="center" color="#fff" fontFamily={'Monospace'} paragraph>
            Net zero means we can still produce some emission, as long as they are offset by processes that REDUCE GREENHOUSE GASES already in the atmosphere
            </Typography>
            <Stack
              sx={{ pt: 4, pb: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button style={{backgroundColor:'#2AA92A', color:'#fff'}} variant="contained">First action</Button>
              <Button style={{backgroundColor:'#2AA92A', color:'#fff'}} variant="contained">Second action</Button>
            </Stack>
            <iframe width="100%" height="315" allow='autoplay' allowfullscreen style={{border:'none'}}
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
            </iframe>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: '#2B2B2B',
            pt: 8,
            pb: 6,
          }}
        >
        <Container maxWidth="sm" style={{backgroundColor:'#2b2b2b', display:'flex', justifyContent:'center'}}>
        <Typography variant="h4" align="center" color="#fff" fontFamily={'Monospace'} sx={{fontWeight:'600'}}>
           Transport + Public Spaces
        </Typography>
    
        </Container>
        <hr style={{marginTop: '20px', color:'#fff', width:'80%'}} />
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
                    <Typography gutterBottom variant="h5" component="h2" style={{color:'#fff' }}>
                      {card.name}
                    </Typography>
                    <Typography style={{color:'#fff' }}>
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container maxWidth='sm' style={{display:'flex', justifyContent:'space-around'}}>
            <Button style={{backgroundColor:'#2AA92A', color:'#fff'}} variant="contained" size='large'>Download App</Button>
            <Button style={{backgroundColor:'#2AA92A', color:'#fff'}} variant="contained" size='large'>Contact Us</Button>
        </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#2b2b2b', p: 6 }} component="footer">
        <Typography style={{ color:'#fff'}} variant="h6" align="center" gutterBottom>
          Czero
        </Typography>
        <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
        <Button
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
          style={{color:'#fff'}}
        >
          Contact Us
        </Button>
        <Button
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
          style={{marginLeft:'20px', color:'#fff'}}
        >
          Link
        </Button>
        </div>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}