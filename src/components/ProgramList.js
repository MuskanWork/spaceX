import React from 'react';

const ProgramList = ({ programs }) => (
    <div className="program-list">
      <ul>
        {programs.map((program) => (
          <li key={program.flight_number}>
            <div>
              <img src={program.links.mission_patch_small} alt={`Mission Patch ${program.flight_number}`} />
            </div>
            <div>
              <h3 style={{color: "#0b4b83"}}>{program.mission_name}</h3>
              <p><span style={{fontWeight: 600}}>Flight Number: </span><span style={{fontStyle: 'italic', fontWeight: 400}}>{program.flight_number}</span></p>
              <p><span style={{fontWeight: 600}}>Launch Year:</span> <span style={{fontStyle: 'italic', fontWeight: 400}}>{program.launch_year}</span></p>
              <p><span style={{fontWeight: 600}}>Launch Success: </span><span style={{fontStyle: 'italic', fontWeight: 400}}> {program.launch_success ? 'Yes' : 'No'}</span></p>
              <p><span style={{fontWeight: 600}}>Land Success: </span><span style={{fontStyle: 'italic', fontWeight: 400}}> {program.land_success ? 'Yes' : 'No'}</span> </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
);

export default ProgramList;
