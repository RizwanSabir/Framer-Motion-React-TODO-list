import React, { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

const Test = () => {
  const [add, setadd] = useState([0]);
  const [del, setDel] = useState();

  function addition() {
    setadd([...add, add[add.length - 1] + 1]);
    console.log(add);
  }

  function deleteFunction(el) {
    const a = add.filter((e, index) => {
      return el !== e;
    });
    setadd(a);
  }

  return (
    <>
    <div className=" text-center text-2xl font-bold  mt-4">TODO List</div>
      <div className=" w-full  flex    items-center flex-col">
        <motion.div   initial={{height:0}} animate={{height:"auto"}}    className="flex  mt-8 overflow-hidden flex-col bg-white w-[500px]  border-2 p-8 rounded-md">
          <motion.div className="m-2 flex justify-between">
            <motion.button className=" border-2 py-2 px-3 rounded-md font-medium" onClick={addition}>
              Add Item
            </motion.button>
          </motion.div>
          <motion.div >
            <AnimatePresence initial={false}>
            
            {add.map((el, index) => {
              return (
                <motion.div layout
                 initial={{opacity:0,height:0}}
                 transition={{duration:0.3,}} 
                 animate={{opacity:1,height:"auto"}}
                  
                 exit={{opacity:0,height:0}}
                
                  key={el}
                >
                  <div className="flex flex-row p-2 border-y-black justify-between border-b-[1px] space-y-2 font-normal">

                  <p>Item {el}</p>
                  <button
                    className="border-2 px-3    rounded-md"
                    onClick={() => {
                      deleteFunction(el);
                    }}
                    >
                    X
                  </button>

                    </div>
                </motion.div>
              );
            })}
            </AnimatePresence>
 
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

function Item({ data }) {
  return <div>data</div>;
}

export default Test;
