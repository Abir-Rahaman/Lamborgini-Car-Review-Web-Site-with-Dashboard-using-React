import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Custom-Link/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className=' d-flex justify-content-center mt-3' >
           <CustomLink className='nav'  to='/' > Home </CustomLink>
           <CustomLink className='nav' to='/Review' > Reviews </CustomLink>
           <CustomLink className='nav' to='/Dashboard' > Dashboard </CustomLink>
           <CustomLink className='nav' to='/jhjjjj' > Blogs </CustomLink>
           <CustomLink className='nav' to='/jhjjj' > About </CustomLink>
        </nav>
    );
};

export default Header;