import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import Cards from '../../components/Cards';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'



const SpecialDishes = () => {
    const [recipies, setRecipies] = useState([])
    const slider = useRef(null)

   

    useEffect(() => {
      fetch("/menu.json")
        .then((res)=> res.json())
        .then((data)=> {
            const specials = data.filter((item)=> item.category === "popular")
            setRecipies(specials)
        })
    
    
    }, [])
    
    // Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          // {
          //   breakpoint: 1030,
          //   settings: {
          //     slidesToShow: 3,
          //     slidesToScroll: 3,
          //     infinite: true,
          //     dots: true
          //   }
          // },
          {
            breakpoint: 821,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
            }
          },
          // {
          //   breakpoint: 600,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1,
              
          //   }
          // },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        
    }
  return (
    <div className="section-container py-16 relative">
        <div className='flex flex-col xxs:flex-row justify-between items-center'>
        <div className="xxs:text-left text-center">
            <p className="subtitle1">Special Dishes</p>
            <h1 className="title1 max-w-[20rem] md:max-w-[30rem] ">Standout Dishes From Our Menu</h1>
        </div>

        <div className='mt-6'>
          <button onClick={()=> slider?.current.slickPrev()} className={`btn p-2 shadow-md rounded-full ml-5 border-none hover:bg-gray-200 focus:bg-green`}>
            <FaAngleLeft className='w-8 h-8 p-1' />
          </button>
          <button onClick={()=> slider?.current.slickNext()} className={`btn p-2 shadow-md rounded-full ml-5 border-none hover:bg-gray-200 focus:bg-green`}>
            <FaAngleRight className='w-8 h-8 p-1' />
          </button>
        </div>

        </div>

        <Slider ref={slider} {...settings} className='overflow-hidden mt-6 xxs:mt-10'>
          {
            recipies.map((item, i)=> (
                <Cards key={i} item={item}/>
            ))
          }
        </Slider>
        
    </div>
  )
}

export default SpecialDishes

