import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="top-right"
      toastOptions={{
        style: {
          border: "1px solid hsl(214 20% 90%)",
          background: "hsl(0 0% 100%)",
          color: "hsl(220 70% 10%)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
