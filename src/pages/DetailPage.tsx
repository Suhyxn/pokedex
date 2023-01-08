import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

function DetailPage() {
  const { id } = useParams<Params>();
  console.log(id);

  return (
    <>
      <div>DetailPage id:{id}</div>
      <div>{id}</div>
    </>
  );
}

export default DetailPage;
