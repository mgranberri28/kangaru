import React from 'react';

const ExtractImport = (props) => {
  const { browseFiles, filePath } = props;
  return (
    <div>
      <br/>
      {/* <h2>Import</h2> */}
      <div>
        File Path: <input type="text" value={filePath}/>
        <button className="btn waves-effect waves-light grey darken-4" onClick={() => browseFiles()}>Browse</button>
      </div>    
    </div>
    
  )
}

export default ExtractImport;