// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import "./App.css"
// function AddressAmountLookup() {
//   const [address, setAddress] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   };

//   const handleLookup = () => {
//     // Fetch the Testnet.csv file
//     fetch('https://raw.githubusercontent.com/celestiaorg/networks/master/.github/workflows/80_percent_accounts.csv')
//       .then((response) => response.text())
//       .then((data) => {
//         // Split the CSV data into rows
//         const rows = data.split('\n');

//         // Find the row that contains the address
//         const row = rows.find((row) => row.includes(address));

//         if (row) {
//           // Split the row into columns
//           const columns = row.split(',');

//           // Get the amount from the second column
//           const amount = columns[1];

//           // Set the amount in the state
//           setAmount(amount);
//         } else {
//           // Address not found
//           setAmount('Address not found');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching CSV data:', error);
//       });
//   };

//   return (
//     <motion.div
//       className="container"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1>Address Amount Lookup</h1>
//       <div className="form-group">
//         <label htmlFor="address">Address:</label>
//         <input
//           type="text"
//           id="address"
//           value={address}
//           onChange={handleAddressChange}
//         />
//       </div>
//       <motion.button
//         className="lookup-btn"
//         onClick={handleLookup}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Lookup
//       </motion.button>
//       {amount && (
//         <motion.p
//           className="amount"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Amount: {amount}
//         </motion.p>
//       )}
//     </motion.div>
//   );
// }

// export default AddressAmountLookup;

import React, { useState } from "react";
import "./App.css";

function TokenAmountLookup() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleLookup = () => {
    fetch(
      "https://raw.githubusercontent.com/ThugOG/Celestia_Airdrop_Checker/master/OB.csv"
    )
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split("\n");
        for (let i = 1; i < lines.length; i++) {
          const [csvAddress, csvAmount] = lines[i].split(",");
          if (csvAddress === address) {
            const parsedAmount = parseInt(csvAmount, 10) / 10 ** 6;
            setAmount(parsedAmount);
            return;
          }
        }
        setAmount("Address not found");
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  return (
    <div className="token-amount-lookup">
      <div className="header">
        <h1>Celestia Drop Check</h1>
      </div>
      <label>
        Address:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      <button onClick={handleLookup}>Lookup</button>
      {amount && <p>Amount: {amount}</p>}
    </div>
  );
}

export default TokenAmountLookup;
