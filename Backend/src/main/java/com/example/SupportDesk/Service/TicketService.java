package com.example.SupportDesk.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.SupportDesk.Entity.Note;
import com.example.SupportDesk.Entity.Ticket;
import com.example.SupportDesk.Repository.NoteRepository;
import com.example.SupportDesk.Repository.TicketRepository;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final NoteRepository noteRepository;

    public TicketService(TicketRepository ticketRepository,
                         NoteRepository noteRepository) {

        this.ticketRepository = ticketRepository;
        this.noteRepository = noteRepository;
    }

    // Create Ticket
    public Ticket createTicket(Ticket ticket) {

        ticket.setStatus("OPEN");

        ticket.setCreatedAt(LocalDateTime.now());
        ticket.setUpdatedAt(LocalDateTime.now());

        ticket.setTicketId("TKT-" + System.currentTimeMillis());

        return ticketRepository.save(ticket);
    }

    // Get All Tickets
    public List<Ticket> getAllTickets() {

        return ticketRepository.findAll();
    }

    // Get Ticket By Ticket ID
    public Ticket getTicket(String ticketId) {

        return ticketRepository.findByTicketId(ticketId)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));
    }

    // Update Ticket
    public Ticket updateTicket(String ticketId, Ticket updatedTicket) {

        Ticket ticket = getTicket(ticketId);

        if (updatedTicket.getStatus() != null) {
            ticket.setStatus(updatedTicket.getStatus());
        }

        if (updatedTicket.getSubject() != null) {
            ticket.setSubject(updatedTicket.getSubject());
        }

        if (updatedTicket.getDescription() != null) {
            ticket.setDescription(updatedTicket.getDescription());
        }

        ticket.setUpdatedAt(LocalDateTime.now());

        return ticketRepository.save(ticket);
    }

    // Search Tickets
    public List<Ticket> searchTickets(String keyword) {

        return ticketRepository.searchTickets(keyword);
    }

    // Filter Tickets by Status
    public List<Ticket> getTicketsByStatus(String status) {

        return ticketRepository.findByStatus(status);
    }

    // Add Note
    public Note addNote(String ticketId, Note note) {

        Ticket ticket = getTicket(ticketId);

        note.setTicket(ticket);
        note.setCreatedAt(LocalDateTime.now());

        return noteRepository.save(note);
    }

    // Get All Notes of a Ticket
    public List<Note> getNotes(String ticketId) {

        return noteRepository.findByTicket_TicketId(ticketId);
    }
}