import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ['application/pdf'];
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          console.log(e.target.result);
          setPdfFile(e.target.result);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("Please select a file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div className="container mx-auto mt-16 p-4">
      <form className="w-full max-w-sm mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdfFile"> {/* Correct 'for' to 'htmlFor' */}
            Upload PDF
          </label>
          <input
            type="file"
            id="pdfFile"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept=".pdf"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          View PDF
        </button>
      </form>
      <h2 className="mt-6 text-lg font-semibold">View PDF</h2>
      <div className="pdf-container mt-4 border border-gray-400 p-4 rounded">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.1.266/build/pdf.worker.min.js">
          {viewPdf && <Viewer fileUrl={viewPdf} plugins={defaultLayoutPluginInstance} />}
          {!viewPdf && <>No pdf </>}
        </Worker>
      </div>
    </div>
  );
};

export default PDFUploader;
