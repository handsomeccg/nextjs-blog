import ArticleItem from "@/app/article/ArticleItem";
import {getAllNotes} from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";

interface BlogProps {
    title: string;
    content: string;
    time: number;
}

export default async function Home() {
    // console.log(883)
    // 初始化博客列表
    const initList = [
        {title: '假如给我三天光明', content: 'content2', id: 1712648713417, time: 1712648713417},
        {title: '这是一个blog的标题', content: 'content1', id: 1702648713417, time: 1702648713417},
    ]


    // let articleList: BlogProps[] = [...initList]
    // @ts-ignore
    const articleList : BlogProps[] = await getAllNotes()

  return (
    <div className="flex min-h-screen columns flex-col mt-14 ml-36">
        <PageHeader/>
        {articleList.map((k: any) => (
            <ArticleItem props={k} key={k.time}/>
        ))}

    </div>

  );
}
