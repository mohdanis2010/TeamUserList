import React from "react";

function ModalContent({ data }) {
  const { address, company } = data;
  return (
    <div className="card-info-container">
      <h3 id="name" className="card-name">
        Company:
      </h3>
      <p className="card-text">{company.name}</p>
      <p className="card-text">{company.catchPhrase}</p>
      <p className="card-text cap">{company.bs}</p>
      <br />
      <h3 id="name" className="card-name">
        Address:
      </h3>
      <p className="card-text">{address.street}</p>
      <p className="card-text">{address.suite}</p>
      <p className="card-text cap">{address.city}</p>
      <p className="card-text cap">{address.zipcode}</p>
    </div>
  );
}

export default ModalContent;
