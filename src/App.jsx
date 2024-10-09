import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="logo">JSFiddle</div>
        <ul>
          <button>Your recent fiddles</button>
          <button>Collections</button>
          <button>Resources</button>
          <button>Async requests</button>
          <button>Changelog</button>
        </ul>
      </div>

      <div className="editor-container">
        <div className="top-bar">
          <span className="fiddle-title">Untitled</span>
          <button className="run-btn">Run</button>
          <button className="pro-">Go Pro</button>
        </div>

        <div className="editor-area">
          <div className="editor-pane">
            <h3>HTML</h3>
            <textarea
              className="editor-textarea"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder="HTML code"
            />
          </div>

          <div className="editor-pane">
            <h3>CSS</h3>
            <textarea
              className="editor-textarea"
              value={css}
              onChange={(e) => setCss(e.target.value)}
              placeholder="CSS code"
            />
          </div>

          <div className="editor-pane">
            <h3>JavaScript</h3>
            <textarea
              className="editor-textarea"
              value={js}
              onChange={(e) => setJs(e.target.value)}
              placeholder="JavaScript code"
            />
          </div>
        </div>
        <div className="result-area">
          <h3>Result</h3>
          <div className="output">
            <p>Start with a boilerplate:</p>
            <div className="boilerplate-tags">
              <button>Tailwind Checkboxes</button>
              <button>Import a JS Module</button>
              <button>jQuery</button>
              <button>React</button>
              <button>React + JSX</button>
              <button>Preact</button>
              <button>TypeScript</button>
              <button>CoffeeScript</button>
              <button>SCSS</button>
              <button>CSS Grid</button>
              <button>Bootstrap</button>
              <button>PostCSS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;