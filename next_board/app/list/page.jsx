import { connectDB } from "@/util/database.js"
import Link from "next/link";


async function List() {

    const lg = console.log;

    let db = (await connectDB()).db('forum');
    let result = await db.collection('post').find().toArray();

    lg('전체목록 = ', result);

    return (
        <div className="list-bg">
            {
                result.map((res, i) => {

                    return (
                        <div className="list-item">
                            <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link><br></br>
                            <Link href={'/edit/' + result[i]._id} className="list-btn">수정✏️</Link>
                        </div>
                    );
                })
            }


        </div>
    )
}

export default List;