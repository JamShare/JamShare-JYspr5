import React, { useEffect, useState, useRef } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import image2 from './assets/images/record.png'
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";

// let { state: {sessionID, guest}} = {}  = useLocation(); //gets the variable we passed from navigate

const io = require('socket.io-client');
const SERVER = "http://localhost:3001"; 
const socket = io.connect(SERVER);

// class Participants extends React.Component {
function Participants() {
    let { state: {sessionID, guest}} = {} = useLocation(); //gets the variable we passed from navigate
    const[users,setUsers] = useState([guest, "test", "test0", "test0", "test0", "test0", "test0", "test0", "test0"
    , "test0", "test0", "test0", "test0", "test0", "test0", "test0", "test0", "test0", "test0", "test0", "test0"]);
    const[host,setHost] = useState(true);
    // const[index, setIndex] = useState(0);


    // console.log(users);
    // let temparray = users;
    // temp.splice(0,5,"zach");
    // console.log(temp);

    //for component extending react
    // setUsers({temp});
        // constructor(props) {
        //     super(props);
    
        //     this.state = {
        //         participants: ['jammer1', 'jammer2', 'jammer3', 'jammer4', 'jammer5'],
        //         host: true,
        //     };
            
            // this.participants = ['jammer1', 'jammer2', 'jammer3', 'jammer4', 'jammer5'];
        //     this.socket = io.connect(SERVER); 
        
        
        socket.on("participants", (usernames) => {
            console.log("user order update");
            this.setState({participants:usernames});//this is where it actually gets updated
            if(this.socket.id == usernames[0].socketID)
                this.setState({host:true});
            else 
                this.setState({host:false});
        });
            
        // };

        const up = (i) => {
            console.log(i);
            var temparray = users;

            if(i > 0)
                var tempuser = temparray[i-1];
            else
                return;
            
            console.log(tempuser);    
            console.log(temparray);

            temparray.splice(i-1, 1, temparray[i]);
            
            console.log(temparray);
            
            temparray.splice(i,1,tempuser);

            console.log(temparray);

            // setUsers({temparray});

            console.log(temparray);

            // this.socket.emit('participants-order', {temparray, sessionID});
        }

        function down(i)
        {
            console.log(i);
            // var temp = this.state.participants[i+1];
            // this.state.participants.splice(i+1, 1, this.state.participants[i]);
            // this.state.participants.splice(i,1,temp);
        }    

    // render() {
        return (
            <div className="userblock">
                {users.map((r, i) => (
                    <div className="ProjectSectionBlock">
                        <div className="UserComponentList RoomComponentList"  key={i}>
                            <img className="round" src={image2} width="50" height="50"alt=" UserImage "></img>
                            {/* {{host} ? <p>host</p> :<></>} */}
                            {r}
                            {{host} ? <>
                                <Button className="up" onClick={()=>{up(i)}}>UP</Button>
                                <Button className="down" onClick={()=>{down(i)}}>DN</Button>
                            </>:<></>}
                        </div>
                    </div>
                ))}
            </div>
        );
    // }
}

export default Participants;