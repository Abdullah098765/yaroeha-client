import React, { useEffect, useState } from 'react'

export default function Room () {
  const url = window.location.href
  const strs = url.split(':')
  const id = strs.at(-1)

  const [roomData, setRoomData] = useState({})
  useEffect(() => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({ id: id })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('http://localhost:5000/get_group', requestOptions)
      .then(response => response.text())
      .then(result => {
        setRoomData(JSON.parse(result))
        console.log(JSON.parse(result))
      })
      .catch(error => console.log('error', error))
  }, [])
  return <div className='text-light'>{roomData.groupName}</div>
}
