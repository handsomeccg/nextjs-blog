
import DetailClient from "@/app/article/detail/DetailClient";
import BlogPreview from "@/components/BlogPreview";
import {getNote} from "@/lib/prisma";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }: any, parent: any) {
    // 读取路由参数
    // const id = searchParams.id
    const title = searchParams.title

    return {
        title,
    }
}

export default async function ArticleDetail({ params }: { params: any }) {
    const id = params.id;
    const {content, title} = await getNote(id)
    // console.log(content, 'content')
    return (
        <div className="mt-14 ml-36">
            <div className="bg-red-400 text-white max-w-max p-1 rounded-sm mb-8">
                <Link href="/">返回文章列表</Link>
            </div>
            <h2 className="mb-7">{title}</h2>
            <BlogPreview>{content}</BlogPreview>
        </div>
        // <DetailClient/>
    )
}

// 用react写一个瀑布流组件
