import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='sm: relative bg-orange-300'>
            <div onClick={() => setOpen(!open)} className="sm: absolute top-4 right-0 h-6 w-6 mr-1 md:hidden">

                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }

            </div>
            <nav className='flex justify-between items-center bg-orange-200 py-3'>
                <h2 className='text-3xl font-bold text-blue-600 ml-4 md:ml-14 lg:ml-40'>Crazy Test</h2>
                <div className={` bg-orange-200 absolute md:static duration-500 ease-in md:mr-14 lg:mr-40 ${open ? 'top-5 right-7' : 'top-[-120px] right-7'}`}>
                    <Link className='mr-6 font-bold text-blue-600 hover:text-black hover:underline' to='/'>Home</Link>
                    {/* <Link className='mr-6 font-bold text-blue-600 hover:text-black hover:underline' to='/quiz'>Quiz</Link> */}
                    <Link className='mr-6 font-bold text-blue-600 hover:text-black hover:underline' to='/statistics'>Statistics</Link>
                    <Link className='font-bold text-blue-600 hover:text-black hover:underline' to='/blog'>Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;