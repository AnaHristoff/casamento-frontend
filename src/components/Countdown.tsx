import { Box} from '@mui/material'
import { useEffect, useState } from 'react'

const WEEDING_DAY = new Date('2024-10-04T00:00:00').getTime()


export default function Countdown () {
    const [seconds, setSeconds] = useState(60 - new Date().getSeconds())
    const [minutes, setMinutes] = useState(Math.floor(((WEEDING_DAY - new Date().getTime())  % (1000 * 60 * 60)) / (1000 * 60)))
    const [hours, setHours] = useState(Math.floor(((WEEDING_DAY - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    const [days, setDays] = useState(Math.floor((WEEDING_DAY - new Date().getTime()) / (1000 * 60 * 60 * 24)))
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
   }, [seconds, currentDate])

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
            paddingTop: 13,
            justifyContent: 'center',
            fontSize: 30,
            fontWeight: 300,
            
            position:'relative'
          }}>
            { timer.map((item, i) => 
              <Box display='flex' flexDirection='column' color='rgba(60, 79, 60, 0.8)' key={i}>
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