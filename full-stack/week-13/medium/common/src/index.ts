import z from "zod";

export const signUpInput = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)

});



export type SignupInput = z.infer<typeof signUpInput>;

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export type SigninInput = z.infer<typeof signUpInput>


export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()

});

export type UpadateBlog = z.infer<typeof updateBlogInput>