import { Component } from "react";

export default class Q1 extends Component{
    constructor(props){
        super(props)
        this.state ={ backgroundColor:"white"}
    }
    btnBackColor=(e)=>{
        this.setState({ backgroundColor: e.target.value });
    }
    render(){
        return(
            <div style={{border:"2px solid black", borderRadius:20 , backgroundColor:this.state.backgroundColor,width:"100%" ,margin: 20, padding:20}}>
                <h3>Q1</h3>
                <input type="button" onClick={this.btnBackColor} value="blue" style={{backgroundColor:"blue",borderRadius:5 ,border:"1px solid black",margin:5, padding:5}}/>
                <input type="button" onClick={this.btnBackColor} value="grey" style={{backgroundColor:"grey",borderRadius:5, border:"1px solid black", margin:5, padding:5}}/>
                <input type="button" onClick={this.btnBackColor} value="green" style={{backgroundColor:"green",borderRadius:5, border:"1px solid black", margin:5, padding:5}}/>
                <input type="button" onClick={this.btnBackColor} value="red" style={{backgroundColor:"red",borderRadius:5, border:"1px solid black", margin:5, padding:5}}/>
                <input type="button" onClick={this.btnBackColor} value="yellow" style={{backgroundColor:"yellow",borderRadius:5, border:"1px solid black", margin:5, padding:5}}/>
                <input type="button" onClick={this.btnBackColor} value="lightblue" style={{backgroundColor:"lightblue",borderRadius:5, border:"1px solid black", margin:5, padding:5}}/>
                <input type="button" onClick={this.btnBackColor} value="white" className="btn btn-light" style={{backgroundColor:"white",borderRadius:5, border:"1px solid black", margin:5, padding:5}}/>
                <input type="button" onClick={this.btnBackColor} value="pink" style={{backgroundColor:"pink",borderRadius:5, border:"1px solid black", margin:5, padding:5}}/>
            </div>
        )
    }
}