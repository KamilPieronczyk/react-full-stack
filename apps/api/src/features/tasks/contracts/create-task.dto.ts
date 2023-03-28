import { ApiProperty } from '@nestjs/swagger';
import { CategoryType, ICreateTaskDto } from '@react-full-stack/models';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { CategoryNameValidator } from '../../../core/validators';

export class CreateTaskDto implements ICreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ name: 'title', description: 'Task title', example: 'Task title' })
  title: string;

  @IsString()
  @ApiProperty({ name: 'description', description: 'Task description', example: 'Task description' })
  description: string;

  @IsString()
  @IsNotEmpty()
  @Validate(CategoryNameValidator)
  @ApiProperty({ name: 'categoryKey', description: "Task's category key", example: 'books' })
  categoryKey: CategoryType;
}
