import AboutShort from "./AboutShort";
import Profile from "./Profile";
import Socials from "./Socials";

export default function Sidebar() {
  return (
    <div className="flex flex-col lg:basis-1/4 basis-full divide-y mx-10 py-10">
      <Profile />
      <AboutShort />
      <Socials />
    </div>
  );
}
