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
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a5', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth/imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('invoice.pdf');
    });
    };
  
  
  
  return(
    <>
  <Container className=' px-2' ref={pdfRef}>
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
  <button className='px-5 mt-4 py-2 w-full text-sm tracking-wide text-white transition-colors duration-200 bg-[#ff742ecb] rounded-lg shrink-0 sm:w-auto hover:bg-[#ff742e] dark:hover:bg-blue-500 dark:bg-blue-600' onClick={downloadPDF}>Download PDF</button>
  </Center>  </>

)}

export default Invoice
