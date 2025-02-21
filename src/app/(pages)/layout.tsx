import AuthProtectionWrapper from '@/components/wrappers/AuthProtectionWrapper'
import type { ChildrenType } from '@/types/component-props'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

const HorizontalLayout = ({ children }: ChildrenType) => {
  return (
    <AuthProtectionWrapper>
      <Suspense fallback={<div />}>{children}</Suspense>

      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
    </AuthProtectionWrapper>
  )
}
export default HorizontalLayout
