import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, CheckCircle, AlertCircle, Clock, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "document" | "approval" | "warning" | "pending" | "participant";
  title: string;
  description: string;
  user: { name: string; avatar?: string };
  time: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "document",
    title: "สร้างเอกสารบันทึกข้อความ",
    description: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    user: { name: "สมชาย ใจดี" },
    time: "5 นาทีที่แล้ว"
  },
  {
    id: "2",
    type: "approval",
    title: "อนุมัติงบประมาณ",
    description: "โครงการ Innovation Hub รอบที่ 2",
    user: { name: "วิไลวรรณ สุขใจ" },
    time: "1 ชั่วโมงที่แล้ว"
  },
  {
    id: "3",
    type: "participant",
    title: "เพิ่มผู้เข้าร่วมใหม่",
    description: "เพิ่ม Mentor 3 คน เข้าโครงการ Startup Thailand",
    user: { name: "อนุชา สมศรี" },
    time: "2 ชั่วโมงที่แล้ว"
  },
  {
    id: "4",
    type: "warning",
    title: "งบประมาณใกล้หมด",
    description: "โครงการ Tech Startup เหลือ 15%",
    user: { name: "ระบบ" },
    time: "3 ชั่วโมงที่แล้ว"
  },
  {
    id: "5",
    type: "pending",
    title: "รอการอนุมัติ",
    description: "เอกสารขอเบิกจ่ายงบประมาณ",
    user: { name: "นิภา ศรีสุข" },
    time: "4 ชั่วโมงที่แล้ว"
  },
];

const typeConfig = {
  document: { icon: FileText, color: "bg-primary/10 text-primary" },
  approval: { icon: CheckCircle, color: "bg-status-completed/10 text-status-completed" },
  warning: { icon: AlertCircle, color: "bg-destructive/10 text-destructive" },
  pending: { icon: Clock, color: "bg-status-planning/10 text-status-planning" },
  participant: { icon: UserPlus, color: "bg-accent/10 text-accent" },
};

export const RecentActivity = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">กิจกรรมล่าสุด</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;
          
          return (
            <div 
              key={activity.id} 
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className={cn("p-2 rounded-lg flex-shrink-0", config.color)}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="w-5 h-5">
                    <AvatarImage src={activity.user.avatar} />
                    <AvatarFallback className="text-[10px] bg-secondary">
                      {activity.user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">
                    {activity.user.name} • {activity.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
