// src/note/note.controller.ts
import { Controller, Get, Post, Body, Delete, Param, NotFoundException } from '@nestjs/common';
import { Note } from './note.entity';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Post()
  async create(@Body() { title, content }: { title: string; content: string }): Promise<Note> {
    return this.noteService.saveNote(title, content);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.noteService.delete(id);
  }

}
