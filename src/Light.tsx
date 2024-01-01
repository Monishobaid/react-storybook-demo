import React from "react";

type Props = {
    variant?:'green' | 'yellow' | 'red'
};

const Light = ({variant='yellow'}:Props)=>{
    return(
        <div style={{
            background:variant,
            borderRadius:"50%",
            width: "20px",
            height:"20px",
        }}>
        </div>
    )
}

export default Light;
