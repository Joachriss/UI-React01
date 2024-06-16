import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaSnapchat,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 max-w-[1240px] mx-auto py-16 px-4 g-8 text-gray-300">
        <div>
            <h1 className="text-[#00df9a] text-3xl font-gold">Joh.React</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque ab quod quia neque repudiandae debitis, incidunt dolore. Impedit
            </p>
            <div  className="flex flex-row my-6 justify-between">
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaYoutube size={30} />
                <FaTwitter size={30} />
                <FaSnapchat size={30} />
            </div>

        </div>
        <div className="justify-between mt-6 lg:col-span-2 flex flex-auto md:ps-10">
            <div>
                <h1 className="font-medium text-gray-400 ">Solutions</h1>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insight</li>
                </ul>

            </div>
            <div>
                <h1 className="font-medium text-gray-400 ">Support</h1>
                <ul>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">API status</li>
                </ul>

            </div>
            <div>
                <h1 className="font-medium text-gray-400 ">Company</h1>
                <ul>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Jobs</li>
                    <li className="py-2 text-sm">Press</li>
                    <li className="py-2 text-sm">Carriers</li>
                </ul>

            </div>
            <div>
                <h1 className="font-medium text-gray-400 ">Legal</h1>
                <ul>
                    <li className="py-2 text-sm">Privacy</li>
                    <li className="py-2 text-sm">Policy</li>
                    <li className="py-2 text-sm">Terms</li>
                </ul>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
