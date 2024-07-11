import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../store/slices/eventsSlice/eventSlice';
import EventCard from '../components/EventCard';
import { RootState, AppDispatch } from '../store/store';

const EventListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: RootState) => state.events.events);
  const status = useSelector((state: RootState) => state.events.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error fetching events</div>;
  }

  return (
    <div className='events-list-wrapper'>
      <h2>Events</h2>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventListPage;
