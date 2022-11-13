

import React from "react"
import DisplayInfo from "./DisplayInfo";
import AddUserinfor from "./AddUserinfor"

class MyCompunent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "mr john woh", age: "24" },
            { id: 3, name: "ms thena", age: "45" }
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(userObj)
        this.setState({
            listUser: [...this.state.listUser, userObj]
        })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser]
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUserClone
        })
    }
    render() {

        return (
            <>
                <AddUserinfor
                    handleAddNewUser={this.handleAddNewUser}
                />

                <br></br>
                <DisplayInfo
                    listUser={this.state.listUser}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        );
    }
}
export default MyCompunent;