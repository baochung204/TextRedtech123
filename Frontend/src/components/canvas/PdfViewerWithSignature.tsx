import React, { useEffect, useRef } from 'react';
import { getDocument, GlobalWorkerOptions, PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';

// Thiết lập workerSrc cho PDF.js
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
    (await import('pdfjs-dist')).version
}/pdf.worker.js`;

interface PdfViewerProps {
    pdfUrl: string;
}

const PdfViewerWithSignature: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const loadPdf = async () => {
            try {
                // Tải tài liệu PDF
                const pdf: PDFDocumentProxy = await getDocument(pdfUrl).promise;
                const page: PDFPageProxy = await pdf.getPage(1);

                if (canvasRef.current) {
                    const canvas = canvasRef.current;
                    const context = canvas.getContext('2d');

                    if (context) {
                        const viewport = page.getViewport({ scale: 1 });
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport,
                        };

                        // Hiển thị trang PDF lên canvas
                        await page.render(renderContext);
                    }
                }
            } catch (error) {
                console.error('Error loading PDF:', error);
            }
        };

        loadPdf();
    }, [pdfUrl]);

    return (
        <div>
            <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
        </div>
    );
};

export default PdfViewerWithSignature;
