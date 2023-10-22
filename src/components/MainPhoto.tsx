import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Countdown from './Countdown';
import Menu from './Menu'



const photo = {
  image: './public/maos.jpg',
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
      <Box display='flex' justifyContent='start' position='absolute' zIndex={1}>
        <Menu />
      </Box>
     
      {<img style={{ display: 'none'}} src={photo.image} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)'
        }}
      />
      
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
        
      <Countdown />
    </Paper>
  );
}