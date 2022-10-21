import React, { useState } from 'react'
import './slider.css'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Modal from '../Modal/modal.js'

export default function Slider (params) {
  const [show, setShow] = useState(false)

  const auth = getAuth()
  const [user] = useAuthState(auth)

  const [group_Data, setGroupData] = useState({
    groupName: '',
    groupLanguage: '',
    comment: '',
    ownerName: '',
    ownerId: '',
    ownerPhoto: ''
  })

  function showModal () {
    const modal = document.getElementById('modal')

    if (show === false) {
      modal.classList.add('show')
      modal.classList.remove('hide')
      setShow(true)
    } else {
      modal.classList.add('hide')
      modal.classList.remove('show')
      setShow(false)
    }

    return
  }

  function handleData (e) {
    if (e.target.name === 'name') {
      group_Data.groupName = e.target.value
    } else if (e.target.name === 'lang') {
      group_Data.groupLanguage = e.target.value
    } else {
      group_Data.comment = e.target.value
    }
  }

  function create_Group () {
    group_Data.ownerName = auth.currentUser.displayName
    group_Data.ownerId = auth.currentUser.uid
    group_Data.ownerPhoto = auth.currentUser.photoURL

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify(group_Data)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('http://localhost:5000/post_group', requestOptions)
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result)))
      .catch(error => console.log('error', error))

    console.log(group_Data)
    showModal()
  }

  return (
    <div className='slider'>
      <div className='slid'>
        {user ? (
          <button onClick={() => window.open('http://localhost:3000/create_room')}>Create your own Room</button>
        ) : (
          <button
            onClick={() => {
              window.location = 'http://localhost:3000/signup'
            }}
          >
            SignUp to create your own Room
          </button>
        )}
      </div>

      <div className='container hide back' id='modal'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-7 col-xl-6'>
            <div className='card mask-custom'>
              <div className='card-body p-5 text-white'>
                <div className='my-4'>
                  <h2 className='text-center mb-5'>Create your Group</h2>

                  <div className='row'>
                    <div className='col-12 col-md-6 mb-4'>
                      <div className='form-outline form-white'>
                        <input
                          onChange={e => handleData(e)}
                          name='name'
                          type='text'
                          id='form3Example1'
                          className='form-control form-control-lg tp'
                          placeholder='Group Name'
                        />
                        <label
                          className='form-label'
                          htmlFor='form3Example1'
                        ></label>
                      </div>
                    </div>

                    <div className='col-12 col-md-6 mb-4'>
                      <div className='form-outline form-white'>
                        <select
                          name='lang'
                          id='cars'
                          className='form-control form-control-lg tp'
                          onChange={e => handleData(e)}
                        >
                          <option>None</option>
                          <option value='Afrikaans'>Afrikaans</option>
                          <option value='Albanian'>Albanian</option>
                          <option value='Arabic'>Arabic</option>
                          <option value='Armenian'>Armenian</option>
                          <option value='Basque'>Basque</option>
                          <option value='Bengali'>Bengali</option>
                          <option value='Bulgarian'>Bulgarian</option>
                          <option value='Catalan'>Catalan</option>
                          <option value='Cambodian'>Cambodian</option>
                          <option value='Chinese (Mandarin)'>
                            Chinese (Mandarin)
                          </option>
                          <option value='Croatian'>Croatian</option>
                          <option value='Czech'>Czech</option>
                          <option value='Danish'>Danish</option>
                          <option value='Dutch'>Dutch</option>
                          <option value='English'>English</option>
                          <option value='Estonian'>Estonian</option>
                          <option value='Fiji'>Fiji</option>
                          <option value='Finnish'>Finnish</option>
                          <option value='French'>French</option>
                          <option value='Georgian'>Georgian</option>
                          <option value='German'>German</option>
                          <option value='Greek'>Greek</option>
                          <option value='Gujarati'>Gujarati</option>
                          <option value='Hebrew'>Hebrew</option>
                          <option value='Hindi'>Hindi</option>
                          <option value='Hungarian'>Hungarian</option>
                          <option value='Icelandic'>Icelandic</option>
                          <option value='Indonesian'>Indonesian</option>
                          <option value='Irish'>Irish</option>
                          <option value='Italian'>Italian</option>
                          <option value='Japanese'>Japanese</option>
                          <option value='Javanese'>Javanese</option>
                          <option value='Korean'>Korean</option>
                          <option value='Latin'>Latin</option>
                          <option value='Latvian'>Latvian</option>
                          <option value='Lithuanian'>Lithuanian</option>
                          <option value='Macedonian'>Macedonian</option>
                          <option value='Malay'>Malay</option>
                          <option value='Malayalam'>Malayalam</option>
                          <option value='Maltese'>Maltese</option>
                          <option value='Maori'>Maori</option>
                          <option value='Marathi'>Marathi</option>
                          <option value='Mongolian'>Mongolian</option>
                          <option value='Nepali'>Nepali</option>
                          <option value='Norwegian'>Norwegian</option>
                          <option value='Persian'>Persian</option>
                          <option value='Polish'>Polish</option>
                          <option value='Portuguese'>Portuguese</option>
                          <option value='Punjabi'>Punjabi</option>
                          <option value='Quechua'>Quechua</option>
                          <option value='Romanian'>Romanian</option>
                          <option value='Russian'>Russian</option>
                          <option value='Samoan'>Samoan</option>
                          <option value='Serbian'>Serbian</option>
                          <option value='Slovak'>Slovak</option>
                          <option value='Slovenian'>Slovenian</option>
                          <option value='Spanish'>Spanish</option>
                          <option value='Swahili'>Swahili</option>
                          <option value='Swedish '>Swedish </option>
                          <option value='Tamil'>Tamil</option>
                          <option value='Tatar'>Tatar</option>
                          <option value='Telugu'>Telugu</option>
                          <option value='Thai'>Thai</option>
                          <option value='Tibetan'>Tibetan</option>
                          <option value='Tonga'>Tonga</option>
                          <option value='Turkish'>Turkish</option>
                          <option value='Ukrainian'>Ukrainian</option>
                          <option value='Urdu'>Urdu</option>
                          <option value='Uzbek'>Uzbek</option>
                          <option value='Vietnamese'>Vietnamese</option>
                          <option value='Welsh'>Welsh</option>
                          <option value='Xhosa'>Xhosa</option>
                        </select>
                        <label
                          className='form-label'
                          htmlFor='form3Example2'
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className='form-outline form-white mb-4'>
                    <textarea
                      onChange={e => handleData(e)}
                      name='comment'
                      id='form3Example3'
                      className='form-control form-control-lg tp'
                      form='usrform'
                      placeholder='Enter text here...'
                    />

                    <label
                      className='form-label'
                      htmlFor='form3Example3'
                    ></label>
                  </div>

                  <div className='form-check d-flex justify-content-center mb-4'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      value=''
                      id='form2Example3'
                    />
                    <label className='form-check-label' htmlFor='form2Example3'>
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button
                    onClick={() => create_Group()}
                    className='btn-block mb-4 button'
                  >
                    Create
                  </button>

                  <button
                    onClick={() => showModal()}
                    className='btn-block mb-4 lol'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    </div>
  )
}
