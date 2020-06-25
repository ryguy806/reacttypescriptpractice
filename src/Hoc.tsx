import React, {Component} from "react";

const initialState = {
    name: 'Bulbasaur',
    message: "I choose you!"
}

type State = Readonly<typeof initialState>;//Define differently for Real applications

const messageHoc = (WrappedComponent: any) => {
    class HOC extends Component<{}, State>{
        readonly state: State = initialState;

        render(){
            return (
              <WrappedComponent name={this.state.name} message={this.state.message}/>
            );
        }
    }

    return HOC;
}

export default messageHoc;