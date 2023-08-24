import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório."),
    email: z
      .string()
      .nonempty("O email é obrigatório.")
      .email("O e-mail fornecido é inválido."),
    password: z
      .string()
      .min(8, "A senha precisa conter no mínimo 8 caracteres")
      .regex(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        "É necessário pelo menos um caractere especial."
      )
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos um caracter minúsculo.")
      .regex(/.*[0-9].*/, "É necessário pelo menos um número."),
    confirmPassword: z.string().nonempty("confirmar senha é obrigatório."),
    bio: z.string().nonempty("A bio é obrigatória."),
    contact: z.string().nonempty("O contato é obrigatório."),
    course_module: z.string().nonempty("Por favor, selecione um módulo."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });
