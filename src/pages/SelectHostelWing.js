import { Redirect, useParams } from 'react-router-dom';
import '../App.css';
import {useState} from 'react';

function SelectHostelWing(){
    let {gender} = useParams();
    let [url, setUrl] = useState("");
    console.log(gender);

    
    if(url){
        let targetUrl = `/selecthostel-floor/${url}`;
        return <Redirect to={targetUrl} />
    }
    console.log(url);
    return (
        <>
        <h1 style={{textAlign: "center", marginTop:'100px'}}>Choose A Wing</h1>
        <div className="hostelWing"
            onClick = { (event) =>{
                if(event.target.id){
                    setUrl(gender === "girls" ? 'G' : 'B' + event.target.id);
                    
                    // <Redirect to={`/selecthostel-floor/${targetUrl}`} />
                    // return <Redirect to="/selecthostel-floor/b4" />
                }
            }}
        >
        <div id="1">
            <h3>{gender==="girls"?'G':'B'}1</h3>
        </div>
        <div id="2">
            <h3>{gender==="girls"?'G':'B'}2</h3>
        </div>
        <div id="3">
            <h3>{gender==="girls"?'G':'B'}3</h3>
        </div>
        <div id="6">
            <h3>{gender==="girls"?'G':'B'}6</h3>
        </div>
        <div id="5">
            <h3>{gender==="girls"?'G':'B'}5</h3>
        </div>
        <div id="4">
            <h3>{gender==="girls"?'G':'B'}4</h3>
        </div>
    </div>
    </>);
}

export default SelectHostelWing;