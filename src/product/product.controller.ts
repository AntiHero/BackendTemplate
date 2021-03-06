import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {
    // TODO
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    // TODO
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {
    // TODO
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // TODO
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    // TODO
  }
}
