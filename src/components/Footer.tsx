import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Da UFRJ para Portugal.'}
    </Typography>
  );
}

export default function Footer() {
  
return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', marginTop: 10, marginBottom:2}}>
      <Container>
        <Copyright />
      </Container>
    </Box>
  );
}