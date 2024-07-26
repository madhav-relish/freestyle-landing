'use client'
import { homePageUrl } from '@/lib/utils'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'

const CTAButtons = () => {
    const router = useRouter()
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 ">
    <Button onClick={()=>router.push(homePageUrl+"/demo")} size="md" variant="outline" color="white" radius={50}>
      {" "}
      Get a Demo{" "}
    </Button>
    <Button
    onClick={()=>router.push(homePageUrl+"/get-started")}
      size="md"
      variant="filled"
      color="white"
      className="!text-black hover:!bg-white hover:!text-black"
      radius={50}
    >
      {" "}
      Start Building{" "}
      <ArrowLongRightIcon className="size-6 test-white ml-2" />{" "}
    </Button>
  </div>
  )
}

export default CTAButtons