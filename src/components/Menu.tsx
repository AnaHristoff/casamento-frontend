import * as React from 'react';
      import Box from '@mui/material/Box';
      import Drawer from '@mui/material/Drawer';
      import Button from '@mui/material/Button';
      import List from '@mui/material/List';
      import ListItem from '@mui/material/ListItem';
      import ListItemButton from '@mui/material/ListItemButton';
      import ListItemIcon from '@mui/material/ListItemIcon';
      import ListItemText from '@mui/material/ListItemText';
      import { MenuRounded, LocationOn, Checkroom, CardGiftcard,Groups, Restaurant, EventNote } from '@mui/icons-material';
      import { useNavigate } from 'react-router-dom';
      import HomeIcon from '@mui/icons-material/Home';
    
      
      export default function Menu({ color }) {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const sections = [
            { title: 'Página principal', url: '/', icon: <HomeIcon /> },
            { title: 'Onde será', url: '/onde-sera', icon: <LocationOn /> },
            { title: 'Dress code', url: '/dress-code', icon: <Checkroom />},
            { title: 'Lista de presentes', url: '/lista-de-presentes', icon: <CardGiftcard /> },
            { title: 'Convidados', url: '/convidados', icon: <Groups /> },
            { title: 'Ementa', url: '/ementa', icon: <Restaurant /> },
            { title: 'Cronograma', url: '/cronograma', icon: <EventNote /> }
          ];
      
        const toggleDrawer =
          (open: boolean) =>
          (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
              event.type === 'keydown' &&
              ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
              return;
            }
      
            setIsMenuOpen(open);
          };

        const navigate = useNavigate();
      
        const list = () => (
          <Box
            sx={{ width:250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {sections.map((item) => (
                <ListItem key={item.title} disablePadding onClick={() => navigate(item.url)}>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        );
      
        return (
          <div>
              <React.Fragment>,
                <Button onClick={toggleDrawer(true)} sx={{ position: 'absolute', left: 0}}>
                  {<MenuRounded  sx={{color:{color}, fontSize: 30}}/>}
                  </Button>
                <Drawer
                  anchor='top'
                  open={isMenuOpen}
                  onClose={toggleDrawer(false)}
                >
                  {list()}
                </Drawer>
              </React.Fragment>
          </div>
        );
      }