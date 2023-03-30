import { useEffect, useState } from "react";
import axios from "axios";

const SidePanel = () => {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setPrompt(e.target.textContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const response = await axios.post("http://localhost:3000/api/openapi", {prompt})
      console.log(response);
      setChat([...chat, {
        role : "assistant",
        message : response.data[0].message.content
      }])
    }catch(error){
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    console.log(chat)
    if(loading){
      setLoading(false)
    }
  }, [chat])

  return (
    <div className="w-[25%] border border-gray-400 fixed h-screen flex justify-between flex-col">
      <div className="flex justify-center items-center h-[10%]">
        <h1 className="text-2xl">Probing Ground</h1>
      </div>
      <div className="h-[75%] border border-black overflow-y-auto">
        <div className="w-full border border-black p-3">
          {
            loading ? <h1>Loading</h1>
            :
            chat.map(data => (
              <div className="mb-5">
                <span>{data.message}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className="h-[15%] border border-t-black">
        <form
          className="h-full w-full flex justify-around items-center"
          onSubmit={handleSubmit}
        >
          <span
            className="border border-black w-[80%] ml-1 overflow-y-auto max-h-32 px-2"
            onInput={handleChange}
            role="textbox"
            contentEditable={true}
          ></span>
          <input
            type="submit"
            className="border border-black cursor-pointer p-1 rounded-md"
            value={"Send"}
          />
        </form>
      </div>
    </div>
  );
};

export default SidePanel;
