import { cn } from '@/lib/utils';
import logoMark from '../assets/LOGO.svg';

export type BrandLogoProps = {
  /** Hide the wordmark and only render the logo mark. */
  markOnly?: boolean;
  /** Size of the square logo mark in pixels. */
  markSize?: number;
  className?: string;
  /** Extra classes applied to the wordmark wrapper (e.g. to hide it responsively). */
  wordmarkClassName?: string;
};

/** Brand logo lockup for Wang Simiao's digital employee workspace. */
export default function BrandLogo({
  markOnly = false,
  markSize = 28,
  className,
  wordmarkClassName,
}: BrandLogoProps) {
  return (
    <span className={cn('flex items-center gap-[8px] overflow-hidden p-[4px]', className)}>
      <img
        src={logoMark}
        alt="王思邈的数字员工"
        className="shrink-0"
        style={{ width: markSize, height: markSize }}
      />
      {!markOnly && (
        <span className={cn('flex min-w-0 flex-col items-start gap-[3px] leading-none', wordmarkClassName)}>
          <strong className="whitespace-nowrap text-[15px] font-semibold leading-none text-[#18181a]">
            王思邈
          </strong>
          <span className="whitespace-nowrap text-[10px] font-medium leading-none text-[#687083]">
            数字员工
          </span>
        </span>
      )}
    </span>
  );
}
