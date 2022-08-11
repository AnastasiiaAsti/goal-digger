// import React, { useState } from 'react'

// export default function AddGoal(goals, setGoals) {

//     const addGoal = (evt) => {
//         evt.preventdefault();
//         setGoals([...goals])
//     };
//     return (
//         <div>
//             <form onSubmit={addGoal } className='form-group m-4'>
//                 <input type="text" name="name" placeholder='add your goal' className='form-control rounded mt-5' />
//                 <input type="text" name="links" placeholder='add relevant link' className='form-control rounded mt-4' />
//                 <select className='form-control mt-4' name="category" id="">
//                     <option value="Travel">Travel</option>
//                     <option value="Experience">Experience</option>
//                     <option value="Things">Things</option>
//                     <option value="Skills">Skills</option>
//                 </select>
//                 <button type='submit' className='btn form-control rounded border mt-4'>ADD</button>
//             </form>
//         </div>
//     )
// }
