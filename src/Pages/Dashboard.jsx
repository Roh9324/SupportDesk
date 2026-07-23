import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import StatusFilter from "../components/StatusFilter";
import TicketCard from "../components/TicketCard";
import TicketService from "../services/TicketService";

function Dashboard() {

    const [tickets, setTickets] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [status, setStatus] = useState("ALL");

    useEffect(() => {
        loadTickets();
    }, []);

    const loadTickets = () => {
        TicketService.getAllTickets()
            .then((response) => {
                setTickets(response.data);
            })
            .catch((error) => console.log(error));
    };

    const filteredTickets = tickets.filter((ticket) => {

        const matchesKeyword =
            ticket.subject.toLowerCase().includes(keyword.toLowerCase()) ||
            ticket.customerName.toLowerCase().includes(keyword.toLowerCase());

        const matchesStatus =
            status === "ALL" || ticket.status === status;

        return matchesKeyword && matchesStatus;

    });

    return (

        <div>

            <Navbar />

            <div className="dashboard">

                <h1>Support Desk Dashboard</h1>

                <div className="toolbar">

                    <SearchBox
                        keyword={keyword}
                        setKeyword={setKeyword}
                    />

                    <StatusFilter
                        status={status}
                        setStatus={setStatus}
                    />

                </div>

                <div className="ticket-grid">

                    {filteredTickets.map(ticket => (

                        <TicketCard
                            key={ticket.ticketId}
                            ticket={ticket}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

}

export default Dashboard;