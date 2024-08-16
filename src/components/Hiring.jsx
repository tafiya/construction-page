import Image from 'next/image';

const Hiring = () => {
    return (
        <div className='max-w-[1400px] mx-auto mb-24'>
            <div>
                <h1 className="text-4xl text-center font-semibold">Benefits of Hiring Through Us
                </h1>
                <div className='flex items-center justify-center '>
                    <p className=" my-6 text-center  w-[700px]">"Benefit from our efficient hiring process, matching qualified candidates to your construction
                    projects, ensuring quality and reliability."</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-24 justify-center items-center">
                    <div className="card px-1 bg-white border-b-8 border-secondary shadow-xl  text-black ">
                        <div className="card-body items-center text-center  relative">
                            <Image className='-mt-20 absolute '
                                src="/Icon/first.png"
                                width={110}
                                height={110}
                                alt="Picture of the author"
                            />
                            <h2 className="card-title mt-4">Access to Skilled Labor</h2>
                            <p>We Provide a pool of highly trained
                                professtional ready to contribute to your
                                projects globally.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                    <div className="card bg-white border-b-8 border-secondary shadow-xl  text-black ">
                        <div className="card-body items-center text-center  relative">
                            <Image className='-mt-[90px] absolute '
                                src="/Icon/cost.png"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                            <h2 className="card-title mt-4">Cost Effective Solutions</h2>
                            <p>Our service are designed to save you time and
                                reduce hiring costs by taking care of the entire
                                recruitment process</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                    <div className="card bg-white px-1 border-b-8 border-secondary shadow-xl  text-black ">
                        <div className="card-body px-1 items-center text-center  relative">
                            <Image className='-mt-20 absolute '
                                src="/Icon/third.png"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                            <h2 className="card-title mt-4">Compliance & Documentation</h2>
                            <p>We handle all necessary paperwork, ensuring
compliance with international labor  laws & international <br></br>
regulations.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                    <div className="card bg-white border-b-8 border-secondary shadow-xl  text-black ">
                        <div className="card-body items-center text-center  relative">
                            <Image className='-mt-[75px] absolute '
                                src="/Icon/trailord.png"
                                width={110}
                                height={110}
                                alt="Picture of the author"
                            />
                            <h2 className="card-title mt-4">Tailored Recruitment</h2>
                            <p>We customize our recruitment process to
                                match the specific requirements of your
                                projects, ensuring a perfect fit.</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Hiring;