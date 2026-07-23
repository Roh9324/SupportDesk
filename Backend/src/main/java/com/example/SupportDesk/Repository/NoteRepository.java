package com.example.SupportDesk.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SupportDesk.Entity.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {

    List<Note> findByTicket_TicketId(String ticketId);

}