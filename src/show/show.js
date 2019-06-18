import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import Sidebar from '../side';

const dat = (
    <div className="main">
                <Sidebar />
                <table id="table21" style={{marginLeft: '12%', marginTop: '0%'}}>
 		
                    <tr>
                        <th style={{textAlign: '30%'}}>Id</th>
                        <th style={{extAlign: '30%'}}>Event Name</th>
                        <th style={{texAlign: '30%'}}>Event Venue</th>
                    </tr>

                    
                </table>
                {/* {this.calldata.bind(this)} */}
            </div>
)

class show extends Component{
    componentDidMount(){
        console.log("jkgjs")
        $(document).ready(function(){
            $.getJSON("http://localhost:3000/events",function(data){
                var data21 ='';
                var id = 0;
                
                $.each(data,function(key,value){
                    id = value.id+1;
                    
                    data21 += '<tr>';
                    data21 += '<td>'+id+'</td>';
                    data21 += '<td>'+value.eventName+'</td>';
                    data21 += '<td>'+value.eventVenue+'</td>';
                    // data21 += '<td><input id="inp" value='+value.id+' type="button"></td>';
                    // data21 += '<td><button type="submit" onclick="calc(inp.value)">submit</button></td>';
                    data21 += '</tr>';
                });
                $('#table21').append(data21);

            });
        });
    }
    
        
    

    render(){
        return(
            dat
        )
    }
}

export default show;