import { RxCodesandboxLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../dummyData/AuthContext';
import UserNavBar from './UserNavBar';

const navLinks = ['plugins', 'pricing', 'about'];

const Navbar = () => {
  const { user } = useAuth();
  
  return (
    <header className='h-17 fixed w-full p-3 bg-white shadow-md z-50'>
      <nav className='flex justify-between items-center h-full'>
        <div className='flex'>
          <Link to='/'>
            <div className='site-logo flex items-center'>
              <RxCodesandboxLogo className='text-4xl text-bright-blue-500 m-2' />
              <div className='text-2xl font-bold text-gray-800'>
                Marc<span className='font-extralight text-gray-600'>Pro</span>
              </div>
            </div>
          </Link>
          <div className='ml-4 inline-block'>
            <img
              src='https://www.wohhup.com/wp-content/uploads/2021/02/woh-hup.svg'
              alt=''
              className='h-14 p-3 inline-block'
            />
          </div>
          <div className='ml-4'>
            <img
              src='https://assets-us-01.kc-usercontent.com/1ca05609-4ad1-009e-bc40-2e1230b16a75/290606c0-4f8a-401b-a70e-434ccc4a36b0/tekla%20structures.png?w=400&h=300&fit=clip'
              alt=''
              className='h-14'
            />
          </div>
        </div>
        <div className='h-full'>
          <ul className='flex flex-endtext-lg text-gray-600 capitalize cursor-pointer font-medium h-full text-xl'>
            {navLinks.map((navLink) => (
              <li
                key={uuidv4()}
                className='p-2 hover:text-black mr-2 inline-block'
              >
                <Link to={`/${navLink}`}>{navLink}</Link>
              </li>
            ))}
            {user ? (
              <UserNavBar displayName={user.name} avatar={user.avatar} />
            ) : (
              <div className="flex items-center gap-4">
                <Button type="button" btnType="btn-secondary" linkTo="/login">
                  Login
                </Button>
                <Button type="button" btnType="btn-primary" linkTo="/signup">
                  Sign Up
                </Button>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
