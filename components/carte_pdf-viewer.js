import {useState} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
import workerSrc from '../pdf-worker'
import {useRouter} from 'next/router'
import i18n from '../lib/i18n'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

export default function PDFViewer({allCartes}) {

  const {locale} = useRouter()
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({numPages: nextNumPages}) {
    setNumPages(nextNumPages)
  }

  console.log('1',  allCartes)
  return (
    <>
      {allCartes &&
      allCartes.map((carte) =>
        <div key={carte.id}>
          <h3 className='text-center text-yellow-500 text-5xl m-8 bastille '>
            {carte.titre}
          </h3>
          <div className='pdf__container'>
            <Document className='pdf__document'
                      file={carte.fichierPdf.url}
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
        </div>

      )
      }




    </>
  )
}
