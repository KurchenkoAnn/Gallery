import React, { Component } from 'react';

import axios from 'axios';



class Gallary extends Component {
    state = { 
        loading:true
     }

componentDidMount(){
         const url ='localhost:100/API/test.php';
        axios.get(url).then(
            (res)=>{
              console.log(res.data);
               
            },
            
            (err)=>{
                console.log('Error upload data------',err.response.data);
            }
        );

         
     }

     render(){
         return(
             <h1>Hello</h1>
         );
     }
}
export default Gallary;