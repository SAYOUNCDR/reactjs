export const Arrayobj = () => {
  const users = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      location: "New York, USA",
      jobRole: "Frontend Developer",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      location: "London, UK",
      jobRole: "Backend Developer",
    },
    {
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      location: "Sydney, Australia",
      jobRole: "Full Stack Developer",
    },
    {
      name: "Diana Prince",
      email: "diana.prince@example.com",
      location: "Paris, France",
      jobRole: "UI/UX Designer",
    },
    {
      name: "Ethan Hunt",
      email: "ethan.hunt@example.com",
      location: "Berlin, Germany",
      jobRole: "DevOps Engineer",
    },
    {
      name: "Fiona Gallagher",
      email: "fiona.gallagher@example.com",
      location: "Toronto, Canada",
      jobRole: "Product Manager",
    },
    {
      name: "George King",
      email: "george.king@example.com",
      location: "Tokyo, Japan",
      jobRole: "Data Analyst",
    },
    {
      name: "Hannah Lee",
      email: "hannah.lee@example.com",
      location: "Singapore",
      jobRole: "Machine Learning Engineer",
    },
  ];

  return (
    <div>
      {users.map(({ name, email, location, jobRole }, index) => {
        return (
          <ol key={index}>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
            <li>location: {location}</li>
            <li>Job Role: {jobRole}</li>
          </ol>
        );
      })}
    </div>
  );
};
