export default function PageHeader({ title, subtitle }) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 p-10">
        <header className="text-center uppercase font-bold tracking-widest">
          {title}
        </header>
        <p className="uppercase font-thin tracking-widest">{subtitle}</p>
      </div>
    </>
  );
}
