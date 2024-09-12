import React, { useEffect } from 'react'
import { axiosinstance } from '../../config/axiosinstance'

const Cartpage = () => {
    const fetchcartitems=async()=>{
        try{
            const response=await  axiosinstance({
                mathod:"GET",
                url:"/getCart"
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
fetchcartitems();
    })
  return (
    <div>





    </div>
  )
}

export default Cartpage