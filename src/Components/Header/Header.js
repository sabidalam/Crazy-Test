import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='sm: relative bg-orange-300'>
            <div onClick={() => setOpen(!open)} className="sm: absolute top-0 right-0 h-6 w-6 md:hidden">

                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }

            </div>
            <nav className='flex justify-between items-center bg-orange-200 py-3'>
                <h2 className='text-3xl font-bold text-blue-600 md:ml-40'>Crazy Test</h2>
                <div className={`absolute md:static duration-500 ease-in md:mr-40 ${open ? 'top-6 ' : 'top-[-120px]'}`}>
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