import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { MilestoneTimeline } from "@/components/dashboard/MilestoneTimeline";
import { Button } from "@/components/ui/button";
import { 
  FolderKanban, 
  Users, 
  FileText, 
  Wallet,
  Plus,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample data
const stats = [
  { 
    title: "โครงการทั้งหมด", 
    value: 24, 
    subtitle: "เพิ่มขึ้น 3 โครงการจากเดือนก่อน", 
    icon: FolderKanban,
    trend: { value: 14, isPositive: true },
    variant: "primary" as const
  },
  { 
    title: "ผู้เข้าร่วมโครงการ", 
    value: 156, 
    subtitle: "ผู้ประกอบการ 89 / Mentor 67 คน", 
    icon: Users,
    trend: { value: 8, isPositive: true },
    variant: "accent" as const
  },
  { 
    title: "เอกสารที่สร้าง", 
    value: 342, 
    subtitle: "เดือนนี้ 45 ฉบับ", 
    icon: FileText,
    variant: "default" as const
  },
  { 
    title: "งบประมาณคงเหลือ", 
    value: "2.4M", 
    subtitle: "จาก 5.0M บาท", 
    icon: Wallet,
    variant: "default" as const
  },
];

const projects = [
  {
    id: "1",
    name: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    description: "โปรแกรมบ่มเพาะธุรกิจสำหรับผู้ประกอบการรุ่นใหม่ในพื้นที่ภาคเหนือตอนล่าง",
    status: "progress" as const,
    progress: 65,
    budget: 850000,
    startDate: "1 ม.ค.",
    endDate: "30 มิ.ย. 69",
    participants: 25,
    team: [
      { name: "สมชาย ใจดี" },
      { name: "วิไลวรรณ สุขใจ" },
      { name: "อนุชา สมศรี" },
      { name: "นิภา ศรีสุข" },
      { name: "กานดา มีสุข" },
    ]
  },
  {
    id: "2",
    name: "Innovation Hub Phase 2",
    description: "ศูนย์นวัตกรรมเพื่อส่งเสริมการวิจัยและพัฒนาผลิตภัณฑ์ใหม่",
    status: "approval" as const,
    progress: 25,
    budget: 1200000,
    startDate: "1 ก.พ.",
    endDate: "31 ธ.ค. 69",
    participants: 18,
    team: [
      { name: "วิไลวรรณ สุขใจ" },
      { name: "สมชาย ใจดี" },
      { name: "นิภา ศรีสุข" },
    ]
  },
  {
    id: "3",
    name: "Startup Thailand League 2569",
    description: "การแข่งขัน Startup ระดับมหาวิทยาลัยสำหรับนิสิตนักศึกษา",
    status: "planning" as const,
    progress: 10,
    budget: 500000,
    startDate: "1 มี.ค.",
    endDate: "30 มิ.ย. 69",
    participants: 45,
    team: [
      { name: "อนุชา สมศรี" },
      { name: "กานดา มีสุข" },
    ]
  },
];

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
            ภาพรวมโครงการและกิจกรรมล่าสุดของ NU SEED
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          สร้างโครงการใหม่
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
        {/* Projects Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">โครงการที่กำลังดำเนินการ</h2>
            <Link to="/projects">
              <Button variant="ghost" size="sm" className="text-primary">
                ดูทั้งหมด
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
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
