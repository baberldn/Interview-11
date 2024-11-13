import React, { useState } from "react";

const BUNNY =
  "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <BuggyButtons />;
}

const BuggyButtons = () => {
  const [openCount, setOpenCount] = useState(0);
  const IDs = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center space-x-4">
        {IDs.map((item) => (
          <div key={item} id={item}>
            <BuggyButton openCount={openCount} setOpenCount={setOpenCount} />
          </div>
        ))}
      </div>
      <div className="mt-6 text-lg font-semibold">
        {openCount + " açık tavşan "}
      </div>
    </div>
  );
};

const BuggyButton = ({ openCount, setOpenCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <img
      alt="bunny"
      src={BUNNY}
      className="w-48 h-60 cursor-pointer"
      onClick={() => {
        setOpenCount((p) => p - 1);
        setIsOpen(false);
      }}
    />
  ) : (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
      onClick={() => {
        setOpenCount((p) => p + 1);
        setIsOpen(true);
      }}
    >
      TAVŞAN AÇ
    </button>
  );
};

export default App;
