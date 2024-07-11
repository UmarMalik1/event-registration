import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

const RegistrationConfirmationPage = () => {
  const navigate = useNavigate();
  const registrations = useSelector((state: RootState) => state.events.registrations);
  const lastRegistration = registrations[registrations.length - 1];

  return (
    <div className="registration-wrapper">
      <h2>Registration Confirmation</h2>
      {lastRegistration && (
        <div className="registration-content">
          <div className="registration">
            <h4>Event ID: </h4>
            <p>{lastRegistration.eventId}</p>
          </div>
          <div className="registration">
            <h4>Name: </h4>
            <p>{lastRegistration.name}</p>
          </div>
          <div className="registration">
            <h4>Email: </h4>
            <p>{lastRegistration.email}</p>
          </div>
          <div className="registration">
            <h4>Phone:</h4>
            <p> {lastRegistration.phone}</p>
          </div>
        </div>
      )}
      <div className="form-button">
        <button onClick={() => navigate("/")}>Back to Events</button>
      </div>
    </div>
  );
};

export default RegistrationConfirmationPage;
