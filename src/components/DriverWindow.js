import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DriverWindow = () => {
  const [driverStandings, setDriverStandings] = useState([]);

  useEffect(() => {
    const fetchDriverStandings = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.json');
        setDriverStandings(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      } catch (error) {
        console.error('Error fetching driver standings:', error);
      }
    };

    fetchDriverStandings();
  }, []);

  return (
    <div className="driver-window">
      <h2>Driver Standings</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {driverStandings.map((driver) => (
              <tr key={driver.position}>
                <td>{driver.position}</td>
                <td>
                  {driver.Driver.givenName} {driver.Driver.familyName}
                </td>
                <td>{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverWindow;