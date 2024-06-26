// import { useState } from "react"

// function Form(){
//     return(
//         <>
//           <form action="/action_page.php">
//     <div class="form-group">
//       <label for="email">Email:</label>
//       <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
//     </div>
//     <div class="form-group">
//       <label for="pwd">Password:</label>
//       <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
//     </div>
//     <div class="checkbox">
//       <label><input type="checkbox" name="remember"/> Remember me</label>
//     </div>
//     <button type="submit" class="btn btn-primary">Submit</button>
//   </form>
   
       
      
//         </>
//     )
// }
// export default Form



import React from "react";

function Form() {
    return (
        <form action="/action_page.php">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
            </div>
            <div className="checkbox">
                <label><input type="checkbox" name="remember" /> Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
