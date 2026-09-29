type FaqItem = {
  question: string;
  answer: string;
  link: string;
};

export function FaqSection({
  copy,
}: {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly FaqItem[];
  };
}) {
  return (
    <section className="border-fd-border border-t py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-[#5645d4] dark:text-[#c4b6ff]">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {copy.title}
          </h2>
          <p className="text-fd-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
            {copy.description}
          </p>
        </div>
        <div className="border-fd-border divide-fd-border divide-y border-y">
          {copy.items.map((item, index) => (
            <details
              key={item.question}
              className="group py-5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {item.question}
                <span className="bg-fd-muted flex size-7 shrink-0 items-center justify-center rounded-full text-lg font-normal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-fd-muted-foreground max-w-2xl pt-4 text-sm leading-6">
                {item.answer}
                {item.link ? (
                  <a
                    className="break-all underline underline-offset-2"
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.link}
                  </a>
                ) : null}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
