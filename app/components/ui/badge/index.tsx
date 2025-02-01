import { cn } from "@/app/lib/utils";
import Image from "next/image";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
}

export const Badge = ({ className, children, icon }: BadgeProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 max-w-[260px] rounded-lg bg-[#41414166] shadow-sm px-3 py-2 text-white text-sm whitespace-nowrap',
        'overflow-hidden text-ellipsis',
        className
      )}
    >
      {icon && (
        <Image src={icon} alt="icon" width={20} height={20} className="min-w-[20px]" />
      )}
      <span className="text-lg truncate">{children}</span>
    </div>
  );
};
