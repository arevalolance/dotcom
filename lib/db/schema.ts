import { pgTable, uuid, integer, text, varchar, jsonb, timestamp } from 'drizzle-orm/pg-core'

export const guestbookEntries = pgTable('guestbook_entries', {
  id: uuid('id').defaultRandom().primaryKey(),
  gridIndex: integer('grid_index').notNull().unique(),
  message: text('message').notNull(),
  color: varchar('color', { length: 7 }).notNull(),
  name: varchar('name', { length: 100 }).notNull().default('Anonymous'),
  location: varchar('location', { length: 150 }),
  drawingUrl: text('drawing_url'),
  drawingCommands: jsonb('drawing_commands'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export type GuestbookEntry = typeof guestbookEntries.$inferSelect
export type NewGuestbookEntry = typeof guestbookEntries.$inferInsert