import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <Link to={`/register/${event.id}`}>Register</Link>
    </div>
  );
};

export default EventCard;
