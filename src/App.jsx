import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CustomerProfile from './Pages/customerProfile';
import Home from './Pages/home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />} />
                <Route
                    exact
                    path="customerprofile"
                    element={<CustomerProfile />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;