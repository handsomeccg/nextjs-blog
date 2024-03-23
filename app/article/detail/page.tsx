'use client'
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function ArticleDetail() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const [content, setContent] = useState('')
    useEffect(() => {
        try {
            const list = JSON.parse(localStorage.getItem('articleList'))
            setContent(list.find(k => Number(k.id) === Number(id))?.content || '')
        } catch (e) {
        }
    }, [])

  return (
      <div className="mt-14 ml-36">
          <div className="bg-red-400 text-white max-w-max p-1 rounded-sm mb-8">
              <Link href="/">返回文章列表</Link>
          </div>
        <div id="box" className="flex" dangerouslySetInnerHTML={{ __html: content }}>
        </div>
      </div>
  );

}
