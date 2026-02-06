import { MainLayout } from "@/components/layout/MainLayout";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, LayoutGrid, List } from "lucide-react";
import { useState } from "react";

const allProjects = [
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
      { name: "สมชาย" }, { name: "วิไล" }, { name: "อนุชา" }, 
      { name: "นิภา" }, { name: "กานดา" },
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
    team: [{ name: "วิไล" }, { name: "สมชาย" }, { name: "นิภา" }]
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
    team: [{ name: "อนุชา" }, { name: "กานดา" }]
  },
  {
    id: "4",
    name: "Tech Startup Acceleration",
    description: "โปรแกรมเร่งรัดธุรกิจสำหรับ Startup ด้านเทคโนโลยี",
    status: "completed" as const,
    progress: 100,
    budget: 750000,
    startDate: "1 ก.ค.",
    endDate: "31 ธ.ค. 68",
    participants: 20,
    team: [{ name: "สมชาย" }, { name: "อนุชา" }]
  },
  {
    id: "5",
    name: "Digital Transformation Workshop",
    description: "การอบรมเชิงปฏิบัติการด้านการปรับตัวสู่ดิจิทัล",
    status: "completed" as const,
    progress: 100,
    budget: 300000,
    startDate: "1 ต.ค.",
    endDate: "30 พ.ย. 68",
    participants: 60,
    team: [{ name: "วิไล" }, { name: "นิภา" }, { name: "กานดา" }]
  },
];

const Projects = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = statusFilter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.status === statusFilter);

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            โครงการทั้งหมด
          </h1>
          <p className="text-muted-foreground">
            จัดการและติดตามสถานะโครงการทั้งหมดในระบบ
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          สร้างโครงการใหม่
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4 mb-6 animate-slide-up">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="ค้นหาโครงการ..." 
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="กรองตามสถานะ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">ทั้งหมด</SelectItem>
              <SelectItem value="planning">วางแผน</SelectItem>
              <SelectItem value="approval">รออนุมัติ</SelectItem>
              <SelectItem value="progress">ดำเนินงาน</SelectItem>
              <SelectItem value="completed">เสร็จสิ้น</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
          <Button 
            variant={viewMode === "grid" ? "secondary" : "ghost"} 
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <LayoutGrid className="w-4 h-4" />
          </Button>
          <Button 
            variant={viewMode === "list" ? "secondary" : "ghost"} 
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">ทั้งหมด ({allProjects.length})</TabsTrigger>
          <TabsTrigger value="active">กำลังดำเนินการ (3)</TabsTrigger>
          <TabsTrigger value="completed">เสร็จสิ้น (2)</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Projects Grid */}
      <div className={viewMode === "grid" 
        ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
        : "space-y-4"
      }>
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">ไม่พบโครงการที่ตรงกับเงื่อนไข</p>
        </div>
      )}
    </MainLayout>
  );
};

export default Projects;
