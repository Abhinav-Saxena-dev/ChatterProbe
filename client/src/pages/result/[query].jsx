import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@/Components/Cards/card.component";

const Result = () => {
  const [isLoading, setLoading] = useState(true);
  const [queryResult, setQueryResult] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getQueryResponse = async () => {
      const { query } = router.query;
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/search?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setQueryResult(data.data);
    };

    getQueryResponse();
  }, [router]);

  useEffect(() => {
    if (queryResult) {
      setLoading(false);
    }
    console.log(queryResult);
  }, [queryResult]);

  return (
    <div className="bg-[#000000ee]">
      <div className="px-5 pt-5">
        <button onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div className="p-5 grid grid-cols-4 gap-6">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          queryResult.organic_results.map((result) => (
            <Card
              title={result.title}
              snippet={result.snippet}
              link={result.link}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Result;
