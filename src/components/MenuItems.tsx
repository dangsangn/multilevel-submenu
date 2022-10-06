import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

type Props = {
  data: any;
  deepLevel: number;
};

const MenuItems = ({ data, deepLevel }: Props) => {
  deepLevel++;
  const [dropdown, setDropdown] = useState<boolean>(false);
  const menuItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (
        dropdown &&
        menuItemRef.current &&
        !menuItemRef.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };
    window.addEventListener("mousedown", (e: MouseEvent) => {
      handler(e);
    });
    window.addEventListener("touchstart", (e: TouchEvent) => {
      handler(e);
    });
    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const handleMouseEnter = (e: any) => {
    setDropdown(true);
  };

  const handleMouseLeave = (e: any) => {
    setDropdown(false);
  };

  return (
    <div
      ref={menuItemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative before:contents-[''] before:absolute ${
        deepLevel === 1
          ? "before:top-[100%] before:left-0 before:w-[calc(100%+12px)] before:h-[12px]"
          : "before:top-[0%] before:left-[100%] before:w-[calc(12px)] before:h-[100%]"
      }`}
    >
      {data?.submenu ? (
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="text-base font-semibold"
          >
            {data.title}
            <span className="ml-1 inline-block w-7 h-7">
              {!dropdown ? (
                <i className="fa-sharp fa-solid fa-chevron-down"></i>
              ) : deepLevel === 1 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-right"></i>
              )}
            </span>
          </button>
          <Dropdown
            deepLevel={deepLevel}
            data={data?.submenu}
            dropdown={dropdown}
          />
        </div>
      ) : (
        <Link className="text-base font-semibold block" to={data.url}>
          {data.title}
        </Link>
      )}
    </div>
  );
};

export default MenuItems;
