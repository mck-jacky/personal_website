import React, { useState } from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Document, Page } from 'react-pdf';
import cv from '../../images/cv_ChakKiMa_20220828.pdf'
import cv1 from '../../images/cv1.png'
import cv2 from '../../images/cv2.png'

const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Header/>
      
      <div className='cv-container'>
        {/* <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>

        <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={2} />
        </Document> */}

        <img className='cv' src={cv1} alt="cv"/>
        <img className='cv' src={cv2} alt="cv"/>
      </div>
    
      <Footer/>
    </div>
  )
}

export default ResumePage