import React from 'react';
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const Dashboard = () => {
  return (
    <Flowbite>
      <DarkThemeToggle className='flex size-10'/>
    </Flowbite>
  )
}

export default Dashboard