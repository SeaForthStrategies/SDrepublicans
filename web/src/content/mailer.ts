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
  image: ImageRef;
};

export type InfoBoxData = {
  id: string;
  title: string;
  bullets: string[];
  cta: string;
};

export type MailerPageData = {
  id: "page-1" | "page-2";
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
  sections: Array<
    | { type: "grid"; id: string; columns: number; items: Array<any> }
    | { type: "footer"; id: string; text: string }
  >;
};

export const mailer: { header: any; pages: MailerPageData[] } = {
  header: {
    brandLeft: {
      logo: { src: "/mailer/brand/elephant.png", alt: "Republican elephant" },
      titleTop: "REPUBLICAN",
      titleBottom: "LEADERSHIP",
    },
    headline: "OFFICIAL ENDORSEMENT GUIDE",
    primaryWebsite: "WWW.SDREPUBLICLICANS.COM",
  },
  pages: [
    {
      id: "page-1",
      top: {
        showWebsiteLine: true,
        showQuoteLine: true,
        websiteText: "WWW.SDREPUBLICLICANS.COM",
        quoteText:
          "“We’re going to win so much, you’re going to be so sick and tired of winning!”",
        quoteAttribution: "—President Donald J. Trump",
      },
      electionBanner: {
        left: "ELECTION DAY - TUESDAY, JUNE 2",
        rightTop: "POLLS OPEN 7 AM TO 8 PM",
        rightBottom: "MAIL BALLOTS MUST BE POSTMARKED BY JUNE 2",
      },
      sections: [
        {
          type: "grid",
          id: "p1-top",
          columns: 3,
          items: [
            {
              type: "candidate",
              data: {
                id: "jordan-marks",
                heading: "Re-Elect County Assessor/Recorder/Clerk",
                name: "Jordan Marks*, Incumbent",
                image: {
                  src: "/mailer/people/jordan-marks.png",
                  alt: "Jordan Marks with family",
                },
                body: [
                  "Protecting San Diego’s homeowners and renters is my number one priority! As your Assessor/Recorder/ County Clerk, I will continue to protect Prop 13 and be your advocate for a more affordable San Diego!",
                  "A RECORD OF RESULTS YOU CAN TRUST",
                  "JORDAN’S INNOVATIVE PROGRAMS SAVED TAXPAYERS RECORD HIGH TAX SAVINGS",
                  "$32 Million for Homeowners’ Seniors.",
                  "$35 Million for Disabled Veterans.",
                  "$20 Million to help Renters, Small Businesses, Homeless Services,",
                ],
                website: "vote4marks.com",
                footnote: "* indicates candidate has paid for mailer.",
              } satisfies CandidateCardData,
            },
            {
              type: "message",
              data: {
                id: "brian-jones",
                kicker: "A message from:",
                title: "Senate Republican Leader, Brian Jones",
                quote:
                  "“I am proud to join in endorsing these great leaders. This is the ONLY San Diego Republican Leadership Endorsement Guide. Don’t be fooled by other misleading mailers.”",
                image: {
                  src: "/mailer/people/brian-jones.png",
                  alt: "Brian Jones",
                },
              } satisfies MessagePanelData,
            },
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
          id: "p1-bottom",
          columns: 3,
          items: [
            {
              type: "candidate",
              data: {
                id: "joel-anderson",
                heading: "For County Treasurer, Tax Collector",
                name: "Joel Anderson*, Supervisor",
                image: {
                  src: "/mailer/people/joel-anderson.png",
                  alt: "Joel Anderson",
                },
                body: [
                  "Supervisor Joel Anderson served East County San Diego in the State Assembly from 2007-2009 and in the State Senate from 2010-2018.",
                  "Prior to that, he served on the Padre Dam Municipal Water District and the Resource Conservation District of Greater San Diego Board of Directors.",
                  "He has been a longtime grassroots advocate for the issues he cares about, and ultimately it was his experience running his own business that inspired him to run for office to make California more friendly towards small business.",
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
                  "I support the biggest middle class tax cut in California history,",
                  "and I oppose any new or higher taxes. I support Proposition 13 property tax protections. I also support public, nonpartisan audits to find and eliminate fraud, waste, and mismanagement.",
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
                  "Fight or Flee. That’s the choice that millions of common-sense Californians are facing as California’s cost-of-living skyrockets higher and higher. Continue to enact extreme",
                ],
                website: "",
                noticeBox: {
                  title: "NOTICE: TO VOTERS",
                  text:
                    "THIS DOCUMENT WAS PREPARED BY THE SAN DIEGO REPUBLICAN LEADERSHIP ENDORSEMENT GUIDE. NOT AN OFFICIAL SAMPLE BALLOT PARTY ORGANIZATION. Appearance in this mailer does not imply endorsement by any other organization or official unless it clearly states otherwise. Appearance is paid for and authorized by the appropriate candidate listed for that office, unless otherwise noted. This mailer is not authorized by any candidate or ballot measure committee unless it clearly states otherwise.",
                },
              } satisfies CandidateCardData,
            },
          ],
        },
        {
          type: "footer",
          id: "p1-footer",
          text: "VISIT WWW.SDREPUBLICLICANS.COM FOR MORE ENDORSEMENTS AND IMPORTANT INFORMATION",
        },
      ],
    },
    {
      id: "page-2",
      top: {
        showWebsiteLine: false,
        showQuoteLine: false,
      },
      electionBanner: {
        left: "ELECTION DAY TUESDAY, JUNE 2",
        rightTop: "POLLS OPEN 7 AM TO 8 PM",
        rightBottom: "MAIL BALLOTS MUST BE POSTMARKED BY JUNE 2",
      },
      sections: [
        {
          type: "grid",
          id: "p2-top-note",
          columns: 1,
          items: [
            {
              type: "endorsement",
              data: {
                id: "corey-note",
                image: { src: "/mailer/people/corey.png", alt: "Corey Gustafson" },
                quote:
                  "“This is the ONLY San Diego Republican Leadership Endorsement Guide. To deliver your ballot in person, find a location at: www.SDRepublicans.com or have your ballot picked up by calling 760-519-3057.”",
                byline: "SDREPUBLICLICANS.COM CHAIRMAN COREY GUSTAFSON",
              },
            },
          ],
        },
        {
          type: "grid",
          id: "p2-top",
          columns: 2,
          items: [
            {
              type: "endorsement",
              data: {
                id: "darrell-issa-message",
                image: {
                  src: "/mailer/graphics/issa-trump.png",
                  alt: "Darrell Issa with Donald Trump",
                },
                titleKicker: "A message from:",
                title: "Congressman Darrell Issa",
                quote:
                  "“These leaders will fight alongside President Trump and me to Make America Great Again! They have been carefully vetted for their loyalty to Republican principles. They oppose new taxes and bigger government. They fight to defend families and common-sense values. I am proud to join in endorsing each of them.”",
                urlText: "darrellissa.com",
              },
            },
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
                  "A safe, secure border and a legal immigration system that works for everyone. As your representative, I will fight to:",
                  "Protect our borders from illegal crossings.",
                  "Create an efficient legal process for those who follow the rules.",
                  "Ensure fairness by stopping the line skipping.",
                ],
                website: "DesmondforCongress.com",
              } satisfies CandidateCardData,
            },
          ],
        },
        {
          type: "grid",
          id: "p2-bottom",
          columns: 2,
          items: [
            {
              type: "candidate",
              data: {
                id: "john-franklin",
                heading: "For County Supervisor\n5th District",
                name: "Mayor John Franklin*",
                image: {
                  src: "/mailer/people/john-franklin.png",
                  alt: "John Franklin",
                },
                body: [
                  "I balanced 12 budgets, built strong financial reserves, reduced homelessness, fought drug and shoplifting crimes.",
                  "I’ve never raised taxes and never will.",
                  "I cleared encampments with a tough but fair approach. I will fund police, prosecutors and jails. I’ll prioritize good roads and evacuation routes. I speak clearly for common sense.",
                  "Girls sports and facilities should be for girls only.",
                  "Sanctuary Policies are wrong.",
                ],
                website: "MayorFranklin.com",
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
                  "California is at a crossroads, and I am ready to fight for the hardworking families who deserve a brighter, more affordable future in the Golden State. Together, we can bring common sense solutions back to the government and ensure California remains a place where everyone can thrive.",
                ],
                website: "musgrove4senate.com",
              } satisfies CandidateCardData,
            },
          ],
        },
        {
          type: "footer",
          id: "p2-footer",
          text: "VISIT WWW.SDREPUBLICLICANS.COM FOR MORE ENDORSEMENTS AND IMPORTANT INFORMATION",
        },
      ],
    },
  ],
};

