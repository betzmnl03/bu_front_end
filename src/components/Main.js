import React from "react";
import CartShowPage from "./CartShowPage";


const Main = (props) => {
    

    
    return (
        <CartShowPage user={props.user} remove={props.remove} cart={props.cart} removeAll={props.removeAll} history={props.history}/>
    )
                      
                  

}

export default Main;