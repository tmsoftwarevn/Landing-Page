
import React from "react";
class Userinfo extends React.Component {
    state = {
        name: 'HaryPhamDev',
        address: 'Hoi dan it',
        age: 26
    }

    handleOnChange = (event) => {
        //event.target.value = this.state.name
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm  {this.state.age}

                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name</label>
                    <input type="text"
                        onChange={(event) => { this.handleOnChange(event) }}
                    />
                    <label>Your age</label>
                    <input type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />
                    <button>summit </button>
                </form>
            </div>
        )
    }
}
export default Userinfo;