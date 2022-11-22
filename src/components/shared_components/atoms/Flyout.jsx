import React from 'react'

 import './Flyout.css'

 import data from './UserData.json'

export default function Flyout() {

  return (

    <div >

      

      <div className="editborder">

        <div>

          <input  

            id="editsearchbox"

            placeholder="&nbsp;&nbsp;Search by Name" 

          />

        </div>

        <div id="edittext">

          {

            data.map((user)=>(

              <>

             

                <a id="atag" href="/dj">

                <div id="edittextfield">

                  {user.name}

                  </div>

                </a>

              </>

            ))

          }

       </div>

    </div>

    </div>

  )

}