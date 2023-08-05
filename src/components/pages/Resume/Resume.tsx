import React from 'react';
import BuildPage from '../../common/BuildPage';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeComponent() {
    const fileName = "/resume/Michael_Zhou_Resume_23-24.pdf";

    return (
        <div className="m-auto p-8">
            <Document
            file={ fileName }
            className="flex justify-center"
            >
                <a href={fileName}>
                    <Page
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    />
                </a>
            </Document>
        </div>
        
        
    )
};

export default function Resume(props: any) {
    return (
        BuildPage(props, ResumeComponent)
    )
}
