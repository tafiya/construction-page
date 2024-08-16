import Image from 'next/image';
import Link from 'next/link';
// import logo from '..'
const Navbar = () => {
  const navOptions = <>
    <li><Link className='hover:text-secondary font-medium' href='/'>About Us</Link></li>
    <li><Link className='hover:text-secondary flex gap-2 font-medium' href='/'>Employers  <Image
          src="/Icon/Icon_1-removebg-preview.png"
          width={20}
          height={20}
          alt="Picture of the author"
        /></Link></li>
    <li ><Link className='hover:text-secondary flex gap-2 font-medium' href='/products'>Find Worker <Image
          src="/Icon/Icon_1-removebg-preview.png"
          width={20}
          height={20}
          alt="Picture of the author"
        /></Link></li>
    <li><Link className='hover:text-secondary font-medium' href='/contact'>Industry</Link></li>
    <li><Link className='hover:text-secondary flex gap-2 font-medium' href='/contact'>Resources  <Image
          src="/Icon/Icon_1-removebg-preview.png"
          width={20}
          height={20}
          alt="Picture of the author"
        /></Link></li>
    <li><button className='btn btn-primary text-white font-light text-md' >Contact Us</button></li>
  </>
  return (
    <div className='bg-white'>
    <div className="navbar max-w-[1400px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navOptions}
          </ul>
        </div>
        <Link href={'/'}> <Image
          src="/Icon/Logo.jpg"
          width={80}
          height={20}
          alt="Picture of the author"
        /> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex  items-center gap-8 menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end ">
        <Link href={'/'} className='flex items-end gap-2'>    <Image
          src="/Icon/Country_Icon.png"
          width={30}
          height={20}
          alt="Picture of the author"
        />  <Image
        src="/Icon/Icon_1-removebg-preview.png"
        width={20}
        height={20}
        alt="Picture of the author"
      /> </Link>
      </div>
    </div>
    </div>

  );
};

export default Navbar;