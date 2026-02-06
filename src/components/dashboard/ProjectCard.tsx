import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    status: "planning" | "approval" | "progress" | "completed";
    progress: number;
    budget: number;
    startDate: string;
    endDate: string;
    participants: number;
    team: Array<{ name: string; avatar?: string }>;
  };
}

const statusConfig = {
  planning: { label: "วางแผน", color: "bg-status-planning text-white" },
  approval: { label: "รออนุมัติ", color: "bg-status-approval text-white" },
  progress: { label: "ดำเนินงาน", color: "bg-status-progress text-white" },
  completed: { label: "เสร็จสิ้น", color: "bg-status-completed text-white" },
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const status = statusConfig[project.status];

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <Badge className={cn("text-xs", status.color)}>
              {status.label}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">ความคืบหน้า</span>
          <span className="font-medium">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{project.startDate} - {project.endDate}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Wallet className="w-4 h-4" />
          <span>{project.budget.toLocaleString()} บาท</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>{project.participants} คน</span>
        </div>
      </div>

      {/* Team */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.team.slice(0, 4).map((member, index) => (
            <Avatar key={index} className="w-8 h-8 border-2 border-card">
              <AvatarImage src={member.avatar} />
              <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                {member.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ))}
          {project.team.length > 4 && (
            <div className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium">
              +{project.team.length - 4}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
