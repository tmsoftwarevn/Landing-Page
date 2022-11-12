
import React from "react";
class DisplayInfo extends React.Component {
    render() {
        const { listUser } = this.props
        console.log(listUser)
        return (
            <div>
                {
                    listUser.map((user) => {
                        return (
                            <div key={user.id}>
                                <hr></hr>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default DisplayInfo