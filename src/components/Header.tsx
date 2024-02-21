import { ModeToggle } from "./ModeToggle";
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-xl tracking-widest font-medium">Miirshe</h1>
      <ModeToggle />
    </div>
  );
};

export default Header;
