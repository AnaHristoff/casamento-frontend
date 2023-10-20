import { Typography, Box, Grid, Item } from '@mui/material'
import { useEffect, useState } from 'react'

const WEEDING_DAY = new Date('2024-10-04T00:00:00').getTime()


export default function Countdown () {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [days, setDays] = useState(0)
    const currentDate = new Date().getTime()
    
    useEffect(() => {
        const difference = WEEDING_DAY - currentDate

        const interval = setInterval(() => {
            setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((difference % (1000 * 60)) / 1000))
        }, 1000)
    

    return () => clearInterval(interval)
   }, [seconds])

    

    return (
        <Box 
        sx={{
            
          }}>
            <Grid container>
                <Grid item>
                    <Typography>
                        {days}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        :
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        {hours}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        :
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        {minutes}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        :
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        {seconds}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        dias
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        :
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        horas
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        :
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        minutos
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        :
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        segundos
                    </Typography>
                </Grid>
                
                
            </Grid>
            
      </Box>
    );
}