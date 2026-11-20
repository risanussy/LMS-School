const SIZE = 25;

function cellOn(x: number, y: number, seed: number) {
  const inFinder = (fx: number, fy: number) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7;
  const finder = (fx: number, fy: number) => {
    const dx = x - fx;
    const dy = y - fy;
    const ring = dx === 0 || dx === 6 || dy === 0 || dy === 6;
    const core = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
    return ring || core;
  };
  if (inFinder(0, 0)) return finder(0, 0);
  if (inFinder(SIZE - 7, 0)) return finder(SIZE - 7, 0);
  if (inFinder(0, SIZE - 7)) return finder(0, SIZE - 7);
  // separator around finders
  if ((x < 8 && y < 8) || (x > SIZE - 9 && y < 8) || (x < 8 && y > SIZE - 9)) return false;
  const n = (x * 73856093) ^ (y * 19349663) ^ (seed * 83492791);
  return ((n >>> 3) & 3) !== 0;
}

type Props = {
  seed?: number;
  className?: string;
};

/** Visual QR palsu (bukan kode QR sungguhan) untuk keperluan mock UI. */
export function MockQr({ seed = 7, className = "" }: Props) {
  const cells: React.ReactNode[] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (cellOn(x, y, seed)) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />);
    }
  }
  return (
    <svg
      viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`}
      className={`fill-ink ${className}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="QR code contoh"
    >
      <rect x={-1} y={-1} width={SIZE + 2} height={SIZE + 2} fill="white" />
      {cells}
    </svg>
  );
}
