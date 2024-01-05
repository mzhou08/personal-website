import React from 'react';
import BuildPage from '../../common/BuildPage';

import { Document, Page, pdfjs} from "react-pdf";

function ResumeComponent() {
    const fileName = "/resume/resume.pdf";
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <a href={fileName}>
            <Document file={ fileName }>
                <Page
                pageNumber={1}
                // scale={2}
                renderMode='svg'
                renderTextLayer={false}
                renderAnnotationLayer={false}
                />
            </Document>
        </a>
    )
};

export default function Resume(props: any) {
    return (
        BuildPage(props, ResumeComponent)
    )
}
