import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../ContextApi/AuthProvider";
import { io } from 'socket.io-client'
const Home = () => {
    const { user } = useContext(AuthContext)
    const [conversations, setConversations] = useState([])
    const [messages, setMessages] = useState({})
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState(null);
    const messageRef = useRef();
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const id = userDetails?.user?.id

    useEffect(() => {
        setSocket(io('http://localhost:8080'))
    }, [])

    useEffect(() => {
        socket?.emit('addUser', id)
        socket?.on('getUsers', users => {
            console.log('activeUsers', users)
        })
        socket?.on('getMessage', (data) => {
            console.log('data', data)
            setMessages(prev => ({
                ...prev,
                messages: [...prev.messages, { user: data.user, message: data.message }]
            }))
        })
    }, [socket])

    useEffect(() => {
        messageRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages?.messages])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/conversation/${id}`)
            .then(res => {
                setConversations(res.data)
            })
    }, [id])
    // const contacts = [
    //     {
    //         name: 'Nitol',
    //         status: 'active',
    //         img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
    //     },
    //     {
    //         name: 'Noman',
    //         status: 'offline',
    //         img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
    //     },
    //     {
    //         name: 'Mahmud',
    //         status: 'offline',
    //         img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
    //     },
    //     {
    //         name: 'Raju',
    //         status: 'active',
    //         img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
    //     },
    //     {
    //         name: 'Tanjim',
    //         status: 'active',
    //         img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
    //     },
    //     {
    //         name: 'Provat',
    //         status: 'offline',
    //         img: 'https://i.ibb.co/z8M6bQD/99df05b4-d55b-4277-9c89-9da815ff34ca.jpg'
    //     },
    // ]

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/${id}`)
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [id])

    const fetchMessages = async (conversationId, user) => {
        axios.get(`http://localhost:5000/api/message/${conversationId}?senderId=${id}&&receiverId=${user?.userId}`)
            .then(res => {
                setMessages({ messages: res.data, receiver: user, conversationId })
            })
            .catch(err => {
                console.error(err)
            })
    }
    console.log(messages)
    const sendMessage = () => {
        socket?.emit('sendMessage', {
            conversationId: messages?.conversationId,
            senderId: id,
            message: message,
            receiverId: messages?.receiver?.receiverId
        })

        axios.post('http://localhost:5000/api/message', { conversationId: messages?.conversationId, senderId: id, message: message, receiverId: messages?.receiver?.receiverId })
            .then(res => {
                console.log(res.data)
                setMessage(res.data)
                setMessage('')
            })
    }
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
                        {
                            conversations.length > 0 ?
                                conversations?.map(({ conversationId, user }) => {
                                    return (
                                        <div key={conversationId} className="flex items-center py-4 border-b border-gray-300 mr-10">
                                            <div onClick={() => fetchMessages(conversationId, user)} className="cursor-pointer flex items-center">
                                                <div>
                                                    <img src={user?.photo} alt="" width={50} height={50} className="rounded-full" />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-semibold">{user?.fullName}</h3>
                                                    <p className="text-xs font-light">{user?.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : <div className="text-center text-lg font-semibold mt-24">No Conversations</div>
                        }
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-screen bg-white flex flex-col items-center">
                {
                    messages?.receiver?.fullName &&
                    <div className="w-[75%] bg-[#f3f5ff] h-[80px] my-8 rounded-full flex items-center px-14 py-6">
                        <div className="cursor-pointer"><img src={messages?.receiver?.photo} width={60} height={60} alt="" className="rounded-full" /></div>
                        <div className=" ml-4 mr-auto">
                            <h3 className="text-lg font-semibold">{messages?.receiver?.fullName}</h3>
                            <h3 className="text-sm font-extralight py-1">{messages?.receiver?.email}</h3>
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
                }
                <div className="h-[75%] w-full overflow-scroll overflow-x-hidden shadow-sm">
                    <div className=" p-14">
                        {
                            messages?.messages?.length > 0 ?
                                messages?.messages?.map((messageObj, i) => {
                                    const { message, user } = messageObj;
                                    return (
                                        <>
                                            <div
                                                className={`p-4 max-w-[50%] mb-6 rounded-b-xl rounded-tr-xl ${id === user?.id ? "bg-[#1476ff] text-white ml-auto" : "bg-[#f3f5ff]"
                                                    }`}
                                                key={i}
                                            >
                                                {message}
                                            </div>
                                            <div ref={messageRef}></div>
                                        </>
                                    );

                                })
                                :
                                <div className="text-center text-lg font-semibold mt-24">No Messages Please Start A Conversation</div>
                        }

                    </div>
                </div>
                {
                    messages?.receiver?.fullName && <div className="w-full p-10 flex items-center">
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="type a message......" className="w-full p-3 shadow-md bg-[#f9faff] focus:ring-0 focus:border-0 outline-none rounded-full border-0" />
                        <div className={`ml-4 bg-[#f9faff] cursor-pointer rounded-full p-2 ${!message && 'pointer-events-none'}`} onClick={() => sendMessage()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>
                        </div>
                        <div className={`ml-1 bg-[#f9faff] cursor-pointer rounded-full p-2 ${!message && 'pointer-events-none'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M9 12h6" />
                                <path d="M12 9v6" />
                                {/* <div className="p-4 max-w-[50%] mb-6 bg-[#1476ff] rounded-b-xl rounded-tr-xl ml-auto text-white" key={i}>
                                                {message}
                                            </div> */}
                            </svg>
                        </div>
                        {/* <div className="p-4 max-w-[50%] mb-6 bg-[#f3f5ff] rounded-b-xl rounded-tr-xl" key={user?.id}>
                                                {message}
                                            </div> */}
                    </div>
                }
            </div>
            <div className="w-[25%] h-screen bg-[#f9faff]">
                <h3 className="px-8 py-12 text-blue-600">people</h3>
                <div className="px-8">
                    {
                        users?.length > 0 ?
                            users?.map(({ userId, user }) => {
                                return (
                                    <div key={userId} className="flex items-center py-4 border-b border-gray-300 mr-10">
                                        <div onClick={() => fetchMessages('new', user)} className="cursor-pointer flex items-center">
                                            <div>
                                                <img src={user?.photo} alt="" width={50} height={50} className="rounded-full" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg font-semibold">{user?.fullName}</h3>
                                                <p className="text-xs font-light">{user?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <div className="text-center text-lg font-semibold mt-24">No Conversations</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;