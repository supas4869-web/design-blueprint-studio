import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Mail, Phone, Building } from "lucide-react";

const participants = [
  {
    id: "1",
    name: "ดร.สมศักดิ์ รักเรียน",
    role: "mentor",
    email: "somsak@example.com",
    phone: "081-234-5678",
    organization: "มหาวิทยาลัยนเรศวร",
    projectCount: 5,
    status: "active"
  },
  {
    id: "2",
    name: "นายวิชัย ใจสู้",
    role: "entrepreneur",
    email: "wichai@startup.com",
    phone: "089-876-5432",
    organization: "Tech Startup Co.",
    projectCount: 2,
    status: "active"
  },
  {
    id: "3",
    name: "น.ส.มานี มีทรัพย์",
    role: "entrepreneur",
    email: "manee@business.com",
    phone: "086-111-2222",
    organization: "Green Business",
    projectCount: 3,
    status: "active"
  },
  {
    id: "4",
    name: "ผศ.ดร.วิไล สุขใจ",
    role: "mentor",
    email: "wilai@university.com",
    phone: "087-333-4444",
    organization: "คณะบริหารธุรกิจ",
    projectCount: 8,
    status: "active"
  },
  {
    id: "5",
    name: "นายพิชัย เก่งกาจ",
    role: "entrepreneur",
    email: "pichai@innov.com",
    phone: "085-555-6666",
    organization: "Innovation Lab",
    projectCount: 1,
    status: "inactive"
  },
];

const roleConfig = {
  mentor: { label: "เมนเทอร์", color: "bg-primary text-primary-foreground" },
  entrepreneur: { label: "ผู้ประกอบการ", color: "bg-accent text-accent-foreground" },
};

const Participants = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            ผู้เข้าร่วมโครงการ
          </h1>
          <p className="text-muted-foreground">
            จัดการข้อมูลเมนเทอร์และผู้ประกอบการ
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          เพิ่มผู้เข้าร่วม
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">ผู้เข้าร่วมทั้งหมด</p>
          <p className="text-2xl font-bold">156</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">เมนเทอร์</p>
          <p className="text-2xl font-bold text-primary">67</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">ผู้ประกอบการ</p>
          <p className="text-2xl font-bold text-accent">89</p>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6 animate-slide-up">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="ค้นหาชื่อ, อีเมล, หน่วยงาน..." 
            className="pl-10"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="ประเภท" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ทั้งหมด</SelectItem>
            <SelectItem value="mentor">เมนเทอร์</SelectItem>
            <SelectItem value="entrepreneur">ผู้ประกอบการ</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="active">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="สถานะ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ทั้งหมด</SelectItem>
            <SelectItem value="active">ใช้งานอยู่</SelectItem>
            <SelectItem value="inactive">ไม่ได้ใช้งาน</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="animate-slide-up" style={{ animationDelay: "200ms" }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ชื่อ-สกุล</TableHead>
              <TableHead>ประเภท</TableHead>
              <TableHead>ติดต่อ</TableHead>
              <TableHead>หน่วยงาน</TableHead>
              <TableHead>โครงการ</TableHead>
              <TableHead>สถานะ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((person) => {
              const role = roleConfig[person.role as keyof typeof roleConfig];
              return (
                <TableRow key={person.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {person.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{person.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={role.color}>{role.label}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {person.email}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {person.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      {person.organization}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{person.projectCount} โครงการ</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={person.status === "active" ? "default" : "secondary"}>
                      {person.status === "active" ? "ใช้งานอยู่" : "ไม่ได้ใช้งาน"}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </MainLayout>
  );
};

export default Participants;
