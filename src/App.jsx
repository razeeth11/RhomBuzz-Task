import "./App.css";
import Grid from "@mui/material/Grid";

import { LeftMenuDrawer } from "./components/leftMenu";
import { AppNavBarMenu } from "./components/appbarmenu";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { DashboardComponents } from "./components/Dashboard/DashboardComponents";
import { Box, Button } from "@mui/material";
import { Widgets } from "./components/ProfileWidgets/ProfileWidgets";
import { useEffect, useState } from "react";
import { LonInForm } from "./components/LoginPage/Login";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<LonInForm />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Profile-Overview"
        element={
          <ProtectedRoute>
            <Widgets />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <ErrorPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Grid>
      <LeftMenuDrawer />
      <Dashboard />
    </Grid>
  );
};

const Dashboard = () => {
  const [userData,setUserData] = useState([])
  const [dashboardData,setDashboardData] = useState([])
useEffect(() => {
      fetch("https://67685d3ccbf3d7cefd37c484.mockapi.io/userDetails")
        .then((res) => res.json())
        .then((data) => setUserData(data));
    }, []);
  useEffect(() => {
      fetch("https://67685d3ccbf3d7cefd37c484.mockapi.io/dashBoardDetails")
        .then((res) => res.json())
        .then((data) => setDashboardData(data));
    }, []);
    const userId = localStorage.getItem("token")
    const user = userData?.find((item)=> item.userId === userId)
  return (
    <Grid>
      <AppNavBarMenu userData={user}/>
      <DashboardComponents userData={userData} dashboardData={dashboardData}/>
    </Grid>
  );
};

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "25% 0",
      }}
    >
      <Button
        sx={{
          background: "rgb(72, 38, 104)",
          color: "white",
          padding: "10px 20px",
        }}
        onClick={() => navigate("/")}
      >
        Back To Home
      </Button>
    </Grid>
  );
};

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token === "razeeth11" || token === "john111" || token === "jane436" ? (
    <div>{children}</div>
  ) : (
    <Navigate replace to="/Login" />
  );
}

export default App;
