



// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState([]);
//   const [submittedData, setSubmittedData] = useState([]);

//   const handleAddSelfForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Self',
//         gender: '',
//         date: '',
//         field: '',
//         count: '',
//       },
//     ]);
//   };

//   const handleAddSpouseForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Spouse',
//         gender: '',
//         date: '',
//         field: '',
//         count: '',
//       },
//     ]);
//   };

//   const handleAddSonForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Dependent Son',
//         gender: '',
//         date: '',
//         field: '',
//         count: '',
//       },
//     ]);
//   };

//   const handleAddDaughterForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Dependent Daughter',
//         gender: '',
//         date: '',
//         field: '',
//         count: '',
//       },
//     ]);
//   };

//   const handleInputChange = (index, type, value) => {
//     const updatedFormData = [...formData];
//     updatedFormData[index][type] = value;
//     setFormData(updatedFormData);
//   };

//   const handleProceed = () => {
//     setSubmittedData([...submittedData, ...formData]);
//     setFormData([]);
//   };

//   return (
//     <div>
//       <button onClick={handleAddSelfForm}>Add Self Form</button>
//       <button onClick={handleAddSpouseForm}>Add Spouse Form</button>
//       <button onClick={handleAddSonForm}>Add Dependent Son Form</button>
//       <button onClick={handleAddDaughterForm}>Add Dependent Daughter Form</button>

//       {formData.map((item, index) => (
//         <div key={index}>
//           <h2>{item.name}</h2>
//           <label>
//             Gender:
//             <select
//               value={item.gender}
//               onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </label>
//           <label>
//             Date:
//             <input
//               type="date"
//               value={item.date}
//               onChange={(e) => handleInputChange(index, 'date', e.target.value)}
//             />
//           </label>
//           <label>
//             Field:
//             <input
//               type="text"
//               value={item.field}
//               onChange={(e) => handleInputChange(index, 'field', e.target.value)}
//             />
//           </label>
//           <label>
//             Count:
//             <input
//               type="text"
//               value={item.count}
//               onChange={(e) => handleInputChange(index, 'count', e.target.value)}
//             />
//           </label>
//         </div>
//       ))}

//       {formData.length > 0 && (
//         <div>
//           <button onClick={handleProceed}>Proceed</button>
//         </div>
//       )}

//       {submittedData.length > 0 && (
//         <div>
//           <h2>All Submitted Data</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Gender</th>
//                 <th>Date</th>
//                 <th>Field</th>
//                 <th>Count</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.date}</td>
//                   <td>{item.field}</td>
//                   <td>{item.count}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;





// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState([]);
//   const [submittedData, setSubmittedData] = useState([]);

//   const handleAddSelfForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Self',
//         gender: '',
//         date: '',
//         field: '',
//         count: 0,
//       },
//     ]);
//   };

//   const handleAddSpouseForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Spouse',
//         gender: '',
//         date: '',
//         field: '',
//         count: 0,
//       },
//     ]);
//   };

//   const handleAddSonForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Dependent Son',
//         gender: '',
//         date: '',
//         field: '',
//         count: 0,
//       },
//     ]);
//   };

//   const handleAddDaughterForm = () => {
//     setFormData([
//       ...formData,
//       {
//         name: 'Dependent Daughter',
//         gender: '',
//         date: '',
//         field: '',
//         count: 0,
//       },
//     ]);
//   };

//   const handleInputChange = (index, type, value) => {
//     const updatedFormData = [...formData];
//     if (type === 'count') {
//       updatedFormData[index][type] = value;
//     } else {
//       updatedFormData[index][type] = value;
//     }
//     setFormData(updatedFormData);
//   };

//   const handleIncrement = (index) => {
//     const updatedFormData = [...formData];
//     updatedFormData[index].count++;
//     setFormData(updatedFormData);
//   };

//   const handleDecrement = (index) => {
//     const updatedFormData = [...formData];
//     if (updatedFormData[index].count > 0) {
//       updatedFormData[index].count--;
//       setFormData(updatedFormData);
//     }
//   };

//   const handleProceed = () => {
//     setSubmittedData([...submittedData, ...formData]);
//     setFormData([]);
//   };

//   return (
//     <div>
//       <button onClick={handleAddSelfForm}>Add Self Form</button>
//       <button onClick={handleAddSpouseForm}>Add Spouse Form</button>
//       <button onClick={handleAddSonForm}>Add Dependent Son Form</button>
//       <button onClick={handleAddDaughterForm}>Add Dependent Daughter Form</button>

//       {formData.map((item, index) => (
//         <div key={index}>
//           <h2>{item.name}</h2>
//           <label>
//             Gender:
//             <select
//               value={item.gender}
//               onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </label>
//           <label>
//             Date:
//             <input
//               type="date"
//               value={item.date}
//               onChange={(e) => handleInputChange(index, 'date', e.target.value)}
//             />
//           </label>
//           {/* <label>
//             Field:
//             <input
//               type="text"
//               value={item.field}
//               onChange={(e) => handleInputChange(index, 'field', e.target.value)}
//             />
//           </label> */}
//           <label>
//             Count:
//             <button onClick={() => handleDecrement(index)}>-</button>
//             <input
//               type="text"
//               value={item.count}
//               onChange={(e) => handleInputChange(index, 'count', e.target.value)}
//             />
//             <button onClick={() => handleIncrement(index)}>+</button>
//           </label>
//         </div>
//       ))}

//       {formData.length > 0 && (
//         <div>
//           <button onClick={handleProceed}>Proceed</button>
//         </div>
//       )}

//       {submittedData.length > 0 && (
//         <div>
//           <h2>All Submitted Data</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Gender</th>
//                 <th>Date</th>
//                 <th>Field</th>
//                 <th>Count</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.date}</td>
//                   <td>{item.field}</td>
//                   <td>{item.count}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;




// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState([]);
//   const [submittedData, setSubmittedData] = useState([]);
//   const [showFamilyButtons, setShowFamilyButtons] = useState(true);

//   const toggleFamilyButtons = () => {
//     setShowFamilyButtons(!showFamilyButtons);
//   };

//   const handleAddForm = (formName) => {
//     setFormData([
//       ...formData,
//       {
//         name: formName,
//         gender: '',
//         date: '',
//         field: '',
//         count: 0,
//       },
//     ]);
//   };

//   const handleInputChange = (index, type, value) => {
//     const updatedFormData = [...formData];
//     updatedFormData[index][type] = value;
//     setFormData(updatedFormData);
//   };

//   const handleIncrement = (index) => {
//     const updatedFormData = [...formData];
//     updatedFormData[index].count++;
//     setFormData(updatedFormData);
//   };

//   const handleDecrement = (index) => {
//     const updatedFormData = [...formData];
//     if (updatedFormData[index].count > 0) {
//       updatedFormData[index].count--;
//       setFormData(updatedFormData);
//     }
//   };

//   const handleProceed = () => {
//     setSubmittedData([...submittedData, ...formData]);
//     setFormData([]);
//     setShowFamilyButtons(true); // Show family buttons again after submission
//   };

//   return (
//     <div>
//       {showFamilyButtons ? (
//         <button onClick={toggleFamilyButtons}>Family</button>
//       ) : (
//         <div>
//           <button onClick={() => handleAddForm('Self')}>Add Self Form</button>
//           <button onClick={() => handleAddForm('Spouse')}>Add Spouse Form</button>
//           <button onClick={() => handleAddForm('Dependent Son')}>Add Dependent Son Form</button>
//           <button onClick={() => handleAddForm('Dependent Daughter')}>Add Dependent Daughter Form</button>
//           <button onClick={toggleFamilyButtons}>Hide Family</button>
//         </div>
//       )}

//       {formData.map((item, index) => (
//         <div key={index}>
//           <h2>{item.name}</h2>
//           <label>
//             Gender:
//             <select
//               value={item.gender}
//               onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </label>
//           <label>
//             Date:
//             <input
//               type="date"
//               value={item.date}
//               onChange={(e) => handleInputChange(index, 'date', e.target.value)}
//             />
//           </label>
//           {/* <label>
//             Field:
//             <input
//               type="text"
//               value={item.field}
//               onChange={(e) => handleInputChange(index, 'field', e.target.value)}
//             />
//           </label> */}
//           <label>
//             Count:
//             <button onClick={() => handleDecrement(index)}>-</button>
//             <input
//               type="text"
//               value={item.count}
//               onChange={(e) => handleInputChange(index, 'count', e.target.value)}
//             />
//             <button onClick={() => handleIncrement(index)}>+</button>
//           </label>
//         </div>
//       ))}

//       {formData.length > 0 && (
//         <div>
//           <button onClick={handleProceed}>Proceed</button>
//         </div>
//       )}

//       {submittedData.length > 0 && (
//         <div>
//           <h2>All Submitted Data</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Gender</th>
//                 <th>Date</th>
//                 <th>Field</th>
//                 <th>Count</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.date}</td>
//                   <td>{item.field}</td>
//                   <td>{item.count}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;




















import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";


const Form = () => {
  const [formData, setFormData] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  const [showFamilyButtons, setShowFamilyButtons] = useState(true);
  const [highlightedButton, setHighlightedButton] = useState(null);


  const toggleFamilyButtons = () => {
    setShowFamilyButtons(!showFamilyButtons);
  };
  
  
 

  const handleAddSelfForm = () => {
    setFormData([
      ...formData,
      {
        name: 'Self',
        gender: '',
        date: '',
        field: 'Kotak Smart Travel',
        count: 0,
        status:'Active',
        tripDuration:'7',
      floter:"Floater",
      singletrip:"Single Trip"

      },
    ]);
    setHighlightedButton('Self');
  };

  const handleAddSpouseForm = () => {
    setFormData([
      ...formData,
      {
        name: 'Spouse',
        gender: '',
        date: '',
        field: 'Kotak Smart Travel',
        count: 0,
        status:'Active',
      tripDuration:'7',
      floter:"Floater",
      singletrip:"Single Trip"
      },
    ]);
    setHighlightedButton('Spouse');
  };

  const handleAddSonForm = () => {
    setFormData([
      ...formData,
      {
        name: 'Dependent Son',
        gender: '',
        date: '',
        field: 'Kotak Smart Travel',
        count: 0,
        status:'Active',
      tripDuration:'7',
      floter:"Floater",
      singletrip:"Single Trip"
      },
    ]);
    setHighlightedButton('Dependent Son');
  };

  const handleAddDaughterForm = () => {
    setFormData([
      ...formData,
      {
        name: 'Dependent Daughter',
        gender: '',
        date: '',
        field: 'Kotak Smart Travel',
        count: 0,
        status:'Active',
      tripDuration:'7',
      floter:"Floater",
      singletrip:"Single Trip"
      },
    ]);
    setHighlightedButton('Dependent Daughter');
  };


  const buttonStyle = {
    width: '10%',
  
    padding: '10px',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  };



  const selfStyle = {
    width: '40%',
    padding: '10px',
    height:"100px",
    
    border: highlightedButton === 'Self' ? '2px solid red' : 'none', 
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const selfStyle1 = {
    width: '40%',
    height:"100px",
    padding: '10px',
    border: highlightedButton === 'Spouse' ? '2px solid red' : 'none', 
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  };
  
  const selfStyle2 = {
    width: '40%',
    height:"100px",
    padding: '10px',
    border: highlightedButton === 'Dependent Son' ? '2px solid red' : 'none', 
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  };
  
  const selfStyle3 = {
    width: '40%',
    height:"100px",
    padding: '10px',
    border: highlightedButton === 'Dependent Daughter' ? '2px solid red' : 'none', 
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    marginBottom:"3%"
  };
  const selfStyle5= {
    width: '25%',
    padding: '10px',
    backgroundColor: 'white',
    color: 'black',
    marginLeft:'37.5%',
    border: showFamilyButtons ? '2px solid red' : 'none',
    
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', 
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  };
  
  const theadStyle = {
    backgroundColor: '#008080',
    color:"white",
    height:"40px"
  };
  
  const rowStyle = {
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    height:"40px"
  };

  const handleInputChange = (index, type, value) => {
    const updatedFormData = [...formData];
    if (type === 'count') {
      updatedFormData[index][type] = value;
    } else {
      updatedFormData[index][type] = value;
    }
    setFormData(updatedFormData);
  };

  const handleIncrement = (index) => {
    const updatedFormData = [...formData];
    updatedFormData[index].count++;
    setFormData(updatedFormData);
  };

  const handleDecrement = (index) => {
    const updatedFormData = [...formData];
    if (updatedFormData[index].count > 0) {
      updatedFormData[index].count--;
      setFormData(updatedFormData);
    }
  };

  const handleClearForm = () => {
    setFormData([]);
    setShowFamilyButtons(true);
  };

  const handleProceed = () => {
    setSubmittedData([...submittedData, ...formData]);
    setFormData([]);
    setShowFamilyButtons(true);
  };


  const handleDeleteSubmittedData = (index) => {
    const updatedSubmittedData = [...submittedData];
    updatedSubmittedData.splice(index, 1);
    setSubmittedData(updatedSubmittedData);
  };
  
  return (
    <div>
       
<div>

{showFamilyButtons ? (
        <button  style={selfStyle5} onClick={toggleFamilyButtons}>   <FaUserGroup style={{ marginBottom: '5px',height:"30%",width:"30%"}} /><br/>
          
        Family</button>
      ) : (
<div >


<div class="grid">
    <div class="col-6">
        <div class="text-center p-3 border-round-sm  font-bold">
      
        <button style={selfStyle } onClick={handleAddSelfForm}>    <FaUserAlt style={{ marginBottom: '5px' }} /> 
        <br />
        <input  type="checkbox" id="selfCheckbox" /> 
        Self</button>
        </div>
    </div>
    <div class="col-6">
        <div class="text-center p-3 border-round-sm font-bold">
        <button  style={selfStyle1 } onClick={handleAddSpouseForm}> < FaUserTie style={{ marginBottom: '5px' }} /> 
        <br />
        <input type="checkbox" id="spouseCheckbox" /> 
        Spouse </button>
        </div>
    </div>
    <div class="col-6">
        <div class="text-center p-3 border-round-sm font-bold">
        <button  style={selfStyle2 } onClick={handleAddSonForm}><FaUserNurse style={{ marginBottom: '5px' }} /> 
        <br />
        <input type="checkbox" id="dependentsonCheckbox" /> 
        Dependent Son </button>
          
        </div>
    </div>
    <div class="col-6">
        <div class="text-center p-3 border-round-sm  font-bold">
        <button  style={selfStyle3 } onClick={handleAddDaughterForm}><FaUsers style={{ marginBottom: '5px' }} /> 
        <br />
        <input type="checkbox" id="dependentdaughterCheckbox" /> 
         Dependent Daughter </button>
        </div>
    </div>
</div>
   
    </div>
        )}
     



{formData.map((item, index) => (
  <div key={index} className="grid-container">
    <h4>{item.name}</h4>
    <label>
      Gender:
      <select
        className="input-style"
        value={item.gender}
        onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </label>
    <label>
      Date:
      <input
        type="date"
        className="input-style"
        value={item.date}
        onChange={(e) => handleInputChange(index, 'date', e.target.value)}
      />
    </label>
    <label>
      Count:
      <button className="input-style1" onClick={() => handleDecrement(index)}>-</button>
      <input
        type="text"
        className="input-style1"
        value={item.count}
        onChange={(e) => handleInputChange(index, 'count', e.target.value)}
      />
      <button className="input-style1" onClick={() => handleIncrement(index)}>+</button>
    </label>
  </div>
))}


<br/>
<br/>
      {formData.length > 0 && (
        <div>
          <button style={buttonStyle} onClick={handleClearForm}>Back</button>&nbsp;
          <button style={buttonStyle} onClick={handleProceed}>Proceed</button>
        </div>
      )}

     
<br/>
<br/>

{submittedData.length > 0 && (
        <div>
         
          <table style={tableStyle}>
            <thead style={theadStyle}>
              <tr>
                {/* <th>Policy No/Certificate No</th> */}
                <th>Name</th>
                <th>Product Name</th>
                <th> Policy Date</th>
                <th> gender</th>
                {/* <th>Single Trip/Multiple Trip</th>
                <th>Floater/Individual</th>
                <th>TripDuration</th> */}
                <th>Status</th>
                <th>Count</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((item, index) => (
               
              
                <tr key={index} style={rowStyle}>
                  {/* <td>{index}</td> */}
                 
                  <td>{item.name}</td>
                  <td>{item.field}</td>
                  <td>{item.date}</td>
                  <td>{item.gender}</td>
                  {/* <td>{item.singletrip}</td>
                  <td>{item.floter}</td>
                  <td>{item.tripDuration}</td> */}
                   <td>{item.status}</td>
                   <td>{item.count}</td>
                  <td>
              <button onClick={() => handleDeleteSubmittedData(index)} style={{ border: 'none', outline: 'none', background: 'none', padding: 0 }}>
              <AiTwotoneDelete style={{height:"20px",width:"20px"}} />
              </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>

   </div>
  );
};

export default Form;
