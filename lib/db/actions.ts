'use server'

import { eq } from 'drizzle-orm'
import { db } from './db'
import { guestbookEntries, type NewGuestbookEntry, type GuestbookEntry } from './schema'

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  try {
    const entries = await db.select().from(guestbookEntries)
    return entries
  } catch (error) {
    console.error('Failed to fetch guestbook entries:', error)
    throw new Error('Failed to fetch guestbook entries')
  }
}

export async function createGuestbookEntry(entry: Omit<NewGuestbookEntry, 'id' | 'createdAt' | 'updatedAt'>): Promise<GuestbookEntry> {
  try {
    const [newEntry] = await db
      .insert(guestbookEntries)
      .values(entry)
      .returning()
    return newEntry
  } catch (error) {
    console.error('Failed to create guestbook entry:', error)
    throw new Error('Failed to create guestbook entry')
  }
}

export async function updateGuestbookEntry(
  gridIndex: number,
  updates: Partial<Omit<NewGuestbookEntry, 'id' | 'gridIndex' | 'createdAt'>>
): Promise<GuestbookEntry> {
  try {
    const [updatedEntry] = await db
      .update(guestbookEntries)
      .set({
        ...updates,
        updatedAt: new Date(),
      })
      .where(eq(guestbookEntries.gridIndex, gridIndex))
      .returning()
    
    if (!updatedEntry) {
      throw new Error('Entry not found')
    }
    
    return updatedEntry
  } catch (error) {
    console.error('Failed to update guestbook entry:', error)
    throw new Error('Failed to update guestbook entry')
  }
}

export async function deleteGuestbookEntry(gridIndex: number): Promise<void> {
  try {
    await db
      .delete(guestbookEntries)
      .where(eq(guestbookEntries.gridIndex, gridIndex))
  } catch (error) {
    console.error('Failed to delete guestbook entry:', error)
    throw new Error('Failed to delete guestbook entry')
  }
}

export async function getGuestbookEntryByGridIndex(gridIndex: number): Promise<GuestbookEntry | null> {
  try {
    const [entry] = await db
      .select()
      .from(guestbookEntries)
      .where(eq(guestbookEntries.gridIndex, gridIndex))
    return entry || null
  } catch (error) {
    console.error('Failed to fetch guestbook entry:', error)
    throw new Error('Failed to fetch guestbook entry')
  }
}