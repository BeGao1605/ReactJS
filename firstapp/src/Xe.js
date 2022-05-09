import React from "react";


class Xe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            value: props.value,
        }
        console.log('Xe constructor', this.state.color);
    }

    // static getDerivedStateFromProps(props){
    //     console.log("getDerivedStateFromProps", props.color);
    //     return {color: props.color}
    // }

    render() {
        console.log("Render", this.state.color);
        // console.log("Xe class: ", this.props.color, this.props.value);
        // this.setState({ color: this.props.color, value: this.props.value });

        return (
            <h3 style={{ color: this.state.color }}>
                Hi, {this.state.value}
            </h3>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({color: 'yellow'});
            console.log("componentDidMount đã thay đổi thành màu vàng", this.state.color);
        }, 3000)
    }
}

export default Xe;