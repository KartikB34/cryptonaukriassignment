import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'

import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'
import First from './components/Form/First'
import Second from './components/Form/Second'
import Third from './components/Form/Third'
import './App.css'

const App = () => {

  const [formdata,setFormdata] = useState({
    name:"",
    email:"",
    password:"",
    contact:"",
    address:"",
    bvn:"",
  })

  return (
    <>
    <div className='main'>
      <div className='leftdiv'>
        <LeftDiv />
      </div>

      <div className='routes'>
        <Switch>
          <Route exact path={"/"} component={RightDiv} />
          <Route exact path={"/cryptonaukriassignment"} component={RightDiv} />
          <Route exact path="/first">
            <First formdata={formdata} setFormdata={setFormdata} />
          </Route>
          <Route exact path="/second" >
            <Second formdata={formdata} setFormdata={setFormdata} />
          </Route>
          <Route exact path="/third">
            <Third formdata={formdata} setFormdata={setFormdata} />
          </Route>
        </Switch>
      </div>


      {/* <button>
        <Link to="/first">First</Link>
      </button> */}
    </div>
    </>

  )
}

export default App