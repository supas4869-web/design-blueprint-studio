import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Plus, 
  Search, 
  Mail,
  Phone,
  Building2,
  MoreHorizontal,
  Filter,
  UserCheck,
  UserX
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample employees data based on schema
const employees = [
  {
    id: 1,
    firstName: "ดร.สมชาย",
    lastName: "พัฒนกิจ",
    email: "somchai.p@nu.ac.th",
    role: "ผู้อำนวยการ",
    department: "NU SEED",
    status: "ออนไลน์",
    gender: "ชาย",
    lastLoginAt: "วันนี้ 09:30",
    eventsCount: 5,
  },
  {
    id: 2,
    firstName: "อ.วิไลวรรณ",
    lastName: "สุขใจ",
    email: "wilaiwan.s@nu.ac.th",
    role: "ผู้จัดการโครงการ",
    department: "NU SEED",
    status: "ออนไลน์",
    gender: "หญิง",
    lastLoginAt: "วันนี้ 10:15",
    eventsCount: 8,
  },
  {
    id: 3,
    firstName: "นายอนุชา",
    lastName: "สมศรี",
    email: "anucha.s@nu.ac.th",
    role: "เจ้าหน้าที่ประสานงาน",
    department: "ฝ่ายบริหาร",
    status: "ออฟไลน์",
    gender: "ชาย",
    lastLoginAt: "เมื่อวาน 16:45",
    eventsCount: 3,
  },
  {
    id: 4,
    firstName: "นางสาวนิภา",
    lastName: "ศรีสุข",
    email: "nipa.s@nu.ac.th",
    role: "เจ้าหน้าที่การเงิน",
    department: "ฝ่ายการเงิน",
    status: "ออนไลน์",
    gender: "หญิง",
    lastLoginAt: "วันนี้ 08:00",
    eventsCount: 2,
  },
  {
    id: 5,
    firstName: "นางสาวกานดา",
    lastName: "มีสุข",
    email: "kanda.m@nu.ac.th",
    role: "เจ้าหน้าที่เอกสาร",
    department: "ฝ่ายธุรการ",
    status: "ออฟไลน์",
    gender: "หญิง",
    lastLoginAt: "3 วันที่แล้ว",
    eventsCount: 4,
  },
  {
    id: 6,
    firstName: "นายประวิทย์",
    lastName: "รักดี",
    email: "prawit.r@nu.ac.th",
    role: "เจ้าหน้าที่ IT",
    department: "ฝ่าย IT",
    status: "ออนไลน์",
    gender: "ชาย",
    lastLoginAt: "วันนี้ 11:30",
    eventsCount: 6,
  },
];

const Employees = () => {
  const onlineCount = employees.filter(e => e.status === "ออนไลน์").length;
  const offlineCount = employees.filter(e => e.status === "ออฟไลน์").length;

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            พนักงาน
          </h1>
          <p className="text-muted-foreground">
            จัดการข้อมูลพนักงานและสิทธิ์การเข้าถึง
          </p>
        </div>
        <Button className="gradient-primary shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          เพิ่มพนักงาน
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="ค้นหาพนักงาน..." 
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
          <div className="text-2xl font-bold text-primary">{employees.length}</div>
          <div className="text-sm text-muted-foreground">พนักงานทั้งหมด</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-status-completed" />
            <span className="text-2xl font-bold text-status-completed">{onlineCount}</span>
          </div>
          <div className="text-sm text-muted-foreground">ออนไลน์</div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <UserX className="w-5 h-5 text-muted-foreground" />
            <span className="text-2xl font-bold text-muted-foreground">{offlineCount}</span>
          </div>
          <div className="text-sm text-muted-foreground">ออฟไลน์</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold">{new Set(employees.map(e => e.department)).size}</div>
          <div className="text-sm text-muted-foreground">แผนก</div>
        </Card>
      </div>

      {/* Employees Table */}
      <Card className="animate-slide-up">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>พนักงาน</TableHead>
              <TableHead>ตำแหน่ง</TableHead>
              <TableHead>แผนก</TableHead>
              <TableHead>สถานะ</TableHead>
              <TableHead>กิจกรรม</TableHead>
              <TableHead>เข้าสู่ระบบล่าสุด</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id} className="group">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {employee.firstName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{employee.firstName} {employee.lastName}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {employee.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{employee.role}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    {employee.department}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      employee.status === "ออนไลน์" ? "bg-status-completed" : "bg-muted-foreground"
                    }`} />
                    <span className="text-sm">{employee.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{employee.eventsCount} กิจกรรม</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-muted-foreground">{employee.lastLoginAt}</span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>ดูโปรไฟล์</DropdownMenuItem>
                      <DropdownMenuItem>แก้ไขข้อมูล</DropdownMenuItem>
                      <DropdownMenuItem>จัดการสิทธิ์</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">ระงับบัญชี</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </MainLayout>
  );
};

export default Employees;
