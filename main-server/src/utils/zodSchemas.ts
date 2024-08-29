import z from 'zod';

export const signupSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

export type signupSchemaType = z.infer<typeof signupSchema>;


export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const folderCreateSchema = z.object({
    name : z.string(),
    userId: z.number(),
    parentId: z.number().optional(),
    email: z.string().email()
})

export const getFoldersSchema = z.object({
    userId: z.number(),
    email: z.string().email()
})

export const fileCreateSchema = z.object({
    userId: z.number(),
    email: z.string().email(),
    folderId: z.number(),
    contentType: z.string(),
    name: z.string()
})

