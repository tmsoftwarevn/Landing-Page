

import React from "react"
class MyCompunent extends React.Component {

    state = {
        name: 'Eric',
        address: 'Hoi dan it',
        age: 26
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}

            </div>
        );
    }
}
export default MyCompunent;