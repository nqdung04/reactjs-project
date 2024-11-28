import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfo from './UserInfo';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';
import SavedNews from './SavedNews';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/savedNews" element={<SavedNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;