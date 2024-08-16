import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-24 w-1/2 m-auto'>
            <div className='md:flex md:flex-row hidden md:visible '>
                <div className="card rounded-none md:w-96 shadow-xl">
                    <figure>
                        <Image className='relative'
                            src="/image/Background image 2.jpg"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                        />
                    </figure>
                    <div className="absolute mt-10 px-12 text-white">
                        <h2 className="card-title text-3xl mb-2 ">Contact Us</h2>
                        <p>Say Someting to start a live chat</p>

                        <div className="my-8 items-start  flex gap-4">
                        <div className='bg-primary p-3 rounded-full'>
            <FaLocationDot className='' size={'1rem'} />
            </div>
                            <div>
                                <h2 className="card-title ">Company Location</h2>
                                <p>Bucureşti Sectorul 1, Strada ING.
                                    ZABLOVSCHI, Nr. 10, BIROUL 1</p>
                            </div>

                        </div>
                        <div className="mb-8 items-start flex gap-4">
                        <div className='bg-primary p-3 rounded-full'>
            <FaPhoneVolume className='' size={'1rem'} />
            </div>
                            <div>
                                <h2 className="card-title ">Phone Number</h2>
                                <p>+(40) 7372 28622</p>
                            </div>

                        </div>

                        <div className=" mb-8 flex items-start gap-4">
                        <div className='bg-primary p-3 rounded-full'>
            <MdEmail className='' size={'1rem'} />
            </div>
                            <div>
                                <h2 className="card-title ">Email Address</h2>
                                <p>career@hireandfire.eu</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full md:max-w-md border bg-white px-10 pb-10 pt-4 shadow-md dark:bg-zinc-900">

                    <form className="w-full pt-8 pb-3 space-y-6">
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 border-black"
                                id="name"
                                placeholder="Your Name"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 border-black"
                                id="_email"
                                placeholder="Your Email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 border-black"
                                id="_email"
                                placeholder="Your Email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <textarea
                                className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 border-black"
                                id="_message"
                                placeholder="what's in your mind"
                                name="message"
                            />
                        </div>
                        <div className="m-auto w-1/2">
                        <button className="btn btn-primary text-white font-light text-md">Send Message</button>
                        </div>
                        
                    </form>
                </div>
            </div>

  <div className="w-full md:max-w-md md:hidden   border bg-white px-10 pb-10 pt-4 shadow-md dark:bg-zinc-900">

                    <form className="w-full pt-8 pb-3 space-y-6">
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 border-black"
                                id="name"
                                placeholder="Your Name"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 border-black"
                                id="_email"
                                placeholder="Your Email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 border-black"
                                id="_email"
                                placeholder="Your Email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-black dark:text-zinc-400">

                            <textarea
                                className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 border-black"
                                id="_message"
                                placeholder="what's in your mind"
                                name="message"
                            />
                        </div>
                        <div className="m-auto w-1/2">
                        <button className="btn btn-primary text-white font-light text-md">Send Message</button>
                        </div>
                        
                    </form>
                </div>
        </div>
    );
};

export default Contact;