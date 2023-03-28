import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';
import { Authorize } from '../../../core/decorators';
import { ApiResponseBuilder } from '../../../utils/helpers/api-response-builder';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Authorize()
  @Get()
  @HttpCode(200)
  async getAll(@Res({ passthrough: true }) res: Response) {
    new ApiResponseBuilder(res, await this.categoriesService.getAll()).checkForNoContent().build();
  }
}
