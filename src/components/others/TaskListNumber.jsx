import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between screen mt-10 gap-5'>
        <div className='w-[45%] bg-red-500 px-5 py-6 rounded-2xl'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-blue-500 px-5 py-6 rounded-2xl'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.completed}</h2>
            <h3 className='text-2xl font-semibold'>Completed Task</h3>
        </div>
        <div className='w-[45%] bg-green-500 px-5 py-6 rounded-2xl'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.active}</h2>
            <h3 className='text-2xl font-semibold'>Accepted Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-500 px-5 py-6 rounded-2xl'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  ) 
}

export default TaskListNumber