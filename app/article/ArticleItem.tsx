'use client'
import {useRouter} from "next/navigation";

export default function ArticleItem({ props }: { props: any }) {
    const getTimeStr = (date: Date) => {
        const time = new Date(date)
        return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
    }
    const router = useRouter()
    const toArticleDetail = () => {
        router.push(`/article/detail/${props.id}?title=${props.title}`)
    }
    return (
        <div className="flex">
            <div className="w-24">{props?.time ? getTimeStr(props.time) : ''}</div>
            <h5
                className="ml-4 cursor-pointer hover:text-red-400"
                onClick={toArticleDetail}
            >{props?.title || ''}</h5>
        </div>
    );

}