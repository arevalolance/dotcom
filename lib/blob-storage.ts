'use server'

import { put, del } from '@vercel/blob'

export async function uploadDrawing(dataUrl: string, filename: string): Promise<string> {
  try {
    // Convert data URL to blob
    const response = await fetch(dataUrl)
    const blob = await response.blob()
    
    const { url } = await put(filename, blob, {
      access: 'public',
      addRandomSuffix: true,
    })
    
    return url
  } catch (error) {
    console.error('Failed to upload drawing:', error)
    throw new Error('Failed to upload drawing')
  }
}

export async function deleteDrawing(url: string): Promise<void> {
  try {
    await del(url)
  } catch (error) {
    console.error('Failed to delete drawing:', error)
    // Don't throw here as it's not critical if cleanup fails
  }
}