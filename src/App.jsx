import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CustomerProfile from './Pages/customerProfile';
import EmployeeProfile from './Pages/employeeProfile';
import Home from './Pages/home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="customerprofile/*"
                    element={<Customers />}
                />
                <Route
                    path="employeeprofile/*"
                    element={<Employees />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default App;

const Customers = () => {
    return (
        <Routes>
            <Route path=":id" element={<CustomerProfile />} />
        </Routes>
    )
}
const Employees = () => {
    return (
        <Routes>
            <Route path=":id" element={<EmployeeProfile />} />
        </Routes>
    )
}