export interface ComparisonTable {
  columnA: string;
  columnB: string;
  rows: { feature: string; a: string; b: string }[];
}

export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  category: "comparison" | "situational" | "how-to";
  dek: string;
  takeaway: string;
  keyStat: string;
  keyStatLabel: string;
  lastUpdated: string;
  comparisonTable?: ComparisonTable;
  body: { heading: string; paragraphs: string[] }[];
  relatedPlans?: string[];
}

export const guides: Guide[] = [
  {
    slug: "applecare-vs-asurion",
    title: "AppleCare+ vs Asurion: which one should you buy?",
    metaDescription:
      "AppleCare+ has lower deductibles and genuine Apple parts. Asurion offers same-day repair through more locations and covers any phone brand. Here's the real comparison.",
    category: "comparison",
    dek: "Both protect an iPhone. They do it very differently — and the right one depends on where you buy your service and how you file claims.",
    takeaway: "AppleCare+ usually costs less per claim. Asurion usually gets you a same-day repair nearby. Pick based on which one you'll actually need.",
    keyStat: "$29",
    keyStatLabel: "AppleCare+ screen repair deductible vs up to $275 with Asurion",
    lastUpdated: "July 2026",
    comparisonTable: {
      columnA: "AppleCare+",
      columnB: "Asurion (carrier plan)",
      rows: [
        { feature: "Monthly cost", a: "$9.99–$13.99", b: "$12–$15" },
        { feature: "Screen repair deductible", a: "$29", b: "$29–$275" },
        { feature: "Parts used", a: "Genuine Apple parts", b: "Third-party or refurbished" },
        { feature: "Repair location", a: "Apple Store / authorized provider", b: "uBreakiFix network" },
        { feature: "Theft & loss coverage", a: "Yes (current models)", b: "Yes" },
        { feature: "Works across phone brands", a: "No — Apple only", b: "Yes" },
      ],
    },
    relatedPlans: ["applecare-plus-iphone", "asurion"],
    body: [
      {
        heading: "The short version",
        paragraphs: [
          "AppleCare+ usually wins on price per claim: a $29 screen repair versus Asurion's $29–$275 range depending on the plan and device. AppleCare+ also guarantees genuine Apple parts and repairs done at an Apple Store or Apple Authorized Service Provider.",
          "Asurion usually wins on repair logistics in areas with a uBreakiFix location, and it's the only option if you want a single protection plan across phones from different manufacturers on one carrier bill.",
        ],
      },
      {
        heading: "Cost over two years",
        paragraphs: [
          "AppleCare+ with Theft and Loss for a current iPhone runs roughly $280–$340 in premiums over two years, before any claims. Add a single screen repair at $29 and you're still well under $400 total.",
          "A carrier plan through Asurion for the same phone often runs $12–$15/month, or $288–$360 over two years, and a screen repair claim adds another $29–$99 depending on the specific plan terms. The premium cost is similar; the deductible spread is where the real difference shows up on a second or third claim.",
        ],
      },
      {
        heading: "When Asurion is the better fit anyway",
        paragraphs: [
          "If you're on a family plan with a mix of iPhones and Android devices, a single Asurion-backed carrier plan can be simpler to manage than separate manufacturer plans for each phone.",
          "If your area has a uBreakiFix location but an Apple Store is a long drive away, Asurion's repair turnaround may beat AppleCare+ in practice, even if AppleCare+ wins on paper cost.",
        ],
      },
      {
        heading: "What actually happens when you file a claim",
        paragraphs: [
          "With AppleCare+, a claim typically means booking a Genius Bar appointment or mailing the device to Apple, with the $29 deductible charged at the time of service. Turnaround for an in-store screen repair is often same-day; a mail-in repair can take several business days.",
          "With Asurion, most carrier plans route you through the myasurion.com portal or app, where you can schedule an in-person repair at a nearby uBreakiFix location or arrange a mail-in replacement. The deductible is charged upfront when you file, not after the repair is complete.",
        ],
      },
      {
        heading: "The verdict, situation by situation",
        paragraphs: [
          "Single iPhone, careful owner, lives near an Apple Store: AppleCare+ wins on price and genuine parts.",
          "Multiple phones on one family plan, mixed Apple and Android: Asurion's one-plan-fits-all structure is simpler to manage even if it costs slightly more per device.",
          "Frequent claims filer or someone who's lost a phone before: AppleCare+ with Theft and Loss usually has the lower total cost, but confirm Find My was active at the time of any past incident before assuming a future claim would be covered.",
        ],
      },
    ],
  },
  {
    slug: "applecare-vs-squaretrade",
    title: "AppleCare+ vs SquareTrade: which is the better deal?",
    metaDescription:
      "AppleCare+ costs more upfront but has a lower deductible and genuine parts. SquareTrade is cheaper and covers theft-adjacent situations differently. Here's the breakdown.",
    category: "comparison",
    dek: "One is Apple's own plan, the other is a flat-fee third party now owned by Allstate. The gap between them comes down to deductible math and what happens if your phone is stolen.",
    takeaway: "SquareTrade runs roughly half the price of AppleCare+ over two years — but it drops theft and loss coverage entirely.",
    keyStat: "$129",
    keyStatLabel: "SquareTrade's 2-year price vs ~$260 for AppleCare+",
    lastUpdated: "July 2026",
    comparisonTable: {
      columnA: "AppleCare+",
      columnB: "SquareTrade / Allstate",
      rows: [
        { feature: "2-year cost", a: "~$240–$280", b: "~$129" },
        { feature: "Screen repair deductible", a: "$29", b: "$99–$149" },
        { feature: "Billing", a: "Monthly or upfront", b: "One-time upfront" },
        { feature: "Theft & loss coverage", a: "Yes (current models)", b: "No, on most plans" },
        { feature: "Parts used", a: "Genuine Apple parts", b: "Varies by repair partner" },
      ],
    },
    relatedPlans: ["applecare-plus-iphone", "squaretrade"],
    body: [
      {
        heading: "Price comparison",
        paragraphs: [
          "A 2-year SquareTrade/Allstate phone plan runs around $129, versus roughly $240–$280 for two years of AppleCare+ on a current iPhone. SquareTrade is meaningfully cheaper upfront.",
          "The gap narrows once you factor in deductibles: SquareTrade charges $99–$149 per claim versus AppleCare+'s $29 for a screen repair. If you expect to file more than one claim over the coverage period, AppleCare+'s lower per-incident cost can close or even flip the total-cost comparison.",
        ],
      },
      {
        heading: "The theft and loss gap",
        paragraphs: [
          "This is the detail people miss most often: most SquareTrade/Allstate phone plans don't cover loss or theft, only accidental damage and mechanical failure. AppleCare+ with Theft and Loss does, for an additional cost baked into current pricing on most models.",
          "If theft protection matters to you — frequent travel, city living, a history of losing phones — that alone may settle the decision in AppleCare+'s favor regardless of the price difference.",
        ],
      },
      {
        heading: "Bottom line",
        paragraphs: [
          "Choose SquareTrade if you want the lowest upfront cost, don't need theft coverage, and don't expect to file more than one claim.",
          "Choose AppleCare+ if you want genuine parts, the lowest possible per-claim cost, or theft and loss protection.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Say you buy a current iPhone Pro and file one screen repair claim over two years. With AppleCare+, you'd pay roughly $240–$280 in premiums plus a $29 deductible — about $270–$310 total. With SquareTrade, you'd pay $129 upfront plus a $99–$149 deductible — about $228–$278 total. SquareTrade still comes out slightly ahead even with one claim.",
          "Now say you file two claims in the same period. AppleCare+'s total rises to roughly $300–$340. SquareTrade's rises to $327–$427. At that point AppleCare+'s lower per-incident cost flips the comparison in its favor — which is the core reason claim frequency, not just plan price, should drive the decision.",
        ],
      },
    ],
  },
  {
    slug: "squaretrade-vs-asurion",
    title: "SquareTrade vs Asurion: which extended warranty wins?",
    metaDescription:
      "SquareTrade offers a flat upfront price with no monthly billing. Asurion bundles into your carrier bill and covers loss and theft. Here's how to choose.",
    category: "comparison",
    dek: "Both are third-party plans that work across device brands. The real difference is billing structure and whether you need theft coverage.",
    takeaway: "SquareTrade wins on price if you're careful with your phone. Asurion wins if you need theft coverage or want everything on one bill.",
    keyStat: "$99–$149",
    keyStatLabel: "SquareTrade's per-claim deductible vs $29–$275 with Asurion",
    lastUpdated: "July 2026",
    comparisonTable: {
      columnA: "SquareTrade / Allstate",
      columnB: "Asurion",
      rows: [
        { feature: "Billing", a: "One-time upfront", b: "Monthly, ongoing" },
        { feature: "2-year phone plan cost", a: "~$129", b: "~$288–$360" },
        { feature: "Deductible", a: "$99–$149", b: "$29–$275" },
        { feature: "Theft & loss coverage", a: "No, on most plans", b: "Yes" },
        { feature: "Works across device brands", a: "Yes", b: "Yes (via carrier)" },
      ],
    },
    relatedPlans: ["squaretrade", "asurion"],
    body: [
      {
        heading: "How they're priced",
        paragraphs: [
          "SquareTrade sells a fixed term upfront — pay once for 2 or 3 years and you're done, with no bill to remember to cancel. Asurion, through most carriers, is a recurring monthly charge added to your phone bill indefinitely until you cancel it.",
          "For pure budgeting simplicity, SquareTrade's one-time payment is easier to plan around. For flexibility (starting or stopping coverage anytime without losing a prepaid balance), Asurion's monthly structure has an edge.",
        ],
      },
      {
        heading: "What each one actually covers",
        paragraphs: [
          "SquareTrade's standard plans typically exclude loss and theft — they cover accidental damage and mechanical failure only. Asurion's carrier plans generally include loss and theft as a core feature, which is the main reason people choose it over a flat-fee third party plan.",
          "If your phone has never left your possession in five years of ownership, that gap may not matter to you. If you've ever left a phone in a cab or had one lifted from a bag, it matters quite a bit.",
        ],
      },
      {
        heading: "Repair network and turnaround",
        paragraphs: [
          "Asurion's uBreakiFix network means many claims get resolved same-day, in person. SquareTrade generally routes claims through its own app or a mail-in process, which tends to take several business days but doesn't require finding a physical location near you.",
          "If speed matters more than saving a few dollars — a work phone you can't be without, for instance — that turnaround difference can outweigh the price gap entirely.",
        ],
      },
    ],
  },
  {
    slug: "do-i-need-extended-warranty-on-laptop",
    title: "Do you need an extended warranty on a laptop?",
    metaDescription:
      "The answer depends on how you use the laptop, not how much it cost. Here's a framework for deciding, plus real repair cost ranges to check your math against.",
    category: "situational",
    dek: "A laptop that never leaves a desk has a very different risk profile than one that rides in a backpack every day. Match the plan to the actual use case.",
    takeaway: "If the plan costs less than one likely repair, it's usually worth buying. If it costs close to a used replacement, it usually isn't.",
    keyStat: "$200–$1,300",
    keyStatLabel: "typical out-of-warranty laptop repair cost range",
    lastUpdated: "July 2026",
    relatedPlans: ["applecare-plus-macbook", "dell-premium-support", "squaretrade"],
    body: [
      {
        heading: "Start with how the laptop actually gets used",
        paragraphs: [
          "A laptop that travels — commuting, coffee shops, being carried between rooms with kids or pets around — has meaningfully higher odds of an accidental damage incident than one that lives permanently on a desk. Extended warranties are, at their core, a bet on that probability.",
          "If you can't remember the last time a laptop in your household was dropped, spilled on, or knocked off a surface, that's useful data. If it happens regularly, the math tilts toward coverage.",
        ],
      },
      {
        heading: "Do the actual repair-cost math",
        paragraphs: [
          "A cracked laptop screen commonly costs $200–$800 to repair depending on the brand and panel type. A logic board or motherboard failure can run $400–$1,000+. Compare those numbers against the plan's total cost over the same period, not just the sticker price of a single year.",
          "If the plan costs less than one likely repair and you assign even modest odds to needing one, it's usually worth buying. If the plan costs close to what a used replacement laptop would run, self-insuring — setting the money aside instead — can make more sense.",
        ],
      },
      {
        heading: "Check what you already have",
        paragraphs: [
          "Many credit cards extend the manufacturer's warranty by an extra year automatically when you use that card to buy the laptop, and some include accidental damage or purchase protection for a limited window after purchase. It costs nothing to check your card's benefits guide before paying for a plan that might duplicate coverage you already have.",
        ],
      },
      {
        heading: "Business vs personal use changes the math",
        paragraphs: [
          "For a laptop that's core to your income — freelance work, remote employment, a small business — downtime costs more than the repair itself. A plan with fast turnaround (like Dell's next-business-day onsite service, or a local Apple Store visit) can be worth paying for even if the pure repair-cost math is a coin flip.",
          "For a personal laptop used for browsing and streaming, a slower repair timeline is a minor inconvenience rather than a real cost, which tilts the decision more toward self-insuring unless the household has a real history of accidents.",
        ],
      },
    ],
  },
  {
    slug: "do-i-need-extended-warranty-on-tv",
    title: "Do you need an extended warranty on a TV?",
    metaDescription:
      "Modern TVs are fairly reliable, but panel repairs are expensive when they do fail. Here's how to decide if a protection plan makes sense for your set.",
    category: "situational",
    dek: "TVs mostly fail for two reasons: manufacturing defects (usually caught within the standard warranty) or accidental damage. Which one you're worried about should drive the decision.",
    takeaway: "A TV panel repair can cost close to a new TV. That changes the math compared to a phone or laptop, where repair is usually the cheaper option.",
    keyStat: "2x",
    keyStatLabel: "how often a TV repair rivals the cost of a new one",
    lastUpdated: "July 2026",
    relatedPlans: ["geek-squad-protection", "walmart-protection-plan"],
    body: [
      {
        heading: "Manufacturer defects vs accidental damage",
        paragraphs: [
          "Most TV manufacturing defects show up within the standard 1-year warranty period, which is already free. An extended plan is mostly protecting against things that happen after that: age-related panel or backlight failure, and accidental damage from drops, impacts, or power surges.",
          "If your household has pets, young kids, or a history of TVs getting knocked over or hit by stray objects, accidental damage coverage has real value. If the TV is wall-mounted in a low-traffic room, that risk drops substantially.",
        ],
      },
      {
        heading: "The repair-vs-replace math",
        paragraphs: [
          "A TV panel repair can, in many cases, cost close to or more than buying a new TV of similar size and generation, since panels are the single most expensive component and prices for new TVs keep falling. This changes the calculation compared to a phone or laptop, where repair is usually much cheaper than replacement.",
          "Because of that, a protection plan on a TV is often more about avoiding a full replacement cost than a comparatively cheap repair — check whether the plan you're considering offers full replacement for major failures, not just parts-and-labor repair.",
        ],
      },
      {
        heading: "Screen technology affects the odds",
        paragraphs: [
          "OLED panels are generally more prone to burn-in over years of static-image use (news tickers, game HUDs left on pause) than LED/LCD panels, though modern OLEDs have mitigations built in. If you own an OLED and use it for gaming or cable news for long stretches, that's a specific risk worth weighing when deciding on coverage.",
          "Very large TVs (75 inches and up) also carry higher shipping and handling risk if a repair requires the panel to be sent out, which is another reason in-home service — standard on most Geek Squad and manufacturer plans for large screens — matters more as screen size increases.",
        ],
      },
    ],
  },
  {
    slug: "how-to-cancel-applecare",
    title: "How to cancel AppleCare+ and get a refund",
    metaDescription:
      "AppleCare+ can be cancelled anytime for a prorated refund of unused coverage. Here's exactly how to do it on iPhone, in Settings, or by contacting Apple.",
    category: "how-to",
    dek: "Cancelling is straightforward, and Apple refunds the unused portion — you're not locked in even if you paid upfront.",
    takeaway: "You can cancel AppleCare+ anytime for a prorated refund — you're never locked into the full term.",
    keyStat: "30 days",
    keyStatLabel: "the window for a full refund after purchase",
    lastUpdated: "July 2026",
    relatedPlans: ["applecare-plus-iphone"],
    body: [
      {
        heading: "Cancel from your device",
        paragraphs: [
          "On iPhone or iPad: open Settings, tap General, then About, and look for AppleCare & Warranty. From there you can view your plan and start the cancellation process.",
          "On Mac: open the Apple menu, go to System Settings, then General, then About, and click Coverage to manage your plan.",
        ],
      },
      {
        heading: "Cancel by contacting Apple directly",
        paragraphs: [
          "If you bought AppleCare+ through a monthly subscription, you can also cancel via Settings under your Apple ID, then Subscriptions. For plans purchased upfront, contacting Apple Support directly (by phone or via the Apple Support app) is the more reliable route.",
        ],
      },
      {
        heading: "What happens to your money",
        paragraphs: [
          "If you paid upfront and cancel within the first 30 days, you're generally eligible for a full refund. After 30 days, Apple prorates the refund based on the unused portion of your coverage term, minus the value of any claims you've already used.",
          "Monthly subscribers simply stop being charged once cancelled — there's no prepaid balance to refund since you're paying as you go.",
        ],
      },
      {
        heading: "When it makes sense to cancel",
        paragraphs: [
          "Selling or trading in the device is the most common reason — canceling first (or transferring coverage as part of the sale) avoids paying for protection on a phone you no longer own.",
          "Switching to AppleCare One is another common trigger: if you're consolidating multiple device plans into the $19.99/month multi-device subscription, you'd cancel the individual AppleCare+ plans first to avoid paying for both.",
          "If you've simply decided the plan isn't worth it after re-running the numbers — no claims filed, careful with the device — canceling partway through the term still gets you a prorated refund rather than losing the remaining value outright.",
        ],
      },
    ],
  },
  {
    slug: "does-credit-card-extend-warranty",
    title: "Does your credit card automatically extend your warranty?",
    metaDescription:
      "Many credit cards add a year to the manufacturer's warranty and include purchase protection against damage or theft, automatically, at no extra cost. Here's how to check yours.",
    category: "situational",
    dek: "Before paying for a protection plan, it's worth five minutes to check whether the card you used to buy the item already covers part of what you're about to pay for.",
    takeaway: "Many cards already add a free year of warranty and 90–120 days of purchase protection. Check before paying for coverage you might already have.",
    keyStat: "+1 year",
    keyStatLabel: "how much some cards extend the manufacturer warranty for free",
    lastUpdated: "July 2026",
    relatedPlans: [],
    body: [
      {
        heading: "What extended warranty benefits typically cover",
        paragraphs: [
          "Many premium credit cards, and some standard ones, include a benefit that doubles the manufacturer's warranty (commonly up to an extra year) on eligible purchases, automatically, as long as you paid for the item with that card. No enrollment is usually required — it's often just a matter of having the receipt and card statement if you ever need to file a claim.",
          "Separately, many cards include purchase protection, which covers accidental damage or theft for a limited window after purchase — commonly 90 to 120 days — regardless of the manufacturer's warranty terms.",
        ],
      },
      {
        heading: "How to actually check what you have",
        paragraphs: [
          "Card benefits vary a lot by issuer and even by specific card tier, and issuers have been trimming these benefits in recent years, so don't assume last year's terms still apply. The most reliable way to check is your card's official guide to benefits, usually available as a PDF on the issuer's website, or by calling the number on the back of the card and asking specifically about extended warranty and purchase protection.",
        ],
      },
      {
        heading: "Why this matters before buying a separate plan",
        paragraphs: [
          "If your card already extends the warranty by a year and includes 90–120 days of purchase protection, a lot of the highest-risk early period of ownership may already be covered for free. That can make a shorter or cheaper third-party plan a better fit than the most expensive option, since you're only really buying protection for the gap your card doesn't cover.",
        ],
      },
      {
        heading: "How to file a claim on card-based coverage",
        paragraphs: [
          "Unlike a manufacturer or third-party warranty, card-based purchase protection and extended warranty benefits usually require you to call the benefits administrator listed in your card's guide — not the retailer or manufacturer — and you'll typically need the original receipt and card statement showing the purchase.",
          "Processing times tend to be slower than a manufacturer plan's, often several weeks rather than same-day, so card-based coverage is a better fit as a backstop than as your primary plan for something you'd need fixed urgently.",
        ],
      },
    ],
  },
  {
    slug: "extended-warranty-worth-it",
    title: "Are extended warranties worth it? The honest, general answer",
    metaDescription:
      "Extended warranties are profitable for sellers because most people never file a claim. That doesn't mean they're always a bad deal — here's how to tell the difference.",
    category: "situational",
    dek: "The general answer is 'usually not, with real exceptions' — and the exceptions are specific enough to check for yourself before deciding either way.",
    takeaway: "Compare the plan's total cost to one likely repair, and be honest about your own track record. That's the whole test.",
    keyStat: "<50%",
    keyStatLabel: "of buyers ever file a claim on an extended warranty",
    lastUpdated: "July 2026",
    relatedPlans: [],
    body: [
      {
        heading: "Why the general advice leans skeptical",
        paragraphs: [
          "Extended warranties are a high-margin product for retailers and manufacturers precisely because most items don't fail within the covered period, and most buyers don't file a claim even when something does go wrong. That's the same math that makes any insurance profitable for the seller — it isn't unique to warranties, and it isn't a reason to avoid them outright, but it's why the default advice skews toward skepticism.",
        ],
      },
      {
        heading: "When the math genuinely favors buying one",
        paragraphs: [
          "The exceptions share a pattern: high repair cost relative to the plan price, a real (not hypothetical) history of damage in your household, or a device you'll keep long enough to outlast the free manufacturer warranty. Foldable phones, premium laptops that travel constantly, and large appliances with expensive service calls are the recurring examples where the numbers hold up.",
        ],
      },
      {
        heading: "A simple test before buying",
        paragraphs: [
          "Look up the actual out-of-warranty repair cost for the specific failure you're worried about, compare it to the plan's total cost over its full term, and be honest about how likely that failure actually is based on your own track record with similar devices. If the plan costs meaningfully less than a single likely repair, it's a reasonable buy. If it costs close to what a replacement item would run, you're often better off self-insuring.",
        ],
      },
      {
        heading: "The self-insurance alternative",
        paragraphs: [
          "Self-insuring simply means setting aside the money you'd have spent on a plan — say, $10–15 a month — into a fund earmarked for repairs, rather than paying a company to hold that risk for you. Over several devices and several years, many people come out ahead this way, since the fund only gets spent when something actually breaks.",
          "The tradeoff is discipline and bad luck: self-insuring only works if you actually keep the money set aside rather than spending it, and it doesn't protect against an unlucky year where two devices break in close succession. Extended warranties exist precisely to smooth out that kind of bad-luck variance — which is a real value even though the expected-cost math often favors skipping them.",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
