import React from "react";
import { Link,useNavigate } from "react-router-dom";

const TermsAndCondition = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className=" mx-auto p-4 md:p-6 lg:p-8">
      <header className="bg-[#ff742e] text-white px-4 py-[70px] mb-[50px]">
        <img onClick={()=>navigate("/")} src='logo2.png' alt='logo' className='w-[60px] cursor-pointer h-[60px] mx-auto' />
        <h1 className="text-[35px] font-bold mt-[20px] mb-2">Terms and Conditions</h1>
      </header>
      <section className="mb-4 container">
        <article className="prose">
          <p>Welcome to winkeat.com!</p>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Winkeat's Food Ordering Platform, located at{" "}
            <Link to="https://winkeat.com" className="text-blue-600 hover:text-blue-800">
              https://winkeat.com
            </Link>
            .
          </p>
          <p>
            By accessing this platform we assume you accept these terms and
            conditions. Do not continue to use winkeat.com if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement, and Disclaimer Notice and all Agreements: "Vendor",
            "You" and "Your" refer to you, the person accessing this platform
            and compliant to the Company's terms and conditions. "The Company",
            "Ourselves", "We", "Our" and "Us", refer to our Company. "Party",
            "Parties", or "Us", refer to both the Vendor and ourselves. All
            terms refer to the offer, acceptance, and consideration of payment
            necessary to undertake the process of our assistance to the Vendor
            in the most appropriate manner for the express purpose of meeting
            the Vendor's needs in respect of provision of the Company's stated
            services, in accordance with and subject to, prevailing law of in.
            Any use of the above terminology or other words in the singular,
            plural, capitalization, and/or he/she or they, are taken as
            interchangeable and therefore as referring to same.
          </p>
          <p className="text-md my-[20px]">By accessing and using this website, you agree to abide by the following terms and conditions:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
                        Only the vendor can cancel an order if it is not canceled by the customer after it is placed.
                    </li>
                    <li className="mb-2">
                        If an order is canceled or rejected by the vendor, your refund will be initiated.
                    </li>
                </ul>
        </article>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">Cookies</h2>
        <article className="prose">
          <p>
            We employ the use of cookies. By accessing winkeat.com, you agreed to
            use cookies in agreement with the Winkeat's Privacy Policy.{" "}
          </p>
          <p>
            Most interactive platforms use cookies to let us retrieve the user's
            details for each visit. Cookies are used by our platform to enable
            the functionality of certain areas to make it easier for people
            visiting our platform. Some of our affiliate/advertising partners
            may also use cookies.
          </p>
        </article>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">License</h2>
        {/* <article className="prose"> */}
          <p>
            Unless otherwise stated, Winkeat and/or its licensors own the
            intellectual property rights for all material on winkeat.com. All
            intellectual property rights are reserved. You may access this from
            winkeat.com for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc list-inside">
            <li>Republish material from winkeat.com</li>
            <li>Sell, rent or sub-license material from winkeat.com</li>
            <li>Reproduce, duplicate or copy material from winkeat.com</li>
            <li>Redistribute content from winkeat.com</li>
          </ul>
          <p>
            Parts of this platform offer an opportunity for users to post and
            exchange opinions and information in certain areas of the platform.
            Winkeat does not filter, edit, publish or review Comments prior to
            theirpresence on the platform. Comments do not reflect the views
            and opinions of Winkeat, its agents and/or affiliates. Comments
            reflect the views and opinions of the person who post their views and
            opinions. To the extent permitted by applicable laws, Winkeat shall
            not be liable for the Comments or for any liability, damages or
            expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this platform.
          </p>
          <p>
            Winkeat reserves the right to monitor all Comments and to remove any
            Comments which can be considered inappropriate, offensive or causes
            breach of these Terms and Conditions.
          </p>
          <p>
            You warrant and represent that:
          </p>
          <ul className="list-disc list-inside">
            <li>
              You are entitled to post the Comments on our platform and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>
          <p>
            You hereby grant Winkeat a non-exclusive license to use, reproduce,
            edit and authorize others to use, reproduce and edit any of your
            Comments in any and all forms, formats or media.
          </p>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">Hyperlinking to our Content</h2>
        {/* <article className="prose"> */}
          <p>
            The following organizations may link to our Platform without prior
            written approval:
          </p>
          <ul className="list-disc list-inside">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Platform in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Platform.
            </li>
          </ul>
          <p>
            These organizations may link to our home page, to publications or to
            other Platform information so long as the link: (a) is not in any
            way deceptive; (b) does not falsely imply sponsorship, endorsement
            or approval of the linking party and its products and/or services;
            and (c) fits within the context of the linking party's site.
          </p>
          <p>
            We may consider and approve other link requests from the following
            types of organizations:
          </p>
          <ul className="list-disc list-inside">
            <li>commonly-known consumer and/or business information sources;</li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p>
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves or
            to our accredited businesses; (b) the organization does not have any
            negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of Winkeat; and
            (d) the link is in the context of general resource information.
          </p>
          <p>
            These organizations may link to our home pageso long as the link: (a)
            is not in any way deceptive; (b) does not falsely imply sponsorship,
            endorsement or approval of the linking party and its products or
            services; and (c) fits within the context of the linking party's
            site.
          </p>
          <p>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our platform, you must inform us by
            sending an e-mail to Winkeat. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Platform, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
          </p>
          <p>
            Approved organizations may hyperlink to our Platform as follows:
          </p>
          <ul className="list-disc list-inside">
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>
              By use of any other description of our Platform being linked to
              that makes sense within the context and format of content on the
              linking party's site.
            </li>
          </ul>
          <p>
            No use of Winkeat's logo or other artwork will be allowed for linking
            absent a trademark license agreement.
          </p>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">iFrames</h2>
        <article className="prose">
          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
        </article>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">Content Liability</h2>
        <article className="prose">
          <p>
            We shall not be held responsible for any content that appears on
            your Platform. You agree to protect and defend us against all
            claims that are rising on your Platform. No link(s) should appear on
            any Platform that may be interpreted as libelous, obscene or
            criminal, or which infringes, otherwise violates, or advocates the
            infringement or other violation of, any third party rights.
          </p>
        </article>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">Reservation of Rights</h2>
        <article className="prose">
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Platform. You approve to immediately remove
            all links to our Platform upon request. We also reserve the right to
            amend these terms and conditions and its linking policy at any time.
            By continuously linking to our Platform, you agree to be bound to
            and follow these linking terms and conditions.
          </p>
        </article>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">Removal of links from our
          platform</h2>
        <article className="prose">
          <p>
            If you find any link on our Platform that is offensive for any
            reason, you are free to contact and inform us at any moment. We will
            consider requests to remove links but we are not obligated to do so
            or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this platform is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the platform remains available or that the material on
            the platform is kept up to date.
          </p>
        </article>
      </section>
      <section className="mb-4 container">
        <h2 className="text-2xl font-bold">Disclaimer</h2>
        <article className="prose">
          <p>
            To the maximum extent permitted by applicable law, we excludeall
            representations, warranties, and conditions relating to our
            platform and the use of this platform. Nothing in this disclaimer
            will:
          </p>
          <ul className="list-disc list-inside">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section and
            elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p>
            As long as the platform and the information and services on the
            platform are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </article>
      </section>
        <section className="mb-4 container">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <article className="prose ">
            <p>
                If you have any questions or concerns about our Terms and Conditions,
                please contact us at{" "}
                <Link to="mailto: winkeat.info@gmail.com" className="text-blue-600 hover:text-blue-800">
                winkeat.info@gmail.com
                </Link>
            </p>
            </article>
        </section>
   

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

export default TermsAndCondition;