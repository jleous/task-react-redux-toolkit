import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <BrowserRouter>
        <div className="flex items-center justify-center h-full">
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
          <a
            href="https://www.youtube.com/watch?v=w2rAP7d6ndg&t=135s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial
          </a>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
