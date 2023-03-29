import { ApiProperty } from '@nestjs/swagger';
import { CategoryType, ITasksFilterDto } from '@react-full-stack/models';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { CategoryNameValidator } from '../../../core/validators';

export class TasksFilterDto implements ITasksFilterDto {
  @IsString()
  @IsNotEmpty()
  @Validate(CategoryNameValidator)
  @ApiProperty({ name: 'categoryKey', description: "Task's category key", example: 'books', type: String })
  categoryKey: CategoryType;
}
