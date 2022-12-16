import { Routes, Route } from 'react-router-dom';
import { Index } from "./pages/Index";
import { Config } from "./pages/Config";
import { Id } from "./pages/Id";
import { List } from "./pages/List";
import { Profile } from "./pages/Profile";



export function Router (){
    return(
        <Routes>
            <Route path= "/" element={<Profile/>}/>
            <Route path= "config" element={<Config/>}/>
            <Route path= "index" element={<Index/>} />
            <Route path= "list" element={<List/>} />
            <Route path= "list/:id" element={<Id/>} />
        </Routes>
    );
}