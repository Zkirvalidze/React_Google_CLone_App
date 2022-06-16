import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const Routing = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />}></Route>

        {['/news', '/image', '/videos', '/search'].map((path) => (
          <Route
            key="Results" // optional: avoid full re-renders on route changes
            path={path}
            element={<Results />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Routing;
