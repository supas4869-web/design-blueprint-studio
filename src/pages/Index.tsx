import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { MilestoneTimeline } from "@/components/dashboard/MilestoneTimeline";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CalendarDays, 
  Users, 
  FileText, 
  ListTodo,
  Plus,
  ArrowRight,
  Trophy,
  Clock,
  UsersRound
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample data based on new schema
const stats = [
  { 
    title: "กิจกรรมทั้งหมด", 
    value: 12, 
    subtitle: "4 กิจกรรมกำลังดำเนินการ", 
    icon: CalendarDays,
    trend: { value: 20, isPositive: true },
    variant: "primary" as const
  },
  { 
    title: "ทีมที่ลงทะเบียน", 
    value: 45, 
    subtitle: "จาก 8 กิจกรรม", 
    icon: UsersRound,
    trend: { value: 15, isPositive: true },
    variant: "accent" as const
  },
  { 
    title: "งานที่ต้องทำ", 
    value: 28, 
    subtitle: "12 งานรอดำเนินการ", 
    icon: ListTodo,
    variant: "default" as const
  },
  { 
    title: "เอกสารที่สร้าง", 
    value: 156, 
    subtitle: "เดือนนี้ 23 ฉบับ", 
    icon: FileText,
    variant: "default" as const
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Startup Thailand League 2569",
    status: "กำลังดำเนินการ",
    statusColor: "bg-status-progress",
    eventDate: "15-17 มี.ค. 69",
    participants: 156,
    maxParticipants: 200,
    prizePool: 500000,
  },
  {
    id: 2,
    title: "Hackathon: Smart Campus 2569",
    status: "เปิดรับสมัคร",
    statusColor: "bg-status-approval",
    eventDate: "5-7 เม.ย. 69",
    participants: 45,
    maxParticipants: 100,
    prizePool: 300000,
  },
  {
    id: 3,
    title: "Workshop: Design Thinking",
    status: "วางแผน",
    statusColor: "bg-status-planning",
    eventDate: "25 มี.ค. 69",
    participants: 0,
    maxParticipants: 50,
    prizePool: 0,
  },
];

const recentTasks = [
  {
    id: 1,
    name: "เตรียมเอกสารสัญญา MOU",
    event: "Startup Thailand League 2569",
    status: "กำลังดำเนินการ",
    statusColor: "bg-status-progress",
    priority: "สูง",
    dueDate: "15 ก.พ. 69",
    progress: 60,
  },
  {
    id: 2,
    name: "จองสถานที่จัดงาน",
    event: "Startup Thailand League 2569",
    status: "กำลังดำเนินการ",
    statusColor: "bg-status-progress",
    priority: "สูง",
    dueDate: "12 ก.พ. 69",
    progress: 80,
  },
  {
    id: 3,
    name: "ติดต่อวิทยากร Workshop",
    event: "Workshop: Design Thinking",
    status: "รอดำเนินการ",
    statusColor: "bg-status-planning",
    priority: "กลาง",
    dueDate: "28 ก.พ. 69",
    progress: 0,
  },
];

const EventCard = ({ event }: { event: typeof upcomingEvents[0] }) => {
  const progressPercent = Math.round((event.participants / event.maxParticipants) * 100);
  
  return (
    <Card className="p-4 hover:shadow-md transition-all duration-200 cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-1">
            {event.title}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{event.eventDate}</span>
          </div>
        </div>
        <Badge className={`text-xs text-white ${event.statusColor}`}>
          {event.status}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            ผู้เข้าร่วม
          </span>
          <span className="font-medium">{event.participants}/{event.maxParticipants}</span>
        </div>
        <Progress value={progressPercent} className="h-1.5" />
      </div>

      {event.prizePool > 0 && (
        <div className="flex items-center gap-1.5 mt-3 text-sm text-muted-foreground">
          <Trophy className="w-3.5 h-3.5" />
          <span>เงินรางวัล: {event.prizePool.toLocaleString()} บาท</span>
        </div>
      )}
    </Card>
  );
};

const TaskItem = ({ task }: { task: typeof recentTasks[0] }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <h4 className="font-medium text-sm truncate">{task.name}</h4>
        <span className={`text-xs ${task.priority === 'สูง' ? 'text-destructive' : 'text-muted-foreground'}`}>
          [{task.priority}]
        </span>
      </div>
      <p className="text-xs text-muted-foreground truncate">{task.event}</p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-16">
        <Progress value={task.progress} className="h-1.5" />
      </div>
      <Badge className={`text-xs text-white ${task.statusColor}`}>
        {task.progress}%
      </Badge>
    </div>
  </div>
);

const Index = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            แดชบอร์ด
          </h1>
          <p className="text-muted-foreground">
            ภาพรวมกิจกรรมและงานล่าสุดของ NU SEED
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          สร้างกิจกรรมใหม่
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={stat.title} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events & Tasks Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">กิจกรรมที่กำลังจะมาถึง</h2>
              <Link to="/events">
                <Button variant="ghost" size="sm" className="text-primary">
                  ดูทั้งหมด
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tasks */}
          <Card className="p-6 animate-slide-up" style={{ animationDelay: "600ms" }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">งานล่าสุด</h2>
              <Link to="/tasks">
                <Button variant="ghost" size="sm" className="text-primary">
                  ดูทั้งหมด
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="space-y-1">
              {recentTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          <div className="animate-slide-up" style={{ animationDelay: "700ms" }}>
            <MilestoneTimeline />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "800ms" }}>
            <RecentActivity />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
