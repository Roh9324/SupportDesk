import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TicketService from "../services/TicketService";
import "../styles/TicketDetails.css";

function TicketDetails() {

    const { ticketId } = useParams();
    const navigate = useNavigate();

    const [ticket, setTicket] = useState(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        loadTicket();
    }, []);

    const loadTicket = () => {
        TicketService.getTicket(ticketId)
            .then((response) => {
                setTicket(response.data);
                setStatus(response.data.status);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateStatus = () => {

        const updatedTicket = {
            ...ticket,
            status: status
        };

        TicketService.updateTicket(ticketId, updatedTicket)
            .then((response) => {
                setTicket(response.data);
                alert("Status Updated Successfully!");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to update status");
            });
    };

    if (!ticket) {
        return <h2 className="loading">Loading...</h2>;
    }

    return (
        <>
            <Navbar />

            <div className="details-container">

                <div className="details-card">

                    <h1>Ticket Details</h1>

                    <div className="detail-row">
                        <span>Ticket ID</span>
                        <strong>{ticket.ticketId}</strong>
                    </div>

                    <div className="detail-row">
                        <span>Customer</span>
                        <strong>{ticket.customerName}</strong>
                    </div>

                    <div className="detail-row">
                        <span>Email</span>
                        <strong>{ticket.customerEmail}</strong>
                    </div>

                    <div className="detail-row">
                        <span>Subject</span>
                        <strong>{ticket.subject}</strong>
                    </div>

                    <div className="detail-row description">
                        <span>Description</span>

                        <p>{ticket.description}</p>
                    </div>

                    <div className="detail-row">

                        <span>Status</span>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="OPEN">OPEN</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="RESOLVED">RESOLVED</option>
                            <option value="CLOSED">CLOSED</option>
                        </select>

                    </div>

                    <div className="button-group">

                        <button
                            className="update-btn"
                            onClick={updateStatus}
                        >
                            Update Status
                        </button>

                        <button
                            className="back-btn"
                            onClick={() => navigate("/")}
                        >
                            Back
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default TicketDetails;