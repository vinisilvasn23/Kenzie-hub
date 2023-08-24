import { z } from "zod";

export const loginUserSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório.")
    .email("O e-mail fornecido é inválido."),
  password: z
    .string()
    .nonempty("Senha Obrigatória.")
    .min(8, "A senha precisa conter no mínimo 8 caracteres.")
    .regex(/[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/),
})
