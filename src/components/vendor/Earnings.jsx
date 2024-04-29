import React, { useEffect, useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Loader from '../Loader';
import axios from 'axios';
import { BASE_URL } from '../../helper';


const Earnings = ({date}) => {

const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/total-sales?startDate=${date}&endDate=${date}`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
      });
    setLoading(false);
  }, [date]);

  console.log(data);
    if (loading === true) {
        return <Loader loading={loading} />;
      }
  return (
    <div className='w-full flex flex-wrap justify-around '>
    <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[30%] !mb-2 h-[130px] sm:h-[150px] md:h-[130px] lg:h-[130px] p-4 border-2 flex justify-between items-center text-[50px] sm:text-[60px] md:text-[50px] lg:text-[50px] font-bold border-[#ff742e] rounded-md shadow-md'>
      <p className={`text-[14px] sm:text-[16px] md:text-[14px] lg:text-[14px] flex items-center px-[10px] rounded-[10px] ${data.earningsIncreasePercentage < 0 ? "bg-red-500": "bg-success"} text-[white]`}>
        {data.earningsIncreasePercentage < 0 ? <MdArrowDropDown className='mr-4' size={20} /> : <MdArrowDropUp className='mr-4' size={20} />}{data.earningsIncreasePercentage}%
      </p>
      <div className='flex flex-col justify-between items-center'>
        <h1 className='p-4 flex items-center text-[50px] sm:text-[60px] md:text-[50px] lg:text-[50px] font-bold'>
          ₹ {data.totalEarnings ?? 0}
        </h1>
        <p className='mr-2 text-[14px] min-w-max sm:text-[16px] md:text-[14px] flex flex-row  lg:text-[14px]'>Total Sales : {data.widthdrawaled ? <p className='text-success ml-1'>withdrawn</p> : <p className='text-red-600 ml-1'>Not withdrawn yet</p>
      }</p>
      </div>
    </div>
    <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[30%] !mb-2  h-[130px] sm:h-[150px] md:h-[130px] lg:h-[130px] p-4 border-2 flex justify-between items-center text-[50px] sm:text-[60px] md:text-[50px] lg:text-[50px] font-bold border-[#ff742e] rounded-md shadow-md'>
      <p className={`text-[14px] sm:text-[16px] md:text-[14px] lg:text-[14px] flex items-center px-[10px] rounded-[10px] ${data.salesIncreasePercentage < 0 ? "bg-red-500": "bg-success"} text-[white]`}>
      {data.salesIncreasePercentage < 0 ? <MdArrowDropDown className='mr-4' size={20} /> : <MdArrowDropUp className='mr-4' size={20} />} {data.salesIncreasePercentage}%
      </p>
      <div className='flex flex-col justify-between items-center'>
        <h1 className='p-4 flex items-center text-[50px] sm:text-[60px] md:text-[50px] lg:text-[50px] font-bold'>
          {data.totalSales ?? 0}
        </h1>
        <p className='mr-2 text-[14px] sm:text-[16px] md:text-[14px] lg:text-[14px]'>Total Orders</p>
      </div>
    </div>
    <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-[130px] sm:h-[150px] md:h-[130px] lg:h-[130px] p-4 border-2 flex justify-between items-center text-[50px] sm:text-[60px] md:text-[50px] lg:text-[50px] font-bold border-[#ff742e] rounded-md shadow-md'>
      <p className='mr-2 text-[14px] sm:text-[16px] md:text-[14px] lg:text-[14px]'>Ballence :</p>
      <div className='flex flex-col justify-between items-center'>
        <h1 className='p-4 flex items-center text-[50px] sm:text-[60px] md:text-[50px] lg:text-[50px] font-bold'>
          ₹ {data.balance ?? 0}
        </h1>
      </div>
    </div>
  </div>
  )
}

export default Earnings