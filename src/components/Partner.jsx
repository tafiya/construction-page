import Image from "next/image";

const Partner = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-24'>
        <div className=' flex lg:flex-row flex-col justify-between gap-6'>
            <div className="lg:px-0 px-3 lg:w-1/2">
            <h1 className="text-4xl font-semibold">Your Partner in international
            Construction Recruitment
            </h1>
             <p className=" my-6 ">"Hire & Fire Job s platform for the construction industry connects companies with skilled
professionals globally. We streamline recruitment processes, ensuring precise matches for
project requirements through our extensive network and industry specific expertise. Our
platform offers tailored solutions for construction companies, facilitating efficient hiring
and workforce management. Partner with us to access a pool of qualified talent and
optimize your construction projects with ease."</p>
<button className=" btn btn-primary text-white font-light text-md">Contact Us</button>
            </div>
            <div className="lg:px-0 px-3 lg:w-1/2">
            <Image
          src="/image/Image 1.jpg"
          width={720}
          height={380}
          alt="Picture of the author"
        />
            </div>
        </div>
        </div>

    );
};

export default Partner;