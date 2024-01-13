import { useState } from "react";
import ProfilePic from "../../../components/ProfilePic";

const NavMessengerDropDown = () => {
  const [search, setSearch] = useState("");

  const searchInputhandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="z-[4] mt-2 bg-white rounded-lg border-[0.01rem] w-[23rem] p-2 shadow-lg menu menu-sm dropdown-content">
        <div tabIndex={1} className="mx-1 px-2 mt-1 mb-2">
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">Chats</p>
            <div className="flex gap-2">
              <div className="h-[2.3rem] w-[2.3rem] flex items-center justify-center rounded-full bg-transparent hover:bg-gray-100 cursor-pointer">
                <span className="text-[1.5rem] text-gray-700 material-symbols-outlined">
                  more_horiz
                </span>
              </div>
              <div className="h-[2.3rem] w-[2.3rem] flex items-center justify-center rounded-full bg-transparent hover:bg-gray-100 cursor-pointer">
                <span className="text-[1.5rem] text-gray-700 material-symbols-outlined">
                  edit_square
                </span>
              </div>
            </div>
          </div>
          <input
            className="mt-3 text-md w-full px-4 py-[0.6rem] outline-none rounded-full bg-gray-100 "
            type="text"
            value={search}
            onChange={searchInputhandler}
            placeholder="Search Messenger"
          />
          <div className="mt-4 h-[17rem] overflow-y-scroll">
            <div className="hover:bg-gray-100 px-3  rounded-lg py-3 w-full flex gap-4 items-center">
              <div className="h-[3rem] w-[3rem]">
                <ProfilePic
                  imgPath={
                    "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
                  }
                  height={"3rem"}
                  width={"3rem"}
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">{"Abhishek Maurya"}</p>
                <p>{"You: hello"}</p>
              </div>
            </div>
            <div className="hover:bg-gray-100 px-3  rounded-lg py-3 w-full flex gap-4 items-center">
              <div className="h-[3rem] w-[3rem]">
                <ProfilePic
                  imgPath={
                    "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
                  }
                  height={"3rem"}
                  width={"3rem"}
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">{"Abhishek Maurya"}</p>
                <p>{"You: hello"}</p>
              </div>
            </div>
            <div className="hover:bg-gray-100 px-3  rounded-lg py-3 w-full flex gap-4 items-center">
              <div className="h-[3rem] w-[3rem]">
                <ProfilePic
                  imgPath={
                    "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
                  }
                  height={"3rem"}
                  width={"3rem"}
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">{"Abhishek Maurya"}</p>
                <p>{"You: hello"}</p>
              </div>
            </div>
            <div className="hover:bg-gray-100 px-3  rounded-lg py-3 w-full flex gap-4 items-center">
              <div className="h-[3rem] w-[3rem]">
                <ProfilePic
                  imgPath={
                    "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
                  }
                  height={"3rem"}
                  width={"3rem"}
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">{"Abhishek Maurya"}</p>
                <p>{"You: hello"}</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-[1px] w-[100%] border-gray-300" />
        <div className="py-2 flex justify-center items-center w-full text-primary-color">
          <p className="text-[0.92rem] font-semibold">See all in Messenger</p>
        </div>
      </div>
    </div>
  );
};

export default NavMessengerDropDown;
