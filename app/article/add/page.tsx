'use client'

import "./page.css"
import { useRouter } from 'next/navigation'
import {useState} from "react";
// import MyEditor from "@/app/components/MyEditor";
import Link from "next/link";
import dynamic from 'next/dynamic'

const MyEditor = dynamic(() => import('../../components/MyEditor'), {
    ssr: false,
})
export default function ArticleDetail() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // 编辑器内容
    const [html, setHtml] = useState('<p>hello</p>')
    const router = useRouter()
    const complete = () => {
        if (!title) {
            return
        }
        if (!content) {
            return
        }
        let curList = []
        try {
            curList = JSON.parse(localStorage.getItem('articleList') || '[]')
        } catch (e) {
        }
        curList.push({
            id: new Date().getTime(),
            title: title,
            content: content,
            time: new Date().getTime()
        })
        localStorage.setItem('articleList', JSON.stringify(curList))

        router.push('/')
    }
  return (
    <div className="mt-14 ml-36">
        <div className="bg-red-400 text-white max-w-max p-1 rounded-sm mb-8">
            <Link href="/">返回文章列表</Link>
        </div>
      <div className="b-item">
          <div className="b-i-title">Title:</div>
          <input className="b-i-input" onInput={e => setTitle((e.target as HTMLInputElement).value)}/>
      </div>
        <div className="b-item">
            <div className="b-i-title">Content:</div>
            <MyEditor content={content} setContent={setContent}/>
        </div>

        <div className="bg-red-400 text-white p-1 rounded-sm ml-80 w-40 text-center cursor-pointer" onClick={complete}>完成</div>
    </div>
  );

}
