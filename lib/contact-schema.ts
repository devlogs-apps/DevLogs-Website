import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(80),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "A little more detail helps. At least 10 characters.")
    .max(2000, "Keep it under 2000 characters."),
})

export type ContactInput = z.infer<typeof contactSchema>
