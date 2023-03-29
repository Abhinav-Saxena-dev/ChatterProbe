import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@/Components/Cards/card.component";

const Result = () => {

    const [isLoading, setLoading] = useState(true);
    const [queryResult, setQueryResult] = useState(null);
    const router = useRouter();

    useEffect(() => {

        const getQueryResponse = async () => {
            
            const {query} = router.query
            setLoading(true)
            const res = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(query)}`);
            const data = await res.json();
            setQueryResult(data.data);
        }

        getQueryResponse();
    }, [router])

    useEffect(() => {
        if(queryResult){
            setLoading(false)
        }
        console.log(queryResult);
    }, [queryResult])

    return(
        <div className="w-screen flex justify-around flex-wrap">
            {
                isLoading ? <h1>Loading</h1>
                :
                queryResult.organic_results.map((result) => 
                    <Card title = {result.title} snippet = {result.snippet} link = {result.link} />
                )
            }
        </div>
    );
}

export default Result;