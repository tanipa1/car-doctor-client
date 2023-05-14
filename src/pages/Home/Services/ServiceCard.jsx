
const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-8 pt-10">
                    <img src={img} alt="Shoes" className=" h-52 rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>

                    <div className="flex gap-6 justify-between">
                        <p className="text-[#FF3811]">Price:${price}</p>
                        <button className="text-[#FF3811] bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ff3811" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/></svg></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;