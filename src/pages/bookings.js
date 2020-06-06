import React from 'react';
import Layout from '../components/Layout';

const Bookings = () => {
 return (
   <Layout>
     <iframe 
       src="https://app.acuityscheduling.com/schedule.php?owner=19233061" 
       title="Schedule Appointment" 
       width="100%" 
       height="800" 
       frameBorder="0"
     />
   </Layout>
  );
} 

export default Bookings;