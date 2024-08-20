import z from 'zod';

export const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})


export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const folderCreateSchema = z.object({
    name : z.string(),
    userId: z.number(),
    parentId: z.number().optional()
})