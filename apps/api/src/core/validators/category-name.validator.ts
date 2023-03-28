import { CategoryType, CATEGORY_NAMES } from '@react-full-stack/models';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'Category Name Valdiator', async: false })
export class CategoryNameValidator implements ValidatorConstraintInterface {
  validate(name: CategoryType) {
    return CATEGORY_NAMES.includes(name);
  }

  defaultMessage(args: ValidationArguments) {
    return `Category with name "${args.value}" not exists`;
  }
}
