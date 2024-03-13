import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div className="w-screen flex bg-[#d4f4fc]">
            <div className="w-[25%] border border-black h-screen bg-secondary">
                <div className="flex justify-center items-center my-8">
                    <img src={user?.photoURL} alt="" width={75} height={75} className="rounded-full"/>
                    <div className="ml-2">
                        <h3 className="text-2xl">{user?.displayName}</h3>
                        <p className="text-lg font-light">My Account</p>
                    </div>
                </div>
            </div>
            <div className="w-[50%] border border-black h-screen"></div>
            <div className="w-[25%] border border-black h-screen"></div>
        </div>
    );
};

export default Home;