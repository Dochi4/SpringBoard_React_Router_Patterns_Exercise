import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogsHome from "./DogsHome";
import DogsDetails from "./ DogsDetails";

function RoutesList() {
  return (
    <Routes>
      <Route path="/dogs" element={<DogsHome />} />
      <Route exact path="/dogs/:name" element={<DogsDetails />} />;
      <Route path="*" element={<Navigate to="/dogs" replace />} />
    </Routes>
  );
}

export default RoutesList;
