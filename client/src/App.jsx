import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import GroupList from "./GroupList";
import './App.css';
import GroupEdit from "./GroupEdit";

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path='/groups' exact={true} element={<GroupList />}/>
                <Route path='/groups/:id' element={<GroupEdit />}/>
            </Routes>
        </Router>
    );
}

export default App;