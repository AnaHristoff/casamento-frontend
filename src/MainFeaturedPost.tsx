import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Countdown from './Countdown';

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        height: 400,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none'}} src={post.image} alt={post.imageText} />}
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
              padding:10,
              width: '100%',
              justifyContent: 'end'
            }}
          >
            <Typography component="h2" variant="h3" color="inherit" gutterBottom fontFamily="Allura"
            sx={{
              textAlign: 'right',
              p: { xs: 3, md: 0 },
              pr: { md: 9 },
              width: 800
            }}>
              {post.title}
            </Typography>
          </Box>
        
      <Countdown />
    </Paper>
  );
}