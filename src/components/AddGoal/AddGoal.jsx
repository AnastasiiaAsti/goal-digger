import React from 'react'

export default function AddGoal() {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder='add your goal' className='form-control rounded' />
                <input type="text" name="links" placeholder='add relevant link' className='form-control rounded' />
                <select name="category" id="">
                    <option value="Travel">Travel</option>
                    <option value="Experience">Experience</option>
                    <option value="Things">Things</option>
                    <option value="Skills">Skills</option>
                </select>
                <button type='submit' className='btn form-control rounded border'>ADD</button>
            </form>
        </div>
    )
}
