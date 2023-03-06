export interface ContentProps {
  children?: React.ReactNode | React.ReactNode[];
}

export function Content(props: ContentProps) {
  const { children } = props;
  return <div className="p-4 max-w-4xl my-auto">{children}</div>;
}

export default Content;
