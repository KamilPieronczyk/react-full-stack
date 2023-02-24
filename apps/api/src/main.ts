/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { PrismaClient } from '@react-full-stack/database';
import express from 'express';
import * as path from 'path';

const app = express();

const prisma = new PrismaClient();
await prisma.$connect();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/test', async (req, res) => {
  await prisma.user.create({
    data: {
      email: 'test',
    },
  });

  res.send({ message: 'Welcome to test!' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
