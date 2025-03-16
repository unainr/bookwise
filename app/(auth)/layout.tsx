import { GalleryVerticalEnd } from 'lucide-react'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="grid  lg:grid-cols-2 bg-[url('/images/pattern.webp')] bg-cover bg-top min-h-screen w-full overflow-x-hidden">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full ">
          {children}
        </div>
      </div>
    </div>
    <div className="relative hidden bg-muted lg:block">
      <img
        src="/images/authimage.png"
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
  )
}

export default layout