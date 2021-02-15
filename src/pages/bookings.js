import React from 'react';
import App from '../components/App/Index';

const Bookings = () => {
 return (
   <App>
     <iframe 
       src="https://app.acuityscheduling.com/schedule.php?owner=19233061" 
       title="Schedule Appointment" 
       width="100%" 
       height="800" 
       frameBorder="0"
     />
   </App>
  );
} 

export default Bookings;