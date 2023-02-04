import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './helper/AnimatedRoutes'
function App() {

  // const location = useLocation()
  return (
    <div className="App">

      <Router>
        <AnimatedRoutes/>
        {/* <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/eventadd" element={<EventAdd/>}/>
        </Routes> */}
      </Router>

      {/* <Login/> */}
{/* <EventAdd/> */}
    </div>
  )
}

export default App
