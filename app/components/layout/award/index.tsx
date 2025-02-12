import Image from "next/image"
import { Badge } from "../../ui/badge"

export const Award = () => {
  return (
    <div className='relative bg-[#0D0D0D] rounded-3xl m-3 md:4 p-3 flex justify-center items-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-5 text-white">
        <div className="absolute inset-0 bg-[url('/award/bg.svg')] bg-no-repeat" />
        <div className="flex flex-col justify-center items-center max-w-2xl lg:pl-24">
          <Badge className="mb-6 rounded-3xl bg-transparent border border-gray-600 uppercase">Получили премию</Badge>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">Маркетинговая компания года</h1>
          <h3 className="text-xl text-center mt-4">на The Great Award of the Year 2023!</h3>
        </div>
        <div className="relative">
          <Image src={'/award/diploma_bg.svg'} alt="award" width={475} height={338} />
          <Image className="absolute top-16" src={'/award/diploma.svg'} alt="award" width={475} height={338} />
        </div>
      </div>
    </div>
  )
}
