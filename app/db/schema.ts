import { pgTable, text, jsonb, timestamp, varchar, integer } from 'drizzle-orm/pg-core';

export const chat = pgTable('Chat', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  ownerId: text('owner_id').notNull(),
  messages: jsonb('messages').notNull(),
  createdAt: timestamp('created_at', { precision: 3, mode: 'date' }).notNull().defaultNow(),
});

// Prisma migrations table - kept for backward compatibility
// This table was created by Prisma and should not be modified
export const prismaMigrations = pgTable('_prisma_migrations', {
  id: varchar('id', { length: 36 }).primaryKey().notNull(),
  checksum: varchar('checksum', { length: 64 }).notNull(),
  finishedAt: timestamp('finished_at', { withTimezone: true, mode: 'date' }),
  migrationName: varchar('migration_name', { length: 255 }).notNull(),
  logs: text('logs'),
  rolledBackAt: timestamp('rolled_back_at', { withTimezone: true, mode: 'date' }),
  startedAt: timestamp('started_at', { withTimezone: true, mode: 'date' }).notNull().defaultNow(),
  appliedStepsCount: integer('applied_steps_count').notNull().default(0),
});

export type Chat = typeof chat.$inferSelect;
export type NewChat = typeof chat.$inferInsert;
