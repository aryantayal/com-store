interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-outer max-w-7xl">{children}</div>;
};
export default Container;
