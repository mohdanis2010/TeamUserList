import React from "react";

function Navigation({ onSearch, searchTerm }) {
  return (
    <div className="search-container">
      <input
        value={searchTerm}
        onChange={onSearch}
        className="search-input"
        type="text"
        placeholder="Search by name or email"
        
      />
      <div className="note-txt">
          <p>Note: <span className="note">List items are clickable and open modal, it can navigate with tab keyword </span></p>
      </div>
    </div>
  );
}

export default Navigation;
