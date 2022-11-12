

import React from "react"
import DisplayInfo from "./DisplayInfo";
import Userinfo from "./Userinfor"

class MyCompunent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "hoi dan it", age: "30" },
            { id: 2, name: "mr john woh", age: "24" },
            { id: 3, name: "ms thena", age: "45" }
        ]
    }
    render() {

        return (
            <div>
                <Userinfo />
                <br></br>
                <DisplayInfo
                    listUser={this.state.listUser} />
            </div>
        );
    }
}
export default MyCompunent;