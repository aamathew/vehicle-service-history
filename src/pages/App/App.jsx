
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import VehiclesPage from '../VehiclesPage/VehiclesPage'
import { Link } from 'react-router-dom';
import EditVehiclePage from '../EditVehiclePage/EditVehiclePage'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/vehicle/edit/:id" element={<EditVehiclePage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
