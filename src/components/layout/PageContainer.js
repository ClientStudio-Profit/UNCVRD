// Standard horizontal gutters and max width for page sections.
export default function PageContainer({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-14 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
