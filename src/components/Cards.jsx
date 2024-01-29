import { useState } from "react";
import PropTypes from "react-proptypes";
import { Link } from "react-router-dom";
import {FaHeart} from 'react-icons/fa'
import '../App.css'

const Cards = ({ item }) => {
    const [favourite, setFavourite] = useState(false)

    const favouriteHandler = ()=> {
        setFavourite(!favourite)
    }
    
  return (
    <div>
      <div className="card max-w-96 shadow-xl border border-slate-100 m-4 relative">
        <div className={`rating gap-1 absolute right-0 top-0 p-3 heart-star bg-green ${favourite ? "text-rose-500" : "text-white"}`}
          onClick={favouriteHandler}
        >
            <FaHeart className="h-4 w-4 cursor-pointer"/>
        </div>
        <Link to={`/menu/${item.id}`}>
            <figure>
                <img src={item.image} className="hover:scale-105 transition-all duration-200 p-2 max-h-64" alt="Dummy Image" />
            </figure>
        </Link>
        <div className="card-body p-4">
          <Link to={`/menu/${item.id}`}><h2 className="card-title max-w-full">{item.name}</h2></Link>
          <p>Description</p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className="semibold"><span className="text-sm text-red">$</span> {item.price}</h5>
            <button className="btn bg-green text-white max-h-10">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  item: PropTypes.object,
};
