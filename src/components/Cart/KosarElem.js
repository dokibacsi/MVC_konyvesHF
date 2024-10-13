export default function KosarElem(props){
    return(
        <div className="kosarElem">
            <div>
                <h3>Szerző: {props.konyv.szerzo}</h3>
                <h3>Cím: {props.konyv.cim}</h3>
            </div>
        </div>

    )
}