import React, { useState } from 'react'

const PDFuploder = () => {
  const [pdfFile,setPdfFile] = useState(null)
  const [viewPdf,setViewPdf] = useState(null)
  const fileType = ['application/pdf']

  const handleChange = (e)=>{
      let selectedFile = e.target.files[0]
      if(selectedFile){
        if(selectedFile && fileType.includes(selectedFile.type)){
          let reader = new FileReader()
          reader.readAsDataURL(selectedFile)
          reader.onload = (e)=>{
            setPdfFile(e.target.result)
          }
        }else{
          setPdfFile(null)
        }
      }else{
        console.log("pls select");
      }
  }
  const handleSubmit = (e)=>{
    e.preventDefult()
    if(pdfFile !== null){
      setViewPdf(pdfFile)
    }else{
      setViewPdf(null)
    }
 }
  return (
    <div className="container mx-auto mt-16 p-4">
      <form className="w-full max-w-sm mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="pdfFile">
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
          onChange={handleSubmit}
        >
          View PDF
        </button>
      </form>
      <h2 className="mt-6 text-lg font-semibold">View PDF</h2>
      <div className="pdf-container mt-4 border border-gray-400 p-4 rounded">
        
      </div>
    </div>
  )
}

export default PDFuploder
