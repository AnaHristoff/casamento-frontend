import Menu from './Menu';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Header({ text='' }) {

    return (
        <Box display='flex' flexDirection='row' justifyContent='center' sx={{ position: 'relative', width:'100%', height:50, padding:'5px'}}>
            <Menu color='gray' />
            <Typography color='gray' 
                sx={{
                textAlign: 'center',
                width: '100%',
                fontSize: 34,
                alignItems: 'center',
                fontWeight: 500,
                fontFamily:'Allura'
                }}>
                {text}
            </Typography>
        </Box>
    )
}