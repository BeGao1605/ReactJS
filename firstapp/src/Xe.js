import React from "react";


class Xe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            value: props.value,
        }
        console.log('this', this);
        // this.shoot = this.shoot.bind(this);
    }

    // static getDerivedStateFromProps(props){
    //     console.log("getDerivedStateFromProps", props.color);
    //     return {color: props.color}
    // }

    shoot() {
        console.log("shoot this = ", this);
        // alert('Great Shot!');
    }

    shoot2 = (a) => {
        console.log("shoot 2 this = ", this);
        console.log("shoot2 a = ", a);
    }

    shoot3 = (b) => {
        // console.log("shoot2 this = ", this);
        console.log("shoot 3 a = ", b);
    }
    
    render() {
        console.log("Render", this.state.color);
        // console.log("Xe class: ", this.props.color, this.props.value);
        // this.setState({ color: this.props.color, value: this.props.value });

        // return (
        //     <h3 onClick={() => this.shoot2('abc')} style={{ color: this.state.color, cursor: "pointer" }}>
        //         Hi, {this.state.value}
        //     </h3>
        // )

        const shoot = (
            <h3 onClick={this.shoot} style={{ color: this.state.color, cursor: "pointer" }}>
                Hi, {this.state.value}
            </h3>
        );

        const shoot2 = (
            <h3 onClick={() => this.shoot2.bind(this, "Goal A")} style={{ color: this.state.color, cursor: "pointer" }}>
                Hi, {this.state.value}
            </h3>
        );

        const shoot3 = (
            <h3 onClick={() => this.shoot3('abc')} style={{ color: this.state.color, cursor: "pointer" }}>
                Hi, {this.state.value}
            </h3>
        );

        return shoot
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    //     setTimeout(() => {
    //         this.setState({color: 'yellow'});
    //         console.log("componentDidMount đã thay đổi thành màu vàng", this.state.color);
    //     }, 3000)
    // }
}

export default Xe;