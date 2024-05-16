import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const ReturnRefundPolicy = () => {
    const navigate = useNavigate();
    return (
        <>
        <header className="bg-[#ff742e] text-white px-4 py-[70px] mb-[50px]">
                <img onClick={()=>navigate("/")} src='logo2.png' alt='logo' className='w-[60px] cursor-pointer h-[60px] mx-auto' />
                <h1 className="text-3xl font-bold my-2 mb-4">Return and Refund Policy</h1>
                    <p className="mb-4 mx-auto w-[80%]"><em>Last updated: May 12, 2024</em></p>
            </header>
                <div className=" sm:mx-auto sm:w-[80%] mx-[10px] ">
            <p className="mb-4">Thank you for choosing Winkeat for your food orders.</p>
            <p className="mb-4">If, for any reason, you are not entirely satisfied with your purchase, we invite you to review our policy on refunds and returns. This Return and Refund Policy has been tailored for Winkeat, the food ordering application.</p>

            <h2 className="text-xl font-bold mb-2">Interpretation and Definitions</h2>
            <div className="mb-4">
                <h3 className="font-bold mb-2">Interpretation</h3>
                <p>The capitalized words have meanings defined under the following conditions. The definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </div>

            <div className="mb-4">
                <h3 className="font-bold mb-2">Definitions</h3>
                <p>For the purposes of this Return and Refund Policy:</p>
                <ul>
                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us", or "Our" in this Agreement) refers to Winkeat.</li>
                    <li><strong>Goods</strong> refer to the food items offered for sale on the Service.</li>
                    <li><strong>Orders</strong> mean a request made by You to purchase Goods from Us.</li>
                    <li><strong>Service</strong> refers to the Winkeat application.</li>
                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
            </div>

            <h2 className="text-xl font-bold mb-2">Order Cancellation Policy</h2>
<div className="mb-4">
    <p>Once you have placed an order, it cannot be cancelled by the customer. Orders can only be cancelled or rejected by the vendor.</p>
    <p>If the vendor cancels or rejects your order, we will initiate the refund process immediately.</p>
    <p>We will reimburse you no later than 14 days from the day on which we receive confirmation of order cancellation from the vendor. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.</p>
</div>


            <h2 className="text-xl font-bold mb-2">Conditions for Returns</h2>
            <div className="mb-4">
                <p>Please note that due to the nature of food items:</p>
                <ul>
                    <li>Orders cannot be returned after delivery is completed.</li>
                    <li>Refunds will only be issued in case of Order cancellation by the vendor or rejection of the Order.</li>
                    <li>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</li>
                </ul>
            </div>

            <h2 className="text-xl font-bold mb-2">Shipping and Delivery</h2>
                <div className="mb-4">
                    <p>At Winkeat, we offer counter delivery only. Shipping is not available for our food items.</p>
                </div>

            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <div>
                <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                <ul>
                    <li>By email: <a href="mailto:winkeat.info@gmail.com" className="text-blue-500 hover:underline">winkeat.info@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <div className=" bg-[#efeded] !w-full text-[#ff742e] flex flex-wrap justify-center  gap-[10px] font-josefin-sans  text-center sm:text-right bottom-0 right-0 px-4 py-2  sm:w-auto">
  <h1 className="flex text-[12px] flex-row flex-wrap justify-center sm:justify-end">
    © 2024, Winkeat{" "}
    <Link
      to="/return-and-refund-policy"
      className="hover:underline mx-[10px] flex items-center"
    >
      Return and Refund Policy
    </Link>
    <span className="hidden sm:inline">|</span> 
    <Link
      to="/privacy-policy"
      className="hover:underline mx-[10px] flex items-center"
    >
      Privacy Policy
    </Link>
    <span className="hidden sm:inline">|</span> {/* Show pipe separator on small screens */}
    <Link
      to="/terms-and-condition"
      className="hover:underline mx-[10px] flex items-center"
    >
      Terms and Conditions
    </Link>{" "}
    and{" "}
    <Link
      to="/contact-us"
      className="hover:underline flex items-center ml-[10px]"
    >
      Contact Us
    </Link>
  </h1>
</div>
        </>
    );
};

export default ReturnRefundPolicy;
