import { useState } from "react";
import EnterDetailCard from "./EnterDetailCard";
import ShowDetailCard from "./ShowDetailCard";

const UserAboutOverview = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [savedPhoneNo, setSavedPhoneNo] = useState(phoneNo.length != 0);
  const [selectedPhoneNoAudience, setSelectedPhoneNoAudience] =
    useState("Public");
  const [phoneNoEdit, setPhoneNoEdit] = useState(false);

  const phoneNoEditHandler = () => {
    setPhoneNoEdit((state) => !state);
  };

  const phoneNoInputHandler = (value) => {
    setPhoneNo(value);
  };

  const selectedAudienceHandler = (e) => {
    setSelectedPhoneNoAudience(e.target.value);
  };

  const savePhoneNoHandler = () => {
    phoneNoEditHandler();
    setSavedPhoneNo(true);
  };

  return (
    <div className="w-full bg-white rounded-b-lg desktop:rounded-none border-t-[0.5px] desktop:border-t-[0] desktop:border-l-[0.5px] shadow-md desktop:shadow-none py-4 pl-5 pr-8">
      <ShowDetailCard
        detailIcon={"work"}
        detailTitle={`Works at`}
        detailValue={"Studying"}
        detailAudienceIcon={"public"}
      />
      <ShowDetailCard
        detailIcon={"Home"}
        detailTitle={`Lives in`}
        detailValue={"Varanasi"}
        detailAudienceIcon={"public"}
      />
      <ShowDetailCard
        detailIcon={"location_on"}
        detailTitle={`From`}
        detailValue={"Varanasi"}
        detailAudienceIcon={"public"}
      />
      <ShowDetailCard
        detailIcon={"favorite"}
        detailTitle={null}
        detailValue={`Single`}
        detailAudienceIcon={"public"}
      />
      {!savedPhoneNo || phoneNoEdit ? (
        <EnterDetailCard
          detailTitle={"Phone"}
          detailValue={phoneNo}
          detailValueHandler={phoneNoInputHandler}
          editValue={phoneNoEdit}
          detailEditHandler={phoneNoEditHandler}
          selectedAudience={selectedPhoneNoAudience}
          selectedAudienceHandler={selectedAudienceHandler}
          detailSaveHandler={savePhoneNoHandler}
        />
      ) : (
        <ShowDetailCard
          detailIcon={"call"}
          detailTitle={null}
          detailValue={phoneNo}
          detailAudienceIcon={selectedPhoneNoAudience}
          detailEditHandler={phoneNoEditHandler}
        />
      )}
    </div>
  );
};

export default UserAboutOverview;
