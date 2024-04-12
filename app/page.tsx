import ArticleItem from "@/app/article/ArticleItem";
import {getAllNotes} from "@/lib/prisma";
import PageHeader from "@/components/PageHeader";

interface BlogProps {
    title: string;
    content: string;
    time: number;
}

export default async function Home() {
    // @ts-ignore
    const articleList: BlogProps[] = await getAllNotes()

    return (
        <div className="flex min-h-screen columns flex-col mt-14 ml-36">
            <PageHeader/>
            {articleList.map((k: any) => (
                <ArticleItem props={k} key={k.time}/>
            ))}
        </div>
    );
}
