import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const MyRegistrationsPage = () => {
  const registrations = useSelector((state: RootState) => state.events.registrations);

  return (
    <div>
      <h1>My Registrations</h1>
      {registrations.map((registration: any, index: number) => (
        <div key={index}>
          <p>Event ID: {registration.eventId}</p>
          <p>Name: {registration.name}</p>
          <p>Email: {registration.email}</p>
          <p>Phone: {registration.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default MyRegistrationsPage;
