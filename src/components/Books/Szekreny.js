import Konyv from "./Konyv";
import React from "react"

export default function Szekreny(props) {
        return(
        <React.Fragment>
             <div className="konyvesSzekreny">
                {props.list.map((elem, index) => {
                    return(<Konyv konyv={elem} key={index}/>)
                })}
             </div>
        </React.Fragment>
    )
}