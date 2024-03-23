import {useRouter} from "next/navigation";

export default function ArticleItem({ props }) {
    const getTimeStr = (date: Date) => {
        const time = new Date(date)
        return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
    }
    const router = useRouter()
    const toArticleDetail = () => {
        router.push(`/article/detail?id=${props.id}`)
    }
    return (
        <div className="flex">
            <div>{props?.time ? getTimeStr(props.time) : ''}</div>
            <h3
                className="ml-4 cursor-pointer hover:text-red-400"
                onClick={toArticleDetail}
            >{props?.title || ''}</h3>
        </div>
    );

}