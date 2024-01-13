// src/note/note.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async findAll(): Promise<Note[]> {
    const notes = await this.noteRepository.find();
    return notes || [];
  }

  create(note: Note): Promise<Note> {
    return this.noteRepository.save(note);
  }

  async delete(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }

  async saveNote(title: string, content: string): Promise<Note> {
    const newNote = this.noteRepository.create({ title, content });
    return this.noteRepository.save(newNote);
  }
}
