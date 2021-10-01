import React from  'react';
import Link from 'next/link';
const NavBar =() => {
    
    return(

        <>
           <div className="main-container">
               <div className="nav">
               <div className="left">
                   <h1 style={{marginLeft:"3rem", fontSize:"1.5rem"}}>Well Come</h1>
               </div>
               
               <div className="right">
                <div>
               <Link href="/">
                 <a style={{textDecoration:"none", color:"white"}}>Home</a>
               </Link>
               </div>
               <div>
               <Link href="/PageOne">
                <a style={{textDecoration:"none", color:"white"}}>About</a>
                </Link>
               </div>
               <div>
               <Link href="/PageTwo">
                 <a style={{textDecoration:"none", color:"white"}}>Details</a>
               </Link>
               </div>
              </div>
         </div>
         </div>
        </>
    )
}


export default NavBar;