import './App.css'
import Grid from '@mui/material/Grid'

import { LeftMenuDrawer } from './components/leftMenu';
import { AppNavBarMenu } from './components/appbarmenu';
import { Route, Routes } from 'react-router';
import { DashboardComponents } from './components/Dashboard/DashboardComponents';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
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




export default App
