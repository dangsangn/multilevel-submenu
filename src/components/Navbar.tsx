import { menuItems } from "../data";
import MenuItems from "./MenuItems";
type Props = {};

const Navbar = (props: Props) => {
  let deepLevel = 0;
  return (
    <div className="flex items-center gap-4">
      {menuItems.map((item: any, index: number) => (
        <MenuItems deepLevel={deepLevel} data={item} key={index} />
      ))}
    </div>
  );
};

export default Navbar;
