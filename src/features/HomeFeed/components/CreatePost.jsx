import { useState, useRef } from "react";
import Modal from "../../../layout/Modal";
import ProfilePic from "../../../components/ProfilePic";

const CreatePost = () => {
  const [isCreatePostActive, setIsCreatePostActive] = useState(false);
  const [postText, setPostText] = useState("");
  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true);
  const textareaRef = useRef(null);

  const openCreatePostHandler = () => {
    setIsCreatePostActive(true);
  };

  const closeCreatePostHandler = () => {
    setIsCreatePostActive(false);
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 400)}px`;
    }
    if (textarea.value.length >= 80) {
      textarea.style.fontSize = "1rem";
    } else {
      textarea.style.fontSize = "1.5rem";
    }
  };

  const postButtonDisableHandler = () => {
    setIsPostButtonDisabled(true);
  };
  const postButtonEnableHandler = () => {
    setIsPostButtonDisabled(false);
  };

  const postTextHandler = (e) => {
    setPostText(e.target.value);
    adjustTextareaHeight();
    postButtonEnableHandler();
    if (e.target.value.length === 0) {
      postButtonDisableHandler();
    }
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
              onClick={openCreatePostHandler}
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
          closeModalHandler={closeCreatePostHandler}
          closeIconCustomCSS={
            "top-4 right-4 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center h-[2.5rem] w-[2.5rem]"
          }
          closeIconButtonSize={"[1.8rem]"}
        >
          <div className="flex justify-center items-center w-full text-[1.5rem] font-semibold pt-1 mb-4">
            Create post
          </div>
          <hr className="absolute left-0 border-t-[1px] w-[100%] border-gray-300" />
          <div className="pt-4 flex gap-3 items-center">
            <ProfilePic
              imgPath={
                "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
              }
              height={"2.8rem"}
              width={"2.8rem"}
            />
            <div className="pb-2">
              <p className="font-semibold">Abhishek Maurya</p>
              <button className="mt-1 flex items-center justify-between pl-2 pt-[0.1rem] rounded-md bg-gray-200 gap-2">
                <span className="text-[1.1rem] material-symbols-outlined">
                  group
                </span>
                <p className="text-[0.9rem]">Friends</p>
                <span className="text-[1.4rem] pt-[0.1rem] material-symbols-outlined">
                  arrow_drop_down
                </span>
              </button>
            </div>
          </div>
          <textarea
            className="w-full textarea-scroll mt-4 text-2xl outline-none resize-none"
            type="text"
            value={postText}
            onChange={postTextHandler}
            ref={textareaRef}
            placeholder="What's on your mind, Abhishek?"
          />
          <div className="flex w-full mt-8 justify-between border-[1px] border-gray-300 rounded-lg px-3 py-[0.9rem] shadow-sm">
            <p className="text-[1.1rem] font-semibold">Add to your post</p>
            <div className="flex gap-3">
              <p className="material-symbols-outlined">imagesmode</p>
              <p className="material-symbols-outlined">sell</p>
              <p className="material-symbols-outlined">mood</p>
            </div>
          </div>
          <button
            disabled={isPostButtonDisabled}
            className={`w-full py-1 font-semibold rounded-lg mt-4 bg-primary-color disabled:bg-gray-200 disabled:cursor-not-allowed disabled:pointer-even-none `}
          >
            Post
          </button>
        </Modal>
      )}
    </>
  );
};

export default CreatePost;
