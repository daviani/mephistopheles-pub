import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import workerSrc from '../pdf-worker'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

export default function PDFViewer ({ allMenus }) {

  const { locale } = useRouter()
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess ({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  console.log(allMenus[0].pdfFile.url)

  return (
    <>
      <h3 className='text-center text-yellow-500 text-5xl m-8 font-Bastille '>
        {i18n.cards.title[locale]}
      </h3>
      {allMenus.length >= 1 &&
      <div className='pdf__container'>
        <Document className='pdf__document'
                  file={allMenus[0].pdfFile.url}
                  onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              size='A4'
              className='pdf__page'
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
      }
    </>
  )
}
