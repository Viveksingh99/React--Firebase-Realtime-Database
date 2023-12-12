import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Header = () => {
    return (
        <div className='bg-slate-700 h-20 flex items-center justify-between'>
        <div className="flex items-center text-white">
          <AccountBalanceIcon fontSize='large' />
          <span className='text-sm'>Banking System<br/> CORE Transaction</span>
        </div>
          <p className='text-white text-2xl'>Communication Management</p>
          <div>

          </div>
      </div>
      

    );
};

export default Header;
