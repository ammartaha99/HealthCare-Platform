import React, { useState } from 'react';
import '../Style/PatientPages.css';

function PatientPages({ selectedPatient }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [conditionIndex, setConditionIndex] = useState('');
  const [newCondition, setNewCondition] = useState('');
  const [additionalCondition, setAdditionalCondition] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newMonth, setNewMonth] = useState('');
  const [newDay, setNewDay] = useState('');

  function handleChange() {
    if (conditionIndex.trim() !== '' && newCondition.trim() !== '') {
      const index = parseInt(conditionIndex);
      if (!isNaN(index) && index >= 1 && index <= selectedPatient.currentIllnesses.length) {
        selectedPatient.currentIllnesses[index - 1] = newCondition;
        setConditionIndex('');
        setNewCondition('');
      }
    }

    if (additionalCondition.trim() !== '') {
      selectedPatient.currentIllnesses.push(additionalCondition);
      setAdditionalCondition('');
    }

    if (deleteIndex.trim() !== '') {
      const indexToDelete = parseInt(deleteIndex);
      if (!isNaN(indexToDelete) && indexToDelete >= 1 && indexToDelete <= selectedPatient.currentIllnesses.length) {
        selectedPatient.currentIllnesses.splice(indexToDelete - 1, 1);
        setDeleteIndex('');
      }
    }

    if (newYear.trim() !== '') {
      const year = parseInt(newYear);
      if (!isNaN(year)) {
        selectedPatient.age.years = year;
        setNewYear('');
      }
    }
    if (newMonth.trim() !== '') {
      const month = parseInt(newMonth);
      if (!isNaN(month)) {
        selectedPatient.age.months = month;
        setNewMonth('');
      }
    }
    if (newDay.trim() !== '') {
      const day = parseInt(newDay);
      if (!isNaN(day)) {
        selectedPatient.age.days = day;
        setNewDay('');
      }
    }
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="patient-page-left-margin">
      {currentPage === 1 && (
        <div>
          <h1>Patient Page 1</h1>
          <p>This is the content of patient page 1.</p>
          <div className="image-container">
            <img
              src={selectedPatient.id}
              alt="Patient"
              className="small-image"
            />
          </div>
          <p>Name: {selectedPatient.name}</p>
          <p>Age: {selectedPatient.age.years} years, {selectedPatient.age.months} months, {selectedPatient.age.days} days</p>
          <p>Gender: {selectedPatient.gender}</p>
          <p>Current Illnesses:</p>
          <ol>
            {selectedPatient.currentIllnesses.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <div>
            <div className="input-text">
              <input
                type="text"
                value={newYear}
                onChange={(e) => setNewYear(e.target.value)}
                placeholder={!newYear ? 'Change age (years), enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newMonth}
                onChange={(e) => setNewMonth(e.target.value)}
                placeholder={!newMonth ? 'Change age (months), enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newDay}
                onChange={(e) => setNewDay(e.target.value)}
                placeholder={!newDay ? 'Change age (days), enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={conditionIndex}
                onChange={(e) => setConditionIndex(e.target.value)}
                placeholder={!conditionIndex ? 'Change a current illness, enter its id here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newCondition}
                onChange={(e) => setNewCondition(e.target.value)}
                placeholder={!newCondition ? 'Change a current illness, enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={additionalCondition}
                onChange={(e) => setAdditionalCondition(e.target.value)}
                placeholder={!additionalCondition ? 'Add a new current illness, enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={deleteIndex}
                onChange={(e) => setDeleteIndex(e.target.value)}
                placeholder={!deleteIndex ? 'Delete a current illness, enter its id here' : ''}
              />
            </div>
          </div>
          <button onClick={handleChange}>Update All</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 2 && (
        <div>
          <h1>Patient Page 2</h1>
          <p>This is the content of patient page 2.</p>
          <p>Name: {selectedPatient.name}</p>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 3 && (
        <div>
          <h1>Patient Page 3</h1>
          <p>This is the content of patient page 3.</p>
          <p>Age: {selectedPatient.age.years} years, {selectedPatient.age.months} months, {selectedPatient.age.days} days</p>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 4 && (
        <div>
          <h1>Patient Page 4</h1>
          <p>This is the content of patient page 4.</p>
          <p>Gender: {selectedPatient.gender}</p>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 5 && (
        <div>
          <h1>Patient Page 5</h1>
          <p>This is the content of patient page 5.</p>
          <p>Condition:</p>
          <ol>
            {selectedPatient.condition.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 6 && (
        <div>
          <h1>Patient Page 6</h1>
          <p>This is the content of patient page 6.</p>
          <p>Name: {selectedPatient.name}</p>
          <button onClick={prevPage}>Previous Page</button>
        </div>
      )}
    </div>
  );
}

export default PatientPages;
