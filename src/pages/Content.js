export default function Content(){
    return(
        <div className="flex p-2 m-2 border w-300 bg-gray-400 ">
           <input type="text" placeholder="Enter your text" class="border border-gray-300 bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg py-2 px-4"/>
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click Me

           </button>
        </div>
    )
}