import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, BrowserRouter as Router, Routes, } from 'react-router-dom';

import App from './App';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
//Apartments
import ApartmentsList from "./pages/Apartments/ApartmentsList";
import AddApartment from "./pages/Apartments/AddApartment";
import EditApartment from "./pages/Apartments/EditApartment";
//Units
import UnitsList from "./pages/Units/UnitsList";
import AddUnits from "./pages/Units/AddUnits";
import EditUnits from "./pages/Units/EditUnits";
//Facilities
import FacilitiesList from "./pages/Facilities/FacilitiesList";
import AddFacilities from "./pages/Facilities/AddFacilities";
import EditFacilities from "./pages/Facilities/EditFacilities";
//Reviews
import ReviewsApartments from "./pages/Reviews/ReviewsApartments";
import ReviewsUnits from "./pages/Reviews/ReviewsUnits";
import ReviewsStuff from "./pages/Reviews/ReviewsStuff";
import ReviewsClient from "./pages/Reviews/ReviewsClient";
//Inventory
import InventoryList from "./pages/Inventory/InventoryList";
import AddInventory from "./pages/Inventory/AddInventory";
import EditInventory from "./pages/Inventory/EditInventory";
//Help
import HelpCenter from "./pages/Help/HelpCenter";
import AllRequests from "./pages/Help/AllRequests";
//Chat
import Chat from "./pages/Chat/ChatPage";
//User
import UsersStatistics from "./pages/User/UsersStatistics";
import UserDetails from "./pages/User/UserDetails";
import HelpRquest from "./pages/User/HelpRquest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 

      <Route path="/dashboard" element={<App />}>

        {/* Apartments */}
        <Route path="apartments-list" element={<ApartmentsList />} />
        <Route path="add-apartments" element={<AddApartment />} /> 
        <Route path="edit-apartment" element={<EditApartment />} />

        {/* Units */}
        <Route path="units-list" element={<UnitsList />} />
        <Route path="add-units" element={<AddUnits />} />
        <Route path="edit-units" element={<EditUnits />} />

        {/* Facilities */}
        <Route path="Facilities-list" element={<FacilitiesList />} />
        <Route path="add-Facilities" element={<AddFacilities />} />
        <Route path="edit-Facilities" element={<EditFacilities />} />

         {/* Reviews */}
        <Route path="reviews-apartments" element={<ReviewsApartments />} />
        <Route path="reviews-units" element={<ReviewsUnits />} />
        <Route path="reviews-clints" element={<ReviewsClient />} />
        <Route path="reviews-stuff" element={<ReviewsStuff />} />

        {/* Reviews */}
        <Route path="inventory-list" element={<InventoryList />} />
        <Route path="add-inventory" element={<AddInventory />} />
        <Route path="edit-inventory" element={<EditInventory />} />

        {/* Help */}
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="help-requests" element={<AllRequests />} />

        {/* Chat */}
        <Route path="chat" element={<Chat />} />

        {/* User */}
        <Route path="users-statistics" element={<UsersStatistics />} />
        <Route path="users-details" element={<UserDetails />} />
        <Route path="users-help" element={<HelpRquest />} />


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
