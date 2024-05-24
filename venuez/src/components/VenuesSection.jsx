'use client'
import  { useState, useEffect } from 'react';
import VenuesForm from './VenuesForm';
import { useSearchParams } from 'next/navigation';

// Hvis det er data fra venueform, ta de med før fetch. Ellers "tomme filter"

const VenuesSection = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
 
 


  useEffect(() => {
    searchParams.size !== 0 ? filterVenues({to: searchParams.get('to'), from: searchParams.get('from'), guests: searchParams.get('guests') }) : fetchVenues()// eller sette til dagens dato?
  }, [])

  const filterVenues = (filter) => {
    fetchVenues(filter)
  }




    const fetchVenues = async (filter) => {
        setLoading(true)
        console.log(filter)
         try {
        const response = await fetch('https://nf-api.onrender.com/api/v1/holidaze/venues?limit=50');
        const data = await response.json();
        setVenues(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch venues", error);
      }
    };





  const handleSubmit = (data) => {
    filterVenues(data);
    //dette funker ikke
  };

  //må heller ha en funksjon for gi filtre, også ta de med inn i fetch funksjonen

  return (
    <div>
      <h1>Venues</h1>
      <VenuesForm onSubmit={handleSubmit}/>
      {loading ? <p>Loading...</p> : <ul>
        {venues.map((venue) => (
          <li key={venue.id}>{venue.name}</li>
        ))}
      </ul>}
    </div>
  );
};

export default VenuesSection;
