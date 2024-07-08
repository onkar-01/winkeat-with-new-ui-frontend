import React, { Suspense, useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addToCart } from "../slices/cartSlice";
import { setProductList } from "../slices/productSlice";
import { setVendorId } from "../slices/vendorSlice";
import { BASE_URL } from "../helper";
import Loader from "./Loader";
import { IoBagAdd } from "react-icons/io5";

const MenuCard = ({ product, handler }) => {
  const { name, user, price, images, _id } = product;
  const image = images[0].url;
  const id = _id;
  return (
    <div className=" w-[45%] sm:w-auto lg:w-50  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src={image}
          alt="Product"
          className="h-30 w-full lg:h-40 lg:w-50 object-cover rounded-t-xl"
        />
        <div className="px-2 py-[10px]   lg:w-50">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {user.name}
          </span>
          <div className="flex justify-between min-h-[40px]  w-full">
          <p className="text-sm sm:text-lg font-bold text-black min-h-[40px] block capitalize">
            {name}
          </p>
          <p className="text-sm sm:text-lg w-[40%] font-semibold text-black cursor-auto ">
              ₹ {price}
            </p>
            </div>
          <div className="flex items-center w-full ">
            
            <del>
              {/* <p className="text-xsm text-gray-600 cursor-auto ml-2">$199</p> */}
            </del>
            <div
              className="ml-auto w-full cursor-pointer flex justify-between bg-[#ff742e] px-[10px] lg:px-[10px] py-[5px] rounded-[10px] flex "
              onClick={() =>
                handler({ name, user, price, image, id, quantity: 1 })
              }
            > 
            <p className="text-[#fff] font-semibold text-[12px]">Add to Cart</p>
            <IoBagAdd style={{color:"#fff"}}/>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const MenuItems = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.searchKeyword);
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setVendorId(id));
        const res = await fetch(
          `${BASE_URL}/api/v1/${id}/products?keyword=${keyword}`,
          {
            method: "GET",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          dispatch(setProductList(data.products));
          setLoading(false);
        } else {
          console.error("Error fetching products:", res.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id, keyword]);

  const addToCartHandler = (options) => {
    dispatch(addToCart(options));
    console.log(options);
    toast.success("Added to cart");
  };

  if (loading === true) {
    return <Loader loading={loading} />;
  }

  return (
    <section className=" flex flex-auto flex-wrap justify-items-center justify-center sm:justify-start lg:mx-[30px] gap-x-5 gap-y-10 md:gap-y-10 md:gap-x-10 lg:gap-y-10 lg:gap-x-10 mt-[20px] mb-5 mr-auto ml-auto sm:mr-5">
      {productData?.map((product) => (
        <MenuCard
          product={product}
          handler={addToCartHandler}
          key={product._id}
        />
      ))}
    </section>
  );
};

export default MenuItems;
