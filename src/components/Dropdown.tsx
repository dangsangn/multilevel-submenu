import React from "react";
import MenuItems from "./MenuItems";

type Props = {
  data: any;
  dropdown: boolean;
  deepLevel: number;
};

const Dropdown = ({ data, dropdown, deepLevel }: Props) => {
  return (
    <div
      className={`${dropdown ? "" : "hidden"} ${
        deepLevel === 1
          ? "left-0 top-[calc(100%+12px)]"
          : "left-[calc(100%+12px)] top-0"
      } absolute  shadow-lg p-3 bg-white w-[160px]`}
    >
      {data.map((item: any, index: number) => (
        <MenuItems deepLevel={deepLevel} data={item} key={index} />
      ))}
    </div>
  );
};

export default Dropdown;
