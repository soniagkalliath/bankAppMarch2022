import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  accnum="Account Number Plaease!!!"
  acno=""
  pswd=""

  //database
  database:any = {
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
    1001:{acno:1001,uname:"Laisha",password:1001,balance:3000},
    1002:{acno:1002,uname:"Vyom",password:1002,balance:4000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
this.acno = event.target.value
console.log(this.acno)
  }

  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(this.pswd)
      }

 //login - using event binding/ two way binding
  login(){
   //user entered acno n pswd
  
   var acno = this.acno
   console.log(acno)
   
   var pswd = this.pswd

   let database = this.database

   if(acno in database){

    if(pswd == database[acno]["password"]){

      alert("Login successful!!!!")
    }
    else{
      alert("Incorrect password!!!")
    }

   }
   else{
     alert("User doesnot exist!!!!")
   }
  }

//login - using template refencing variable
// login(a:any,p:any){

//   console.log(a.value)

//   //user entered acno n pswd
//   var acno = a.value
//   var pswd = p.value

//   let database = this.database

//   if(acno in database){

//    if(pswd == database[acno]["password"]){

//      alert("Login successful!!!!")
//    }
//    else{
//      alert("Incorrect password!!!")
//    }

//   }
//   else{
//     alert("User doesnot exist!!!!")
//   }
//  }


}
