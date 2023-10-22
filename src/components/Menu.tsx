import * as React from 'react';
      import Box from '@mui/material/Box';
      import Drawer from '@mui/material/Drawer';
      import Button from '@mui/material/Button';
      import List from '@mui/material/List';
      import ListItem from '@mui/material/ListItem';
      import ListItemButton from '@mui/material/ListItemButton';
      import ListItemIcon from '@mui/material/ListItemIcon';
      import ListItemText from '@mui/material/ListItemText';
      import { MenuRounded, LocationOn, Checkroom, CardGiftcard,Groups, Restaurant, EventNote  } from '@mui/icons-material';
    
      
      export default function Menu() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const sections = [
            { title: 'Onde será', url: '#', icon: <LocationOn /> },
            { title: 'Dress code', url: '#', icon: <Checkroom />},
            { title: 'Lista de presentes', url: '#', icon: <CardGiftcard /> },
            { title: 'Convidados', url: '#', icon: <Groups /> },
            { title: 'Ementa', url: '#', icon: <Restaurant /> },
            { title: 'Cronograma', url: '#', icon: <EventNote /> }
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
      
        const list = () => (
          <Box
            sx={{ width:250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {sections.map((item) => (
                <ListItem key={item.title} disablePadding>
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
              <React.Fragment>
                <Button onClick={toggleDrawer(true)}>
                  {<MenuRounded  sx={{color:'white', fontSize: 50}}/>}
                  </Button>
                <Drawer
                  anchor='left'
                  open={isMenuOpen}
                  onClose={toggleDrawer(false)}
                >
                  {list()}
                </Drawer>
              </React.Fragment>
          </div>
        );
      }