import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BASE_URL } from '../helper';
import Invoice from '../components/Invoice/Invoice';

const InvoicePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data,setData] = useState([]);
    const id = searchParams.get('order_id');
    console.log(id);
    const fetchData = async()=>{
        const res = await fetch(`${BASE_URL}/api/v1/order/${id}`, {
            method: "GET",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          });
          if (res.ok) {
            const data = await res.json();
            setData(data.order);
          } else {
            console.error("Error fetching products:", res.statusText);
        }
    }

    useEffect(() => {
        fetchData();
    },[id]);

  return (
    <Invoice data={data} />
  )
}

export default InvoicePage;