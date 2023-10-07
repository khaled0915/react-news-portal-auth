import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RighSideNav from "../Shared/RightSideNav/RighSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const {id} = useParams();



    return (
        <div>
            <Header></Header>

            <Navbar></Navbar>

            <div className="grid md:grid-cols-4">
                <div className=" col-span-3 border "> 

                <h2 className="text-2xl"> News Details  </h2>

                <p> {id} </p>
                    
                </div>

                <div>

                    <RighSideNav></RighSideNav>

                </div>
            </div>





            
            
        </div>
    );
};

export default News;