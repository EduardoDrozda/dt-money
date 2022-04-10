import React, { Suspense } from "react";

import {
  Routes as BrowserRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));

export function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRoutes>
          <Route path="/" element={<Dashboard />} />
        </BrowserRoutes>
      </Suspense>
    </BrowserRouter>
  );
}
