import React, { useState, useEffect, useRef } from 'react';

const Terminal = ({ opacity }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const asciiArt = `
   ____  _     _     _ _               _     
  / ___|(_) __| | __| | |__   ___  ___| |__ 
  \\___ \\| |/ _\` |/ _\` | '_  \\/ _ \\/ __| '_ \\ 
   ___) | | (_| | (_| | | | |  __/\\__ \\ | | |
  |____/|_|\\__,_|\\__,_|_| |_|\\___||___/_| |_|
  `;

  const welcomeMessage = `
Welcome to my terminal portfolio. (Version 1.0.0)
----
This project's source code can be seen in this project's GitHub repo.
----
For a list of available commands, type 'help'.
  `;

  useEffect(() => {
    setHistory([asciiArt, welcomeMessage]);
  }, []);

  const handleCommand = (cmd) => {
    let response;
    switch (cmd.toLowerCase()) {
      case 'welcome':
        response = welcomeMessage;
        break;
      case 'about':
        response = `Hi, my name is Siddhesh Parate!
I'm a full-stack developer based in Pune, India.
I am passionate about writing code and
developing web applications to solve real-life challenges.`;
        break;
      case 'help':
        response = 'Available commands: welcome, about, help, clear';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = `Command not recognized: ${cmd}`;
    }
    setHistory(prev => [...prev, {type: 'command', content: cmd}, {type: 'response', content: response}]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => { // this effect runs every time the history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  const renderHistoryItem = (item, index) => { // this function renders each item in the history according to its type
    if (typeof item === 'string') {
      return <pre key={index} className="mb-1 whitespace-pre-wrap">{item}</pre>;
    }
    if (item.type === 'command') {
      return (
        <pre key={index} className="mb-1 whitespace-pre-wrap">
          <span className="text-[#98c379]">visitor@terminal.siddhesh.dev:~$ </span>{item.content}
        </pre>
      );
    }
    return <pre key={index} className="mb-1 whitespace-pre-wrap">{item.content}</pre>;
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-100 bg-background"
      style={{ opacity }}
    >
      <div className="w-full max-w-4xl h-full max-h-[80vh] rounded-lg overflow-hidden shadow-lg flex flex-col bg-primary text-[#abb2bf]">
        <div className="px-4 py-2 flex items-center bg-secondary text-[#abb2bf]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="ml-2 text-sm">terminal.siddhesh.dev</span>
        </div>
        <div 
          ref={terminalRef} // reference to the terminal div to scroll to the bottom when new content is added
          className="font-mono text-sm p-4 h-[70vh] overflow-y-auto"
          onClick={() => inputRef.current?.focus()} // focus the input when the terminal is clicked
        >
          {history.map(renderHistoryItem)} 
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-[#98c379] mr-2">visitor@terminal.siddhesh.dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow focus:outline-none bg-primary text-highlight"
              aria-label="Terminal input"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;