import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller()
export class BooksController {
  @Get()
  getAll() {
    return 'gat all';
  }
  @Get(':id')
  getOne(@Param() params) {
    return `chosen one ${params.id}`;
  }
  @Post()
  create(@Body() book) {
    return book;
  }
  @Put()
  update(@Body() book) {
    return book;
  }
}
