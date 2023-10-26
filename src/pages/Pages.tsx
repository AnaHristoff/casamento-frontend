import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Location from './Location'
import DressCode from './DressCode'
import GiftList from './GiftList'
import Schedule from './Schedule'
import Dishes from './Dishes'
import GuestList from './GuestList'

export const Pages = () => {
  

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/onde-sera' element={<Location />} />
      <Route path='/dress-code' element={<DressCode />} />
      <Route path='/lista-de-presentes' element={<GiftList />} />
      <Route path='/convidados' element={<GuestList />} />
      <Route path='/ementa' element={<Dishes />} />
      <Route path='/cronograma' element={<Schedule />} />
    </Routes>
  )
}

