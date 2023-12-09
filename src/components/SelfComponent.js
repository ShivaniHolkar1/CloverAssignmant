






import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData } from '../actions/formActions';

import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";



const SelfComponent = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [showTableData, setShowTableData] = useState(false);
    const [selfButtonActive, setSelfButtonActive] = useState(true);
    const dispatch = useDispatch();
    const [selfButtonActive1, setSelfButtonActive1] = useState(true);
    const data = useSelector((state) => state.data);
    const [formData, setFormData] = useState({
      mobile: '',
      email: '',
      date: '',
      gender: '',
    });
  
    const [formStep, setFormStep] = useState(1); 
  
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      };
      
      const formStyle = {
        display: 'grid',
        gap: '10px',
        padding: '50px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '25%',
      };
      
    const inputStyle = {
        width: '100%',
        padding: '8px',
        fontSize: '16px',
      };
      


      const buttonStyle = {
        width: '50%',
        padding: '10px',
        backgroundColor: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
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
      
      const selfStyle = {
        width: '25%',
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
        border: selfButtonActive ? '2px solid red' : 'none', 
        marginLeft: "37.5%",
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
      };
    
    
  
    const toggleForm = () => {
      setIsFormOpen(!isFormOpen);
      setSelfButtonActive(true);
      setSelfButtonActive1(false);
      setFormStep(1); 
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formStep === 1) {
        setFormStep(2); 
      } else if (formStep === 2) {
        dispatch(addData(formData));
        setFormData({
          mobile: '',
          email: '',
          date: '',
          gender: '',
        });
        setIsFormOpen(false);
        setShowTableData(true);
      }
    };
  
   
  

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value,
        });
      };
    
  
    
      
        const handleDelete = (index) => {
          dispatch(deleteData(index));
        };
      
    
  
    return (
      <div>
        {selfButtonActive1 && (
          <button style={selfStyle} onClick={toggleForm}>
            <FaUserAlt style={{ marginBottom: '5px', height: '30%', width: '30%' }} />
            <br />
            Self
          </button>
        )}
  
        <br />
        <br />
        {isFormOpen && (
          <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
              <h2>Personal Details</h2>
              {formStep === 1 && (
                <div>
                  <div className="inputContainer">
                    <div className="floating-label">
                      <label htmlFor="mobile">Mobile No:</label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        style={inputStyle}
                        pattern="[0-9]*"
                        placeholder="Mobile No"
                        required
                      />
                    </div>
                  </div>
                  <div className="inputContainer">
                    <div className="floating-label">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Id"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
  
              {formStep === 2 && (
                <div>
                  <div className="inputContainer">
                    <div className="floating-label">
                      <label htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputContainer">
                    <div className="floating-label">
                      <label htmlFor="date">Date:</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
  
              <button type="submit" style={buttonStyle}>
                {formStep === 1 ? 'Proceed' : 'Proceed'}
              </button>
            </form>
          </div>
        )}
  
        {showTableData && (
          <div style={{ maxWidth: '800px', margin: 'auto' }}>
            <table style={tableStyle}>
            <thead style={theadStyle}>
          <tr>
            <th>Mobile No</th>
            <th>Email Id</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Action</th>
         
          </tr>
        </thead>
              
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} style={rowStyle}>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.date}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        style={{ border: 'none', outline: 'none', background: 'none', padding: 0 }}
                      >
                        <AiTwotoneDelete style={{ height: '20px', width: '20px' }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  export default SelfComponent;
  