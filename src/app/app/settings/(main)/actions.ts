'use server'

import { z } from 'zod'

import { updateProfileSchema } from './schemas'
import { auth } from '@/service/auth'
import { prisma } from '@/service/database'

export async function updateProfile(
  input: z.infer<typeof updateProfileSchema>,
) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Não autenticado',
      data: null,
    }
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: input.name,
    },
  })
}
