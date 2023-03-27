import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from '../../../src/features/tasks/tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return user credentials from the request', () => {
    const req = {
      user: {
        sub: 'auth0|123456789',
        name: 'John Doe',
        email: '',
      },
    };

    // const user = controller.getUser(req);

    // expect(user).toEqual(user);
  });
});
