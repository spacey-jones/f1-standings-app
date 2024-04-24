import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConstructorWindow = () => {
  const [constructorStandings, setConstructorStandings] = useState([]);

  useEffect(() => {
    const fetchConstructorStandings = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/current/constructorStandings.json');
        setConstructorStandings(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
      } catch (error) {
        console.error('Error fetching constructor standings:', error);
      }
    };

    fetchConstructorStandings();
  }, []);

  return (
    <div className="constructor-window">
      <h2>Constructor Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Constructor</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {constructorStandings.map((constructor) => (
            <tr key={constructor.position}>
              <td>{constructor.position}</td>
              <td>{constructor.Constructor.name}</td>
              <td>{constructor.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConstructorWindow;