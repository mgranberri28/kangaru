import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }    
  
  render() {
    const {
      code,
      onCodeChange,
      handleTransformClick
    } = this.props;
    // console.log(this.state.script);
    // const props = this.props;
    // const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="editor">
        <MonacoEditor
          width="100%"
          height="400"
          language="javascript"
          colors={{
            'editor.foreground': '#000000',
            'editor.background': '#EDF9FA',
            'editorCursor.foreground': '#8B0000',
            'editor.lineHighlightBackground': '#0000FF20',
            'editorLineNumber.foreground': '#008800',
            'editor.selectionBackground': '#88000030',
            'editor.inactiveSelectionBackground': '#88000015'
        }
    }
          theme="vs-dark"
          value={code}
          options={options}
          onChange={onCodeChange}
          editorDidMount={this.editorDidMount}
        />
        <button className="btn waves-effect waves-light green darken-1" onClick={() => handleTransformClick()}>Save</button>
      </div>
    );
  }
}
	
export default Editor;