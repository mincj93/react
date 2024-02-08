import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Edit(props) {


    let urlID = props.params.id; // url 에 사용자가 입력한 값
    let db = (await connectDB()).db('forum')
    let result = await db.collection('post').findOne({ _id: new ObjectId(urlID) });
    
    return (
        <div className="write">
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <input type="hidden" name="id" defaultValue={urlID} />
                <button type="submit">전송</button>
            </form>
        </div>
    )
} 