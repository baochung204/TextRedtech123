import React, { useState } from 'react';
import PdfViewerWithSignature from 'src/components/canvas/PdfViewerWithSignature'; // Giả sử bạn đã có component này

const PdfUploader = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Lấy tệp đầu tiên trong danh sách
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
        } else {
            alert('Vui lòng chọn tệp PDF.');
            setPdfFile(null);
        }
    };

    const getPdfUrl = () => {
        if (pdfFile) {
            return URL.createObjectURL(pdfFile); // Tạo URL tạm thời cho tệp PDF
        }
        return '';
    };

    return (
        <div>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {pdfFile && <PdfViewerWithSignature pdfUrl={getPdfUrl()} />}
        </div>
    );
};

export default PdfUploader;
