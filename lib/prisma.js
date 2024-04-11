import {PrismaClient} from '@prisma/client'

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function getAllNotes() {
    // 查找登录用户的笔记
    const notes = await prisma.note.findMany({
    })
    // 构造返回数据
    return notes.map(({title, content, id, time}) => {
        return {
            id,
            title,
            content,
            time: Number(time)
        }
    })
}

export async function addNote(data) {
    const result = await prisma.note.create({
        data: {
            title: data.title,
            content: data.content,
            time: data.time
        }
    })

    return result.id
}

export async function getNote(uuid) {
    const {title, content, time, id} = await prisma.note.findFirst({
        where: {
            id: uuid
        }
    })

    return {
        title,
        content,
        time,
        id
    }
}

export default prisma
