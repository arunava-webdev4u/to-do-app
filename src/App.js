import React from "react"
import Header from "./components/Header";
import Main from "./components/Main";
import './CSS/App.css';

class App extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Main />
            </>
        )
    }
}

export default App;