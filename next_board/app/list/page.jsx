import { connectDB } from "@/util/database.js"
import Link from "next/link";


export default async function List() {

    const lg = console.log;

    let db = (await connectDB()).db('forum');
    let result = await db.collection('post').find().toArray();

    lg('전체목록 = ', result);

    return (
        <div className="list-bg">
            {result.map((res, i) => {

                return (
                    <div className="list-item">
                        <Link href={'/detail/' + result[i]._id}><h4>{res.title}</h4><p>1월 1일</p></Link>

                    </div>
                );
            })}
        </div>
    )
}