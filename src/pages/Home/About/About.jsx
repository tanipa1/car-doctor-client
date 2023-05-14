import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className=" absolute right-16 border-8 border-white top-1/2 w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-xl text-[#FF3811] font-bold'>About Us</h3>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field!</h1>
                    <p className="pt-5 text-sm text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
                    <p className="pt-3 pb-7 text-sm text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
                    <button className="btn banner-btn">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;