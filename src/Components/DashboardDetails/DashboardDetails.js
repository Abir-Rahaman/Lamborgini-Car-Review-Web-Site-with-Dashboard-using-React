import React from 'react';
import { Bar, BarChart } from 'recharts';

const DashboardDetails = ({chart}) => {
    const {investment} =chart;
    return (
        
            <BarChart width={150} height={40} data={chart}>
            <Bar dataKey={investment} fill="#8884d8" />
           </BarChart>

     
    
            
        
    );
};

export default DashboardDetails;