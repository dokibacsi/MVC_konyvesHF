import React from "react";
import NavElem from "./NavElem";

export default function Navigation(props){
    return(
        <React.Fragment>
            <ul>
                {props.list.map((elem, index) => { return(<NavElem elem={elem} key={index}/>) })}
            </ul>
        </React.Fragment>
    )
}