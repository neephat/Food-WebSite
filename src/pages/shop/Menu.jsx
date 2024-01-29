import { useEffect, useState } from "react";
import Cards from '../../components/Cards.jsx'
import { FaFilter } from "react-icons/fa";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState("all")
  const [sortOptions, setsortOptions] = useState("default")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)

  // Loading data
  useEffect(() => {
    // fetching data
      const fetchData = async()=> {
        try {
          const response = await fetch("/menu.json")
          const data = await response.json();
          setMenu(data)
          setFilteredItems(data)
        } catch (error) {
          console.log("Error fetching data", error);
        }
      }
      fetchData()
  }, [])
  
  // filtering data based on category
  const itemsFiltered = (category)=>{
    const filtered = category === "all" ? menu : menu.filter((item)=> item.category === category)
    setFilteredItems(filtered)
    setCategory(category)
    setCurrentPage(1)
  }
  // showing all data
  const showAllData = ()=> {
    setFilteredItems(menu)
    setCategory("all")
    setCurrentPage(1)
  }

  // sorting based on A-Z, Z-A, Low-High pricing
  const handleSortChange = (option)=>{
    setsortOptions(option)
    let sortedItems = [...filteredItems]

    switch (option) {
      case "A-Z":
        sortedItems.sort((a,b)=> a.name.localeCompare(b.name))
        break;
      case "Z-A":
        sortedItems.sort((a,b)=> b.name.localeCompare(a.name))
        break;
      case "Low-High":
        sortedItems.sort((a,b)=> a.price - b.price)
        break;
      case "High-Low":
        sortedItems.sort((a,b)=> b.price - a.price)
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems)
    setCurrentPage(1)
  }

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItem = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const pagination = (pageNo)=> setCurrentPage(pageNo)

  return (
    <div className="">
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r py-16 from-[#FAFAFA] from-[0%] to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          {/* texts */}
          <div className="space-y-7 px-4 text-center">
            <h2 className="title1">
              For The Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Come with family & fill the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="btn bg-green rounded-full px-8 py-3 font-semibold text-white hover:bg-gray-300 hover:text-black border-none">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop section */}
      <div className="section-container py-16">
        {/* sorting and filtering */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-1 justify-between items-center mb-8">
          {/* all categories */}
          <div className="flex flex-row justify-start md:items-center md:gap-10 gap-4 flex-wrap">
            <button onClick={showAllData} className={category === "all" ? "active": ""}>All</button>
            <button onClick={()=>itemsFiltered("salad")} className={category === "salad" ? "active": ""}>Salad</button>
            <button onClick={()=>itemsFiltered("pizza")} className={category === "pizza" ? "active": ""}>Pizza</button>
            <button onClick={()=>itemsFiltered("soup")} className={category === "soup" ? "active": ""}>Soups</button>
            <button onClick={()=>itemsFiltered("dessert")} className={category === "dessert" ? "active": ""}>Desserts</button>
            <button onClick={()=>itemsFiltered("drinks")} className={category === "drinks" ? "active": ""}>Drinks</button>
          </div>
          {/* sorting based on prices and order */}
          <div className="flex justify-center items-center">
            <div className="bg-black p-2 rounded-sm outline-none">
              <FaFilter className="h-4 w-4 text-white"/>
              </div>
            {/* sorting options */}
            <select name="sort" id="sort" onChange={(e)=> handleSortChange(e.target.value)} value={sortOptions}
              className="bg-black text-white p-2 py-[5px] rounded-sm outline-none"
            >
              
                <option value="default">Default</option>  
                <option value="A-Z">A-Z</option> 
                <option value="Z-A">Z-A</option> 
                <option value="Low-High">Low-High</option> 
                <option value="High-Low">High-Low</option>
              </select>
                
          </div>
        </div>
        
        {/* products card */}
        <div className="grid md:grid-cols-3 xxs:grid-cols-2 grid-cols-1">
          {
            currentItem.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>

      {/* pagination */}
      <div className="flex justify-center flex-wrap my-4">
        {
          Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_, index)=>(
            <button key={index+1} className={`mx-2 my-2 h-12 w-12 rounded-full ${currentPage === index+1 ? "bg-green" : "bg-gray-200"}`} onClick={()=> pagination(index+1)}>{index+1}</button>
          ))
        }
      </div>
    </div>
  );
};

export default Menu;
