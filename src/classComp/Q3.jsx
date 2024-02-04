import { Component } from "react";


export default class Q3 extends Component{
    constructor(props){
        super(props);
        this.state={width:"100%"};
    }
    SmallT=()=>{
        this.setState({width:"50%"});
    }
    BigT=()=>{
        this.setState({width:"100%"});
    }

    render(){
        return(
            <div style={{border:"2px solid black", borderRadius:20 ,width:"100%" ,margin: 20, padding:20}}>
                <h3>Q3</h3>
                <table onClick={this.SmallT} onDoubleClick={this.BigT} style={{borderCollapse:"collapse",height:100, width: this.state.width }}>
                    <tr>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td/>
                        <td/>
                    </tr>
                </table>
            </div>
        );
    }
}