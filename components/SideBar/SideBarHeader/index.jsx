import ProfileInfo from '@/components/SideBar/SideBarHeader/ProfileInfo';
import DarkModeButton from '@/components/SideBar/SideBarHeader/DarkModeButton';
 
import UserButton from '@/components/SideBar/SideBarHeader/UserButton';

const SideBarHeader = () => {
  return (
    <div className="relative flex items-center justify-between">
      <ProfileInfo />
      <DarkModeButton />
       
      <UserButton />
    </div>
  );
};

export default SideBarHeader;
