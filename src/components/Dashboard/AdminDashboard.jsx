import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='px-20 py-10'>
        <Header changeUser = {props.changeUser}/>
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard