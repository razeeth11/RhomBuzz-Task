import './App.css'
import Grid from '@mui/material/Grid'

import { LeftMenuDrawer } from './components/leftMenu';
import { AppNavBarMenu } from './components/appbarmenu';
import { Route, Routes, useNavigate } from 'react-router';
import { DashboardComponents } from './components/Dashboard/DashboardComponents';
import { Box, Button } from '@mui/material';
import { Widgets } from './components/ProfileWidgets/ProfileWidgets';


function App() {

  return (
    <Routes>
      <Route path="/Dashboard" element={<Home />} />
      <Route path="/Profile-Overview" element={<Widgets />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

const Home = () => {
  return (
    <Grid>
      <LeftMenuDrawer />
      <Dashboard />
    </Grid>
  )
}

const Dashboard = () => {
  return (
    <Grid>
      <AppNavBarMenu />
      <DashboardComponents />
    </Grid>
  )
}

const ErrorPage=()=>{
  const navigate = useNavigate()
  return(
    <Grid sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"25% 0"}}>
      <Button sx={{background:"rgb(72, 38, 104)",color:"white",padding:"10px 20px"}} onClick={()=>navigate("/Dashboard")}>Back To Home</Button>
    </Grid>
  )
}




export default App
