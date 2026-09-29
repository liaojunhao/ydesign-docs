import Link from 'next/link';
import { Check } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  unit: string;
  description: string;
  cta: string;
  highlighted: boolean;
  features: readonly string[];
};

export function PricingSection({
  copy,
  href,
}: {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    popular: string;
    plans: readonly Plan[];
  };
  href: string;
}) {
  return (
    <section
      id="pricing"
      className="border-fd-border mt-16 scroll-mt-24 border-t py-16 md:mt-20 md:py-20"
    >
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-[#5645d4] dark:text-[#c4b6ff]">
          {copy.eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
          {copy.title}
        </h2>
        <p className="text-fd-muted-foreground mt-4 text-base leading-relaxed">
          {copy.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6">
        {copy.plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col gap-6 rounded-2xl border p-7 sm:row-span-5 sm:grid sm:grid-rows-subgrid sm:p-8 ${
              plan.highlighted
                ? 'border-[#5645d4]/30 bg-[#f4f1ff] dark:border-[#c4b6ff]/30 dark:bg-[#221c36]'
                : 'border-fd-border bg-fd-background'
            }`}
          >
            <div
              className={`min-h-7 items-center ${plan.highlighted ? 'flex' : 'hidden sm:flex'}`}
            >
              {plan.highlighted ? (
                <span className="w-fit rounded-full bg-[#5645d4] px-3 py-1 text-xs font-semibold text-white">
                  {copy.popular}
                </span>
              ) : null}
            </div>
            <div>
              <p className="text-fd-muted-foreground text-sm">{plan.name}</p>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.unit ? (
                  <span className="text-fd-muted-foreground mb-1 text-sm">
                    {plan.unit}
                  </span>
                ) : null}
              </div>
            </div>
            <p className="text-fd-muted-foreground text-sm leading-6">
              {plan.description}
            </p>
            <Link
              href={href}
              className={`rounded-md px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                plan.highlighted
                  ? 'bg-fd-primary text-fd-primary-foreground hover:opacity-90'
                  : 'border-fd-border hover:bg-fd-muted border'
              }`}
            >
              {plan.cta}
            </Link>
            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-fd-muted-foreground flex items-start gap-2.5 text-sm"
                >
                  <Check className="mt-0.5 size-3.5 shrink-0 text-[#5645d4] dark:text-[#c4b6ff]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
