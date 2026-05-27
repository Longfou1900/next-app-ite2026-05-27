

export default async function BlogSlug({
    params
    }:{
        params: Promise<{slug: string}>
    }){
        const {slug} = await params

    return(
        <div> My Blog Slug : {slug}</div>
    );
}

