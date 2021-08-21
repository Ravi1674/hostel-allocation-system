import '../App.css';
import firebase from "firebase";

function UserBook(props){
    const {name} = props;
    return(
    <div className="showBox">
    <div className="bookBox">

        <h1 style={{textAlign: 'center'}}>Welcome {name}</h1>

        <p>You have already booked a room.</p>
        <h3>Your room details are as follows : </h3>
        <div style={{padding:'0px 0px'}}>
            <p>Hostel No.</p>
            <p>Room No. </p>
        </div>
    </div>
    </div>
    );
}

export default UserBook;