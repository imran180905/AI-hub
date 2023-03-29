import React, { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./modal";
import SingleData from "./singleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [singlyData, setSinglyData] = useState({});
  

  const handleShowAll = () => {
    setShowAll(true);
  };
  useEffect(() => {
    fetch(` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSinglyData(data.data));
  }, [uniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const data = await res.json();
      console.log(data.data.tools);
      setData(data.data.tools);
    };
    loadData();
  }, []);
//   console.log(singlyData);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => {
          return (
            <SingleData
              key={singleData.id}
              singleData={singleData}
              setUniqueId={setUniqueId}
            ></SingleData>
          );
        })}
      </div>
      {!showAll && (
        <span onClick={handleShowAll}>
          <Button>See more</Button>
        </span>
      )}
      <Modal singlyData = {singlyData}></Modal>
    </>
  );
};
export default Card;
