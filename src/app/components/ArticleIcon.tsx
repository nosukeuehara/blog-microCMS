import React from 'react'
import Image from 'next/image'
import { rm } from 'fs'

const ArticleIcon = ({ imagePath }: { imagePath: string }) => {
  return (
    <div>
      <Image
        src={imagePath}
        alt={'eyecatch'}
        width={120}
        height={120}
        className=' rounded-md' />
    </div>
  )
}

export default ArticleIcon