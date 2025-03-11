import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, BrowserRouter as Router, Routes, } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

import ApartmentsList from "./pages/Apartments/Apartments_List";
import AddApartment from "./pages/Apartments/Add_Apartment";
import EditApartment from "./pages/Apartments/Edit_Apartment";

import UnitsList from "./pages/Units/Units_List";
import AddUnits from "./pages/Units/Add_Units";
import EditUnits from "./pages/Units/Edit_Units";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 

      <Route path="/dashboard" element={<App />}>
        <Route path="apartments-list" element={<ApartmentsList />} />
        <Route path="add-apartment" element={<AddApartment />} /> 
        <Route path="edit-apartment" element={<EditApartment />} />
        <Route path="units-list" element={<UnitsList />} />
        <Route path="add-units" element={<AddUnits />} />
        <Route path="edit-units" element={<EditUnits />} />
      </Route>
    </>
  )
);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found! Make sure you have a <div id='root'></div> in your index.html.");
}

;
