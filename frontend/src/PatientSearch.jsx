import React from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import SearchBar from './SearchBar';

function PatientSearch() {
  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your settings content here */}
      <h1>Patient Search</h1>
      <p>This is the page where you search for patients.</p>
      <SearchBar />
    </div>
  );
}

export default PatientSearch;