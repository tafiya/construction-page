import Image from 'next/image';
import { FaPlay } from "react-icons/fa";
const Rules = () => {
    return (
        <div className='max-w-[1400px] mx-auto mt-12 mb-24'>
            <div>
                <h1 className="text-4xl text-center font-semibold">Roles we Fillnt
                </h1>
                <div className='flex items-center justify-center '>
                    <p className=" my-6 text-center  w-[700px]">We fill roles in construction, matching skilled professionals like engineers, supervisors,
                        and laborers to projects requiring expertise and efficiency.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-center mb-24 mt-6">
                    <div className="card p-4 bg-base-100  shadow-xl">
                        <figure className="">
                            <Image
                                src="/image/Image 2.jpg"
                                width={400}
                                height={380}
                                alt="Picture of the author"
                            />
                        </figure>
                        <div className="card-body px-2 pb-3 items-center text-center">
                            <h2 className="card-title">Project Managers</h2>
                            <p>Oversee construction projects, ensuring
                                timelines, budgets, and quality meet objectives
                                with effective team coordination.</p>
                            <div className="card-actions">
                                <button className=" text-secondary flex gap-2 items-center">Contact Us <FaPlay /></button>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 bg-base-100  shadow-xl">
                        <figure className="">
                            <Image
                                src="/image/Image 3.jpg"
                                width={400}
                                height={380}
                                alt="Picture of the author"
                            />
                        </figure>
                        <div className="card-body px-2 pb-3 items-center text-center">
                            <h2 className="card-title">Site Supervisors</h2>
                            <p>Site supervisors oversee daily operations,
                                ensuring safety, efficiency, and daily compliance on
                                construction   construction sites.</p>
                            <div className="card-actions">
                                <button className=" text-secondary flex gap-2 items-center">Contact Us <FaPlay /></button>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 bg-base-100  shadow-xl">
                        <figure className="">
                            <Image
                                src="/image/Image 4.jpg"
                                width={400}
                                height={380}
                                alt="Picture of the author"
                            />
                        </figure>
                        <div className="card-body px-1 pb-3 items-center text-center">
                            <h2 className="card-title">Engineers </h2>
                            <p>Construction engineers manage projects,ensuring designs are implemented effectively, meeting safety and quality standards.</p>
                            <div className="card-actions">
                                <button className=" text-secondary flex gap-2 items-center">Contact Us <FaPlay /></button>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 bg-base-100 shadow-xl">
                        <figure className="">
                            <Image
                                src="/image/Image 5.jpg"
                                width={400}
                                height={380}
                                alt="Picture of the author"
                            />
                        </figure>
                        <div className="card-body px-2 pb-3 items-center text-center">
                            <h2 className="card-title">Architects</h2>
                            <p>Architects design buildings and structures,
                                balancing functionality, aesthetics, and client
                                requirements with technical expertise.</p>
                            <div className="card-actions">
                                <button className=" text-secondary flex gap-2 items-center">Contact Us <FaPlay /></button>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="card p-4 bg-base-100  shadow-xl">
                        <figure className="">
                            <Image
                                src="/image/Image 6.jpg"
                                width={400}
                                height={380}
                                alt="Picture of the author"
                            />
                        </figure>
                        <div className="card-body px-2 pb-3 items-center text-center">
                            <h2 className="card-title">Skilled Tradespeople</h2>
                            <p>Construction skilled tradespeople specialize in
various crafts, ensuring quality workmanship in
building and renovation projects.</p>
                            <div className="card-actions">
                                <button className=" text-secondary flex gap-2 items-center">Contact Us <FaPlay /></button>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 bg-base-100  shadow-xl">
                        <figure className="">
                            <Image
                                src="/image/Image 7.jpg"
                                width={400}
                                height={380}
                                alt="Picture of the author"
                            />
                        </figure>
                        <div className="card-body px-2 pb-3 items-center text-center">
                            <h2 className="card-title">General Laborers</h2>
                            <p>General laborers support construction projects
by performing tasks such as loading, unloading,
and site cleaning.</p>
                            <div className="card-actions">
                                <button className=" text-secondary flex gap-2 items-center">Contact Us <FaPlay /></button>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>

                </div>
             

            </div>

        </div>
    );
};

export default Rules;