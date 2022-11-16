import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TeamPage from './pages/TeamPage';
import Team from './pages/TeamPage/team';
import GroupPage from './pages/GroupPage';
import Group from './pages/GroupPage/group';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/team" element={<TeamPage />}>
                <Route path=":name" element={<Team />} />
            </Route>
            <Route path="/group" element={<GroupPage />}>
                <Route path=":name" element={<Group />} />
            </Route>
        </Routes>
    );
}

export default App;