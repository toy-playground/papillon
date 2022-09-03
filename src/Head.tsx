import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

import { transitionDurationClass } from '@/constant/tw';
import logo from '@/logo.png';

const Head = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex w-full justify-between items-center px-5 xl:px-0 max-w-[1280px] xl:mx-auto mb-6'>
        <div className='flex items-center'>
          <img
            src={logo}
            alt='logo'
            width={40}
            height={40}
            className=' rounded-full'
          />
          <span className=' pl-2 font-bold text-xl'>Papillon</span>
        </div>
        <IconButton
          aria-label='github'
          size='small'
          onClick={() => {
            window.open('https://github.com/toy-playground/papillon', '_blank');
          }}
        >
          <GitHubIcon className={transitionDurationClass} />
        </IconButton>
      </div>
    </div>
  );
};

export default Head;
