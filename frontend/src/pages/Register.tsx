import React, { SyntheticEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';



const Register = () =>{

     const[name, setname] = useState('');
     const[email, setEmail] = useState('');
     const[password, setPass] = useState('');


     const submit = async (e: SyntheticEvent) => {
          e.preventDefault();

          await fetch('http://localhost:8000/api/register', {
               method:'POST',
               headers: {'Content-Type': 'application/json'}, 
               body: JSON.stringify({
                    name,
                    email,
                    password
               })
          });
          
     }


     return(
          <form>
               <h1 className="h3 mb-3 fw-normal">Please Register</h1>

               <input type="name" className="form-control" id="floatingInput" placeholder="Name"/>
               <br />
               <input type="emailID" className="form-control" id="floatingInput" placeholder="example@napptive.com"/>
               <br />
               <input type="passwd" className="form-control" id="floatingInput" placeholder="Password"/>
               <br />
               <input type="passwd" className="form-control" id="floatingInput" placeholder="Confirm Password"/>
               <br/>

               <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
          </form>
     );
};

export default Register;


