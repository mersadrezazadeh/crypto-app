import { useContext, createContext } from "react";

const TableContext = createContext<{ columns: string } | null>(null);

function Table({
  columns,
  children,
}: {
  columns: string;
  children: React.ReactNode;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="rounded-lg border border-gray-200 bg-gray-0 text-sm dark:border-gray-700 dark:bg-gray-850"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext)!;

  return (
    <div
      role="row"
      className={`grid ${columns} items-center gap-2 rounded-t-lg border-b border-gray-100 bg-gray-50 px-3 py-4 font-semibold text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300`}
    >
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  const { columns } = useContext(TableContext)!;

  return (
    <div
      role="row"
      className={`grid ${columns} items-center gap-2 border-b border-gray-100 px-3 py-6 last:border-0 dark:border-gray-800`}
    >
      {children}
    </div>
  );
}

function Body({
  data,
  render,
}: {
  data: unknown[];
  render: () => React.ReactNode;
}) {
  if (!data.length)
    return <p className="m-6 text-center text-base">No data found.</p>;

  return <section className="my-1">{data.map(render)}</section>;
}

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="flex justify-center rounded-b-lg bg-gray-50 p-3 dark:bg-gray-900 [&:not(&:has(*))]:hidden">
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
