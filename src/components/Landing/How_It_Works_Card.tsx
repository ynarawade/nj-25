interface HowItWorksCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function HowItWorksCard({ icon, title, desc }: HowItWorksCardProps) {
  return (
    <div className="rounded-2xl border bg-background p-6 flex flex-col items-center text-center gap-y-3">
      <div className="text-primary">{icon}</div>

      <h4 className="text-lg font-semibold">{title}</h4>

      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default HowItWorksCard;
