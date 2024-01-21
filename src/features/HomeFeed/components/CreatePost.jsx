import { useState } from "react";
import Modal from "../../../layout/Modal";
import ProfilePic from "../../../components/ProfilePic";

const CreatePost = () => {
  const [isCreatePostActive, setIsCreatePostActive] = useState(false);

  const createPostActiveHandler = () => {
    setIsCreatePostActive(true);
  };

  return (
    <>
      <div className="pt-6">
        <div className="bg-white shadow-md rounded-lg pt-4 pl-4 pr-4 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <ProfilePic
              imgPath={
                "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
              }
              height={"2.8rem"}
              width={"2.8rem"}
            />
            <button
              onClick={createPostActiveHandler}
              className="w-full flex justify-start text-[1.07rem] text-gray-600 bg-gray-100 px-4 py-[0.6rem] rounded-full mb-2"
            >
              What&apos;s on your mind. abhishek?
            </button>
          </div>
          <hr className="border-t-[1px] w-[100%] border-gray-300" />
          <div className="mt-2 flex w-full justify-between">
            <button className="flex gap-2 hover:bg-gray-200 px-10 py-[0.55rem] rounded-md">
              <span className="material-symbols-outlined">video_library</span>
              <p>Video</p>
            </button>
            <button className="flex gap-2 hover:bg-gray-200 px-10 py-[0.55rem] rounded-md">
              <span className="material-symbols-outlined">image</span>
              <p>Photo</p>
            </button>
            <button className="flex gap-2 hover:bg-gray-200 px-10 py-[0.55rem] rounded-md">
              <span className="material-symbols-outlined">mood</span>
              <p>Feeling</p>
            </button>
          </div>
        </div>
      </div>
      {isCreatePostActive && (
        <Modal
          closeIconCustomCSS={
            "top-4 right-4 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center h-[2.5rem] w-[2.5rem]"
          }
          closeIconButtonSize={"[1.8rem]"}
        >
          <div className="flex justify-center items-center w-full text-2xl font-semibold pt-1 mb-4">
            Create post
          </div>
          <hr className="border-t-[1px] w-[100%] border-gray-300" />
        </Modal>
      )}
    </>
  );
};

export default CreatePost;
