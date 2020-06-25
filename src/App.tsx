import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message";

class App extends React.Component<any> {

    render()
    {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Message message="This is a simple message."/>
                </header>
            </div>
        );
    }
}

export default App;
