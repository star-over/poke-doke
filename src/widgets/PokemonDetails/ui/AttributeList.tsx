interface AttributeListProperties {
  children: React.ReactNode;
}

export function AttributeList({ children }: AttributeListProperties) {
  return (
    <div className="text-grayscale-dark divide-grayscale-light flex justify-evenly divide-x">
      { children }
    </div>
  );
}
