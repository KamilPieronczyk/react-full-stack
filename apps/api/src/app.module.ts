import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { TasksModule } from './features/tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, TasksModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
