import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import workerSrc from '../pdf-worker'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

export default function PDFViewer ({ allCartes }) {
    const [numPages, setNumPages] = useState(3)

    function onDocumentLoadSuccess ({ numPages: nextNumPages }) {
        setNumPages(nextNumPages)
    }

    return (
        <>
            {allCartes &&
                allCartes.map((carte) =>
                    <div key={carte.id} className='m-5'>
                        <h3 className="text-center text-yellow-500 text-5xl m-8 bastille ">
                            {carte.titre}
                        </h3>
                        <div className="pdf__container">
                            <Document className="pdf__document"
                                file={carte.fichierPdf.url}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                {Array.from({ length: numPages }, (_, index) => (
                                    <Page
                                        size="A4"
                                        className="pdf__page"
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
