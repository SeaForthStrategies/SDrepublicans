export type ImageRef = {
  src: string;
  alt: string;
};

export type CandidateCardData = {
  id: string;
  heading: string;
  subheading?: string;
  name: string;
  image: ImageRef;
  body: string[];
  website: string;
  footnote?: string;
  noticeBox?: {
    title: string;
    text: string;
  };
};

export type MessagePanelData = {
  id: string;
  kicker: string;
  title: string;
  quote: string;
  /** Composite / wide graphic: zoom on left portion; optional zoom strength */
  image: ImageRef & {
    cropPortraitLeft?: boolean;
    cropZoom?: number;
  };
};

export type InfoBoxData = {
  id: string;
  title: string;
  bullets: string[];
  cta: string;
};

export type EndorsementCardData = {
  id: string;
  image: ImageRef;
  quote: string;
  byline?: string;
  titleKicker?: string;
  title?: string;
  /** Shown in the pill (e.g. darrellissa.com) */
  urlText?: string;
  /** Destination URL; if omitted, https:// is prepended to urlText when it looks like a domain */
  urlHref?: string;
  /** Larger layout for primary endorsement */
  featured?: boolean;
};

export type MailerGridItem =
  | { type: "candidate"; data: CandidateCardData }
  | { type: "message"; data: MessagePanelData }
  | { type: "info"; data: InfoBoxData }
  | { type: "endorsement"; data: EndorsementCardData };

export type MailerSection =
  | { type: "grid"; id: string; columns: 1 | 2 | 3; items: MailerGridItem[] }
  | { type: "footer"; id: string; text: string };

/** Shared legal disclaimer (single source for footer; was also on a candidate card). */
export const VOTER_NOTICE = {
  title: "NOTICE TO VOTERS",
  text:
    "THIS DOCUMENT WAS PREPARED BY THE SAN DIEGO REPUBLICAN LEADERSHIP ENDORSEMENT GUIDE.\nNOT AN OFFICIAL SAMPLE BALLOT PARTY ORGANIZATION.\nAppearance in this mailer does not imply endorsement by any other organization or official unless it clearly states otherwise.\nAppearance is paid for and authorized by the appropriate candidate listed for that office, unless otherwise noted.\nThis mailer is not authorized by any candidate or ballot measure committee unless it clearly states otherwise.",
} as const;

/** Quick actions shown with election details (phone only; site URL omitted — this is the site). */
export const QUICK_CONTACT = {
  phoneDisplay: "760-519-3057",
  phoneHref: "tel:7605193057",
} as const;

export type MailerPageData = {
  id: "home";
  /** Faint elephant watermark behind the body grid */
  showWatermark?: boolean;
  top: {
    showWebsiteLine?: boolean;
    showQuoteLine?: boolean;
    websiteText?: string;
    quoteText?: string;
    quoteAttribution?: string;
  };
  electionBanner: {
    left: string;
    rightTop: string;
    rightBottom: string;
  };
  /** Full-width card between the election strip and the endorsements grid (e.g. Issa message) */
  fullWidthEndorsement?: EndorsementCardData;
  sections: MailerSection[];
};

export type MailerHeader = {
  brandLeft: {
    logo: ImageRef;
    titleTop: string;
    titleBottom: string;
  };
  headline: string;
  /** Optional; omitted when this page is the org site (no self-link). */
  primaryWebsite?: string;
  /** Chairman photo + quote; rendered above the election strip. */
  chairman?: {
    image: ImageRef;
    quote: string;
    byline: string;
  };
};

export const mailer: { header: MailerHeader; page: MailerPageData } = {
  header: {
    brandLeft: {
      logo: { src: "/icon.png", alt: "San Diego Republican Leadership" },
      titleTop: "SAN DIEGO REPUBLICAN",
      titleBottom: "LEADERSHIP",
    },
    headline: "OFFICIAL ENDORSEMENT GUIDE",
    chairman: {
      image: { src: "/mailer/people/corey.png", alt: "Chairman Corey Gustafson" },
      quote:
        "“This is the ONLY San Diego Republican Leadership Endorsement Guide.\nTo deliver your ballot in person, find an official drop-off location,\nor have your ballot picked up by calling 760-519-3057.”",
      byline: "SDREPUBLICANS.COM CHAIRMAN COREY GUSTAFSON",
    },
  },
  page: {
    id: "home",
    showWatermark: true,
    top: {
      showWebsiteLine: false,
      showQuoteLine: false,
    },
    electionBanner: {
      left: "ELECTION DAY - TUESDAY, JUNE 2",
      rightTop: "POLLS OPEN 7 AM TO 8 PM",
      rightBottom: "MAIL BALLOTS MUST BE POSTMARKED BY JUNE 2",
    },
    fullWidthEndorsement: {
      id: "darrell-issa-message",
      image: {
        src: "/mailer/graphics/trump-issa.png",
        alt: "Congressman Darrell Issa and President Donald J. Trump",
      },
      titleKicker: "A message from:",
      title: "Congressman Darrell Issa",
      quote:
        "“These leaders will fight alongside President Trump and me to Make America Great Again!\nThey have been carefully vetted for their loyalty to Republican principles.\nThey oppose new taxes and bigger government.\nThey will fight to defend families and common-sense values.\nI am proud to join in endorsing each of them.”",
      urlText: "darrellissa.com",
      urlHref: "https://darrellissa.com",
    } satisfies EndorsementCardData,
    sections: [
      {
        type: "grid",
        id: "endorsements",
        columns: 3,
        items: [
          {
            type: "endorsement",
            data: {
              id: "john-franklin",
              image: {
                src: "/mailer/people/john-franklin.png",
                alt: "John Franklin",
              },
              titleKicker: "For County Supervisor\n5th District",
              title: "Mayor John Franklin*",
              quote:
                "I balanced 12 budgets, built strong financial reserves, reduced homelessness, fought drug and shoplifting crimes.\nI’ve never raised taxes and never will.\nI cleared encampments with enforcement. I will fund Police, prosecutors and jails. I’ll prioritize good roads and evacuation routes. I speak clearly for common sense.\nGirls sports and facilities should be for girls only.\nSanctuary policies are wrong.",
              urlText: "MayorFranklin.com",
              urlHref: "https://mayorfranklin.com",
              featured: true,
            } satisfies EndorsementCardData,
          },
          {
            type: "endorsement",
            data: {
              id: "brian-jones",
              image: {
                src: "/mailer/people/brian-jones.png",
                alt: "Senator Brian Jones",
              },
              titleKicker: "A message from:",
              title: "Senate Republican Leader, Brian Jones",
              quote:
                "“I am proud to join in endorsing these great leaders.\nThis is the ONLY San Diego Republican Leadership Endorsement Guide.\nDon’t be fooled by other misleading mailers.”",
            } satisfies EndorsementCardData,
          },
          {
            type: "candidate",
            data: {
              id: "jordan-marks",
              heading: "Re-Elect County\nAssessor/Recorder/Clerk",
              name: "Jordan Marks*, Incumbent",
              image: {
                src: "/mailer/people/jordan-marks.png",
                alt: "Jordan Marks with family",
              },
              body: [
                "Protecting San Diego’s homeowners and renters is my number one priority!\nAs your Assessor/Recorder/County Clerk, I will continue to protect Prop 13 and be your advocate for a more affordable San Diego!",
                "A RECORD OF RESULTS YOU CAN TRUST\nJORDAN’S INNOVATIVE PROGRAMS SAVED TAXPAYERS RECORD HIGH TAX SAVINGS!",
                "$32 Million for Homeowners/ Seniors.",
                "$35 Million for Disabled Veterans.",
                "$210 Million to help Renters, Small Businesses, Homeless Services,",
              ],
              website: "vote4marks.com",
              footnote: "* indicates candidate has paid for mailer.",
            } satisfies CandidateCardData,
          },
        ],
      },
      {
        type: "grid",
        id: "grid-top",
        columns: 1,
        items: [
          {
            type: "info",
            data: {
              id: "tax-hike-alert",
              title: "Tax-Hike Alert!*",
              bullets: [
                "Democrats are proposing three massive new SD County taxes:",
                "1. A 1/2 cent sales tax to provide healthcare to illegal aliens and immigrants without legal permanent status.",
                "2. An enormous “Transfer Tax” that will cost $40,000 on the sale of a $700,000 home.",
                "3. A Payroll tax that will come directly out of your paycheck.",
              ],
              cta: "Vote NO on ALL new Taxes",
            } satisfies InfoBoxData,
          },
        ],
      },
      {
        type: "grid",
        id: "grid-middle",
        columns: 3,
        items: [
          {
            type: "candidate",
            data: {
              id: "joel-anderson",
              heading: "For County Treasurer, Tax Collector",
              name: "Joel Anderson*, Supervisor",
              image: {
                src: "/mailer/people/joel-anderson-headshot.png",
                alt: "Joel Anderson",
              },
              body: [
                "Supervisor Joel Anderson served East County San Diego in the State Assembly from 2007-2009 and in the State Senate from 2010-2018.\nPrior to that, he served on the Padre Dam Municipal Water District and the Resource Conservation District of Greater San Diego Board of Directors.\nHe has been a longtime grassroots advocate for the issues he cares about, and ultimately it was his experience running his own business that inspired him to run for office to make California more friendly towards small business.",
              ],
              website: "electjoelanderson.com",
            } satisfies CandidateCardData,
          },
          {
            type: "candidate",
            data: {
              id: "laura-davies",
              heading: "California Assembly\nDist. 74",
              name: "Laura Davies*",
              image: {
                src: "/mailer/people/laura-davies.png",
                alt: "Laura Davies",
              },
              body: [
                "I support the biggest middle class tax cut in California history,\nand I oppose any new or higher taxes. I support Proposition 13 property tax protections. I also support public, nonpartisan audits to find and eliminate fraud, waste, and mismanagement.",
              ],
              website: "daviesforca.com",
            } satisfies CandidateCardData,
          },
          {
            type: "candidate",
            data: {
              id: "carl-demaio",
              heading: "California Assembly - Dist. 75",
              name: "Carl DeMaio",
              image: {
                src: "/mailer/people/carl-demaio.png",
                alt: "Carl DeMaio",
              },
              body: [
                "Fight or Flee. That’s the choice that millions of common-sense Californians are facing as California’s cost-of-living skyrockets higher and higher.\nState politicians continue to enact extreme policies.",
              ],
              website: "",
            } satisfies CandidateCardData,
          },
        ],
      },
      {
        type: "grid",
        id: "candidates",
        columns: 2,
        items: [
          {
            type: "candidate",
            data: {
              id: "jim-desmond",
              heading: "For U.S. Congress\n48th District",
              name: "Supervisor Jim Desmond",
              image: {
                src: "/mailer/people/jim-desmond.png",
                alt: "Jim Desmond",
              },
              body: [
                "A safe, secure border and a legal immigration system that works for everyone. As your representative, I will fight to:\nProtect our borders from illegal crossings.\nCreate an efficient legal process for those who follow the rules.\nEnsure fairness by stopping people from skipping the line.",
              ],
              website: "DesmondforCongress.com",
            } satisfies CandidateCardData,
          },
          {
            type: "candidate",
            data: {
              id: "ed-musgrove",
              heading: "For State Senate\n40th District",
              name: "Councilman Ed Musgrove*",
              image: {
                src: "/mailer/people/ed-musgrove.png",
                alt: "Ed Musgrove",
              },
              body: [
                "California is at a crossroads, and I am ready to fight for the hardworking families who deserve a brighter, more affordable future in the Golden State.\nTogether we can bring common sense solutions back to the government and ensure California remains a place where everyone can thrive.",
              ],
              website: "musgrove4senate.com",
            } satisfies CandidateCardData,
          },
        ],
      },
      {
        type: "footer",
        id: "voter-notice",
        text: `${VOTER_NOTICE.title}\n\n${VOTER_NOTICE.text}`,
      },
    ],
    },
};

