import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Contact — Invoke",
  description: "Brief us on the agency, the problem, and the boundary.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        number="07"
        kicker="Contact · brief us"
        total="01 / 01"
        title={<>Brief us on the mission. <span className="text-text-muted">We&rsquo;ll respond within two business days.</span></>}
        subtitle="The fastest path is a short note about the agency, the problem, and the boundary you need us to deliver inside. We&rsquo;ll come back with a delivery shape, not a sales deck."
      />

      <Section bordered={false}>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div id="brief">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Mission brief</div>
            <form className="mt-8 space-y-6" action="mailto:hello@invokepublic.com" method="post" encType="text/plain">
              <Field label="Name" name="name" />
              <Field label="Agency / organization" name="agency" />
              <Field label="Email" name="email" type="email" />
              <Field
                label="What can&rsquo;t the mission do yet?"
                name="brief"
                textarea
                placeholder="A few sentences is plenty. We'll follow up to scope."
              />
              <button
                type="submit"
                className="group inline-flex h-10 items-center gap-2 bg-accent px-4 font-mono text-xs uppercase tracking-[0.16em] text-bg transition-colors hover:bg-[#f3b85b]"
              >
                Send brief
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </button>
            </form>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Direct</div>
            <h2 className="mt-6 text-2xl tracking-[-0.01em] text-text">Or skip the form.</h2>
            <ul className="mt-8 space-y-5 text-text-muted">
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">Email</span>
                <a className="mt-2 block text-text hover:text-accent" href="mailto:hello@invokepublic.com">
                  hello@invokepublic.com
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">LinkedIn</span>
                <a
                  className="mt-2 block text-text hover:text-accent"
                  href="https://www.linkedin.com/company/invoke-inc"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/company/invoke-inc
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">Capability statement</span>
                <span className="mt-2 block text-text">Available on request.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "mt-2 w-full bg-bg-raised border border-[var(--border)] px-4 py-3 text-sm text-text placeholder:text-text-dim focus:border-accent focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
