import { Link } from 'react-router-dom';
import '../App.css';


function SelectHostel(){
    return (
    <>
    <h1 style={{textAlign: "center", marginTop:'100px'}}>Choose Your Hostel</h1>
    <div className="select">
        <Link to="/selecthostel-wing/girls">
            <div className="girls">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwInl7EeKG-bICwQlqlzrceksbUhbwwHWAw&usqp=CAU" alt="girl icon" />
            </div>
        </Link>
        <Link to="/selecthostel-wing/boys">
            <div className="boys">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqQLPRZLrKRUuW8k9zQyQTFvTsPYV9s1r-A&usqp=CAU" alt="boy icon" />
            </div>
        </Link>
    </div>
    </>);
}

export default SelectHostel;