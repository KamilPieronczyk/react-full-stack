import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { TasksModule } from './features/tasks/tasks.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, TasksModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
