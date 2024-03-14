import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider";
const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
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
                <div className="flex mx-12 items-center my-8">
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
                        {contacts?.map(({ name, status, img }) => {
                            return (
                                <div key={name} className="flex items-center py-4 border-b border-gray-300">
                                    <div className="cursor-pointer flex items-center">
                                        <div>
                                            <img src={img} alt="" width={50} height={50} className="rounded-full" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">{name}</h3>
                                            <p className="text-xs font-light">{status}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-screen bg-white flex flex-col items-center">
                <div className="w-[75%] bg-[#f3f5ff] h-[80px] mt-14 rounded-full flex items-center px-14">
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
                <div className="h-[75%] w-full border overflow-scroll overflow-x-hidden">
                        <div className="h-[1000px] px-10 py-14">
                            <div className="h-[80px] w-[300px] bg-[#f3f5ff] rounded-b-xl rounded-tr-xl"></div>
                        </div>
                </div>
            </div>
            <div className="w-[25%] h-screen"></div>
        </div>
    );
};

export default Home;