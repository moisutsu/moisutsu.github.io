import Image from "next/image";

import { ExternalLink } from "@/components/ExternalLink";
import type { AwardItem, CareerItem, EducationItem, Link, Publication } from "@/lib/content";
import { getPortfolioContent } from "@/lib/content";

const sectionTitleClass = "text-xl font-semibold tracking-normal text-stone-950 sm:text-2xl";
const subsectionTitleClass = "text-base font-semibold tracking-normal text-stone-950 sm:text-lg";

const linkClass =
  "inline-flex items-center border-b border-stone-300 py-1 text-sm text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950 sm:py-0";

const PublicationList = function ({
  title,
  publications,
}: {
  title: string;
  publications: Publication[];
}) {
  return (
    <div className='space-y-4'>
      <h3 className={subsectionTitleClass}>{title}</h3>
      <ol className='space-y-5'>
        {publications.map((publication) => (
          <li
            key={`${publication.title}-${publication.venue}`}
            className='border-t border-stone-200 pt-4'
          >
            <div className='flex flex-col gap-1 break-words'>
              <h4 className='font-medium leading-snug text-stone-950'>{publication.title}</h4>
              <p className='text-sm leading-relaxed text-stone-600'>{publication.authors}</p>
              <p className='text-sm leading-relaxed text-stone-600'>{publication.venue}</p>
              {publication.links?.length ? <InlineLinks links={publication.links} /> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

const CareerList = function ({ items }: { items: CareerItem[] }) {
  return (
    <ol className='space-y-5'>
      {items.map((item) => (
        <li
          key={`${item.role}-${item.organization}-${item.start}`}
          className='border-t border-stone-200 pt-4'
        >
          <div className='flex flex-col gap-1 break-words'>
            <h4 className='font-medium leading-snug text-stone-950'>{item.organization}</h4>
            <p className='text-sm leading-relaxed text-stone-600'>{item.role}</p>
            <p className='text-sm leading-relaxed text-stone-600'>
              {item.start} - {item.end}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

const EducationList = function ({ items }: { items: EducationItem[] }) {
  return (
    <ol className='space-y-5'>
      {items.map((item) => (
        <li key={`${item.institution}-${item.start}`} className='border-t border-stone-200 pt-4'>
          <div className='flex flex-col gap-1 break-words'>
            <h4 className='font-medium leading-snug text-stone-950'>{item.institution}</h4>
            <p className='text-sm leading-relaxed text-stone-600'>
              {item.start} - {item.end}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

const AwardList = function ({ items }: { items: AwardItem[] }) {
  return (
    <ol className='space-y-5'>
      {items.map((item) => (
        <li key={item.title} className='border-t border-stone-200 pt-4'>
          <div className='flex flex-col gap-1 break-words'>
            <h4 className='font-medium leading-snug text-stone-950'>{item.title}</h4>
            {item.subtitle ? (
              <p className='text-sm leading-relaxed text-stone-600'>{item.subtitle}</p>
            ) : null}
            {item.links?.length ? <InlineLinks links={item.links} /> : null}
          </div>
        </li>
      ))}
    </ol>
  );
};

const InlineLinks = function ({ links }: { links: Link[] }) {
  return (
    <ul className='mt-2 flex flex-wrap gap-x-4 gap-y-2 sm:gap-3'>
      {links.map((link) => (
        <li key={`${link.label}-${link.url}`}>
          <ExternalLink href={link.url} ariaLabel={link.label} className={linkClass}>
            {link.label}
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
};

const Page = function () {
  const { experience, links, profile, publications } = getPortfolioContent();

  return (
    <main id='top'>
      <div className='mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16'>
        <section className='grid grid-cols-[96px_1fr] items-start gap-5 border-b border-stone-200 pb-5 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pb-12'>
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={640}
            height={640}
            priority
            className='aspect-square w-full border border-stone-200 object-cover sm:w-full'
          />
          <div className='max-w-3xl'>
            <h1 className='m-0 !text-[1.3125rem] font-semibold !leading-tight tracking-normal text-stone-950 sm:!text-[2rem] sm:!leading-normal'>
              {profile.name}
            </h1>
            <p className='m-0 mt-2 text-[0.8125rem] leading-relaxed text-stone-700 sm:mt-9 sm:text-xl'>
              {profile.affiliation}
            </p>
          </div>
        </section>

        <section id='experience' className='border-b border-stone-200 pb-10 pt-5 sm:py-12'>
          <div className='grid gap-6 sm:gap-8 lg:grid-cols-[180px_1fr]'>
            <h2 className={sectionTitleClass}>Experience</h2>
            <div className='space-y-8 sm:space-y-10'>
              <div className='space-y-4'>
                <h3 className={subsectionTitleClass}>Career</h3>
                <CareerList items={experience.career} />
              </div>
              <div className='space-y-4'>
                <h3 className={subsectionTitleClass}>Education</h3>
                <EducationList items={experience.education} />
              </div>
              <div className='space-y-4'>
                <h3 className={subsectionTitleClass}>Awards</h3>
                <AwardList items={experience.awards} />
              </div>
            </div>
          </div>
        </section>

        <section id='publications' className='border-b border-stone-200 py-10 sm:py-12'>
          <div className='grid gap-6 sm:gap-8 lg:grid-cols-[180px_1fr]'>
            <h2 className={sectionTitleClass}>Publications</h2>
            <div className='space-y-8 sm:space-y-10'>
              <PublicationList
                title='Peer-Reviewed Papers'
                publications={publications.peerReviewed}
              />
              <PublicationList
                title='Non-Peer-Reviewed Papers'
                publications={publications.preprints}
              />
              <PublicationList title='Other Publications' publications={publications.other} />
            </div>
          </div>
        </section>

        <section id='links' className='py-10 sm:py-12'>
          <div className='grid gap-6 sm:gap-8 lg:grid-cols-[180px_1fr]'>
            <h2 className={sectionTitleClass}>Links</h2>
            <InlineLinks links={links} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
