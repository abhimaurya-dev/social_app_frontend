import { useState } from "react";

/* eslint-disable react/prop-types */
const EnterDetailCard = ({
  detailTitle,
  detailValueHandler,
  detailValue,
  selectedAudienceHandler,
  selectedAudience,
  detailSaveHandler,
  editValue,
  detailEditHandler,
}) => {
  const [wantToEnterValue, setWantToEnterValue] = useState(editValue);

  const wantToEnterValueHandler = () => {
    setWantToEnterValue(true);
  };

  const cancelEnterValueHandler = () => {
    detailValueHandler(detailValue);
    setWantToEnterValue(false);
    detailEditHandler();
  };

  return (
    <div className="bg-transparent px-2 py-1 my-1">
      <p className="font-semibold text-[1.05rem] mb-2">{detailTitle}</p>
      {wantToEnterValue ? (
        <div>
          <textarea
            value={detailValue}
            onChange={(e) => detailValueHandler(e.target.value)}
            className="resize-none border-2 w-full px-2 py-1 rounded-md outline-primary-color"
          ></textarea>
          <div className="flex justify-between mt-2">
            <select
              value={selectedAudience}
              className="outline-none px-2 rounded-md bg-gray-200 w-[7rem]"
              onChange={selectedAudienceHandler}
            >
              <option value="Public">Public</option>
              <option value="group">Friends</option>
              <option value="lock">Only me</option>
            </select>
            <div className="flex gap-4">
              <button
                className="outline-none px-2 font-semibold rounded-md bg-gray-200 w-[4rem]"
                onClick={cancelEnterValueHandler}
              >
                Cancel
              </button>
              <button
                disabled={detailValue.length === 0}
                onClick={detailSaveHandler}
                className="outline-none px-2 disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed font-semibold rounded-md bg-primary-color text-white w-[4rem]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="ml-1 flex items-center gap-3"
            role="button"
            onClick={wantToEnterValueHandler}
          >
            <span className="material-symbols-outlined text-[1.5rem] text-primary-color">
              add_circle
            </span>
            <span className="text-[1.05rem] mb-[0.12rem] text-primary-color">
              Enter a phone Number
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default EnterDetailCard;
