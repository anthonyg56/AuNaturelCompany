import { PropsWithChildren, ComponentPropsWithoutRef } from "react";

export default function PageSection({ children, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section className="py-16" {...props}>
      <div className="container">{children}</div>
    </section>
  )
}
