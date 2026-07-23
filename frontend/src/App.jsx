import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import CreateTicket from "./Pages/CreateTicket";
import TicketDetails from "./Pages/TicketDetails";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/create"
                    element={<CreateTicket />}
                />

                <Route
                    path="/ticket/:ticketId"
                    element={<TicketDetails />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;