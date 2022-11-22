import React from "react"

export const Buttons =({ children,type,onClick}) => {

    return(
        <button onClick = {onClick} type={type}>
            {children}
        </button>
    )
};



export default Buttons;