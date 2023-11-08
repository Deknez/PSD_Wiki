import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Layout/Header/HeaderBlock.jsx'
import HomePage from './components/Home/HomePage.jsx'
import LoginPage from './components/Login/LoginPage.jsx'
import SignUpPage from './components/SignUp/SignUpPage.jsx'
import SchedulePage from './components/Schedule/SchedulePage.jsx'
import DashboardPage from './components/Dashboard/DashboardPage.jsx'

function App() {
	return (
		<>
			<Header></Header>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/dashboard"
						element={<DashboardPage />}
					/>
					<Route
						path="/schedule"
						element={<SchedulePage />}
					/>
					<Route
						path="/login"
						element={<LoginPage />}
					/>
					<Route
						path="/sign-up"
						element={<SignUpPage />}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
