import {getNote} from "@/lib/prisma";
import BlogPreview from "@/components/BlogPreview";

export default async function (props: any) {

    const {content, title} = await getNote(props.id)
  return (
    <div>
        <h2 className="mb-7">{title}</h2>
        <BlogPreview>{content}</BlogPreview>
    </div>
  );
}