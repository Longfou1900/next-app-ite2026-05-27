"use client"

import { use } from "react"

export default function BlogSlugCatchAllRoute({
    params
}:{
    params: Promise<{slugs: string[]}>
}){
    const {slugs} = use(params)
    return (
        <h1>My blog catch-all: {slugs}</h1>
    )
}
