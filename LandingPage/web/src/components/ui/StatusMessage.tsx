type StatusMessageProps = {
  tone: "success" | "error";
  children: React.ReactNode;
};

export const StatusMessage = ({ tone, children }: StatusMessageProps) => (
  <p className={`status-message status-${tone}`} role={tone === "error" ? "alert" : "status"}>
    {children}
  </p>
);
