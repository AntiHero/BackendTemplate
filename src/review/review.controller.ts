import { ReviewModel } from './review.model';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {
    // TODO
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // TODO
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    // TODO
  }
}
