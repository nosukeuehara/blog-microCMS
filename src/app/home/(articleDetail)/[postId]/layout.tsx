import Loading from '@/app/components/Loading'
import React, { Suspense } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  )
}

export default layout