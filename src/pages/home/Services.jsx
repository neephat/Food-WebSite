

const serviceList = [
    {id: 1, title: "Catering", description: "Delight your guest with our flavours and presentation", image: "/images/home/services/icon1.png"},
    {id: 2, title: "Fast Delivery", description: "We deliver your order promptly to your door", image: "/images/home/services/icon2.png"},
    {id: 3, title: "Online Odering", description: "Explore menu and order with ease using our Online Ordering", image: "/images/home/services/icon3.png"},
    {id: 4, title: "Gift Cards", description: "Give the gift of exceptional dining with Foodi gift cards", image: "/images/home/services/icon4.png"}
]

const Services = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle1">Our Story & Services</p>
            <h2 className="title1">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable dining expericences and offer exceptional services, blendin culinary artistry with warm hospitality.
            </p>
            <button className="btn bg-green rounded-full px-8 py-3 font-semibold text-white hover:bg-gray-300 hover:text-black border-none">
            Explore
          </button>
          </div>
        </div>

        {/* card section */}
        <div className="md:w-1/2 ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          {serviceList.map((item)=> (
            <div key={item.id} className="bg-white text-green rounded-md max-w-72 my-4 shadow-md py-4 px-2 mx-auto text-center cursor-pointer hover:border-indigo-600 duration-200 transition-all hover:border">
              <img src={item.image} className="mx-auto" alt=""/>
              <h5 className="pt-3 font-semibold">{item.title}</h5>
              <p className="text-[#90bd95] text-wrap">{item.description}</p>
            
          </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
