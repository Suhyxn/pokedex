import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../components/Tabs";

type Params = {
  id: string;
};

type Tab = "about" | "stats" | "evolution";

function DetailPage() {
  const { id } = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>("about");

  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <Tabs
        tab={selectedTab}
        onClick={handleClick}
        color={{ name: "red", url: "" }}
      />
    </>
  );
}

export default DetailPage;
