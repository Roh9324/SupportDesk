import { Link } from "react-router-dom";

function TicketCard({ ticket }) {

    return (

        <div className="ticket-card">

            <h3>{ticket.subject}</h3>

            <p><strong>Ticket ID:</strong> {ticket.ticketId}</p>

            <p><strong>Customer:</strong> {ticket.customerName}</p>

  <span className={`status ${ticket.status.toLowerCase()}`}>
    {ticket.status}
</span>

            <Link to={`/ticket/${ticket.ticketId}`}>
                View Details
            </Link>

        </div>

    );

}

export default TicketCard;