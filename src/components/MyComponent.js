

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
    render() {

        return (
            <div>

                <AddUserinfor
                    handleAddNewUser={this.handleAddNewUser}
                />

                <br></br>
                <DisplayInfo
                    listUser={this.state.listUser}

                />
            </div>
        );
    }
}
export default MyCompunent;