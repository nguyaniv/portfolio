'use client';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import PhoneAndroid from '@mui/icons-material/Phone';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-transparent px-2 text-white rounded-2xl py-5 w-full flex justify-between">
      <Link className="" href={'/'}>
        Portfolio
      </Link>
      <div className="flex gap-x-2 md:pr-14">
        <Link
          className=""
          href={'https://www.linkedin.com/in/yaniv-shabi-29b845201'}
        >
          <LinkedInIcon />
        </Link>

        <Link className="" href={'https://github.com/nguyaniv'}>
          <GithubIcon />
        </Link>
        <Link className="" href={'tel:0547602025'}>
          <PhoneAndroid />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
