import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import EveryTask from '../others/EveryTask'


    const AdminDashboard = () => {
      return (
        <div className='h-screen w-full p-10'>
            <Header/>
            <CreateTask/>
            <EveryTask/>
        </div>
      )
    }
    
    export default AdminDashboard