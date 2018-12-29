import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ExtractImport = (props) => {
  const DROPDOWN_OPTIONS = [
    { value: 'csv', label: 'CSV' },
    { value: 'json', label: 'JSON' },
    { value: 'xml', label: 'XML' }
  ];
  const { 
    browseDirectories, 
    fileName, 
    handleFilenameChange, 
    handleFileTypeChange,
    location, 
    format,
  } = props;
  return (
    <div>
      <br/>
      <div>Filename: 
        <input 
          type='text'
          onChange = {handleFilenameChange} 
          placeholder = 'What will your file be called?' 
          value={fileName}
        />
      </div>
      <div>Location: 
        <input
          type='text'
          value={location}
        />
        <button onClick={() => browseDirectories()}>Browse</button>
      </div>
      <div>
        File Format: 
        <Dropdown
          options={DROPDOWN_OPTIONS} 
          onChange={handleFileTypeChange} 
          placeholder="Select file format"
        />
      </div>
    </div>   
  )
}

export default ExtractImport;