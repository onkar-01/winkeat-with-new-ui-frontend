import React, { useRef } from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Logo from './Logo'
import PageCounter from './PageCounter'
import InvoiceInfo from './InvoiceInfo'
import LineItems from './LineItems'
import Totals from './Totals'
import Footer from './Footer';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Center } from '@chakra-ui/react'

const Container = styled.div`
`



const Invoice = ({data}) => {

  const refPdf = useRef();

  const downloadPdf = () => {
    const input = refPdf.current;
  
    // Get the width and height of the entire div that contains the component
    const inputWidth = input.offsetParent.offsetWidth;
    const inputHeight = input.offsetParent.offsetHeight;
  
    html2canvas(input, { width: inputWidth, height: inputHeight, backgroundColor: "#fff" }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
  
      // Calculate the aspect ratio of the component
      const aspectRatio = inputHeight / inputWidth;
  
      // Calculate the height of the canvas to cover the full component
      const canvasHeight = inputWidth * aspectRatio;
  
      // Create a PDF with landscape orientation
      const pdf = new jsPDF("p","mm",[inputWidth, canvasHeight],true);
  
      // Get the dimensions of the PDF page
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
  
      // Calculate the position of the image on the page
      const imageX = (pageWidth - inputWidth) / 2;
      const imageY = (pageHeight - canvasHeight) / 2;
  
      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", imageX, imageY, inputWidth, canvasHeight);
  
      // Save the PDF
      pdf.save("invoice.pdf").compress('FAST');
    });
  };
  
  
  
  return(
    <>
  <Container className=' px-2' ref={refPdf}>
    <div className='flex flex-col justify-center'>
    <GlobalStyle />
    <PageCounter />
    <Logo />
    <InvoiceInfo
      invoiceNumber={data.order_id}
      invoiceDate={new Date(data.createdAt).toLocaleDateString()}
      clientName={data?.user?.name}
      companyName={data?.vendor?.name}
      companyEmail={data?.vendor?.email}
    />

    <LineItems
      items={data.orderItems}
    />
    <Totals
      // accountNumber="123567744"
      // routingNumber="120000547"
      // dueDate="May 30th, 2024"
      status={data.paymentStatus}
      tax={"₹ "+data.tax}
      total={"₹ "+ data.totalPrice}
    />
    <Footer data={data} />
    </div>
  </Container>
<Center>
  <button className='px-5 mt-4 py-2 w-full text-sm tracking-wide text-white transition-colors duration-200 bg-[#ff742ecb] rounded-lg shrink-0 sm:w-auto hover:bg-[#ff742e] dark:hover:bg-blue-500 dark:bg-blue-600' onClick={downloadPdf}>Download PDF</button>
  </Center>  </>

)}

export default Invoice
