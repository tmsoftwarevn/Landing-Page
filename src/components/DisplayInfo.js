
import React, { useState } from "react";
import './DisplayInfo.scss'
//import logo from './../logo.svg'
// class DisplayInfo extends React.Component {

//     render() {
//         const { listUser } = this.props
//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <>
//                         {
//                             listUser.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <hr></hr>
//                                         <div>
//                                             <div>My name is {user.name}</div>
//                                             <div>My age is {user.age}</div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => this.handleDeleteUser(user.id)}>delete</button>
//                                         </div>
//                                     </div>

//                                 )
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const [isShowListUser, setShowListUser] = useState(true)

    const handleShowListUser = () => {
        setShowListUser(!isShowListUser)
    }
    const { listUser } = props

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => { handleShowListUser() }}>
                    {isShowListUser ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowListUser &&       //neu dk dung thi in ra ma hinh "<div>"
                <>
                    {
                        listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <hr></hr>
                                    <div>
                                        <div>my id is: {user.id}</div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}
export default DisplayInfo