'use client'
import Link from "next/link";
import {useEffect, useState} from "react";

export default function PageHeader() {
    const [role, setRole] = useState('user')
    const changeRole = () => {
        if (role === 'user') setRole('admin')
        else setRole('user')
    }
    return (
        <div>
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
        </div>
    )

}