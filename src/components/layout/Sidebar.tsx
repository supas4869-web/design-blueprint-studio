import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  CalendarDays, 
  ListTodo,
  Users, 
  UsersRound,
  FileText, 
  Settings,
  ChevronLeft,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "แดชบอร์ด", path: "/" },
  { icon: CalendarDays, label: "กิจกรรม", path: "/events" },
  { icon: ListTodo, label: "งาน", path: "/tasks" },
  { icon: UsersRound, label: "ทีม", path: "/teams" },
  { icon: Users, label: "ผู้เข้าร่วม", path: "/participants" },
  { icon: Building2, label: "พนักงาน", path: "/employees" },
  { icon: FileText, label: "เอกสาร", path: "/documents" },
  { icon: Settings, label: "ตั้งค่า", path: "/settings" },
];

export const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar text-sidebar-foreground transition-all duration-300 z-50 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-xl font-bold text-white">NU</span>
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <h1 className="font-bold text-lg">NU SEED</h1>
              <p className="text-xs text-sidebar-foreground/70">ระบบติดตามโครงการ</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive && "bg-sidebar-primary text-sidebar-primary-foreground shadow-glow",
                collapsed && "justify-center px-3"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="font-medium animate-fade-in">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Button */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "w-full text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            collapsed && "px-3"
          )}
        >
          <ChevronLeft className={cn(
            "w-5 h-5 transition-transform duration-300",
            collapsed && "rotate-180"
          )} />
          {!collapsed && <span className="ml-2">ย่อเมนู</span>}
        </Button>
      </div>
    </aside>
  );
};
