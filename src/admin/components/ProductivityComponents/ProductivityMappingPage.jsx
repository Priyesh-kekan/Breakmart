import React, { useState } from 'react';

const ProductivityMappingPage = () => {
    const departments = [
      'C-SUITE',
      'CUSTOMER SUCCESS',
      'Client sales',
      'Data entry',
      'EXTRA/TEST',
      'Enterprise Team',
      'Events',
      'Marketing',
      'Human Resources',
      'Engineering',
      'Product Management',
      'Finance',
      'Legal',
      'Operations',
    ];

  const initialLabels = [
    { 
      name: 'Analytics',
      states: { productive: true, neutral: false, unproductive: false }
    },
    { 
      name: 'Banking & Finance',
      states: { productive: true, neutral: false, unproductive: false }
    },
    { 
      name: 'Calling & Phone',
      states: { productive: true, neutral: false, unproductive: true }
    },
    { 
      name: 'Chat & Messaging',
      states: { productive: true, neutral: false, unproductive: false }
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState('C-SUITE');
  const [labels, setLabels] = useState(initialLabels);
  const [showDialog, setShowDialog] = useState(false);
  const [newLabel, setNewLabel] = useState({
    name: '',
    description: ''
  });

  const handleStateClick = (labelIndex, stateType) => {
    setLabels(prevLabels => {
      const newLabels = [...prevLabels];
      newLabels[labelIndex] = {
        ...newLabels[labelIndex],
        states: {
          ...newLabels[labelIndex].states,
          [stateType]: !newLabels[labelIndex].states[stateType]
        }
      };
      return newLabels;
    });
  };

  const handleAddLabel = (e) => {
    e.preventDefault();
    if (newLabel.name.trim()) {
      setLabels(prevLabels => [...prevLabels, {
        name: newLabel.name.trim(),
        states: { productive: false, neutral: false, unproductive: false }
      }]);
      setNewLabel({ name: '', description: '' });
      setShowDialog(false);
    }
  };

  return (
    <div className="w-full max-w-6xl bg-gray-50 rounded-lg p-4">
      {/* Main Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="text-blue-600 text-xl">⟳</div>
          <h1 className="text-lg font-medium">Productivity Mapping</h1>
          <div className="text-gray-400 cursor-help">ⓘ</div>
        </div>
        <button 
          onClick={() => setShowDialog(true)}
          className="bg-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300"
        >
          Label Mapping
        </button>
      </div>

      {/* Add Label Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Add New Label</h2>
              <button 
                onClick={() => setShowDialog(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleAddLabel} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Label Name
                </label>
                <input
                  type="text"
                  value={newLabel.name}
                  onChange={(e) => setNewLabel({...newLabel, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter label name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newLabel.description}
                  onChange={(e) => setNewLabel({...newLabel, description: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter label description"
                  rows="3"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Label
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex gap-4">
        {/* Departments Panel */}
        <div className="w-1/3 bg-white rounded-lg shadow-sm overflow-y-auto max-h-[600px]">
          {departments.map((dept) => (
            <div
              key={dept}
              className={`px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedDepartment === dept ? 'bg-blue-600 text-white' : ''
              }`}
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept}
            </div>
          ))}
        </div>

        {/* Labels Panel */}
        <div className="w-2/3 bg-white rounded-lg shadow-sm overflow-y-auto max-h-[600px]">
          {labels.map((label, labelIndex) => (
            <div key={labelIndex} className="px-4 py-3 border-b flex items-center justify-between">
              <span className="text-gray-700">{label.name}</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleStateClick(labelIndex, 'productive')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    label.states.productive ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  PRODUCTIVE
                </button>
                <button 
                  onClick={() => handleStateClick(labelIndex, 'neutral')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    label.states.neutral ? 'bg-gray-400 text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  NEUTRAL
                </button>
                <button 
                  onClick={() => handleStateClick(labelIndex, 'unproductive')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    label.states.unproductive ? 'bg-red-400 text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  UNPRODUCTIVE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductivityMappingPage;