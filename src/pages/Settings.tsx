import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Database,
  Save
} from "lucide-react";

const Settings = () => {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground mb-1">
          ตั้งค่า
        </h1>
        <p className="text-muted-foreground">
          จัดการการตั้งค่าระบบและบัญชีผู้ใช้
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar Navigation */}
        <Card className="p-4 h-fit animate-slide-up">
          <nav className="space-y-1">
            {[
              { icon: User, label: "โปรไฟล์", active: true },
              { icon: Bell, label: "การแจ้งเตือน" },
              { icon: Shield, label: "ความปลอดภัย" },
              { icon: Palette, label: "ธีมและการแสดงผล" },
              { icon: Database, label: "ข้อมูลและสำรอง" },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  item.active 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card className="p-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-lg font-semibold mb-6">โปรไฟล์</h2>
            
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  อน
                </AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" size="sm">เปลี่ยนรูปภาพ</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  JPG, PNG ขนาดไม่เกิน 2MB
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">ชื่อ</Label>
                <Input id="firstName" defaultValue="อนุชา" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">นามสกุล</Label>
                <Input id="lastName" defaultValue="สมศรี" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">อีเมล</Label>
                <Input id="email" type="email" defaultValue="anucha@nuseed.ac.th" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                <Input id="phone" defaultValue="081-234-5678" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="role">ตำแหน่ง</Label>
                <Select defaultValue="admin">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">เจ้าหน้าที่บริหารทั่วไป</SelectItem>
                    <SelectItem value="incubator">นักบ่มเพาะธุรกิจ</SelectItem>
                    <SelectItem value="manager">หัวหน้างาน</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="gradient-primary">
              <Save className="w-4 h-4 mr-2" />
              บันทึกการเปลี่ยนแปลง
            </Button>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-lg font-semibold mb-6">การแจ้งเตือน</h2>
            
            <div className="space-y-4">
              {[
                { 
                  title: "อีเมลแจ้งเตือน", 
                  description: "รับการแจ้งเตือนผ่านอีเมลเมื่อมีกิจกรรมใหม่",
                  defaultChecked: true
                },
                { 
                  title: "การแจ้งเตือนในระบบ", 
                  description: "แสดงการแจ้งเตือนแบบ popup ในระบบ",
                  defaultChecked: true
                },
                { 
                  title: "สรุปรายสัปดาห์", 
                  description: "รับอีเมลสรุปกิจกรรมทุกสัปดาห์",
                  defaultChecked: false
                },
                { 
                  title: "การอนุมัติเอกสาร", 
                  description: "แจ้งเตือนเมื่อมีเอกสารรอการอนุมัติ",
                  defaultChecked: true
                },
              ].map((setting, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{setting.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {setting.description}
                      </p>
                    </div>
                    <Switch defaultChecked={setting.defaultChecked} />
                  </div>
                  {index < 3 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
