import React, { useState } from 'react'
import '../../App.css'
import './Flight.css'

export default function Flight() {
    const [departingAirport, setDepartingAirport] = useState('');
    const [destinationAirport, setDestinationAirport] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Flight Information:');
        console.log('Departing Airport:', departingAirport);
        console.log('Destination Airport:', destinationAirport);
        console.log('Departure Date:', departureDate);
        console.log('Return Date:', returnDate);
    };


    const getTodayString = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
      return (
        <div className='flight'>
                <h1>Flight Tracker</h1>
          <form onSubmit={handleSubmit}>
            <div className='labelTitle'>
              <label>
                Departing Airport:
                <i className='fa fa-plane' id="plane" target="_blank" aria-label='Plane' >
                </i>
                <input type="text" className='airport' value={departingAirport} onChange={(e) => setDepartingAirport(e.target.value)} />
              </label>
            </div>
            <div className='labelTitle'>
              <label>
                Destination Airport:
                <i className='fa fa-plane' id="planeHome" target="_blank" aria-label='Plane' >
                </i>
                <input type="text" className='airport' value={destinationAirport} onChange={(e) => setDestinationAirport(e.target.value)} />
              </label>
            </div>
            <div className='labelTitle'>
              <label>
                Departure Date:
                <i className='fa fa-plane' id="plane" target="_blank" aria-label='Plane' >
                </i>
                <input type="date" className='departDate' value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} min={getTodayString()} />
              </label>
            </div>
            <div className='labelTitle'>
              <label>
                Return Date:
                <i className='fa fa-plane' id="planeHome" target="_blank" aria-label='Plane' >
                </i>
                <input type="date" className='returnDate' value={returnDate} onChange={(e) => setReturnDate(e.target.value)} min={departureDate || getTodayString()} />
              </label>
            </div>
            <button className="btn" id='travelBtn' type="submit">Submit</button>
          </form>
        </div>
      );
    }


async function fetchData() {
    const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${sourceAirportCode}&destinationAirportCode=${destinationAirportCode}&date=${date]&itineraryType=ROUND_TRIP&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate=${returnDate}&pageNumber=1&nonstop=yes&currencyCode=USD';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd83dea2089msh2b7f004262e5a69p13223ejsn0265b02d8831',
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


