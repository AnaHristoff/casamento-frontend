import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainPhoto from '../../components/MainPhoto'
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';



const photoFolhas = {
  image: './public/galhosOutono.png'
};

const weddingText = 'A única certeza que quero ter é viver intensamente essa incerteza'
const weddingDay = '04 de Outubro de 2024'
const weddingPlace = 'Quinta do Avesso, Portugal'

const defaultTheme = createTheme();

export const HomePage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
        <MainPhoto />
        <Box>
          <Typography color='black' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 32,
              marginTop: 10,
              padding:2
            }}>
              {weddingText}
          </Typography>
          <Box display='flex' justifyContent='end'>
          {<img style={{ width:'270px', transform: 'rotate(180deg)', marginTop: 30, filter: 'grayscale(70%)'}} src={photoFolhas.image}/>}
          </Box>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 34,
              marginTop: 5
            }}>
              {weddingDay}
          </Typography>
          <Typography color='gray' gutterBottom fontFamily='Allura'
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 34,
              marginTop: 0
            }}>
              {weddingPlace}
          </Typography>
          <Box display='flex' justifyContent='start'>
          {<img style={{ width:'270px', marginTop: 20, filter: 'grayscale(70%)'}} src={photoFolhas.image}/>}
          </Box>
          
        </Box>
     <Footer />
    </ThemeProvider>
  );
}