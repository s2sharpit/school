export default function SectionClosing({ children }: React.ComponentProps<"p">) {
  return (
    <p className="text-center text-muted-foreground font-medium">📢 {children}</p>
  );
}
