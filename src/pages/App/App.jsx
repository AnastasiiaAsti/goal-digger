import "./App.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react";
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import AddToListPage from "../AddToListPage/AddToListPage";
import GoalListPage from '../GoalListPage/GoalListPage';
import MapPage from '../MapPage/MapPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
          <Route path="/" element={<MapPage user={user} setUser={setUser} />} />
            <Route path="/lists" element={<GoalListPage user={user} setUser={setUser} />} />
            <Route path="/lists/new" element={<AddToListPage user={user} setUser={setUser}/>} />
          </Routes>
        </>
      ) :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
