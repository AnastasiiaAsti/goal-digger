import React from 'react'

export default function GoalListItem() {
    return (
        <div className='d-flex justify-content-between m-4 border-bottom'>
            <button className="btn">x</button>
            <h3 className='text-center bg-transparent'>
                Goal
            </h3>
            <input type="checkbox" className='m-3' />
        </div>
    )
}
