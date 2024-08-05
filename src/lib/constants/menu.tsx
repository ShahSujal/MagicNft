import { DashboardIcon } from "@radix-ui/react-icons";
import {RocketIcon,ReaderIcon, BoxModelIcon,HeartIcon, ChatBubbleIcon} from "@radix-ui/react-icons";
type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: JSX.Element;
  path: string;
};
export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
    {
      label: "MarketPlace",
      icon: <DashboardIcon/>,
      path: "marketplace",
    },
    {
      label: "Collections",
      icon: <RocketIcon />,
      path: "collections",
    },
    {
      label: "Leaderboard",
      icon: (
        <BoxModelIcon />
      ),
      path: "leaderboard",
    },
    {
      label: "Messages",
      icon: (
        <ChatBubbleIcon />
      ),
      path: "messages",
    },
    {
      label: "Farvorite",
      icon: (
        <HeartIcon />
      ),
      path: "farvorite",
    },
 
  ];
  