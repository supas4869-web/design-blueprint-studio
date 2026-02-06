import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Milestone {
  id: string;
  title: string;
  status: "completed" | "current" | "upcoming";
  date: string;
}

const milestones: Milestone[] = [
  { id: "1", title: "วางแผนโครงการ", status: "completed", date: "1 ม.ค. 2569" },
  { id: "2", title: "ขออนุมัติงบประมาณ", status: "completed", date: "15 ม.ค. 2569" },
  { id: "3", title: "เปิดรับสมัครผู้เข้าร่วม", status: "current", date: "1 ก.พ. 2569" },
  { id: "4", title: "ดำเนินกิจกรรม", status: "upcoming", date: "15 ก.พ. 2569" },
  { id: "5", title: "สรุปผลโครงการ", status: "upcoming", date: "28 ก.พ. 2569" },
];

export const MilestoneTimeline = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-6">ไทม์ไลน์โครงการล่าสุด</h3>
      <div className="relative">
        {milestones.map((milestone, index) => {
          const isLast = index === milestones.length - 1;
          
          return (
            <div key={milestone.id} className="flex gap-4 relative">
              {/* Line */}
              {!isLast && (
                <div className={cn(
                  "absolute left-[15px] top-8 w-0.5 h-full -translate-x-1/2",
                  milestone.status === "completed" ? "bg-status-completed" : "bg-border"
                )} />
              )}
              
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                {milestone.status === "completed" ? (
                  <div className="w-8 h-8 rounded-full bg-status-completed flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                ) : milestone.status === "current" ? (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-pulse-soft">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full border-2 border-border bg-card flex items-center justify-center">
                    <Circle className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className={cn(
                "pb-6 flex-1",
                milestone.status === "upcoming" && "opacity-50"
              )}>
                <p className={cn(
                  "font-medium",
                  milestone.status === "current" && "text-primary"
                )}>
                  {milestone.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {milestone.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
