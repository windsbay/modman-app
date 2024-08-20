import React from "react";

import Bottom from "./components/Bottom/Bottom";
import {Route, Routes} from "react-router-dom";
import Friends from "./pages/Friends/Friends";
import Tasks from "./pages/Tasks/Tasks";
import Index from "./pages/Index/Index";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Index />}/>
                <Route path={'tasks'} element={<Tasks/>}/>
                <Route path={'friends'} element={<Friends />}/>
            </Routes>
            <Bottom/>
        </div>
    );
}

export default App;
