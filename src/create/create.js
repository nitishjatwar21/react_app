import React, { Component } from 'react';
import '../App.css';
import { Button, Form ,FormGroup ,Label, Input,Nav } from 'reactstrap';
import $ from 'jquery';
import UniqueId from 'react-html-id';
import Sidebar from '../side';

// var kreate = (val1, val2) => {
//     console.log("hkiknnljk");
//     var data2 ={"eventName": val1, "eventVenue": val2}
//     $.ajax({
//        type: "POST",
//        data: JSON.stringify(data2),
//        url: "http://localhost:3000/events",
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        async: true,
//        success: function (msg) {
//            alert("Your DATA is sucessfully updated")
                               
                                                      
//            }
//    });
// }

class create extends Component {
    constructor() {
        super();
        this.state = {
            eveNam: null,
            eveVen: null
        };

        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    kreate (val1, val2) {
        console.log("hkiknnljk");
        var data2 ={"eventName": val1, "eventVenue": val2}
        $.ajax({
           type: "POST",
           data: JSON.stringify(data2),
           url: "http://localhost:3000/events",
           contentType: 'application/json; charset=utf-8',
           dataType: 'json',
           async: true,
           success: function (msg) {
               alert("Your DATA is sucessfully updated")
                                   
                                                          
               }
       });
    }

    handleChange ({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    publish() {
        console.log( this.state.eveNam, this.state.eveVen );
    }


   

    render(){
        return(
            // <div>
            //     <input type="text" name="eveNam" placeholder="eventName" value={ this.state.eveNam } onChange={ this.handleChange }/>
            //     <input type="text" name="eveVen" placeholder="eventVenue" value={ this.state.eveVen } onChange={ this.handleChange }/>
            //     <button onClick={this.kreate.bind(this, this.state.eveNam , this.state.eveVen )}>Submit</button>
            // </div>
            <div>
                <Sidebar/>
                <Form className="login-form">
                <h1>CREATE PAGE</h1>
                <div className="form-group">
                    <Label>Event Name</Label><br/>
                    <input className="form-control" type="text" name="eveNam" placeholder="eventName" value={ this.state.eveNam } onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                    <Label>Event Venue</Label><br/>
                    <input className="form-control" type="text" name="eveVen" placeholder="eventVenue" value={ this.state.eveVen } onChange={ this.handleChange }/>
                </div>
                <div className="form-group">
                <button className="btn-lg btn-dark btn-block" onClick={this.kreate.bind(this, this.state.eveNam , this.state.eveVen )}>Submit</button>
                </div>
                {/* <a className="btn-lg btn-dark btn-block" href="/logout/">Log In</a> */}
                
                </Form>
            </div>
        )
    }
}
export default create;