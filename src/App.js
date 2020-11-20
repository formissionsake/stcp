import './App.scss';
import {ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
