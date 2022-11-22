import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './Layout';
import MainPage from './pages/MainPage';
import TeamPage from './pages/TeamPage';
import Team from './pages/TeamPage/team';
import GroupPage from './pages/GroupPage';
import Group from './pages/GroupPage/group';
import MatchPage from './pages/MatchPage';
import Match from './pages/MatchPage/match';

import './App.scss'

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/match" element={<MatchPage />} />
                    <Route path="/match/:id" element={<Match />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path=":id" element={<Team />} />
                    <Route path="/group" element={<GroupPage />} />
                    <Route path=":id" element={<Group />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;