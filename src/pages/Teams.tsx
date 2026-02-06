import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Plus, 
  Search, 
  Users,
  FolderKanban,
  FileText,
  MoreHorizontal,
  Filter
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample teams data based on schema
const teams = [
  {
    id: 1,
    name: "Team Alpha",
    projectName: "Smart Farming IoT",
    eventName: "Startup Thailand League 2569",
    members: [
      { firstname: "สมชาย", lastname: "ใจดี", role: "Leader", faculty: "วิศวกรรมศาสตร์", year: 4 },
      { firstname: "วิไลวรรณ", lastname: "สุขใจ", role: "Developer", faculty: "วิทยาศาสตร์", year: 3 },
      { firstname: "อนุชา", lastname: "สมศรี", role: "Designer", faculty: "สถาปัตยกรรม", year: 3 },
      { firstname: "นิภา", lastname: "ศรีสุข", role: "Marketing", faculty: "บริหารธุรกิจ", year: 4 },
    ],
    documents: 5,
    createdAt: "15 ม.ค. 69",
  },
  {
    id: 2,
    name: "InnovateTech",
    projectName: "AI Health Assistant",
    eventName: "Startup Thailand League 2569",
    members: [
      { firstname: "กานดา", lastname: "มีสุข", role: "Leader", faculty: "แพทยศาสตร์", year: 5 },
      { firstname: "ประวิทย์", lastname: "รักดี", role: "Developer", faculty: "วิศวกรรมศาสตร์", year: 4 },
      { firstname: "มณีรัตน์", lastname: "สุขสันต์", role: "UX Designer", faculty: "สถาปัตยกรรม", year: 2 },
    ],
    documents: 3,
    createdAt: "18 ม.ค. 69",
  },
  {
    id: 3,
    name: "GreenTech Solutions",
    projectName: "Waste Management Platform",
    eventName: "Hackathon: Smart Campus 2569",
    members: [
      { firstname: "ธนวัฒน์", lastname: "เจริญสุข", role: "Leader", faculty: "วิศวกรรมศาสตร์", year: 3 },
      { firstname: "สุภาพร", lastname: "วงศ์ดี", role: "Backend Dev", faculty: "วิทยาศาสตร์", year: 4 },
    ],
    documents: 2,
    createdAt: "20 ก.พ. 69",
  },
  {
    id: 4,
    name: "EduNext",
    projectName: "Online Learning Platform",
    eventName: "Startup Thailand League 2569",
    members: [
      { firstname: "พิมพ์ใจ", lastname: "สุขใส", role: "Leader", faculty: "ศึกษาศาสตร์", year: 4 },
      { firstname: "วรพล", lastname: "ศรีวิชัย", role: "Full Stack", faculty: "วิศวกรรมศาสตร์", year: 3 },
      { firstname: "นันทิยา", lastname: "จันทร์แก้ว", role: "Content", faculty: "มนุษยศาสตร์", year: 3 },
      { firstname: "ศักดิ์สิทธิ์", lastname: "พรมมา", role: "Mobile Dev", faculty: "วิทยาศาสตร์", year: 4 },
      { firstname: "อรุณี", lastname: "สายทอง", role: "Marketing", faculty: "บริหารธุรกิจ", year: 2 },
    ],
    documents: 8,
    createdAt: "10 ม.ค. 69",
  },
];

const TeamCard = ({ team }: { team: typeof teams[0] }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {team.name}
          </h3>
          <p className="text-sm text-muted-foreground">{team.projectName}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>ดูรายละเอียด</DropdownMenuItem>
            <DropdownMenuItem>แก้ไขทีม</DropdownMenuItem>
            <DropdownMenuItem>จัดการสมาชิก</DropdownMenuItem>
            <DropdownMenuItem>ดูเอกสาร</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Event Badge */}
      <Badge variant="outline" className="mb-4 text-xs">
        {team.eventName}
      </Badge>

      {/* Members */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>สมาชิก ({team.members.length} คน)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {team.members.map((member, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 bg-muted/50 rounded-full px-3 py-1"
            >
              <Avatar className="w-6 h-6">
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                  {member.firstname.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs">
                {member.firstname} {member.lastname.charAt(0)}.
              </span>
              {member.role === "Leader" && (
                <Badge className="text-xs h-4 px-1 bg-accent text-accent-foreground">
                  หัวหน้า
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <FolderKanban className="w-4 h-4" />
          <span>1 โครงการ</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FileText className="w-4 h-4" />
          <span>{team.documents} เอกสาร</span>
        </div>
      </div>
    </Card>
  );
};

const Teams = () => {
  const totalMembers = teams.reduce((acc, team) => acc + team.members.length, 0);

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            ทีม
          </h1>
          <p className="text-muted-foreground">
            จัดการทีมและสมาชิกในแต่ละกิจกรรม
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          สร้างทีมใหม่
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="ค้นหาทีม..." 
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
          <div className="text-2xl font-bold text-primary">{teams.length}</div>
          <div className="text-sm text-muted-foreground">ทีมทั้งหมด</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-accent">{totalMembers}</div>
          <div className="text-sm text-muted-foreground">สมาชิกรวม</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold">{teams.length}</div>
          <div className="text-sm text-muted-foreground">โครงการ</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold">{teams.reduce((acc, t) => acc + t.documents, 0)}</div>
          <div className="text-sm text-muted-foreground">เอกสารทั้งหมด</div>
        </Card>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teams.map((team, index) => (
          <div 
            key={team.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <TeamCard team={team} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Teams;
