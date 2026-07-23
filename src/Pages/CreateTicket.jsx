import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TicketService from "../services/TicketService";

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

            <div className="container">

                <h1>Create Ticket</h1>

                <form className="ticket-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="customerName"
                        placeholder="Customer Name"
                        value={ticket.customerName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="customerEmail"
                        placeholder="Customer Email"
                        value={ticket.customerEmail}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={ticket.subject}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        rows="6"
                        name="description"
                        placeholder="Describe your issue..."
                        value={ticket.description}
                        onChange={handleChange}
                        required
                    />

                    <button>Create Ticket</button>

                </form>

            </div>

        </>

    );

}

export default CreateTicket;