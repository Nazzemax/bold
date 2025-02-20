
import { SecondBanner } from '@/widgets/secondBanner/SecondBanner'
import React from 'react'
import bgImg from '@/public/banner/img-1.jpg'

type Props = {}

const CasesPage: React.FC<Props> = ({}) => {
     return (
       <div>
        <SecondBanner bgImg={bgImg} title={'Наша миссия воплощать идеи в жизнь'}
        />
       </div>
     )
}

export default CasesPage