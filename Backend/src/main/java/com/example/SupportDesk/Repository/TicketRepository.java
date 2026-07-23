package com.example.SupportDesk.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.SupportDesk.Entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    Optional<Ticket> findByTicketId(String ticketId);

    List<Ticket> findByStatus(String status);

    @Query("""
        SELECT t FROM Ticket t
        WHERE LOWER(t.customerName) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(t.customerEmail) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(t.subject) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(t.description) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(t.ticketId) LIKE LOWER(CONCAT('%', :keyword, '%'))
        """)
    List<Ticket> searchTickets(String keyword);
}