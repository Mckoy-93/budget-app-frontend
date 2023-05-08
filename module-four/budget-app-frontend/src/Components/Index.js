import Transactions from './transactions';
import React from 'react';

// function Index() {
//   return (
//     <div className="Index">

//       <Transactions />
//     </div>
//   );
// }

// export default Index;


const Index = () => {
  return (
    <div className="Index container p-5 my-5 bg-dark text-white text-center rounded">
      <h2>Budget Money</h2>
      <Transactions />
    </div>
  );
}

export default Index;

