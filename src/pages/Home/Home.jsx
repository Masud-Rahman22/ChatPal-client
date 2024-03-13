import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const contacts = [
        {
            name: 'Nitol',
            status: 'active',
        },
        {
            name: 'Noman',
            status: 'offline',
        },
        {
            name: 'Mahmud',
            status: 'offline',
        },
        {
            name: 'Raju',
            status: 'active',
        },
        {
            name: 'Tanjim',
            status: 'active',
        },
        {
            name: 'Provat',
            status: 'offline',
        },
    ]
    return (
        <div className="w-screen flex bg-[#d4f4fc]">
            <div className="w-[25%] h-screen bg-[#f3f5ff]">
                <div className="flex mx-12 items-center my-8">
                    <div className="border border-[#1476ff] p-[2px] rounded-full">
                    <img src={user?.photoURL} alt="" width={75} height={75} className="rounded-full"/>
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
                        {contacts?.map(({name,status})=>{
                            return(
                                <div key={name} className="flex items-center py-4 border-b border-gray-300">
                            <div className="cursor-pointer flex items-center">
                            <div>
                            <img src={user?.photoURL} alt="" width={50} height={50} className="rounded-full"/>
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
            <div className="w-[50%] h-screen"></div>
            <div className="w-[25%] h-screen"></div>
        </div>
    );
};

export default Home;