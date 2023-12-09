

// import React from 'react';
// import './App.css'; 
// import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
// import "primereact/resources/primereact.min.css";                  //core css
// import "primeicons/primeicons.css";                                //icons
 
// import Form from './components/Form';
// import SelfComponent from './components/SelfComponent';

// import { Card } from 'primereact/card';

// function App() {
//   return (
// <div>
//   <div className='assignmentName '>Clover Infotech Assignment</div>

// <div className="container"assignmentName>
   
      
//    <Card>
//    <SelfComponent className="SelfComponent" />
//    </Card>
//    <Card>
//    <Form  className="Form"  />
//    </Card>




//  </div>


// </div>

   
    
//   );
// }

// export default App;



import React, { useState } from 'react';
import { Card } from 'primereact/card';
import './App.css'; 
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

import Form from './components/Form';
import SelfComponent from './components/SelfComponent';

const ParentComponent = () => {
  const [showSelfComponent, setShowSelfComponent] = useState(true);
  const [showFormComponent, setShowFormComponent] = useState(true);

  const toggleCards = (clickedCard) => {
    if (clickedCard === 'SelfComponent') {
      setShowSelfComponent(true);
      setShowFormComponent(false);
    } else if (clickedCard === 'Form') {
      setShowSelfComponent(false);
      setShowFormComponent(true);
    }
  };

  return (
    <div>

<div className='assignmentName '><b>Clover Infotech Assignment</b></div>

      <div onClick={() => toggleCards('SelfComponent')}>
        {showSelfComponent && (
          <Card>
            <SelfComponent className="SelfComponent" />
          </Card>
        )}
      </div>
      <div onClick={() => toggleCards('Form')}>
        {showFormComponent && (
          <Card>
            <Form className="Form" />
          </Card>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
