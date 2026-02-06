import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Plus, 
  Search, 
  Calendar,
  AlertCircle,
  Clock,
  CheckCircle2,
  MoreHorizontal,
  Filter
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

// Sample tasks data based on schema
const tasks = [
  {
    id: 1,
    taskName: "เตรียมเอกสารสัญญา MOU",
    description: "จัดทำเอกสาร MOU สำหรับผู้สนับสนุน",
    eventName: "Startup Thailand League 2569",
    status: "กำลังดำเนินการ",
    statusSlug: "in_progress",
    statusColor: "bg-status-progress",
    priority: "สูง",
    priorityColor: "text-destructive",
    category: "เอกสาร",
    progressPercent: 60,
    startDate: "1 ก.พ. 69",
    dueDate: "15 ก.พ. 69",
    assignees: [
      { name: "สมชาย ใจดี" },
      { name: "วิไลวรรณ สุขใจ" },
    ],
  },
  {
    id: 2,
    taskName: "ติดต่อวิทยากร Workshop",
    description: "ประสานงานวิทยากรสำหรับ Workshop Design Thinking",
    eventName: "Workshop: Design Thinking",
    status: "รอดำเนินการ",
    statusSlug: "pending",
    statusColor: "bg-status-planning",
    priority: "กลาง",
    priorityColor: "text-status-planning",
    category: "ประสานงาน",
    progressPercent: 0,
    startDate: "10 ก.พ. 69",
    dueDate: "28 ก.พ. 69",
    assignees: [
      { name: "อนุชา สมศรี" },
    ],
  },
  {
    id: 3,
    taskName: "ออกแบบ Poster ประชาสัมพันธ์",
    description: "สร้าง Poster สำหรับโปรโมท Hackathon",
    eventName: "Hackathon: Smart Campus 2569",
    status: "เสร็จสิ้น",
    statusSlug: "completed",
    statusColor: "bg-status-completed",
    priority: "ปกติ",
    priorityColor: "text-muted-foreground",
    category: "การตลาด",
    progressPercent: 100,
    startDate: "1 ก.พ. 69",
    dueDate: "8 ก.พ. 69",
    assignees: [
      { name: "นิภา ศรีสุข" },
    ],
  },
  {
    id: 4,
    taskName: "จองสถานที่จัดงาน",
    description: "ติดต่อจองหอประชุมสำหรับจัดกิจกรรม",
    eventName: "Startup Thailand League 2569",
    status: "กำลังดำเนินการ",
    statusSlug: "in_progress",
    statusColor: "bg-status-progress",
    priority: "สูง",
    priorityColor: "text-destructive",
    category: "สถานที่",
    progressPercent: 80,
    startDate: "5 ก.พ. 69",
    dueDate: "12 ก.พ. 69",
    assignees: [
      { name: "กานดา มีสุข" },
      { name: "สมชาย ใจดี" },
    ],
  },
  {
    id: 5,
    taskName: "เตรียมอาหารและเครื่องดื่ม",
    description: "ประสานงานร้านอาหารสำหรับ Hackathon",
    eventName: "Hackathon: Smart Campus 2569",
    status: "รอดำเนินการ",
    statusSlug: "pending",
    statusColor: "bg-status-planning",
    priority: "กลาง",
    priorityColor: "text-status-planning",
    category: "โลจิสติกส์",
    progressPercent: 10,
    startDate: "20 ก.พ. 69",
    dueDate: "1 เม.ย. 69",
    assignees: [
      { name: "วิไลวรรณ สุขใจ" },
    ],
  },
];

const statusIcons = {
  pending: Clock,
  in_progress: AlertCircle,
  completed: CheckCircle2,
};

const TaskCard = ({ task }: { task: typeof tasks[0] }) => {
  const StatusIcon = statusIcons[task.statusSlug as keyof typeof statusIcons] || Clock;
  
  return (
    <Card className="p-4 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <StatusIcon className={`w-5 h-5 mt-0.5 ${
            task.statusSlug === 'completed' ? 'text-status-completed' : 
            task.statusSlug === 'in_progress' ? 'text-status-progress' : 'text-muted-foreground'
          }`} />
          <div className="flex-1 min-w-0">
            <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-1">
              {task.taskName}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {task.eventName}
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>ดูรายละเอียด</DropdownMenuItem>
            <DropdownMenuItem>แก้ไข</DropdownMenuItem>
            <DropdownMenuItem>เปลี่ยนสถานะ</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Progress */}
      {task.statusSlug !== 'completed' && (
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">ความคืบหน้า</span>
            <span>{task.progressPercent}%</span>
          </div>
          <Progress value={task.progressPercent} className="h-1.5" />
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge className={`text-xs text-white ${task.statusColor}`}>
            {task.status}
          </Badge>
          <span className={`text-xs font-medium ${task.priorityColor}`}>
            {task.priority}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>{task.dueDate}</span>
        </div>
      </div>

      {/* Assignees */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
        <Badge variant="outline" className="text-xs">{task.category}</Badge>
        <div className="flex -space-x-2">
          {task.assignees.map((assignee, index) => (
            <Avatar key={index} className="w-6 h-6 border-2 border-card">
              <AvatarFallback className="text-xs bg-secondary">
                {assignee.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Tasks = () => {
  const pendingTasks = tasks.filter(t => t.statusSlug === 'pending');
  const inProgressTasks = tasks.filter(t => t.statusSlug === 'in_progress');
  const completedTasks = tasks.filter(t => t.statusSlug === 'completed');

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            งาน
          </h1>
          <p className="text-muted-foreground">
            จัดการและติดตามงานทั้งหมดในแต่ละกิจกรรม
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          สร้างงานใหม่
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="ค้นหางาน..." 
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          ตัวกรอง
        </Button>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pending Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-planning" />
              <h3 className="font-semibold">รอดำเนินการ</h3>
              <Badge variant="secondary" className="text-xs">{pendingTasks.length}</Badge>
            </div>
          </div>
          <div className="space-y-3">
            {pendingTasks.map((task, index) => (
              <div 
                key={task.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TaskCard task={task} />
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-progress" />
              <h3 className="font-semibold">กำลังดำเนินการ</h3>
              <Badge variant="secondary" className="text-xs">{inProgressTasks.length}</Badge>
            </div>
          </div>
          <div className="space-y-3">
            {inProgressTasks.map((task, index) => (
              <div 
                key={task.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TaskCard task={task} />
              </div>
            ))}
          </div>
        </div>

        {/* Completed Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-completed" />
              <h3 className="font-semibold">เสร็จสิ้น</h3>
              <Badge variant="secondary" className="text-xs">{completedTasks.length}</Badge>
            </div>
          </div>
          <div className="space-y-3">
            {completedTasks.map((task, index) => (
              <div 
                key={task.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TaskCard task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Tasks;
