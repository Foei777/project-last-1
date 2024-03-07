import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:3555/sss'); // Replace with your server URL
        setRooms(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading rooms...</p>}
      {error && <p>Error: {error.message}</p>}
      {rooms.length > 0 && (
        <ul>
          {rooms.map((room) => (
            <li key={room._id}>
              {/* Access and display room properties here */}
              <h3>{room.first_name}</h3>
              <p>{room.description}</p>
              {/* Add more information as needed */}
            </li>
          ))}
        </ul>
      )}
      {rooms.length === 0 && !isLoading && <p>No rooms found.</p>}
    </div>
  );
};

export default RoomList;
