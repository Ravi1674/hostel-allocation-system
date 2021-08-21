import '../App.css';
import {useState} from "react";
import Modal from "react-modal";
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Modal.setAppElement("#root");

let roomNo = "";
let hostelname = "";

function SelectHostelFloor () {
    const [floor, setFloor] =useState("");
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const {floorNo} = useParams();
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // hostelname = queryParams.get("hostelname");

    console.log({hostelname});
    
    function showModal() {
        setIsOpen(!isOpen);
      }
    
      const color = (event) => {
        
        setCount(0);
        event.target.classList.toggle("grey");
    
        console.log(event.target.className);
        if (event.target.className === "roomNo grey") {
          setCount(1);
          
          
    
          console.log(roomNo+" "+{hostelname});

          roomNo = event.target.innerText;
        }
      };

    return(
        <>
            <h1 style={{textAlign: "center", marginTop:'100px'}}>Choose A Floor</h1>
            <div className="selectFloor">
                <select className="floorDrop"
                    onChange={(event) => {
                        setFloor(event.target.value);
                    }}
                >
                    <option value="1">1st Floor</option>
                    <option value="2">2nd Floor</option>
                    <option value="3">3rd Floor</option>
                    <option value="4">4th Floor</option>
                    <option value="5">5th Floor</option>
                </select>
                <div className="roomBox">
                    <div className="roomSelection">
                        <button className="roomNo" onClick={color}>1</button>
                        <button className="roomNo" onClick={color}>2</button>
                        <button className="roomNo" onClick={color}>3</button>
                        <button className="roomNo" onClick={color}>4</button>
                        <button className="roomNo" onClick={color}>10</button>
                        <button className="roomNo hide"></button>
                        <button className="roomNo hide"></button>
                        <button className="roomNo" onClick={color}>5</button>
                        <button className="roomNo" onClick={color}>9</button>
                        <button className="roomNo" onClick={color}>8</button>
                        <button className="roomNo" onClick={color}>7</button>
                        <button className="roomNo" onClick={color}>6</button>
                    </div>
                </div>
                <div>
        <button
          
          className={count?"bookRoom":"bookRoom hide" }      
          onClick={showModal}
        >
          Book Room
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={showModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <div className="container-modal">
            
            <FontAwesomeIcon onClick={showModal} icon={faTimesCircle}  style={{ display:"inline",color:"red",fontSize:"2rem", border:"1px solid white", borderRadius:'50%',cursor:'pointer'}} />
          
            
            <h1 style={{margin:"auto"}} >Success  </h1>
          </div>
          <div className="modal">
          <div style={{ textAlign: "center" }}>
            <h2>Your room has been booked successfully.</h2>
          </div>
          <div style={{ marginTop:"2rem", marginLeft:"", fontWeight:'normal' }}>
            Your room details are as follows:
          </div>
          <div style={{ marginTop: 20, fontWeight:'bolder' }}>
            Hostel No. <span style={{color:"red"}}>{floorNo}</span>
          </div>
          <div style={{ marginTop: 10, fontWeight:'bolder' }}>Room No. <span style={{color:"red"}}>{roomNo}</span></div>
          </div>
        </div>
      </Modal>
    </div>
        
        </>
    );
}

export default SelectHostelFloor;