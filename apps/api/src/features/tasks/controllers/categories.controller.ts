import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { User } from '@react-full-stack/database';
import { Response } from 'express';
import { Authorize, AuthUser } from '../../../core/decorators';
import { ApiResponseBuilder } from '../../../utils/helpers/api-response-builder';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Authorize()
  @Get()
  @HttpCode(200)
  async getAll(@Res() res: Response) {
    new ApiResponseBuilder(res, await this.categoriesService.getAll()).checkForNoContent().build();
  }

  @Authorize()
  @Get('completion')
  @HttpCode(200)
  async getCategoriesCompletion(@AuthUser() user: User, @Res() res: Response) {
    new ApiResponseBuilder(res, await this.categoriesService.getCategoriesCompletion(user.id))
      .checkForNoContent()
      .build();
  }
}
