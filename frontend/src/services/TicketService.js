import axios from "axios";

const API_URL = "https://supportdesk-rd51.onrender.com";

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
