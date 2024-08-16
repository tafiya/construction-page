import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLocationDot, FaPhoneVolume, FaPlay, FaTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-primary'>
      <footer className="footer border-b-2 max-w-[1400px] mx-auto font-light text-white py-10 gap-6">
        <div className='w-96'>
          <Image
            src="/Icon/Logo.jpg"
            width={80}
            height={20}
            alt="Picture of the author"
          />
          <p>Hire & Fire is a cutting-edge job website designed to
            connect employers with top-tier talent across various
            industries. Utilizing advanced matching algorithms, it
            streamlines the hiring process, ensuring quick and
            effective placements. Employers benefit from efficient
            tools for posting jobs, screening candidates, and
            managing applications. Ideal for businesses aiming for
            growth, Hire & Fire is your go-to resource for all
            recruitment needs. Please note that it operates on an
            employer basis and does not provide jobs directly to
            workers.</p>
          <button className=" btn btn-accent font-light text-white">Contact Us</button>
        </div>
        <nav className=' mx-6'>
          <h6 className="text-2xl font-light underline">Quick Links </h6>
          <Link href='/' className="link text-lg font-light my-3 link-hover flex items-center gap-2"><FaPlay />Home</Link >
          <Link href='/' className="link text-lg font-light  mb-3 link-hover flex items-center gap-2"><FaPlay />About Us</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Services</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Industries We Serve</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Blog & News</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />FAQ</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Contact Us</Link >
        </nav>
        <nav className=''>
          <h6 className="text-2xl font-light underline">Our Services</h6>
          <Link href='/' className="link text-lg font-light my-3 link-hover flex items-center gap-2"><FaPlay />Permanent Requitment</Link >
          <Link href='/' className="link text-lg font-light  mb-3 link-hover flex items-center gap-2"><FaPlay />Contract Staffing</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Housing & Accomodation Support</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Compliance and Legal Support</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Workforce Planning</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Background Checks</Link >
          <Link href='/' className="link text-lg font-light mb-3 link-hover flex items-center gap-2"><FaPlay />Onboarding Support</Link >
        </nav>
        <div className=''>
          <h6 className="text-2xl font-light">Get In Touch</h6>
          <p className=' text-lg'>Subscribe Our Newsletter to
            Get Latest Update & News</p>
          <div class="flex my-4">

            <input type="text" class="w-full p-4 max-w-[500px] bg-white text-base rounded-l-lg pl-2 text-black   outline-0" placeholder="Your Email Here" id="" />
            <input type="button" value="Subscribe" class="bg-accent p-4 rounded-tr-lg rounded-br-lg text-white r" />
          </div>

          <div className="my-4  flex gap-4">
            <div className='bg-accent p-3 rounded-full'>
            <FaLocationDot className='' size={'1rem'} />
            </div>
          
            <div>

              <p>Bucureşti Sectorul 1, Strada ING.
                ZABLOVSCHI, Nr. 10, BIROUL 1</p>
            </div>

          </div>
          <div className="mb-4 items-center  flex gap-4">
          <div className='bg-accent p-3 rounded-full'>
            <FaPhoneVolume className='' size={'1rem'} />
            </div>
        
            <div>

              <p>+(40) 7372 28622</p>
            </div>

          </div>

          <div className=" mb-4 items-center flex gap-4">
          <div className='bg-accent p-3 rounded-full'>
            <MdEmail className='' size={'1rem'} />
            </div>
      
            <div>

              <p>career@hireandfire.eu</p>
            </div>

          </div>
        </div>

      </footer>
      <footer className="footer max-w-[1400px] mx-auto text-white  py-4">
        <aside className="grid-flow-col items-center">
          <p>
          © Copyright 2024 “Hire & Fire” All Rights Reserved.
          </p>
        </aside>
        <nav className=' flex gap-8'>
          <div>
            <Link href={'/'}>Privacy Policy</Link>
          </div>
          <div>
            <Link href={'/'}>Terms & Conditions</Link>
          </div>
          <div>
            <Link href={'/'}>Cookie Policy</Link>
          </div>
        </nav>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid items-center grid-flow-col gap-4">
            <h1>Follow Us</h1>
          <div className='bg-white text-accent p-3 rounded-full'>
            <FaFacebookF  size={'1rem'} />
            </div>
            <div className='bg-white text-accent p-3 rounded-full'>
            <AiFillInstagram   size={'1rem'} />
            </div>
            <div className='bg-white text-accent p-3 rounded-full'>
            <FaTwitter   size={'1rem'} />
            </div>
            <div className='bg-white text-accent p-3 rounded-full'>
            <FaTelegramPlane  size={'1rem'} />
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;