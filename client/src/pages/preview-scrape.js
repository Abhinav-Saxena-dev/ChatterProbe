import SidePanel from "@/Components/SidePanel/sidepanel.component";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Preview = () => {
  const router = useRouter();

  const { link, title } = router.query;

  const [elements, setElements] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try{
      const data = await axios.get(`http://0.0.0.0:8080/scrape?url=${link}`);
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      setElements(data.data.elements);
      }
      catch(err){
        console.log(err);
        setError(err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if(elements &&  elements.length > 0){
      setLoading(false);
    }
  }, [elements])

  const Loading = () => {
    return (
      <div role="status" className="flex justify-center w-[95vw] items-center h-[90vh]">
      <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only text-black z-0">Please wait while we scrape the document.</span>
  </div>
    );
  };

  return (
    isLoading ? (
      <Loading/>
    ) : (<div className="flex justify-between bg-[#000000ee]">
    <div className="w-[55vw] m-10 ml-60 rounded-lg shadow-md shadow-[#dcdcdc] pt-20 bg-white">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div className="font-sans">
          <p className="text-base md:text-sm text-green-500 font-bold">
            &lt;{" "}
            <a
              onClick={() => router.back()}
              className="text-base md:text-sm text-green-500 cursor-pointer font-bold no-underline hover:underline"
            >
              Go back
            </a>
          </p>
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Published 19 February 2019
          </p>
        </div>
        {elements && (
          <div>
            {elements.map((element, index) => {
              if (element.type === "error") {
                return (
                  <p key={index} className="text-red-500">
                    {element.text}
                  </p>
                );
              }

              const classNames = {
                h1: "text-3xl font-bold mb-2",
                h2: "text-2xl font-bold mb-2",
                h3: "text-xl font-bold mb-2",
                h4: "text-lg font-bold mb-2",
                h5: "text-base font-bold mb-2",
                h6: "text-sm font-bold mb-2",
                p: "py-6",
              };

              const Tag = element.type;
              return (
                <Tag key={index} className={classNames[element.type]}>
                  {element.text}
                </Tag>
              );
            })}
          </div>
        )}
      </div>
    </div>
    <SidePanel title={"hello"} />
  </div>)
    
    
  );
};

export default Preview;
