import Link from "next/link";
import {Suspense} from "react";
import DetailContent from "@/components/DetailContent";

export async function generateMetadata({params, searchParams}: any, parent: any) {
    // 读取路由参数
    const title = searchParams.title
    return {
        title,
    }
}

export default async function ArticleDetail({params}: { params: any }) {
    const id = params.id;
    return (
        <div className="mt-14 ml-36">
            <div className="bg-red-400 text-white max-w-max p-1 rounded-sm mb-8">
                <Link href="/">返回文章列表</Link>
            </div>
            <Suspense fallback={<div>文章加载中...</div>}>
                <DetailContent id={id}/>
            </Suspense>
        </div>
    )
}
