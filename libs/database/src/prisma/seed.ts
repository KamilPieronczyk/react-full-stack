import { CATEGORY_ENTRIES } from '@react-full-stack/models';
import { PrismaClient } from '../index';

const prisma = new PrismaClient();

async function main() {
  const categoriesTasks = CATEGORY_ENTRIES.map(({ key, category }) => {
    return prisma.category.upsert({
      where: { uniqueName: key },
      update: {
        uniqueName: key,
        name: category.name,
        color: category.color,
      },
      create: {
        uniqueName: key,
        name: category.name,
        color: category.color,
      },
    });
  });
  (await Promise.all(categoriesTasks)).forEach((category) => {
    console.log(`Created category ${category.name} with id: ${category.id}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
