import React from "react";

export default function Konyv(props) {
    return (
        <div className="konyv">
            <div className="adatok">
                <h3>Szerző: {props.konyv.szerzo}</h3>
                <h3>Cím: {props.konyv.cim}</h3>
                <h3>Ár: {props.konyv.ar}</h3>
            </div>
            <div className="hozzaadGomb">Hozzáad</div>
        </div>
    )
}