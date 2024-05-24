'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

const VenuesForm = ({ onSubmit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [guests, setGuests] = useState(searchParams.get('guests'));
  const [from, setFrom] = useState(searchParams.get('from'));
  const [to, setTo] = useState(searchParams.get('to'));
  const formRef = useRef(null);




  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      'to': to,
      'from': from,
      'guests': guests
    }
    onSubmit(data);
  };

  return (
    <div>
      <form ref={formRef}  onSubmit={handleSubmit}>
        <div>
          <label>Dates:</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
           <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div>
          <label>Guests:</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default VenuesForm;