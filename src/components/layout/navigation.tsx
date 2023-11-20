import melodictLogo from "@/assets/images/logo_name.png";
import searchIcon from "@/assets/icons/searchIcon.svg";
import { clsx } from "clsx";
import { router } from "../../routes";

const NAVIGATION_LINK = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Features",
    route: "/feature",
  },
  {
    name: "Category",
    route: "/category",
  },
  {
    name: "Testimony",
    route: "/testimony",
  },
];

const Navigation = () => {
  console.log(router);
  return (
    <nav className="bg-dark-100">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-20 w-full max-h-[100px] h-[100px]">
        {/* left side */}
        <div className="flex gap-[114px] items-center">
          <img src={melodictLogo} alt="melodict logo" className=" h-fit" />
          <ul className="flex gap-12 items-center">
            {NAVIGATION_LINK.map((item) => (
              <li
                className={clsx("font-medium text-white/70", {
                  "!font-bold !text-white": router.basename === item.route,
                })}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {/* right side */}
        <div className="flex items-center gap-12">
          <img src={searchIcon} alt="search icon" />
          <button className="py-3 px-10 rounded-3xl bg-white text-dark-100 font-bold hover:bg-transparent hover:border hover:border-white hover:text-white transition-all duration-500">
            Try Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
