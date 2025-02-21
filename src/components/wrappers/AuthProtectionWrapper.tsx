'use client'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense } from 'react'

import type { ChildrenType } from '@/types/component-props'

const AuthProtectionWrapper = ({ children }: ChildrenType) => {
  const { status } = useSession()
  const { push } = useRouter()
  const pathname = usePathname()

  if (status == 'unauthenticated') {
    push(`/auth/login?redirectTo=${pathname}`)
    return <div />
  }

  return <Suspense>{children}</Suspense>
}

export default AuthProtectionWrapper
