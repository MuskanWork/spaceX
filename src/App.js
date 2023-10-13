import React, { useState, useEffect } from 'react';
import Filters from './components/Filters';
import ProgramList from './components/ProgramList';
import './App.css';

function App() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ launch_success: false, land_success: false, launch_year: '' });

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
      if (filters.launch_success) apiUrl += '&launch_success=true';
      if (filters.land_success) apiUrl += '&land_success=true';
      if (filters.launch_year) apiUrl += `&launch_year=${filters.launch_year}`;
      
      try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        setPrograms(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [filters]);


  const handleFilterChange = (filterName, value) => {
    let updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters); 
  };

  return (
    <>
      <h1 style={{margin: '20px'}}>SpaceX Launch Programs</h1>
      <div className="app">
        <Filters filters={filters} onFilterChange={handleFilterChange} />
        {loading ? <p>Loading...</p> : <ProgramList programs={programs} />}
      </div>
    </>
  );
}

export default App;

