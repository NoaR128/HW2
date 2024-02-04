import { Component } from "react"

export default class CCForm extends Component {

    constructor(props) {

        super(props)
        this.name= this.props.name;
        this.state = { mes: " " , mes2: " "}

    }

    Inside = () => {
        this.setState({ mes: "Please enter " + this.name, mes2:"" })

    }

    Outside = (e) => {
        this.setState({ mes: "" })

        if (this.name == "Grade") {
           console.log(e.target.value)
           
            if(e.target.value > 555){
                this.setState({mes2: "You can enter the school"})
            }
            else if(e.target.value == ""){
                this.setState({mes2: " "})
            }
            else{
                this.setState({mes2: "You need to try again next year"})
            }
        }
    }


    render() {

        return (
            <>
                <p style={{ backgroundColor: "red"}}> {this.state.mes}</p> 
                {this.name}: <input type="text" onFocus={this.Inside} onBlur={this.Outside} style={{margin:5}}/>
                <p>{this.state.mes2}</p>
            </>

        )
    }
}