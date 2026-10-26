export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
      <div className="flex-1 max-w-24 h-px bg-gradient-to-r from-transparent to-gold-antique/50" />
      <div className="flex items-center gap-1.5">
        <div className="w-1 h-1 rounded-full bg-gold-antique/50" />
        <div className="w-2.5 h-2.5 rotate-45 border border-gold-antique" />
        <div className="w-1 h-1 rounded-full bg-gold-antique/50" />
      </div>
      <div className="flex-1 max-w-24 h-px bg-gradient-to-l from-transparent to-gold-antique/50" />
    </div>
  )
}
