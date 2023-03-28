import { useEffect } from "react";
import { useRouter } from "next/router";

const Result = () => {

    const router = useRouter();

    useEffect(() => {

        const getQueryResponse = async () => {
            
            const {query} = router.query
            const res = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(query)}`);
            console.log(res.json());
        }

        getQueryResponse();
    }, [])

    return(
        <div>
            Hello
        </div>
    );
}

export default Result;