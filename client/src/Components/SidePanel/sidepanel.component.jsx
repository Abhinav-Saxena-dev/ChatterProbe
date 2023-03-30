import { useEffect, useState } from "react";
import axios from "axios";

const SidePanel = ({title}) => {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setPrompt(e.target.textContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const currentChat = [...chat, { "role": "user", "content": prompt }];
    console.log(currentChat);
    await setChat(chat => [...chat, {
      "role" : "user",
      "content" : prompt
    }])
    try{
      const response = await axios.post("http://localhost:3000/api/openapi", {chat : currentChat, title : title})
      console.log(response);
      setChat(chat => [...chat, {
        "role" : "assistant",
        "content" : response.data[0].message.content
      }])
    }catch(error){
      console.log(error);
      setChat(prev => prev.filter(data => data != prompt))
    }finally {
      setPrompt("")
      setLoading(false)
    }
  };

  useEffect(() => {
    console.log(chat)
  }, [chat])

  return (
    <div className="w-[25%] right-10 top-10 bg-[#ffffff] rounded-md shadow-sm shadow-[#ffffff94] fixed h-[94vh] flex justify-between flex-col">
      <div className="flex justify-center items-center h-[10%]">
        <h1 className="text-2xl">Probing Ground</h1>
      </div>
      <div className="h-[75%] overflow-y-auto">
        <div className="w-full p-3">
          {
            chat.map(data => (
              <div className="mb-5">
                <span>{data.content}</span>
              </div>
            ))
          }
          {
          loading ? <h1>Loading</h1> : null
          }
        </div>
      </div>
      <div className="h-[15%]">
        <form
          className="h-full w-full flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <span
            className="border border-black rounded-md w-[80%] ml-1 overflow-y-auto max-h-32 px-2 py-1"
            onInput={handleChange}
            role="textbox"
            contentEditable={true}
          ></span>
          <input
            type="submit"
            className="border ml-4 border-black cursor-pointer p-1 rounded-md"
            value={"Send"}
          />
        </form>
      </div>
    </div>
  );
};

export default SidePanel;
