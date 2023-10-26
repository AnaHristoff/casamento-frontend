import { Box, Dialog, DialogContent, DialogTitle, IconButton, Paper, Typography, styled } from "@mui/material";
import Header from "../components/Header";
import Grid from '@mui/material/Unstable_Grid2';
import { CarCrash, FlightTakeoff, TireRepair, Pets, FitnessCenter, Hotel, LocalCafe, PointOfSale, Sailing, AcUnit, AddShoppingCart, Apartment, Brush, Cake, Celebration, CoffeeMaker, Deck, DinnerDining } from '@mui/icons-material';
import React, { useState } from "react";

export default function GiftList() {
 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const [selectedGift, setSelectedGift] = useState('')
  const [selectedGiftDescription, setSelectedGiftDescription] = useState('')

  const [open, setOpen] = React.useState(false);

  function handleClickOpen(giftName:string, giftDescription:string){
  setSelectedGift(giftName)
  setSelectedGiftDescription(giftDescription)
   setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };


  const gifts = [
    {gift: 'Manutenção carro', description: 'Olha, essa manutenção é cara. Nunca vi uma garrafa de óleo tão absurda de cara. Óleo Lisa Girassol com certeza tem custo-benefício melhor.' ,icon: <CarCrash sx={{fontSize:60}} />, size: 8},
    {gift: 'Pneus carro', description: 'Lukas às vezes quer andar estilo velozes e furiosos, aí estraga tudo. Já furou 3 pneus nos últimos 3 anos.', icon: <TireRepair sx={{fontSize:60}} />, size: 4},
    {gift: 'Passagem avião', description: 'Não temos a sorte de trabalhar em companhia aérea como certas pessoas que conhecemos, então temos que agir como meros mortais e comprar a nossa própria passagem.', icon: <FlightTakeoff sx={{fontSize:60}} />, size: 4},
    {gift: 'Veterinário', description: 'Quem diz que filho custa caro é porque nunca teve animal de estimação. E nós temos 3. Sabemos bem do que estamos falando.', icon: <Pets sx={{fontSize:60}} />, size: 8},
    {gift: '1 ano de academia', description: 'Se a academia está paga a gente tem que ir, né... Pelo menos é isso que o Lukas me diz toda vez que quero dar migué.', icon: <FitnessCenter sx={{fontSize:60}} />, size: 8},
    {gift: 'Hotel da lua de mel', description: 'A gente merece um hotelzinho no mínimo 4 estrelas, né não? Passei da idade de dormir em barraca.', icon: <Hotel sx={{fontSize:60}} />, size: 4},
    {gift: 'Café da manhã no hotel', description: 'O café da manhã do Ibis custa 9€ por pessoa. Imagina o do hotel 5 estrelas que vocês vão nos dar de presente.', icon: <LocalCafe sx={{fontSize:60}} />, size: 4},
    {gift: 'Imposto de renda', description: 'Se nessa vida exise uma coisa que deixa qualquer um triste... é o imposto de renda. Ajudem-nos!', icon: <PointOfSale sx={{fontSize:60}} />, size: 8},
    {gift: 'Passeio de barco', description: 'Passeio de barco é tudo de bom, né? Mas é passeio só pra ficar vendo o mar de fora mesmo, jamé que me arrisco com os tubarões.', icon: <Sailing sx={{fontSize:60}} />, size: 8},
    {gift: 'Ração dos bichos', description: 'Quem diz que filho custa caro é porque nunca teve animal de estimação. E nós temos 3. Sabemos bem do que estamos falando.', icon: <Pets sx={{fontSize:60}} />, size: 4},
    {gift: 'Viagem de inverno', description: 'Um climinha frio, uma nevizinha caindo... e a gente ali juntinho com a mão gangrenando. Quem não quer uma viagem assim?', icon: <AcUnit sx={{fontSize:60}} />, size: 4},
    {gift: 'Mercado do mês', description: 'Sabem quanto custa o leite ninho aqui??? Nos ajudem!!!', icon: <AddShoppingCart sx={{fontSize:60}} />, size: 8},
    {gift: 'Entrada na casa própria', description: 'A gente decidiu fazer um casamento ao invés de juntar dinheiro pra entrada da casa própria. Achamos nada mais do que justo que nos ajudem com isso agora.', icon: <Apartment sx={{fontSize:60}} />, size: 8},
    {gift: 'Aula de pintura', description: 'Isso é capricho da Catarina. Mas ela é a noiva e merece tudo o que quiser.', icon: <Brush sx={{fontSize:60}} />, size: 4},
    {gift: 'Bolo do casamento', description: 'Todo mundo vai comer, não vai? Então podem ajudar a pagar.', icon: <Cake sx={{fontSize:60}} />, size: 4},
    {gift: 'Sua parte da festa', description: 'Todo mundo vai aproveitar a festa, não vai? Então podem ajudar a pagar.', icon: <Celebration sx={{fontSize:60}} />, size: 8},
    {gift: 'Cápsulas Nespresso', description: 'A vida adulta é composta por impostos, contas para pagar e cápsulas Nespresso.', icon: <CoffeeMaker sx={{fontSize:60}} />, size: 8},
    {gift: 'Sunset na lua de mel', description: 'Um fim de tarde com aquela golden hour... Brisa fresca batendo nos nossos rostos... E a gente lembrando que essa conta já está paga.', icon: <Deck sx={{fontSize:60}} />, size: 4},
    {gift: 'Jantar na lua de mel', description: 'Um restaurante chique pra combinar com o nosso hotel 5 estrelas e a certeza que a continha está paga.', icon: <DinnerDining sx={{fontSize:60}} />, size: 12}
  ]

    return (
        <Box sx={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#fff',
          width: '100%'
          }}>
            <Header text='Nossa lista de presentes' />
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
              Lukas quer pedir de presente a manutenção do carro, troca de pneus, imposto e etc... Eu prefiro pedir coisas para a nossa lua de mel.              
              </Typography>
              <Typography color='gray' 
                sx={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 16,
                  alignItems: 'center',
                  fontWeight: 400
                }}>
                  Mas assim, se é dinheiro, estamos aceitando com sorriso no rosto. Temos um casamento para pagar, sabem.
              </Typography>
              </Box>
              <Box width='100%' display='flex'>
              {<img style={{ width:'100px', marginTop:'30px', filter: 'grayscale(10%)', transform: 'rotateY(180deg)'}} src='folhas-lateral.jpg'/>}
              </Box>
            </Box>
             <Box sx={{padding:5, marginTop:5}}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid  container spacing={2}>
                {gifts.map((item) => (
                    <Grid  rowSpacing={2} xs={item.size}>
                    <Item onClick={() => handleClickOpen(item.gift, item.description)} sx={{
                      height: 150,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}>
                      <Typography>
                        {item.gift}
                      </Typography>
                      {item.icon}
                    </Item>
                  </Grid>))} 
                  
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    sx={{
                      backgroundColor: 'white 0.5',
                    }}
                  >
                      <DialogTitle sx={{ m: 0, p: 2, color: 'gray'}} id="customized-dialog-title">
                        {selectedGift}
                      </DialogTitle>
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          color: 'gray',
                          opacity: 0.5
                        }}
                      >
                      </IconButton>
                      <DialogContent dividers>
                        <Typography gutterBottom>
                          {selectedGiftDescription}
                        </Typography>
                        <Typography sx={{marginTop:4}}>
                          Valor: o que o seu coração mandar
                        </Typography>
                        <Typography sx={{marginTop:1}}>
                          (BR) Chave PIX: 13567135724
                        </Typography>
                        <Typography sx={{marginTop:1}}>
                          (PT) MB way: 911749886
                        </Typography>
                      </DialogContent>
                    </BootstrapDialog>
                </Grid>
              </Box>
            </Box>
        </Box>
    );
}