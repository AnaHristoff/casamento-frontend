import { Box, Typography } from "@mui/material";
import Header from "../components/Header";

export default function GuestList() {

    return (
        <Box sx={{
            position: 'relative',
            backgroundColor: '#fff',
            color: '#fff',
            width: '100%'
            }}>
            <Header text='Nossos convidados' />

            <Box display='flex' flexDirection='row'>
                <Box width='100%' display='flex'>
                {<img style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)'}} src='folhas-lateral.jpg'/>}
                </Box>
                <Box sx={{marginTop:'30px'}}>
                <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 16,
              alignItems: 'center',
              fontWeight: 300
            }}>
                Vocês são as pessoas mais próximas e mais importantes pra gente. 
          </Typography>
          <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 16,
              alignItems: 'center',
              fontWeight: 300
            }}>
                Um muito obrigada a todos que fizeram o esforço de vir do Brasil pra poder estar com a gente nesse momento. 
          </Typography>
          <Typography color='gray' 
            sx={{
              textAlign: 'center',
              width: '100%',
              fontSize: 16,
              alignItems: 'center',
              fontWeight: 300
            }}>
                Aos que já estavam perto, vale lembrar que vocês economizaram um dinheirinho bom, então lembrem-se da lista de presentes! 
          </Typography>
              </Box>
              <Box width='100%' display='flex'>
              {<img style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>


            
        </Box>
    );
}