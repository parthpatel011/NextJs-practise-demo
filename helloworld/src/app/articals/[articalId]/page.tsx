"use client"
import Link from "next/link"
import { use } from "react";

export default function NewsArtical({params,searchParams} : {
    params: Promise<{articalId: string}>
    searchParams: Promise<{lang?:"en" | "fr" | "es"}>
}) {
    const {articalId} =  use(params);
    const {lang = "en"} =  use(searchParams);
    return (
        <div>
            <h1>News Artical {articalId}</h1>
            <p>Reading in {lang}</p>
            <div>
                <Link href={`/articals/${articalId}?lang=en`}>English</Link>
                <Link href={`/articals/${articalId}?lang=fr`}>French</Link>
                <Link href={`/articals/${articalId}?lang=es`}>Spanish</Link>
            </div>
        </div>
    )
}