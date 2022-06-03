import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render (){
        return (
            <div>
            <p>Welcome {this.props.name}</p>
            {this.props.age>18 && this.props.age<65 && <Age age = {this.props.age} />} 
            </div>
        )
    }
}
/* !! used before this.props.age to avoid age=0 render as 0*/

Welcome.defaultProps = {
    name: "Default",
}