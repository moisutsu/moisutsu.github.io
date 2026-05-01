import Image from "next/image";

import { ExternalLink } from "@/components/ExternalLink";
import type { AwardItem, CareerItem, EducationItem, Link, Publication } from "@/lib/content";
import { getPortfolioContent } from "@/lib/content";

const sectionTitleClass = "text-2xl font-semibold tracking-normal text-stone-950";
const subsectionTitleClass = "text-lg font-semibold tracking-normal text-stone-950";

const linkClass =
  "inline-flex items-center border-b border-stone-300 text-sm text-stone-700 transition-colors hover:border-stone-950 hover:text-stone-950";

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
            <div className='flex flex-col gap-1'>
              <h4 className='font-medium text-stone-950'>{publication.title}</h4>
              <p className='text-sm text-stone-600'>{publication.authors}</p>
              <p className='text-sm text-stone-600'>{publication.venue}</p>
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
          className='border-l border-stone-200 pl-4'
        >
          <h4 className='font-medium text-stone-950'>{item.role}</h4>
          <p className='text-sm text-stone-600'>{item.organization}</p>
          <p className='text-sm text-stone-500'>
            {item.start} - {item.end}
          </p>
        </li>
      ))}
    </ol>
  );
};

const EducationList = function ({ items }: { items: EducationItem[] }) {
  return (
    <ol className='space-y-5'>
      {items.map((item) => (
        <li
          key={`${item.degree}-${item.institution}-${item.start}`}
          className='border-l border-stone-200 pl-4'
        >
          <h4 className='font-medium text-stone-950'>{item.degree}</h4>
          <p className='text-sm text-stone-600'>{item.institution}</p>
          <p className='text-sm text-stone-500'>
            {item.start} - {item.end}
          </p>
        </li>
      ))}
    </ol>
  );
};

const AwardList = function ({ items }: { items: AwardItem[] }) {
  return (
    <ol className='space-y-5'>
      {items.map((item) => (
        <li key={`${item.title}-${item.organization}`} className='border-l border-stone-200 pl-4'>
          <h4 className='font-medium text-stone-950'>{item.title}</h4>
          <p className='text-sm text-stone-600'>{item.organization}</p>
        </li>
      ))}
    </ol>
  );
};

const InlineLinks = function ({ links }: { links: Link[] }) {
  return (
    <ul className='mt-2 flex flex-wrap gap-3'>
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
      <div className='mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16'>
        <section className='grid gap-8 border-b border-stone-200 pb-12 sm:grid-cols-[180px_1fr] sm:items-start'>
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={640}
            height={640}
            priority
            className='aspect-square w-40 border border-stone-200 object-cover sm:w-full'
          />
          <div className='max-w-3xl'>
            <h1 className='text-4xl font-semibold tracking-normal text-stone-950 sm:text-5xl'>
              {profile.name}
            </h1>
            <p className='mt-4 text-lg text-stone-700'>{profile.affiliation}</p>
          </div>
        </section>

        <section id='publications' className='border-b border-stone-200 py-12'>
          <div className='grid gap-8 lg:grid-cols-[180px_1fr]'>
            <h2 className={sectionTitleClass}>Publications</h2>
            <div className='space-y-10'>
              <PublicationList
                title='Peer-reviewed papers'
                publications={publications.peerReviewed}
              />
              <PublicationList title='Preprints' publications={publications.preprints} />
              <PublicationList title='Other publications' publications={publications.other} />
            </div>
          </div>
        </section>

        <section id='experience' className='border-b border-stone-200 py-12'>
          <div className='grid gap-8 lg:grid-cols-[180px_1fr]'>
            <h2 className={sectionTitleClass}>Experience</h2>
            <div className='space-y-10'>
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

        <section id='links' className='py-12'>
          <div className='grid gap-8 lg:grid-cols-[180px_1fr]'>
            <h2 className={sectionTitleClass}>Links</h2>
            <InlineLinks links={links} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
