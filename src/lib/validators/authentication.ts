import { z } from 'zod';

export const SignInValidator = z.object({
  email: z.string().email().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

export type SignInPayload = z.infer<typeof SignInValidator>;
