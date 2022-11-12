
import React from "react";
import './DisplayInfo.scss'
class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUser } = this.props
        console.log(listUser)
        return (
            <div className="display-info-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{
                        this.state.isShowListUser === true ? "Hide list user" : "Show List user"
                    }
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>

                        {
                            listUser.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <hr></hr>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfo