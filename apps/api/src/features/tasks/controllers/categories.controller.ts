import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Authorize } from 'apps/api/src/core/decorators';
import { ApiResponseBuilder } from 'apps/api/src/utils/helpers/api-response-builder';
import { Response } from 'express';
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
