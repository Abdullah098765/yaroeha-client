import React from 'react'
import './card.css'

export default function Card ({ group }) {
  console.log(group)
  return (
    <div className='col item '>
      <div className='card'>
        <div className='card-contant'>
          <div className='nav'></div>
          <div className='content '>
            <div className='row'>
              <div className='owner'>
                <img
                  className='owner-img rounded-circle'
                  src={group.ownerData.photoURL}
                ></img>
                <br></br>
                <p className='text-light'>{group.ownerData.displayName}</p>
              </div>

              <div className='groupcontant'>
                <p className='groupName'>{group.groupName}</p>
                <p className='groupName'>English </p>
                <p className='groupDiscription'>{group.comment}</p>
                <button className='btn btn-Join'>Join Room</button>
              </div>
              <div className='memberlist'>
                <div className='row'>
                  <div className='col-2 text-light member'>
                    <img
                      className='rounded-circle memberImage col-1'
                      src='https://lh3.googleusercontent.com/a/ALm5wu3yDqTQweXHjg0dxmgrp5Crvt3cANi5z73yK6ijag=s96-c'
                    ></img>
                    <p className='memberName'>Sabir Ali</p>
                  </div>
                  <div className='col-2 text-light member'>
                    <img
                      className='rounded-circle memberImage col-1'
                      src='https://lh3.googleusercontent.com/a/ALm5wu3yDqTQweXHjg0dxmgrp5Crvt3cANi5z73yK6ijag=s96-c'
                    ></img>
                    <p className='memberName'>Sabir Ali</p>
                  </div>
                  <div className='col-2 text-light member'>
                    <img
                      className='rounded-circle memberImage col-1'
                      src='https://lh3.googleusercontent.com/a/ALm5wu3yDqTQweXHjg0dxmgrp5Crvt3cANi5z73yK6ijag=s96-c'
                    ></img>
                    <p className='memberName'>Sabir Ali</p>
                  </div>
                  <div className='col-2 text-light member'>
                    <img
                      className='rounded-circle memberImage col-1'
                      src='https://lh3.googleusercontent.com/a/ALm5wu3yDqTQweXHjg0dxmgrp5Crvt3cANi5z73yK6ijag=s96-c'
                    ></img>
                    <p className='memberName'>Sabir Ali</p>
                  </div>
                  <div className='col-2 text-light member'>
                    <img
                      className='rounded-circle memberImage col-1'
                      src='https://lh3.googleusercontent.com/a/ALm5wu3yDqTQweXHjg0dxmgrp5Crvt3cANi5z73yK6ijag=s96-c'
                    ></img>
                    <p className='memberName'>Sabir Ali</p>
                  </div>
                  <div className='col-2 text-light member'>
                    <img
                      className='rounded-circle memberImage col-1'
                      src='https://lh3.googleusercontent.com/a/ALm5wu3yDqTQweXHjg0dxmgrp5Crvt3cANi5z73yK6ijag=s96-c'
                    ></img>
                    <p className='memberName'>Sabir Ali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer'></div>
        </div>
      </div>
    </div>
    // <div className='item card-padding col'>
    //   {/* <div class='infocardContainer'>
    //     <div id='main'>
    //       <img src='https://lh3.googleusercontent.com/a-/AFdZucrSdXqN9ElYL4Fcfz5OeqjDS301TD6DRowKX8s5tA=s96-c'></img>
    //     </div>
    //     <div id='textbois'>
    //       <h2>Emil Alicic</h2>
    //       <h4>Professional Memeologist</h4>
    //       <a href='mailto:limecicila@gmail.com'>limecicila@gmail.com</a>
    //       <div id='hotlinks'>
    //         <a href='https://codepen.io/LIMESTA'>
    //           <img
    //             id='codepenio'
    //             src='https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png'
    //             target='_blank'
    //           ></img>
    //         </a>
    //         <a href='https://codepen.io/LIMESTA'>
    //           <img
    //             id='codepenio'
    //             src='https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png'
    //             target='_blank'
    //           ></img>
    //         </a>
    //         <a href='https://codepen.io/LIMESTA'>
    //           <img
    //             id='codepenio'
    //             src='https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png'
    //             target='_blank'
    //           ></img>
    //         </a>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
  )
}
