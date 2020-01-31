import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Button from "@material-ui/core/Button";
import TextField from 'material-ui/TextField';
import "./Crusher.css";
import Typography from "@material-ui/core/Typography";
const VEHICLE_PATTERN = "(([A-Za-z]){2,2}(|-)(?:[0-9]){2}(|-)(?:[A-Za-z]){1,2}(|-)([0-9]){4})";
const PHONE_PATTERN= "/^[7-9][0-9]{9}$";
const DRIVERNAME_PATTERN="/^[A-Za-z]+$/";

class DAYIN extends Component {
  constructor(props){
    super(props);
    
      this.myRef = React.createRef();
          this.state = {
               vehicleNumber: "",
               driverName:"",
               mobileNumber:"",
               driverPicture:"",
               documnets:"",
          
    }
  }
  vehiclenumber = (e) => {
    // e.stopPropagation();
     this.setState({
          vehicleNumber:e.target.value,
         
     },
     ()=>{

          this.vehiclenumbervalidate(this.state.vehicleNumber,VEHICLE_PATTERN);
     });
}
vehiclenumbervalidate(num, pattern) {
     console.log("hi")
     if (num.match(pattern) && (num.length === 10 || num.length === 9)) {
          console.log(true);
          return true;
     } else {
          console.log("preakrithi", false);
          return false;
     }   
    }      
    phonenumber = (e) => {
      // e.stopPropagation();
       this.setState({
            mobileNumber:e.target.value,
           
       },
       ()=>{
  
            this.phonenumbervalidate(this.state.mobileNumber,PHONE_PATTERN);
       });
  }
  phonenumbervalidate(num, pattern) {
       console.log("hi")
       if (num.match(pattern) ) {
            console.log(true);
            return true;
       } else {
            console.log("preakrithi", false);
            return false;
       }   
      }    
      
      driverName = (e) => {
        // e.stopPropagation();
         this.setState({
          driverName:e.target.value,
             
         },
         ()=>{
    
              this.driverNamevalidate(this.state.driverName,DRIVERNAME_PATTERN);
         });
    }
    driverNamevalidate(name, pattern) {
         console.log("hi")
         if (name.match(pattern) ) {
              console.log(true);
              return true;
         } else {
              console.log("preakrithi", false);
              return false;
         }   
        }      
  render() {
    return (
     
        <div className={"space"}>
        <Typography >Vehicle Registration Page</Typography>
       
        <MuiThemeProvider>
          <div className={"border"}>
         
           <TextField
             hintText="Enter Vehicle number"
             floatingLabelText=" Vehicle number"
             
             //value={this.state.vehicleNumber}
             onKeyUp={this.vehiclenumber}
             className={"textField"}
             fullWidth
             
             />
           <br/>
           <TextField
             hintText="Enter Driver Name"
             floatingLabelText=" Driver Name"
             type="text"
            //value={this.state.driverName}
             onKeyUp={this.driverName}
             className={"textField"}
             fullWidth
             
             />
           <br/>
           <TextField
             hintText="Enter Mobile Number"
             floatingLabelText=" Mobile Number"
             type="text"
             //value={this.state.mobileNumber}
             onKeyUp={this.phonenumber}
             className={"textField"}
             fullWidth
             
             />
           <br/>
           <TextField
             hintText="Enter Driver Picture"
             floatingLabelText=" Driver Picture"
             type="file"
             //value={this.state.driverPicture}
             onKeyUp={this.phonenumber}
             className={"textField"}
             fullWidth
             
             />
           <br/>
           <TextField
             hintText="Enter Documents"
             floatingLabelText=" Documents"
             type="file"
             //value={this.state.documents}
             onKeyUp={this.handleKeyUp}
             className={"textField"}
             fullWidth
             
             />
           <br/>
           <Button variant="contained" color="primary" className={"button"}>Register</Button>
            
          
           </div>
         
         </MuiThemeProvider>
      </div>
    );
  }
}

export default DAYIN;