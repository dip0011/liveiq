import { FOOTER } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-on-surface text-surface-card">
      <Container width="wide">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — Policies */}
            <div className="space-y-3">
              {FOOTER.policies.map((policy) => (
                <Link
                  key={policy.label}
                  href={policy.href}
                  className="block text-[length:var(--font-size-body-sm)] text-surface-high hover:text-surface-card transition-colors duration-[var(--duration-fast)] underline underline-offset-2"
                >
                  {policy.label}
                </Link>
              ))}
            </div>

            {/* Right — Company Info */}
            <div className="md:text-right space-y-2">
              {/* Logo */}
              <div className="flex items-center gap-2 md:justify-end mb-4">
                <Image src="/images/LOGO.png" alt="LiveIQ" width={28} height={28} className="h-6 w-auto brightness-0 invert" />
                <span className="font-display font-bold text-surface-card text-base">LiveIQ</span>
              </div>
              <p className="text-[length:var(--font-size-body-sm)] text-surface-high">
                {FOOTER.copyright}
              </p>
              <p className="text-[length:var(--font-size-body-sm)] text-surface-high">
                {FOOTER.address}
              </p>
              <p className="text-[length:var(--font-size-body-sm)] text-surface-high">
                {FOOTER.hours}
              </p>
              <p className="text-[length:var(--font-size-body-sm)] text-surface-card font-medium">
                {FOOTER.phone}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
