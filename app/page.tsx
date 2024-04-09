'use client'
import ArticleItem from "@/app/article/ArticleItem";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
    // 初始化博客列表
    const initList = [
        {title: '假如给我三天光明', content: 'content2', id: 1712648713417, time: 1712648713417},
        {title: '这是一个blog的标题', content: 'content1', id: 1702648713417, time: 1702648713417},
    ]
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        try {
            let list = JSON.parse(localStorage.getItem('articleList') || '[]')
            if (list.length === 0) {
                list = [...initList]
                localStorage.setItem('articleList', JSON.stringify(list))
            }
            setArticleList(list)
            // console.log(articleList, '==articleList')
        } catch (e) {
            console.log('error')
        }
    }, [])

    const [role, setRole] = useState('user')
    const changeRole = () => {
        if (role === 'user') setRole('admin')
        else setRole('user')
    }

  return (
    <div className="flex min-h-screen columns flex-col mt-14 ml-36">
        <div className="absolute top-6 right-80">
            <div className="w-40">当前身份：
                <span className="text-red-400">{role === 'admin' ? '管理员' : '用户'}</span>
            </div>
            <div onClick={changeRole} className="cursor-pointer hover:text-red-400">切换为{role === 'admin' ? '用户' : '管理员'}</div>
        </div>
        <div className="flex mb-16">
            <h1 className="text-2xl">文章列表</h1>
            {
                role === 'admin' ? <div className="bg-red-400 text-white max-w-max p-1 rounded-sm ml-36">
                    <Link href="/article/add">写新的文章</Link>
                </div> : ''
            }
        </div>
        {articleList.map((k: any) => (
            <ArticleItem props={k} key={k.time}/>
        ))}

    </div>

  );
}
