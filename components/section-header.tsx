interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-bold text-h4h-navy sm:text-4xl">{title}</h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-h4h-cyan ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-h4h-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
