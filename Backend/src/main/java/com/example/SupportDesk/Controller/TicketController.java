package com.example.SupportDesk.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.SupportDesk.Entity.Note;
import com.example.SupportDesk.Entity.Ticket;
import com.example.SupportDesk.Service.TicketService;

@RestController
@RequestMapping("/api/tickets")
@CrossOrigin(origins = "*")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    // Create Ticket
    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {

        return ticketService.createTicket(ticket);

    }

    // Get All Tickets
    @GetMapping
    public List<Ticket> getAllTickets() {

        return ticketService.getAllTickets();

    }

    // Get Ticket By Ticket ID
    @GetMapping("/{ticketId}")
    public Ticket getTicket(@PathVariable String ticketId) {

        return ticketService.getTicket(ticketId);

    }

    // Update Ticket
    @PutMapping("/{ticketId}")
    public Ticket updateTicket(@PathVariable String ticketId,
                               @RequestBody Ticket ticket) {

        return ticketService.updateTicket(ticketId, ticket);

    }
//    Search by Keyword
    @GetMapping("/search")
    public List<Ticket> searchTickets(@RequestParam String keyword){

        return ticketService.searchTickets(keyword);

    }
    @GetMapping("/status/{status}")
    public List<Ticket> getTicketsByStatus(@PathVariable String status){

        return ticketService.getTicketsByStatus(status.toUpperCase());

    }
    @PostMapping("/{ticketId}/notes")
    public Note addNote(@PathVariable String ticketId,
                        @RequestBody Note note){

        return ticketService.addNote(ticketId, note);

    }
    @GetMapping("/{ticketId}/notes")
    public List<Note> getNotes(@PathVariable String ticketId){

        return ticketService.getNotes(ticketId);

    }
}