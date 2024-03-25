import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider";
import axios from "axios";
const Home = () => {
    const { user } = useContext(AuthContext)
    const [conversations, setConversations] = useState([])
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const id = userDetails?.user.id
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/conversation/${id}`)
        .then(res =>{
            setConversations(res.data)
        })
    },[id])
    const contacts = [
        {
            name: 'Nitol',
            status: 'active',
            img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
        },
        {
            name: 'Noman',
            status: 'offline',
            img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
        },
        {
            name: 'Mahmud',
            status: 'offline',
            img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
        },
        {
            name: 'Raju',
            status: 'active',
            img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
        },
        {
            name: 'Tanjim',
            status: 'active',
            img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
        },
        {
            name: 'Provat',
            status: 'offline',
            img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
        },
    ]

    return (
        <div className="w-screen flex bg-[#d4f4fc]">
            <div className="w-[25%] h-screen bg-[#f3f5ff]">
                <div className="flex gap-3 mx-12 items-center my-8">
                    <div className="border border-[#1476ff] p-[2px] rounded-full">
                        <img src={user?.photoURL} alt="" width={75} height={75} className="rounded-full" />
                    </div>
                    <div className="ml-2">
                        <h3 className="text-2xl">{user?.displayName}</h3>
                        <p className="text-lg font-light">My Account</p>
                    </div>
                </div>
                <hr />
                <div className="ml-14 mt-5">
                    <div className="text-[#1476ff] text-lg">
                        Messages
                    </div>
                    <div>
                        {conversations?.map(({ conversationId, user }) => {
                            console.log(conversationId)
                            return (
                                <div key={user?.id} className="flex items-center py-4 border-b border-gray-300 mr-10">
                                    <div onClick={()=>console.log('hello')} className="cursor-pointer flex items-center">
                                        <div>
                                            <img src={'img1'} alt="" width={50} height={50} className="rounded-full" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">{user?.fullName}</h3>
                                            <p className="text-xs font-light">{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-screen bg-white flex flex-col items-center">
                <div className="w-[75%] bg-[#f3f5ff] h-[80px] my-8 rounded-full flex items-center px-14">
                    <div className="cursor-pointer"><img src={user?.photoURL} width={60} height={60} alt="" className="rounded-full" /></div>
                    <div className=" ml-4 mr-auto">
                        <h3 className="text-lg font-semibold">{user?.displayName}</h3>
                        <p className="text-sm font-light text-gray-500">active</p>
                    </div>
                    <div className="cursor-pointer flex gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 9l5 -5" />
                            <path d="M16 4l4 0l0 4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-video" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                            <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                        </svg>
                    </div>
                </div>
                <div className="h-[75%] w-full overflow-scroll overflow-x-hidden shadow-sm">
                    <div className=" p-14">
                        <div className="p-4 max-w-[50%] mb-6 bg-[#f3f5ff] rounded-b-xl rounded-tr-xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#1476ff] rounded-b-xl rounded-tr-xl ml-auto text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#f3f5ff] rounded-b-xl rounded-tr-xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#1476ff] rounded-b-xl rounded-tr-xl ml-auto text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#f3f5ff] rounded-b-xl rounded-tr-xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#1476ff] rounded-b-xl rounded-tr-xl ml-auto text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#f3f5ff] rounded-b-xl rounded-tr-xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#1476ff] rounded-b-xl rounded-tr-xl ml-auto text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#f3f5ff] rounded-b-xl rounded-tr-xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div className="p-4 max-w-[50%] mb-6 bg-[#1476ff] rounded-b-xl rounded-tr-xl ml-auto text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
                <div className="w-full p-10 flex items-center">
                    <input type="text" placeholder="type a message......" className="w-full p-3 shadow-md bg-[#f9faff] focus:ring-0 focus:border-0 outline-none rounded-full border-0" />
                    <div className="ml-4 bg-[#f9faff] cursor-pointer rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>
                    </div>
                    <div className="ml-1 bg-[#f9faff] cursor-pointer rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M9 12h6" />
                            <path d="M12 9v6" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-[25%] h-screen bg-[#f9faff]"></div>
        </div>
    );
};

export default Home;