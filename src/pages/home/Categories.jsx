
const categoryItems = [
  { id: 1, title: "Main Dish", description: "(86 dishes)", image: "/images/home/category/img1.png"},
  { id: 2, title: "BreakFast", description: "(12 breakfast)", image: "/images/home/category/img2.png"},
  { id: 3, title: "Dessert", description: "(48 dessert)", image: "/images/home/category/img3.png"},
  { id: 4, title: "Browse All", description: "(255 Items)", image: "/images/home/category/img4.png"}
]
const Categories = () => {
  return (
    <div className="py-16 section-container">
        <div className="text-center">
            <p className="p-1 subtitle1">Customer Favourites</p>
            <h2 className="title1">Popular Categories</h2>
        </div>
        {/* Category Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-12 gap-4">
          {
            categoryItems.map((item, i)=> (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl shadow-lg py-6 px-5 mx-auto my-2 w-64 text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                <div className="flex w-full justify-center items-center mx-auto">
                  <img src={item.image} alt="Nothing" className="bg-[#c1f1c6] p-5 w-28 h-28 rounded-full"/>
                </div>
                <div className="mt-5 space-y-1">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Categories