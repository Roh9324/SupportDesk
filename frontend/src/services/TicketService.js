import axios from "axios";

const DEFAULT_BACKEND_URL = "https://supportdesk-rd51.onrender.com";
const BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? DEFAULT_BACKEND_URL : "http://localhost:8081");
const API_URL = `${BASE_URL.replace(/\/$/, "")}/api/tickets`;

const TicketService = {

    getAllTickets() {
        return axios.get(API_URL);
    },

    getTicket(ticketId) {
        return axios.get(`${API_URL}/${ticketId}`);
    },

    createTicket(ticket) {
        return axios.post(API_URL, ticket);
    },

    updateTicket(ticketId, ticket) {
        return axios.put(`${API_URL}/${ticketId}`, ticket);
    },

    searchTickets(keyword) {
        return axios.get(`${API_URL}/search?keyword=${keyword}`);
    },

    getTicketsByStatus(status) {
        return axios.get(`${API_URL}/status/${status}`);
    }

};

export default TicketService;
