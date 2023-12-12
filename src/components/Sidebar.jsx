
import React from 'react';
import { NavLink } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

const Sidebar = () => {
    return (
        <div className='bg-slate-800 h-screen w-40'>
            <div className=' mt-10'>
                <div className='flex text-slate-400'>
                <div className='ml-2'>
                    <LockIcon/>
                </div>
            <p className='text-center mb-7 ml-2'>
                <NavLink to={'/list'}>
                    Transaction
                </NavLink>
            </p>

                </div>
                <div className='flex text-slate-400'>
              <div className='ml-2'>
                    <BrowserUpdatedIcon/>
                </div>
            <p className='text-center ml-2'>
                <NavLink to={'/'}>
                    Add Transaction
                </NavLink>
            </p>
              </div>
            </div>
           
        </div>
    );
};

export default Sidebar;
