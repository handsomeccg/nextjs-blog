
import DetailClient from "@/app/article/detail/DetailClient";

export async function generateMetadata({ params, searchParams }: any, parent: any) {
    // 读取路由参数
    // const id = searchParams.id
    const title = searchParams.title

    return {
        title,
    }
}

export default function ArticleDetail() {
    return (
        <DetailClient/>
    )
}
