import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventListPage from './pages/EventList';
import EventRegistrationPage from './pages/EventRegistration';
import RegistrationConfirmationPage from './pages/RegistrationConfirmation';
import MyRegistrationsPage from './pages/MyRegistrations';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventListPage />} />
      <Route path="/register/:eventId" element={<EventRegistrationPage />} />
      <Route path="/confirmation" element={<RegistrationConfirmationPage />} />
      <Route path="/my-registrations" element={<MyRegistrationsPage />} />
    </Routes>
  );
}

export default App;
