import { Box} from '@mui/material'
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

    const timer = [
        {key: "dias", value: days}, 
        {key: 'hrs', value: hours}, 
        {key: '', value: ':'},
        {key: 'min', value: minutes}, 
        {key: '', value: ':'},
        {key: 'seg', value: seconds}
    ]

    return (
        <Box display='flex' gap='16px' justifyContent='flex-end'
        sx={{
            width: '100%',
            paddingTop: 28,
            justifyContent: 'center',
            fontSize: 36,
            fontWeight: 300,
            textShadow: '2px 2px 4px #000000',
            position:'relative',
            zIndex: 999
            
          }}>
            { timer.map((item, i) => 
              <Box display='flex' flexDirection='column' color='inherit' key={i}>
                <Box sx={{fontFamily: 'Tilt Neon, sans-serif'}}>
                    {item.value}
                </Box>
                <Box>
                    {item.key}
                </Box>
              </Box>
              ) }
      </Box>
    );
}