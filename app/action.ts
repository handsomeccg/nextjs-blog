'use server'

import {addNote} from '@/lib/prisma'
import {revalidatePath} from "next/cache";

export async function saveNote(data: any) {
    await addNote(data)
    // redirect('/')
    revalidatePath('/', 'layout')
}