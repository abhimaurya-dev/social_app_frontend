/* eslint-disable react/prop-types */
const ShowDetailCard = ({
  detailIcon,
  detailTitle,
  detailValue,
  detailAudienceIcon,
  detailEditHandler,
}) => {
  return (
    <div className="flex justify-between items-center bg-transparent py-2 my-1">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[1.5rem] filled text-gray-500">
          {detailIcon}
        </span>
        <p className="text-[1.02rem]">
          <span className="text-gray-600">{detailTitle}</span>
          <span className="text-gray-800 font-semibold ml-[0.3rem]">
            {detailValue}
          </span>
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <span className="material-symbols-outlined filled text-[1.2rem] text-gray-500">
          {detailAudienceIcon}
        </span>
        <div
          role="button"
          onClick={detailEditHandler}
          className="h-[2.1rem] w-[2.1rem] flex items-center justify-center rounded-full bg-gray-200"
        >
          <span className="text-[1.5rem] text-gray-600 material-symbols-outlined">
            edit
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailCard;
