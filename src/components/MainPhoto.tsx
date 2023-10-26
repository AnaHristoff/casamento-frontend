import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Countdown from './Countdown';
import Header from './Header';



const photo = {
  image: 'countdown.jpg',
  imageText: 'main image description'
};

export default function MainPhoto() {
 

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        height: 400,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${photo.image})`
      }}
    >
      <Header />
     
      {<img style={{ display: 'none'}} src={photo.image} />}
      
        <Countdown />
          <Box 
            sx={{
              position: 'relative',
              padding:'10px',
              paddingRight:'20px',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            
          </Box>
        
      
    </Paper>
  );
}