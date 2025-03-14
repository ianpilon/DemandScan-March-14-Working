import { FileTextIcon, LightbulbIcon, CheckSquareIcon, SettingsIcon, SearchIcon, HelpCircleIcon } from "lucide-react";
import CustomerProblemAnalyst from "./pages/CustomerProblemAnalyst.jsx";
import FAQs from "./pages/FAQs.jsx";
import Settings from "./pages/Settings.jsx";

export const navItems = [
  {
    title: "Customer Problem Analyst",
    to: "/ai-agent-analysis",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <CustomerProblemAnalyst />,
  },
  {
    title: "FAQs",
    to: "/faqs",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <FAQs />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <Settings />,
  },
];