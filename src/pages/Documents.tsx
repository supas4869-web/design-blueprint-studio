import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  FileText, 
  FileSpreadsheet, 
  FileImage,
  Download,
  Eye,
  Search,
  Plus,
  Calendar,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const documents = [
  {
    id: "1",
    name: "บันทึกข้อความขออนุมัติโครงการ",
    type: "official",
    project: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    createdBy: "อนุชา สมศรี",
    createdAt: "5 ก.พ. 2569",
    status: "approved"
  },
  {
    id: "2",
    name: "รายงานสรุปผลการดำเนินงานประจำเดือน",
    type: "report",
    project: "Innovation Hub Phase 2",
    createdBy: "วิไลวรรณ สุขใจ",
    createdAt: "1 ก.พ. 2569",
    status: "draft"
  },
  {
    id: "3",
    name: "ใบเบิกค่าใช้จ่าย - ค่าวิทยากร",
    type: "finance",
    project: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    createdBy: "นิภา ศรีสุข",
    createdAt: "28 ม.ค. 2569",
    status: "pending"
  },
  {
    id: "4",
    name: "รายชื่อผู้เข้าร่วมกิจกรรม Workshop",
    type: "list",
    project: "Digital Transformation Workshop",
    createdBy: "กานดา มีสุข",
    createdAt: "25 ม.ค. 2569",
    status: "approved"
  },
  {
    id: "5",
    name: "สัญญาความร่วมมือ MOU",
    type: "contract",
    project: "Tech Startup Acceleration",
    createdBy: "สมชาย ใจดี",
    createdAt: "20 ม.ค. 2569",
    status: "approved"
  },
  {
    id: "6",
    name: "แบบประเมินความพึงพอใจ",
    type: "survey",
    project: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    createdBy: "อนุชา สมศรี",
    createdAt: "15 ม.ค. 2569",
    status: "draft"
  },
];

const typeConfig = {
  official: { icon: FileText, label: "เอกสารราชการ", color: "bg-primary/10 text-primary" },
  report: { icon: FileSpreadsheet, label: "รายงาน", color: "bg-accent/10 text-accent" },
  finance: { icon: FileSpreadsheet, label: "การเงิน", color: "bg-status-planning/10 text-status-planning" },
  list: { icon: FileText, label: "รายชื่อ", color: "bg-secondary text-secondary-foreground" },
  contract: { icon: FileText, label: "สัญญา", color: "bg-purple-100 text-purple-700" },
  survey: { icon: FileImage, label: "แบบสอบถาม", color: "bg-pink-100 text-pink-700" },
};

const statusConfig = {
  approved: { label: "อนุมัติแล้ว", color: "bg-status-completed text-white" },
  pending: { label: "รอดำเนินการ", color: "bg-status-planning text-white" },
  draft: { label: "ร่าง", color: "bg-muted text-muted-foreground" },
};

const Documents = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            เอกสาร
          </h1>
          <p className="text-muted-foreground">
            จัดการและสร้างเอกสารราชการอัตโนมัติ
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          สร้างเอกสารใหม่
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">เอกสารทั้งหมด</p>
          <p className="text-2xl font-bold">342</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">เดือนนี้</p>
          <p className="text-2xl font-bold text-primary">45</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">รอดำเนินการ</p>
          <p className="text-2xl font-bold text-status-planning">12</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">ร่าง</p>
          <p className="text-2xl font-bold text-muted-foreground">8</p>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6 animate-slide-up">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="ค้นหาเอกสาร..." 
            className="pl-10"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-44">
            <SelectValue placeholder="ประเภทเอกสาร" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ทุกประเภท</SelectItem>
            <SelectItem value="official">เอกสารราชการ</SelectItem>
            <SelectItem value="report">รายงาน</SelectItem>
            <SelectItem value="finance">การเงิน</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-36">
            <SelectValue placeholder="สถานะ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ทั้งหมด</SelectItem>
            <SelectItem value="approved">อนุมัติแล้ว</SelectItem>
            <SelectItem value="pending">รอดำเนินการ</SelectItem>
            <SelectItem value="draft">ร่าง</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, index) => {
          const type = typeConfig[doc.type as keyof typeof typeConfig];
          const status = statusConfig[doc.status as keyof typeof statusConfig];
          const Icon = type.icon;

          return (
            <Card 
              key={doc.id} 
              className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={cn("p-3 rounded-lg", type.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">
                    {doc.name}
                  </h4>
                  <Badge className={cn("text-xs", status.color)}>
                    {status.label}
                  </Badge>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
                {doc.project}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {doc.createdBy}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {doc.createdAt}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-3 h-3 mr-1" />
                  ดู
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-3 h-3 mr-1" />
                  ดาวน์โหลด
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Documents;
