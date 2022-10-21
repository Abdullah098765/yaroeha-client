import { React, useContext, useEffect } from 'react'
import SignUp from './components/SignUp/signUp.js'
import Home from './components/Home/home.js'
import Room from './components/room/room.js'
import { Route, Routes } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { AppContext } from './Context/context.js'
import {
  useGoogleOneTapLogin,
  GoogleOneTapLogin
} from 'react-google-one-tap-login'
import Create_room from './components/create_room/create_room.js'

function App () {
  const app = initializeApp({
    apiKey: 'AIzaSyDJQ_shUuJs52HvJPmc5JNQrcmq75pDz0w',
    authDomain: 'yaromeha.firebaseapp.com',
    projectId: 'yaromeha',
    storageBucket: 'yaromeha.appspot.com',
    messagingSenderId: '506303301079',
    appId: '1:506303301079:web:f7965f95a1b9cf5c3af792',
    measurementId: 'G-W3TS8L4V8L'
  })
  const analytics = getAnalytics(app)
  let { setUser, user } = useContext(AppContext)

  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: response => {
      console.log(response)

      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        displayName: response.name,
        blocked: false,
        email: response.email,
        uid: response.kid,
        photoURL: response.picture,
        isOnline: false
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:5000/add_user', requestOptions)
        .then(response => response.text())
        .then(result => {
          localStorage.setItem('uid', response.picture)
        })
        .catch(error => console.log('error', error))
    },
    googleAccountConfigs: {
      client_id:
        '506303301079-lng3pocsm7ovs6nbrhnfjg5e6ken5vi8.apps.googleusercontent.com'
    }
  })

  useEffect(() => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({ uid: localStorage.getItem('uid') })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('http://localhost:5000/get_user', requestOptions)
      .then(response => response.text())
      .then(result => {
        setUser(JSON.parse(result))
      })
      .catch(error => console.log('error', error))
  }, [])

  return (
    <div style={{ margin: 0 + 'px', padding: 0 + 'px' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='create_room' element={<Create_room />} />
        <Route path='room:id' element={<Room />} />
      </Routes>
    </div>
  )
}
export default App
