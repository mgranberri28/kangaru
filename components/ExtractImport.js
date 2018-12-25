import React from 'react';

const ExtractImport = (props) => {
  const { browseFiles, filePath } = props;
  return (
    <div>
      <h2>Import</h2>
      <div>File Path: <input type="text" value={filePath}/></div>
      <button onClick={() => browseFiles()}>Browse</button>
    </div>
    
  )
}

export default ExtractImport;