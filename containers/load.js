import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import LoadExport from '../components/LoadExport';
import Connect from '../components/Connect';
import 'react-dropdown/style.css';
const remote = require('electron').remote;
const { dialog } = remote;

const DROPDOWN_OPTIONS = [
  'Export', 'Connect'
];

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadExport: false,
      loadConnect: false,
      dropdownValue: '',
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(e) {
    if (e.value === 'Export') {
      this.setState({
        loadConnect: false,
        loadExport: true,
        dropdownValue: 'Export',
      });
    } else if (e.value === 'Connect') {
      this.setState({
        loadExport: false,
        loadConnect: true,
        dropdownValue: 'Connect',
      });
    }
  }
    
  render() {
    const { loadExport, loadConnect, dropdownValue } = this.state;
    const { username, password, port, host, database, loadUri, location, fileName, format, handleUsernameChange, handlePasswordChange, handlePortChange, handleHostChange, handleDatabaseChange, handleLoadUriChange, handleFilenameChange, handleFileTypeChange, browseDirectories } = this.props;
    const exportComp = loadExport ? 
      <LoadExport
        fileName = {fileName}
        location = {location}
        format = {format}
        dropdownValue = {dropdownValue}
        handleFilenameChange = {handleFilenameChange}
        handleFileTypeChange = {handleFileTypeChange}
        browseDirectories = {browseDirectories}
      
      />
      : null
    const connectComp = loadConnect ?
      <Connect 
        username = {username}
        password = {password}
        port = {port}
        host = {host}
        database = {database}
        loadUri = {loadUri}
        dropdownValue = {dropdownValue}
        handleUsernameChange = {handleUsernameChange}
        handlePasswordChange = {handlePasswordChange}
        handleHostChange = {handleHostChange}
        handlePortChange = {handlePortChange}
        handleDatabaseChange = {handleDatabaseChange}
        handleUriChange = {handleLoadUriChange}
      />
      : null
    return (
      <div>
        <h1>Load</h1>
        <Dropdown
          options={DROPDOWN_OPTIONS} 
          onChange={this.handleDropdownChange} 
          placeholder="Select loading method"
          value={dropdownValue}
        />
        {exportComp}
        {connectComp}
      </div>      
    );
  }
}

export default Load;