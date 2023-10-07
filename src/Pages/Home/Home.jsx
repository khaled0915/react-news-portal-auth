import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RighSideNav from "../Shared/RightSideNav/RighSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>

            <Header>

            </Header> 

            <BreakingNews></BreakingNews>

            <Navbar></Navbar>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>

                </div>

                <div className="md:col-span-2 border">

                    <h2 className="text-3xl">news coming soon....</h2>


                </div>


                <div className="border">

                    <RighSideNav></RighSideNav>


                </div>
            </div>
        </div>
    );
};

export default Home;