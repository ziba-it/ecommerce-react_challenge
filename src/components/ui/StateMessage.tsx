import { PropsWithChildren } from "react";

export const StateMessage = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-4xl font-ubuntu text-primary-900">{children}</p>
    </div>
  );
};
