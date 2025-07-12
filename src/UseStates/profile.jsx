import { useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChangeName = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleChangeAge = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
    };
    
  return (
    <div>
      <h2>User Profile</h2>

      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChangeName}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={profile.age}
          onChange={handleChangeAge}
        />
      </div>

      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};
