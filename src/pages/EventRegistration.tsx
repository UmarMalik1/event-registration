import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { registerForEvent } from '../store/slices/eventsSlice/eventSlice';
import { AppDispatch } from '../store/store';

const EventRegistrationPage: React.FC = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerForEvent({ eventId: eventId, ...values }));
    navigate('/confirmation');
  };

  return (
    <div className="register-wrapper">
      <h2>Register for Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationPage;
