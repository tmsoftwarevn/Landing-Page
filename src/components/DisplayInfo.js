
import React from "react";
import './DisplayInfo.scss'
//import logo from './../logo.svg'
class DisplayInfo extends React.Component {
    constructor(props) {
        console.log('call contructor : 1')
        super(props);
        this.state = {
            isShowListUser: true
        }
    }
    componentDidMount() {
        console.log('call me component did mount')
        setTimeout(() => {
            document.title = "reactjs for beginer"
        }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("call me component did update", this.props, prevProps)
    }


    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    handleDeleteUser = (userId) => {
        this.props.handleDeleteUser(userId)
    }
    render() {
        const { listUser } = this.props
        console.log('call me render')
        return (

            <div className="display-info-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{
                        this.state.isShowListUser === true ? "Hide list user" : "Show List user"
                    }
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {
                            listUser.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <hr></hr>
                                        <div>
                                            <div>My name is {user.name}</div>
                                            <div>My age is {user.age}</div>
                                        </div>
                                        <div>
                                            <button onClick={() => this.handleDeleteUser(user.id)}>delete</button>
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
}
export default DisplayInfo