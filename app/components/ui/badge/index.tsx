import { cn } from "@/app/lib/utils";
import Image from "next/image";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
}

export const Badge = ({ className, children, icon }: BadgeProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 max-w-full rounded-lg bg-gray-500/30 px-3 py-1 text-white text-sm whitespace-nowrap',
        'overflow-hidden text-ellipsis',
        className
      )}
    >
      {icon && (
        <Image src={icon} alt="icon" width={20} height={20} className="min-w-[20px]" />
      )}
      <span>{children}</span>
    </div>
  );
};
