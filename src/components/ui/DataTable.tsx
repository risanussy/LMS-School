type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  className?: string;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
};

export function DataTable<T>({ columns, rows, rowKey }: Props<T>) {
  return (
    <div className="soft-panel overflow-hidden rounded-2xl">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-foam/80 text-muted">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={`px-4 py-3 font-medium ${col.className ?? ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={rowKey(row)} className="border-t border-line/80 hover:bg-foam/40">
                {columns.map((col) => (
                  <td key={col.key} className={`px-4 py-3 text-ink ${col.className ?? ""}`}>
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
