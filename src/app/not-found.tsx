import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 pt-20 text-center">
      <span className="font-accent text-2xl text-brass">٤٠٤</span>
      <h1 className="mt-4 font-display text-4xl text-bark sm:text-5xl">هذه الصفحة غير موجودة</h1>
      <p className="mt-5 max-w-md font-body text-bark/65">
        يبدو أنك وصلت إلى نافذة لا تؤدي إلى مكان. دعنا نعيدك إلى المسار الصحيح.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex items-center justify-center rounded-full bg-bark px-8 py-3.5 font-body text-sm font-medium text-coconut transition-colors hover:bg-cacao"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
