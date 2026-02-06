import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "accent";
}

export const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  variant = "default" 
}: StatCardProps) => {
  return (
    <Card className={cn(
      "p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      variant === "primary" && "gradient-primary text-primary-foreground",
      variant === "accent" && "gradient-accent text-accent-foreground",
      variant === "default" && "bg-card"
    )}>
      {/* Background Pattern */}
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10",
        variant === "default" ? "bg-primary" : "bg-white"
      )} />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={cn(
            "p-3 rounded-xl",
            variant === "default" ? "bg-primary/10" : "bg-white/20"
          )}>
            <Icon className={cn(
              "w-6 h-6",
              variant === "default" ? "text-primary" : "text-current"
            )} />
          </div>
          {trend && (
            <span className={cn(
              "text-sm font-medium px-2 py-1 rounded-full",
              trend.isPositive 
                ? "bg-status-completed/20 text-status-completed" 
                : "bg-destructive/20 text-destructive"
            )}>
              {trend.isPositive ? "+" : ""}{trend.value}%
            </span>
          )}
        </div>

        <h3 className={cn(
          "text-sm font-medium mb-1",
          variant === "default" ? "text-muted-foreground" : "text-current/80"
        )}>
          {title}
        </h3>
        <p className="text-3xl font-bold mb-1">{value}</p>
        {subtitle && (
          <p className={cn(
            "text-sm",
            variant === "default" ? "text-muted-foreground" : "text-current/70"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </Card>
  );
};
