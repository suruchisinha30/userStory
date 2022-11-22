import React from 'react'
import './Side.css'

import {JsonToExcel} from "react-json-to-excel"

const SideComponent=(props)=>{

        const dataToExport=require('./SideDta.json');

        
    
        return(
                <div id="main">
      <div id="a1">
          <div className="right">
        <h3 className="story">[Tax Rate List Name]</h3>
        <div className="last">Last Modified on 18-11-2022 </div>
         <div className="change"> View Change Log</div>

        <div class="row">
                 <div class="col">
                         <div id="a3"> TAX RATE 
                        </div> </div>
        <div class="col">
                        <div id="a4"> STATE/PROVINCES
                        </div>
        </div>
        </div>
        </div>

        <br></br>
        <div class="row">
                <div class="col">
                        <input id="search1" type="text" placeholder= "Search"/>
                </div>

        <div class="col">
                <input id="search2" type="text" placeholder="Search" />
        </div>  
        
        </div>

        {
            console.log(dataToExport)
        }
            <JsonToExcel
            title="Download.xls"
            data={dataToExport.taxrates}
            fileName="Data"
            btnClassName="down" />

        {/* <button className="down" onClick={handleSubmit}>Click me</button> */}

        
        {/* { <button className="down" onClick={function(){
            alert("buton has been pressed..")
            console.log("suoiupoiuoiu")
        }}>Download.xls</button> } */}




            <div id ="container">
                <table className="table table-bordered table-striped">
                    <thead></thead>
                    <tbody>            
                    {
                            
                        dataToExport.taxrates.map(middle=>
                               
                        <tr>

                           <td>{middle.first}</td>
                            <td>{middle.second}</td>
                        </tr>


                        )
                        }

                        
                    </tbody>
                </table>
            </div>
            </div>
            </div>

            
            
            
        )

    }

    export default SideComponent;
    
    
