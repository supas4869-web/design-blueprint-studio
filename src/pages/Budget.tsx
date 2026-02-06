import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight,
  ArrowDownRight,
  Download
} from "lucide-react";

const budgetSummary = [
  { 
    label: "งบประมาณทั้งหมด", 
    amount: 5000000, 
    color: "text-foreground" 
  },
  { 
    label: "เบิกจ่ายแล้ว", 
    amount: 2600000, 
    color: "text-primary" 
  },
  { 
    label: "คงเหลือ", 
    amount: 2400000, 
    color: "text-accent" 
  },
];

const projectBudgets = [
  {
    id: "1",
    name: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    totalBudget: 850000,
    spent: 552500,
    status: "normal"
  },
  {
    id: "2",
    name: "Innovation Hub Phase 2",
    totalBudget: 1200000,
    spent: 300000,
    status: "normal"
  },
  {
    id: "3",
    name: "Startup Thailand League 2569",
    totalBudget: 500000,
    spent: 50000,
    status: "normal"
  },
  {
    id: "4",
    name: "Tech Startup Acceleration",
    totalBudget: 750000,
    spent: 712500,
    status: "warning"
  },
  {
    id: "5",
    name: "Digital Transformation Workshop",
    totalBudget: 300000,
    spent: 300000,
    status: "completed"
  },
];

const recentTransactions = [
  { 
    id: "1", 
    description: "ค่าวิทยากรอบรม Batch 5", 
    project: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    amount: -45000,
    date: "5 ก.พ. 2569"
  },
  { 
    id: "2", 
    description: "งบประมาณเพิ่มเติมจากสำนักงาน", 
    project: "Innovation Hub Phase 2",
    amount: 200000,
    date: "3 ก.พ. 2569"
  },
  { 
    id: "3", 
    description: "ค่าเดินทาง Mentor", 
    project: "โครงการพัฒนาผู้ประกอบการ Batch 5",
    amount: -12500,
    date: "2 ก.พ. 2569"
  },
  { 
    id: "4", 
    description: "ค่าจัดเตรียมสถานที่", 
    project: "Startup Thailand League 2569",
    amount: -35000,
    date: "1 ก.พ. 2569"
  },
];

const Budget = () => {
  const totalBudget = 5000000;
  const totalSpent = 2600000;
  const percentSpent = (totalSpent / totalBudget) * 100;

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            งบประมาณ
          </h1>
          <p className="text-muted-foreground">
            ติดตามการใช้จ่ายและงบประมาณคงเหลือ
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          ส่งออกรายงาน
        </Button>
      </div>

      {/* Budget Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {budgetSummary.map((item, index) => (
          <Card 
            key={item.label} 
            className="p-6 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <div className="p-2 rounded-lg bg-primary/10">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className={`text-3xl font-bold ${item.color}`}>
              ฿{item.amount.toLocaleString()}
            </p>
          </Card>
        ))}
      </div>

      {/* Overall Progress */}
      <Card className="p-6 mb-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">ภาพรวมการใช้จ่าย</h3>
          <span className="text-sm text-muted-foreground">
            {percentSpent.toFixed(1)}% ของงบประมาณทั้งหมด
          </span>
        </div>
        <Progress value={percentSpent} className="h-4 mb-4" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            เบิกจ่ายแล้ว: ฿{totalSpent.toLocaleString()}
          </span>
          <span className="text-muted-foreground">
            คงเหลือ: ฿{(totalBudget - totalSpent).toLocaleString()}
          </span>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget by Project */}
        <Card className="p-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="font-semibold mb-4">งบประมาณแยกตามโครงการ</h3>
          <div className="space-y-4">
            {projectBudgets.map((project) => {
              const percent = (project.spent / project.totalBudget) * 100;
              return (
                <div key={project.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium truncate flex-1">{project.name}</span>
                    <span className="text-muted-foreground ml-2">
                      {percent.toFixed(0)}%
                    </span>
                  </div>
                  <Progress 
                    value={percent} 
                    className={`h-2 ${project.status === "warning" ? "[&>div]:bg-status-delayed" : ""}`}
                  />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>฿{project.spent.toLocaleString()}</span>
                    <span>฿{project.totalBudget.toLocaleString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card className="p-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
          <h3 className="font-semibold mb-4">รายการล่าสุด</h3>
          <div className="space-y-3">
            {recentTransactions.map((tx) => (
              <div 
                key={tx.id} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className={`p-2 rounded-lg ${tx.amount > 0 ? "bg-status-completed/10" : "bg-destructive/10"}`}>
                  {tx.amount > 0 ? (
                    <ArrowUpRight className="w-4 h-4 text-status-completed" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-destructive" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{tx.description}</p>
                  <p className="text-xs text-muted-foreground truncate">{tx.project}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${tx.amount > 0 ? "text-status-completed" : "text-foreground"}`}>
                    {tx.amount > 0 ? "+" : ""}฿{Math.abs(tx.amount).toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Budget;
