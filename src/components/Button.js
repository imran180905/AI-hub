import React from "react";

// eslint-disable-next-line no-undef
export default function Button(props){
    return(
        <div className="text-center mt-3">
            <button className="btn btn-accent">{props.children}</button>
        </div>
    );
}