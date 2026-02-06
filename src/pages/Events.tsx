import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  Trophy,
  Filter,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample events data based on schema
const events = [
  {
    id: 1,
    title: "Startup Thailand League 2569",
    description: "การแข่งขัน Startup ระดับมหาวิทยาลัย",
    eventType: "แข่งขัน",
    category: "Startup",
    status: "กำลังดำเนินการ",
    statusColor: "bg-status-progress",
    location: "หอประชุมใหญ่ มหาวิทยาลัยนเรศวร",
    format: "Onsite",
    registrationStart: "1 ม.ค. 69",
    registrationEnd: "28 ก.พ. 69",
    eventStart: "15 มี.ค. 69",
    eventEnd: "17 มี.ค. 69",
    maxParticipants: 200,
    currentParticipants: 156,
    prizePool: 500000,
    budget: 1200000,
    isTeamBased: true,
    minTeamMember: 3,
    maxTeamMember: 5,
    organizer: "NU SEED",
  },
  {
    id: 2,
    title: "Hackathon: Smart Campus 2569",
    description: "การแข่งขันพัฒนาโซลูชันสำหรับ Smart Campus",
    eventType: "Hackathon",
    category: "Technology",
    status: "เปิดรับสมัคร",
    statusColor: "bg-status-approval",
    location: "อาคาร IT มหาวิทยาลัยนเรศวร",
    format: "Hybrid",
    registrationStart: "15 ก.พ. 69",
    registrationEnd: "15 มี.ค. 69",
    eventStart: "5 เม.ย. 69",
    eventEnd: "7 เม.ย. 69",
    maxParticipants: 100,
    currentParticipants: 45,
    prizePool: 300000,
    budget: 800000,
    isTeamBased: true,
    minTeamMember: 2,
    maxTeamMember: 4,
    organizer: "คณะวิศวกรรมศาสตร์",
  },
  {
    id: 3,
    title: "Workshop: Design Thinking",
    description: "เวิร์คช็อปการคิดเชิงออกแบบสำหรับผู้ประกอบการ",
    eventType: "Workshop",
    category: "Education",
    status: "วางแผน",
    statusColor: "bg-status-planning",
    location: "ห้องประชุม 301 อาคารเอกาทศรถ",
    format: "Onsite",
    registrationStart: "1 มี.ค. 69",
    registrationEnd: "20 มี.ค. 69",
    eventStart: "25 มี.ค. 69",
    eventEnd: "25 มี.ค. 69",
    maxParticipants: 50,
    currentParticipants: 0,
    prizePool: 0,
    budget: 150000,
    isTeamBased: false,
    minTeamMember: 1,
    maxTeamMember: 1,
    organizer: "NU SEED",
  },
  {
    id: 4,
    title: "Pitching Day Batch 5",
    description: "การนำเสนอผลงานของผู้ประกอบการ Batch 5",
    eventType: "Pitching",
    category: "Business",
    status: "เสร็จสิ้น",
    statusColor: "bg-status-completed",
    location: "หอประชุมเล็ก มหาวิทยาลัยนเรศวร",
    format: "Onsite",
    registrationStart: "1 พ.ย. 68",
    registrationEnd: "30 พ.ย. 68",
    eventStart: "15 ธ.ค. 68",
    eventEnd: "15 ธ.ค. 68",
    maxParticipants: 30,
    currentParticipants: 28,
    prizePool: 200000,
    budget: 350000,
    isTeamBased: true,
    minTeamMember: 1,
    maxTeamMember: 5,
    organizer: "NU SEED",
  },
];

const EventCard = ({ event }: { event: typeof events[0] }) => {
  const progressPercent = Math.round((event.currentParticipants / event.maxParticipants) * 100);
  
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <Badge className={`text-xs text-white ${event.statusColor}`}>
              {event.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {event.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">
              {event.eventType}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {event.category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {event.format}
            </Badge>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>ดูรายละเอียด</DropdownMenuItem>
            <DropdownMenuItem>แก้ไข</DropdownMenuItem>
            <DropdownMenuItem>จัดการผู้เข้าร่วม</DropdownMenuItem>
            <DropdownMenuItem>จัดการงาน</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Event Details */}
      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{event.eventStart} - {event.eventEnd}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{event.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>{event.currentParticipants}/{event.maxParticipants} คน</span>
        </div>
        {event.prizePool > 0 && (
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span>{event.prizePool.toLocaleString()} บาท</span>
          </div>
        )}
      </div>

      {/* Registration Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">ผู้ลงทะเบียน</span>
          <span className="font-medium">{progressPercent}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Team Info */}
      {event.isTeamBased && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            ทีม: {event.minTeamMember}-{event.maxTeamMember} คน/ทีม • 
            งบประมาณ: {event.budget.toLocaleString()} บาท
          </p>
        </div>
      )}
    </Card>
  );
};

const Events = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            กิจกรรม
          </h1>
          <p className="text-muted-foreground">
            จัดการกิจกรรม การแข่งขัน และ Workshop ทั้งหมด
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          สร้างกิจกรรมใหม่
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="ค้นหากิจกรรม..." 
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          ตัวกรอง
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <div className="text-2xl font-bold text-primary">{events.length}</div>
          <div className="text-sm text-muted-foreground">กิจกรรมทั้งหมด</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-status-progress">2</div>
          <div className="text-sm text-muted-foreground">กำลังดำเนินการ</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-status-approval">1</div>
          <div className="text-sm text-muted-foreground">เปิดรับสมัคร</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-status-completed">1</div>
          <div className="text-sm text-muted-foreground">เสร็จสิ้น</div>
        </Card>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Events;
