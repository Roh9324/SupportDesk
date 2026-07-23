import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TicketService from "../services/TicketService";
import "../Styles/CreateTicket.css";

function CreateTicket() {

    const navigate = useNavigate();

    const [ticket, setTicket] = useState({

        customerName: "",
        customerEmail: "",
        subject: "",
        description: ""

    });

    const handleChange = (e) => {

        setTicket({

            ...ticket,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await TicketService.createTicket(ticket);

            alert("Ticket Created Successfully!");

            navigate("/");

        } catch (error) {

            console.log(error);
            alert("Unable to create ticket.");

        }

    };

    return (

        <>

            <Navbar />

            <div className="ticket-page-container">

                <div className="ticket-page-card">
                    <h1>Create Ticket</h1>
                    <p className="ticket-page-subtitle">Submit a request and our support team will follow up soon.</p>

                    <form className="ticket-form" onSubmit={handleSubmit}>

                        <label>
                            Customer Name
                            <input
                                type="text"
                                name="customerName"
                                placeholder="Enter customer name"
                                value={ticket.customerName}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Customer Email
                            <input
                                type="email"
                                name="customerEmail"
                                placeholder="Enter email address"
                                value={ticket.customerEmail}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Subject
                            <input
                                type="text"
                                name="subject"
                                placeholder="Brief summary of the issue"
                                value={ticket.subject}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label>
                            Description
                            <textarea
                                rows="6"
                                name="description"
                                placeholder="Describe your issue in detail"
                                value={ticket.description}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <button type="submit">Create Ticket</button>

                    </form>
                </div>

            </div>

        </>

    );

}

export default CreateTicket;
