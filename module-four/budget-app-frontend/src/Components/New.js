import NewForm from "../Components/NewForm";
import React from 'react';

const New = () => {
  return (
    <div className="New container p-5 my-5 bg-dark text-white text-center rounded">
      <h2>Budget Money</h2>
      <NewForm />
    </div>
  );
}

export default New;