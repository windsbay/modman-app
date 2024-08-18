import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Bottom from "./components/Bottom/Bottom";

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
            <Bottom />
        </BrowserRouter>
    );
}

export default App;
