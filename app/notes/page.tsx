export default function Notes() {
  return (
    <div className="h-full flex justify-center flex-col w-full sm:w-[600px] mx-auto">
      <h1 className="text-2xl text-slate-700">Notes</h1>

      <ul className="list-decimal pl-4">
        <li>Finding a full emoji database is freaking hard.</li>

        <li>
          While user is using search input, a debounce makes things smoother
        </li>

        <li>
          viewport virtualization gives significant performance improvements.
        </li>
      </ul>
    </div>
  );
}
