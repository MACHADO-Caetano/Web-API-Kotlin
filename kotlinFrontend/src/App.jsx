import './App.css'
import MainLayout from './layout/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MessageForm from './components/MessageForm'
import MessageList from './pages/MessageList'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/showMessages' element={<MessageList/>}/>
          <Route path='/registerMessages' element={<MessageForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App