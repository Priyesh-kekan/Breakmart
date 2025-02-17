import React, { useState } from 'react';

const ImportCSVDialog = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState('');  // Added state for file input

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  const handleBrowseClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-[800px] w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Import user from CSV</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="mb-4">
            <button className="text-green-500 hover:text-green-600">
              Download Sample
            </button>
            <p className="text-sm text-gray-500">Download Sample file to arrange data in required format.</p>
          </div>
          
          <div className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded"
                placeholder="Choose file..."
                value={selectedFile}
                readOnly
              />
              <input
                id="fileInput"
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileChange}
              />
              <button 
                onClick={handleBrowseClick}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded border"
              >
                Browse
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">Accepted formats: csv, Max file size 100KB</p>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            You can also copy and paste directly from spreadsheet.
          </p>

          <div className="border rounded-lg overflow-hidden mb-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border-b">Email_Required</th>
                    <th className="px-4 py-2 border-b">Username_Required</th>
                    <th className="px-4 py-2 border-b">Password_Required</th>
                    <th className="px-4 py-2 border-b">FirstName_Required</th>
                    <th className="px-4 py-2 border-b">LastName_Required</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(13)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2 border-b"></td>
                      <td className="px-4 py-2 border-b"></td>
                      <td className="px-4 py-2 border-b"></td>
                      <td className="px-4 py-2 border-b"></td>
                      <td className="px-4 py-2 border-b"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
              Validate
            </button>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportCSVDialog;