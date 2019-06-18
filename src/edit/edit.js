import React, { Component } from 'react';
import '../App.css';
import { Button, Form ,FormGroup ,Label, Input,Nav } from 'reactstrap';
import $ from 'jquery';
import Sidebar from '../side';

const da =(
    <div className="main">
            <Sidebar />
                 <table id="table01" style={{marginLeft: '15%', marginTop: '0%'}}>
 		
                     <tr>
                         <th style={{marginLeft: '50%'}}>S.No.</th>
                         <th style={{marginLeft: '50%'}}>Event Name</th>
                         <th style={{marginLeft: '50%'}}>Event Venue</th>
                         <th style={{marginLeft: '50%'}}>CLICK FOR UPDATE</th>
                     </tr>

                    
                 </table>
                
             </div>
)

function calc(id){
    console.log("hkiknnljk");
    
    $.ajax({
       type: "PUT",
       url: "http://localhost:3000/events/"+id,
       contentType: 'application/json; charset=utf-8',
       dataType: 'json',
       async: true,
       success: function (msg) {
           alert("Your DATA is sucessfully deleted")
                               
                                                      
           }
   });
}



            console.log("jkgjs")
            $(document).ready(function(){
                $.getJSON("http://localhost:3000/events",function(data){
                    var data01 ='';
                    var id = 0;
                    
                    $.each(data,function(key,value){
                        id = value.id+1;
                        
                        data01 += '<tr>';
                        data01 += '<td>'+id+'</td>';
                        data01 += '<td>'+value.eventName+'</td>';
                        data01 += '<td>'+value.eventVenue+'</td>';
                        data01 += '<td><button className="Button btn-sm btn-primary btn-block" name='+value.id+' > UPDATE </button</td>';
                        // data11 += '<td><input id="inp" value='+value.id+' type="button" onClick={this.calc.bind(this, this.value)} ></td>';
                        // data11 += '<td><button type="submit" onclick="calc(inp.value)">submit</button></td>';
                        data01 += '</tr>';
                    });
                    $('#table01').append(data01);
    
                });
            });
    
class edit extends Component{
    render(){
        return(
            da
        )
    }
}

export default edit;
// const calc = (id) => {
//     console.log("hkiknnljk");
         
//          $.ajax({
//             type: "DELETE",
//             url: "http://localhost:3000/events/"+id,
//             contentType: 'application/json; charset=utf-8',
//             dataType: 'json',
//             async: true,
//             success: function (msg) {
//                 alert("Your DATA is sucessfully deleted")
                                    
                                                           
//                 }
//         });
// }

// class del extends Component{


//     calc = (id) => {
//             console.log("hkiknnljk");
                 
//                  $.ajax({
//                     type: "DELETE",
//                     url: "http://localhost:3000/events/"+id,
//                     contentType: 'application/json; charset=utf-8',
//                     dataType: 'json',
//                     async: true,
//                     success: function (msg) {
//                         alert("Your DATA is sucessfully deleted")
                                            
                                                                   
//                         }
//                 });
//         }

//     componentDidMount(){
//         console.log("jkgjs")
//         $(document).ready(function(){
//             $.getJSON("http://localhost:3000/events",function(data){
//                 var data21 ='';
//                 var id = '';
                
//                 $.each(data,function(key,value){
//                     id = value.id;
                    
//                     data21 += '<tr>';
//                     data21 += '<td>'+value.id+'</td>';
//                     data21 += '<td>'+value.eventName+'</td>';
//                     data21 += '<td>'+value.eventVenue+'</td>';
//                     data21 += '<td><button name='+value.id+' onClick={this.calc.bind(this, this.name)}>DELETE</button</td>';
//                     // data21 += '<td><input id="inp" value='+value.id+' type="button" onClick={this.calc.bind(this, this.value)} ></td>';
//                     // data21 += '<td><button type="submit" onclick="calc(inp.value)">submit</button></td>';
//                     data21 += '</tr>';
//                 });
//                 $('#table11').append(data21);

//             });
//         });
//     }
    
        
    

//     render(){
//         return(
//             <div>
                
//                 <table id="table11" style={{marginLeft: '15%', marginTop: '10%'}}>
 		
//                     <tr>
//                         <th style={{marginLeft: '50%'}}>S.No.</th>
//                         <th style={{marginLeft: '50%'}}>Event Name</th>
//                         <th style={{marginLeft: '50%'}}>Event Venue</th>
//                     </tr>

                    
//                 </table>
                
//             </div>
//         )
//     }
// }

// export default del;