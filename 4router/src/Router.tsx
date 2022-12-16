import { Routes, Route } from 'react-router-dom';
import { Index } from './pages/index';
import { Config } from './pages/config';
import { Id } from './pages/id';
import { List } from './pages/list';
import { Profile } from './pages/profile';

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