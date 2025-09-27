"use client"
import Image from "next/image";
import donate from '@/public/images/aceBookClub/donate.png'
import MakeChange from "../common/makeChange";

export default function Donate(){
    return(
        <>
            <Image src={donate} alt="" />
            <MakeChange />
        </>
    )
}