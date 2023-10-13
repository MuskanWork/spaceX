import React from 'react';

const Filters = ({ filters, onFilterChange }) => {

  const handleFilterChange = (filterName, value) => {
    onFilterChange(filterName, value);
  };

  const definedYear = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
  ]

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter">
        <h3>Launch Success</h3>
        <div className="success-buttons">
          <button
            className={`success-button ${filters.launch_success === true ? 'active' : ''}`}
            onClick={() => handleFilterChange('launch_success', true)}
          >
            True
          </button>
          <button
            className={`success-button ${filters.launch_success === false ? 'active' : ''}`}
            onClick={() => handleFilterChange('launch_success', false)}
          >
            False
          </button>
        </div>
      </div>

      <div className="filter">
        <h3>Land Success</h3>
        <div className="success-buttons">
          <button
            className={`success-button ${filters.land_success === true ? 'active' : ''}`}
            onClick={() => handleFilterChange('land_success', true)}
          >
            True
          </button>
          <button
            className={`success-button ${filters.land_success === false ? 'active' : ''}`}
            onClick={() => handleFilterChange('land_success', false)}
          >
            False
          </button>
        </div>
      </div>

      <div className="filter">
        <h3>Launch Year</h3>
        <div className="year-buttons">
          <button
            key="showAll"
            className={`year-button ${filters.launch_year === '' ? 'active' : ''}`}
            onClick={() => handleFilterChange('launch_year', '')}
          >
            Show All
          </button>
          {definedYear.map((year) => (
            <button
              key={year}
              className={`year-button ${filters.launch_year === year ? 'active' : ''}`}
              onClick={() => handleFilterChange('launch_year', year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
