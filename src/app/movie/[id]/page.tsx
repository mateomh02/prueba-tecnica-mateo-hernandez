
'use client'

import { useParams } from 'next/navigation'
import { CardsInfo } from "@/app/components/cardsInfo/cardsInfo"

export default function InternalCard(){
    const params = useParams();
    return (
        <CardsInfo params={{ id: Number(params.id) }} />
    )
}