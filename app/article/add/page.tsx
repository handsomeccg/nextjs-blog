'use client'

import "./page.css"
import {useRouter} from 'next/navigation'
import {useState} from "react";
import Link from "next/link";
import {saveNote} from "@/app/action";
import BlogPreview from "@/components/BlogPreview";

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
        saveNote({
            title: title,
            content: content,
            time: String(new Date().getTime())
        }).then(() => {
            router.push('/')
        })
    }
    return (
        <div className="mt-14 ml-14">
            <div className="bg-red-400 text-white max-w-max p-1 rounded-sm mb-8">
                <Link href="/">返回文章列表</Link>
            </div>
            <div className="flex">
                <div className="left">
                    <div className="b-item">
                        <div className="b-i-title">Title:</div>
                        <input className="b-i-input" onInput={e => setTitle((e.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="b-item">
                        <div className="b-i-title">Content:</div>
                        <div className="flex">
                <textarea
                    className="b-i-input"
                    cols={50}
                    rows={9}
                    onInput={e => setContent((e.target as HTMLInputElement).value)}/>
                        </div>
                    </div>
                </div>
                <div className="right ml-10">
                    <div>
                        <h3 className="mb-7">预览</h3>
                        <h2 className="mb-7">{title}</h2>
                        <BlogPreview>{content}</BlogPreview>
                    </div>
                </div>
            </div>


            <div className="bg-red-400 text-white p-1 rounded-sm ml-0 w-40 text-center cursor-pointer"
                 onClick={complete}>完成
            </div>
        </div>
    );

}
