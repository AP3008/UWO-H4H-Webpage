import {
  Clock,
  Users,
  Hammer,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import type { StatItem } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Users,
  Hammer,
  Calendar,
};

export function StatCard({ stat }: { stat: StatItem }) {
  const Icon = iconMap[stat.icon] ?? Clock;

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl p-6 text-center">
      <Icon className="h-8 w-8 text-h4h-cyan" />
      <span className="text-4xl font-bold text-h4h-navy">{stat.value}</span>
      <span className="text-sm font-medium text-h4h-gray-600">
        {stat.label}
      </span>
    </div>
  );
}
