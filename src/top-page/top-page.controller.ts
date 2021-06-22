import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';
import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  Patch,
  HttpCode,
} from '@nestjs/common';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {
    // TODO
  }

  @Get()
  async get(@Body() dto: TopPageModel) {
    // TODO
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
    // TODO
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // TODO
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {
    // TODO
  }
}
