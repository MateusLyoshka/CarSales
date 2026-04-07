import { z } from 'zod';

export const RegisterSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters long").max(15, "Name must be at most 15 characters long").regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long").max(15, "Password must be at most 15 characters long").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/[0-9]/, "Password must contain at least one number").regex(/[@$!%*?&]/, "Password must contain at least one special character"),
    confirmpassword: z.string().min(8, "Confirm Password must be at least 8 characters long").max(15, "Confirm Password must be at most 15 characters long").regex(/[A-Z]/, "Confirm Password must contain at least one uppercase letter").regex(/[a-z]/, "Confirm Password must contain at least one lowercase letter").regex(/[0-9]/, "Confirm Password must contain at least one number").regex(/[@$!%*?&]/, "Confirm Password must contain at least one special character")
});

export const LoginSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long").max(15, "Password must be at most 15 characters long")
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;