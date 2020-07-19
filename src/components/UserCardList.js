import React from "react";
import UserCard from "./UserCard";
import imgPlaceholder from "../assets/images/img-placeholder.png";

function UserCardList({ data }) {
  return data.map((user, index) => (
    <div>  
     <UserCard
      key={user.id}
      image={imgPlaceholder}
      name={user.name}
      phone={user.phone}
      email={user.email}
      website={user.website}
      username={user.username}
      rest={user}
      index={index}
    />
    </div>
  ));
}

export default UserCardList;
