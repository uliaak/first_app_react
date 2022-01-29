import React from "react";
import {v4} from "uuid";

class List extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: ['Julia', 'Mark', 'Ivan', 'Kate', 'Julia']
        };
    }

    render() {
        return(
            <div>
                <h2>List</h2>
                <ul>
                    {this.state.list.map((element)=> {
                        const id = v4();
                        return(
                            <li key={id}>
                            {element}
                            </li> 
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List;