import {marked} from 'marked'

export default function BlogPreview({children}: { children: string }) {
    return (
        <div className="note-preview">
            <div
                className="text-with-markdown"
                dangerouslySetInnerHTML={{
                    __html: marked(children || '')
                }}
            />
        </div>
    )
}