import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Job Application",
  description: "Apply to join the Granite Peak team.",
};

export default function ApplyPage() {
  return (
    <SiteFrame>
      <PageHero tag="Careers" title="Join Our Team." subtitle="Complete the application below and attach your resume to apply." />
      <section className="px-6 md:px-[60px] py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <iframe
            title="Job application"
            src="https://form.jotform.com/263295229622057"
            className="w-full min-h-[900px] border-0"
          />
          <p className="mt-6 text-sm text-navy-dark/70">
            Having trouble viewing the form?{" "}
            <a className="text-blue underline" href="https://form.jotform.com/263295229622057" target="_blank" rel="noopener noreferrer">
              Open the application in a new tab.
            </a>
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
