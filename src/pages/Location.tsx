import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Header from "../components/Header";

export default function Location() {

  const photosQuinta = [
    {
    img: '/quinta1.webp',
    title: '1',
    rows: 2,
    cols: 4
    },
    {
      img: '/quinta2.webp',
      title: '2',
      rows: 1,
      cols: 2,
    },
    {
      img: '/quinta3.webp',
      title: '3',
      rows: 2,
      cols: 2,
    },
    {
      img: '/quinta4.webp',
      title: '4',
      rows: 1,
      cols: 2,
    },
    {
      img: '/quinta8.webp',
      title: '5',
      rows: 2,
      cols: 4,
    },
    {
      img: '/quinta6.webp',
      title: '6',
      rows: 2,
      cols: 2,
    },
    {
      img: '/quinta7.webp',
      title: '7',
      rows: 2,
      cols: 2,
    },
    {
      img: '/quinta11.webp',
      title: '8',
      rows: 2,
      cols: 4,
    },
    {
      img: '/quinta5.webp',
      title: '9',
      rows: 2,
      cols: 3,
    },
    {
      img: '/quinta17.webp',
      title: '10',
      rows: 2,
      cols: 1,
    },
    {
      img: '/quinta9.webp',
      title: '11',
      rows: 1.5,
      cols: 4,
    },
    {
      img: '/quinta13.webp',
      title: '12',
      rows: 1.5,
      cols: 2,
    },
    {
      img: '/quinta14.webp',
      title: '13',
      rows: 1.5,
      cols: 2,
    },
    {
      img: '/quinta12.webp',
      title: '14',
      rows: 3,
      cols: 4,
    },
    {
      img: '/quinta15.webp',
      title: '15',
      rows: 2,
      cols: 2,
    },
    {
      img: '/quinta16.webp',
      title: '16',
      rows: 2,
      cols: 2,
    }]

  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
            <Header text='Onde será a festa' />

            <Box display='flex' flexDirection='row'>
                <Box width='100%' display='flex'>
                {<img style={{ width:'90px', marginTop:'30px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
                </Box>
                <Box sx={{marginTop:'30px'}}>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 16,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                A festa será na Quinta do Avesso, um lugar muito charmoso e que nos apaixonamos logo de cara. Tipo como foi com a gente em 2019.            
              </Typography>
              </Box>
              <Box width='100%' display='flex'>
              {<img style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>

            
            <Box sx={{
              marginTop: 2
            }}>
            
              <Box display='flex' justifyContent='center' sx={{
                marginTop:3
                }}>
                <ImageList
                    sx={{ width: 500}}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                  {photosQuinta.map((item) => (
                    <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                         {...srcset(item.img, 121, item.rows, item.cols)}
                         alt={item.title}
                         loading="lazy"
                         style={{borderRadius:'7px'}}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
              <Box>
                <Typography color='black' 
                  sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 18,
                  alignItems: 'center',
                  fontWeight: 300,
                  fontFamily:'Roboto',
                  marginTop:4
                  }}>
                  Localização da Quinta do Avesso
                </Typography>
                <Box display='flex' justifyContent='center'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2955764538806!2d-8.725537123945761!3d41.2806711713136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2443650edff24b%3A0xbea80fa3296ec01a!2sQuinta%20do%20Avesso!5e0!3m2!1spt-PT!2spt!4v1698238467668!5m2!1spt-PT!2spt" 
                  height="400" loading="lazy" style={{border:0, marginTop:25, width:500}}></iframe>
                   </Box>
              </Box>
              
              
            </Box>
            
        </Box>
    );
}