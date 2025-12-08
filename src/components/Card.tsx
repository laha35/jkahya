export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full mt-5">
      <section className="p-2 bg-slate-100 rounded-3xl shadow-lg">
        <div className="mx-5 my-5">{children}</div>
      </section>
    </div>
  );
}
