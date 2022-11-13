
import React, { useState } from "react";
// class AddUserinfo extends React.Component {
//     state = {
//         name: '',
//         address: 'Hoi dan it',
//         age: ""
//     }

//     handleOnChange = (event) => {
//         //event.target.value = this.state.name
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         // console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + 'random',
//             name: this.state.name,
//             age: this.state.age
//         })

//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and i'm  {this.state.age}

//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Your name</label>
//                     <input type="text"
//                         onChange={(event) => { this.handleOnChange(event) }}
//                     />
//                     <label>Your age</label>
//                     <input type="text"
//                         onChange={(event) => { this.handleOnChangeAge(event) }}
//                     />
//                     <button>summit </button>
//                 </form>
//             </div>
//         )
//     }
// }
const AddUserinfo = (props) => {
    const [userInfo, setUserInfo] = useState({ id: "00", name: 'qwer', age: '00' })
    const handleOnChangeName = (event) => {
        setUserInfo({ name: event.target.value })
    }
    const handleOnChangeAge = (event) => {
        setUserInfo({ age: event.target.value })
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: userInfo.name,
            age: userInfo.age
        })
    }

    return (
        <div>
            id : {userInfo.id}
            My name is {userInfo.name} and i'm  {userInfo.age}

            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name</label>
                <input type="text"
                    onChange={(event) => { handleOnChangeName(event) }}
                />
                <label>Your age</label>
                <input type="text"
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <button>summit </button>
            </form>
        </div>
    )
}
export default AddUserinfo;