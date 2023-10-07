
import { BiLogoGoogle  } from 'react-icons/Bi';

import { AiOutlineGithub } from 'react-icons/Ai';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/Fa';

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RighSideNav = () => {
    return (
        <div>

            <div className='p-4 mb-6 space-y-3' >
                <h2 className="text-2xl">Login With</h2>

                <button className="btn btn-outline w-full">
  <BiLogoGoogle></BiLogoGoogle>
  Google
</button>
                <button className="btn btn-outline w-full">
  <AiOutlineGithub></AiOutlineGithub>
  GitHub
</button>
            </div>


            <div className='p-4 mb-6 ' >
                <h2 className="text-2xl">Find Us On</h2>

              <a className='p-4 border items-center text-lg rounded-t-lg flex' href="">
                <FaFacebookF className='mr-3'></FaFacebookF>
                FaceBook
              </a>

              <a className='p-4 border items-center text-lg rounded-t-lg flex' href="">
                <FaTwitter className='mr-3'></FaTwitter>
                Twitter
              </a>

              <a className='p-4 border items-center text-lg rounded-t-lg flex' href="">
                <FaInstagram className='mr-3'></FaInstagram>
                Instagram
              </a>
            </div>

            {/* Q Zone  */}

            <div className='p-4 mb-6 space-y-3' >
                <h2 className="text-2xl">Q Zone</h2>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

         
            </div>


            
        </div>
    );
};

export default RighSideNav;