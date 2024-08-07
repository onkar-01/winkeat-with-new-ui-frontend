import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "./OrderCard";
import { BASE_URL } from "../../helper";
import Loader from "../Loader";


const AllOrder = ({setDashboardDate}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.searchKeyword);
  const productData = useSelector((state) => state.product.productList);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [date, setDate] = useState(new Date().toLocaleDateString().split("/").reverse().join("-"));
  const fetchProducts = async () => {
    try {
      setDashboardDate(date);
      let token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        console.error("Token not found in local storage");
        return;
      }
      const res = await fetch(`${BASE_URL}/api/v1/orders/all/?keyword=${keyword}&startDate=${date}&endDate=${date}`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      if (res.status === 401) {
        // Handle token expiration or invalid token here.
        // You might need to refresh the token or log the user out.
        console.error("Token is invalid or expired");
        return;
      }

      if (res.ok) {
        const data = await res.json();
        setData(data.orderItems);
        setLoading(false);
        // dispatch(setProductList(data.products));
      } else {
        console.error("Error fetching products:", res.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchProducts();
    const interval = setInterval(fetchProducts, 10000);
  
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [keyword,date]);

  console.log(date);

  console.log(data);
  if (loading === true) {
    return <Loader loading={loading} />;
  }
  return (
    <div className="mt-5">
     <input 
  type="date" 
  value={date} 
  onChange={(e) => setDate(e.target.value)} // Update the date state with the selected value
  className="border border-gray-300 rounded-md p-2.5 w-full dark:bg-boxdark dark:border-strokedark" 
/> <div className="rounded-sm bg-white lg:px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Order ID
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Product Name
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Ordered By
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Quantity
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Payment Status
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white"></th>
              </tr>
            </thead>
            <tbody>
              {data.length !== 0 ? (
                data.map((product) => <OrderCard item={product} fetchProducts={fetchProducts} />)
              ) : (
                <div className="text-center">
                  <h1 className="text-center text-lg">No products found.</h1>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
