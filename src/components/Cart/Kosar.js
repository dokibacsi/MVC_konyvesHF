import React from "react"
import KosarElem from "./KosarElem"
import UresKosar from "./UresKosar"

export default function Kosar(props) {
    return (
        <React.Fragment>
            <p>Kosárban {props.list.length} elem található.</p>
        {
            props.list.map((elem, index) => {
                if(props.list.length === 0){return(<UresKosar/>) }
                
                else{return (<KosarElem kosarelem = {elem} key = {index}/>)}
            })
        }
        </React.Fragment>


    )
}