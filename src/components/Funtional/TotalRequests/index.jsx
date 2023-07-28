import React from "react";

async function getUser() {
  const user = await fetch(`http://localhost:3000/api/user`, {
    next: {
      revalidate: 1800,
    },
  });
  return user;
}

const TotalRequests = async () => {
  const total = await getUser();
  console.log(total);
  return <div className="absolute">TotalRequests = </div>;
};

export default TotalRequests;
