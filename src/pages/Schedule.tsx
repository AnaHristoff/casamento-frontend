import { Box, Typography } from "@mui/material";
import Header from "../components/Header";


export default function Schedule() {

  

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
          <Header text='Como será o nosso dia' />

            <Box sx={{padding:2}}>
              <Box display='flex' flexDirection='row'>
                <Box width='100%' display='flex'>
                {<img style={{ width:'70px', marginTop:'30px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
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
                  O casamento português é um pouco diferente do brasileiro, começando pela duração (14 horas de festa!!!).
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 16,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Vamos, então, explicar um pouco como será esse nosso evento estilo ópera com vários atos.
              </Typography>
              </Box>
              <Box width='100%' display='flex'>
              {<img style={{ width:'70px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>
            
          <Box sx={{marginTop:7}}>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                Primeiro ato (por volta das 14h): Matar as saudades e... nos casar!!!
            </Typography>
            </Box>

            {/* <Box width='100%' sx={{marginTop:4}}>
            {<img style={{ width:70, height: 70}} src='folha1.jpg'/>}
            </Box> */}


            <Box sx={{marginTop:4}}>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                Segundo ato: Aproveitar a comida e a bebida ouvindo uma musiquinha boa
            </Typography>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 14,
                alignItems: 'center',
                marginTop: 1,
                fontWeight: 400
              }}>
                Bebidas, Canapés Volantes, Buffet de frios
            </Typography>
            </Box>

            {/* <Box width='100%' sx={{marginTop:4}}>
            {<img style={{ width:70, height: 70, }} src='folha2.jpg'/>}
            </Box> */}

            <Box sx={{marginTop:4}}>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                Terceiro ato (por volta das 20h): Sentar para apreciar o jantar
            </Typography>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 14,
                alignItems: 'center',
                marginTop: 1
              }}>
                Entrada, Prato de peixe, Prato de carne, Jantar Vegetariano, Vinho, Café e Digestivos, Menu infantil
            </Typography>
            </Box>

            {/* <Box width='100%' sx={{marginTop:4}}>
            {<img style={{ width:70, height: 80}} src='folha3.jpg'/>}
            </Box> */}
            <Box sx={{marginTop:4}}>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                Quarto ato: Vamos cortar o bolo e brindar!
            </Typography>
            </Box>

            {/* <Box width='100%' sx={{marginTop:4}}>
            {<img style={{ width:70, height: 70}} src='folha4.jpg'/>}
            </Box> */}
            <Box sx={{marginTop:4}}>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                Quinto ato: Sobremesas liberadas
            </Typography>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 14,
                alignItems: 'center',
                marginTop: 1
              }}>
                Buffet de sobremesas
            </Typography>
            </Box>
            {/* <Box width='100%' sx={{marginTop:4}}>
            {<img style={{ width:60, height: 90}} src='folha5.jpg'/>}
            </Box> */}
            <Box sx={{marginTop:4}}>
            <Typography color='gray' 
              sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 20,
                alignItems: 'center',
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                Sexto e último ato: FESTA!!!
            </Typography>
            </Box>

          
          </Box>
          <Box>
          {<img style={{ width:'100%', height: '200px'}} src='folhas-chao.jpg'/>}
          </Box>
            
        </Box>
    );
}