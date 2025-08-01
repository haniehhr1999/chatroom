"use client";
import Image from "next/image";
import man from "../../public/images/man.jpg";
import { FaUserLarge } from "react-icons/fa6";
import IO from "socket.io-client";
import { useEffect, useState } from "react";

const socket = IO.connect("http://localhost:4000");

export default function Home() {
  const [pvs, setPvs] = useState([]);
  useEffect(() => {
    socket.on("privateChats", (pvs) => {
      setPvs([...pvs]);
    });
  }, []);
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="bg-[#dfe8e3] p-5 col-span-3">
        <ul>
          <li className="flex bg-white rounded-md px-4 py-2">
            <div className="avatar-box">
              <Image width={50} src={man} className="avatarr" />
              <div className="offline"></div>
            </div>
            <div className="mx-3">
              <h3 className="text-[#52796f] text-xl bold">محمدحسین طوافی</h3>
              <p className="text-[#b1b1b1]">
                این یک متن تستی برای تست است صرفا
              </p>
            </div>
          </li>

          <li className="flex bg-white rounded-md px-4 py-2">
            <div className="avatar-box">
              <Image width={50} src={man} className="avatarr" />
              <div className="offline"></div>
            </div>
            <div className="mx-3">
              <h3 className="text-[#52796f] text-xl bold">محمدحسین طوافی</h3>
              <p className="text-[#b1b1b1]">
                این یک متن تستی برای تست است صرفا
              </p>
            </div>
          </li>

          <li className="flex bg-white rounded-md px-4 py-2">
            <div className="avatar-box">
              <Image width={50} src={man} className="avatarr" />
              <div className="offline"></div>
            </div>
            <div className="mx-3">
              <h3 className="text-[#52796f] text-xl bold">محمدحسین طوافی</h3>
              <p className="text-[#b1b1b1]">
                این یک متن تستی برای تست است صرفا
              </p>
            </div>
          </li>

          <li className="flex bg-white rounded-md px-4 py-2">
            <div className="avatar-box">
              <Image width={50} src={man} className="avatarr" />
              <div className="offline"></div>
            </div>
            <div className="mx-3">
              <h3 className="text-[#52796f] text-xl bold">محمدحسین طوافی</h3>
              <p className="text-[#b1b1b1]">
                این یک متن تستی برای تست است صرفا
              </p>
            </div>
          </li>

          <li className="flex bg-white rounded-md px-4 py-2">
            <div className="avatar-box">
              <Image width={50} src={man} className="avatarr" />
              <div className="offline"></div>
            </div>
            <div className="mx-3">
              <h3 className="text-[#52796f] text-xl bold">محمدحسین طوافی</h3>
              <p className="text-[#b1b1b1]">
                این یک متن تستی برای تست است صرفا
              </p>
            </div>
          </li>

          <li className="flex bg-white rounded-md px-4 py-2">
            <div className="avatar-box">
              <Image width={50} src={man} className="avatarr" />
              <div className="offline"></div>
            </div>
            <div className="mx-3">
              <h3 className="text-[#52796f] text-xl bold">محمدحسین طوافی</h3>
              <p className="text-[#b1b1b1]">
                این یک متن تستی برای تست است صرفا
              </p>
            </div>
          </li>

          {pvs.map((pv) => (
            <li className="flex bg-white rounded-md px-4 py-2">
              <div className="avatar-box">
                <Image width={50} src={man} className="avatarr" />
                <div className="offline"></div>
              </div>
              <div className="mx-3">
                <h3 className="text-[#52796f] text-xl bold">محمدحسین طوافی</h3>
                <p className="text-[#b1b1b1]">
                  این یک متن تستی برای تست است صرفا
                </p>
              </div>
            </li>
          ))}
          
        </ul>
      </div>
      <div className=" col-span-7 ">
        <nav className="bg-[#cad2c5] text-[#52796f] p-4 flex items-center ">
          <FaUserLarge />
          <div className="mx-4">محمدحسین</div>
        </nav>
        <div className="p-8">
          <div className="user ">
            <div className=" bg-[#84a98c] text-white w-1/3 my-2 rounded-md px-5 py-3">
              سلام خوبی
            </div>
          </div>
          <div className="me">
            <div className=" bg-[#354f52] text-white w-1/3 my-2 rounded-md px-5 py-3">
              سلام کجایی چرا نیستی
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
