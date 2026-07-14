export type Verdict = "worth-it" | "skip-it" | "depends";

export interface Plan {
  slug: string;
  brand: string;
  device: string;
  category: "phone" | "laptop" | "tablet" | "tv" | "appliance";
  title: string;
  metaDescription: string;
  verdict: Verdict;
  verdictSummary: string;
  priceRange: string;
  deductible: string;
  enrollmentWindow: string;
  coverageLength: string;
  whatItCovers: string[];
  whatItDoesntCover: string[];
  bestFor: string[];
  skipIfYou: string[];
  repairCostWithout: string;
  costWithoutNumeric: number;
  costWithNumeric: number;
  alternatives: { name: string; slug?: string }[];
  officialUrl: string;
  lastUpdated: string;
  intro: string[];
  body: string[];
  faq: { question: string; answer: string }[];
}

export const plans: Plan[] = [
  {
    slug: "applecare-plus-iphone",
    brand: "Apple",
    device: "iPhone",
    category: "phone",
    title: "Is AppleCare+ for iPhone worth it?",
    metaDescription:
      "AppleCare+ for iPhone costs $9.99–$13.99/month depending on model. Here's the real math on when it pays for itself and when it doesn't.",
    verdict: "depends",
    verdictSummary:
      "Worth it if you've cracked a screen before or keep your phone 2+ years. Skip it if you upgrade yearly and rarely drop your phone.",
    priceRange: "$9.99–$13.99/month, or $119.99–$199.99 upfront for 2 years, depending on iPhone model",
    deductible: "$29 screen or back glass repair, $99 other accidental damage, $149 theft or loss",
    enrollmentWindow: "Within 60 days of buying the iPhone (no window if bought directly with the phone)",
    coverageLength: "2 years from activation, no extensions",
    whatItCovers: [
      "Unlimited accidental damage repairs (subject to the deductible each time)",
      "Battery replacement once health drops below 80%",
      "Theft and loss (standard on iPhone 17 Pro and iPhone Air; add-on on older models where still offered)",
      "24/7 priority technical support with Apple",
    ],
    whatItDoesntCover: [
      "Cosmetic wear that doesn't affect function",
      "More than two out-of-warranty-equivalent repairs before you're paying full price",
      "Loss or theft without Find My enabled at the time of the incident",
    ],
    bestFor: [
      "Anyone who's cracked a screen in the past 2 years",
      "iPhone Pro or Pro Max owners, where an out-of-warranty screen repair runs $329–$379",
      "People who keep the same phone 2+ years instead of upgrading annually",
    ],
    skipIfYou: [
      "Upgrade your iPhone every year through the carrier or Apple's trade-in program",
      "Have a proven track record of never damaging a phone",
      "Already have phone coverage through a credit card or renter's insurance that includes electronics",
    ],
    repairCostWithout: "$279–$379 for an out-of-warranty screen repair on current Pro models, $499+ for back glass and screen together",
    costWithoutNumeric: 329,
    costWithNumeric: 29,
    alternatives: [
      { name: "Asurion (via carrier)", slug: "asurion" },
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
      { name: "Credit card purchase protection", slug: "does-credit-card-extend-warranty" },
    ],
    officialUrl: "https://www.apple.com/support/products/iphone/",
    lastUpdated: "July 2026",
    intro: [
      "AppleCare+ is Apple's paid extension of the standard one-year iPhone warranty. It adds accidental damage coverage, which the free warranty never included, plus battery service and priority support.",
      "The honest answer to whether it's worth it comes down to one number: how many times you're likely to file a claim. One cracked screen on a Pro Max model can cost more to fix out of pocket than two years of AppleCare+ combined.",
    ],
    body: [
      "Apple prices AppleCare+ by model, not as a flat fee. Base iPhones run toward the lower end of the range, Pro and Pro Max models toward the top, since their repair costs are higher. Apple also launched AppleCare One in 2026 — a single $19.99/month subscription that covers up to three Apple devices at once (iPhone, iPad, and Mac, for example), which can undercut buying separate plans if you own multiple Apple products.",
      "The math that actually matters: a screen repair costs $29 with AppleCare+ versus $279–$379 without it on current Pro models. That means a single incident more than pays for a year of coverage. If you've cracked a screen in the past two years, or you know you're rough on phones, the plan usually wins on pure arithmetic.",
      "Where it stops making sense is the person who trades in for a new iPhone every year. You're paying for two years of protection you'll never fully use, and Apple's trade-in program already absorbs a lot of that risk since a damaged trade-in just gets a lower valuation rather than a repair bill.",
      "One thing to check before you buy: some credit cards already extend manufacturer warranties or include purchase protection against damage and theft for the first 90–120 days. If your card does, you may only need AppleCare+ to cover the gap after that, or not at all if you buy carefully and don't drop things.",
      "There's also a household math version of this decision that's easy to miss: if you're insuring two or three iPhones in the same family, AppleCare One's $19.99/month flat rate for up to three devices often beats paying for AppleCare+ on each phone individually, especially once you factor in that a Pro Max plan alone can run close to $14/month on its own. Run the numbers for your specific household before defaulting to per-device plans.",
      "It's worth being honest about theft risk too. AppleCare+ with Theft and Loss requires Find My to have been enabled and working at the time the phone went missing, and it caps you at a limited number of claims per year. If you live somewhere with a real pickpocketing or snatch-theft problem, that coverage carries more weight than the screen-repair math alone suggests.",
    ],
    faq: [
      {
        question: "Can I add AppleCare+ after buying my iPhone?",
        answer:
          "Yes, within 60 days of the original purchase date, and Apple may require a quick device inspection (sometimes just a few diagnostic questions in the Apple Store app) to confirm there's no pre-existing damage.",
      },
      {
        question: "Does AppleCare+ cover a phone that's already scratched or dented?",
        answer:
          "Existing cosmetic damage doesn't disqualify you from buying AppleCare+, but Apple can decline a specific claim if it determines the damage predates coverage. Function-affecting pre-existing damage is the bigger risk factor for enrollment eligibility.",
      },
      {
        question: "What happens to AppleCare+ if I sell my iPhone?",
        answer:
          "AppleCare+ coverage can be transferred to a new owner as part of the sale — Apple's support pages walk through confirming the transfer, which can be a small selling point when listing a used iPhone.",
      },
    ],
  },
  {
    slug: "applecare-plus-macbook",
    brand: "Apple",
    device: "MacBook",
    category: "laptop",
    title: "Is AppleCare+ for MacBook worth it?",
    metaDescription:
      "AppleCare+ for MacBook starts around $3.49/month or $499 for two years on higher-end models. Here's when the math works in your favor.",
    verdict: "worth-it",
    verdictSummary:
      "Usually worth it for MacBooks you plan to keep 2+ years — a single screen or logic board repair can cost more than the whole plan.",
    priceRange: "$3.49–$14.99/month depending on model, or up to $499 for 2 years on Pro models",
    deductible: "$99 for accidental damage",
    enrollmentWindow: "Within 60 days of purchase (up to 1 year in some regions)",
    coverageLength: "3 years from the original purchase date",
    whatItCovers: [
      "Up to two incidents of accidental damage every 12 months",
      "Battery service when health drops below 80%",
      "Hardware repairs for manufacturing defects beyond the standard 1-year warranty",
      "24/7 priority support and software troubleshooting",
    ],
    whatItDoesntCover: [
      "A third accidental damage claim in the same 12-month window",
      "Cosmetic damage that doesn't affect function",
      "Loss or theft (MacBooks aren't covered under Apple's theft and loss program)",
    ],
    bestFor: [
      "Anyone who travels with their laptop regularly (coffee shops, commutes, planes)",
      "Households with kids or pets near the laptop",
      "Owners of higher-end MacBook Pro models, where a screen replacement runs $600+",
    ],
    skipIfYou: [
      "Use the MacBook exclusively at a stationary desk",
      "Have employer-provided device insurance that already covers it",
      "Plan to replace the machine within a year or two regardless of condition",
    ],
    repairCostWithout: "$500–$800 for a screen replacement, up to $1,300+ for logic board or top case replacement",
    costWithoutNumeric: 650,
    costWithNumeric: 99,
    alternatives: [
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
      { name: "Credit card purchase protection", slug: "does-credit-card-extend-warranty" },
    ],
    officialUrl: "https://www.apple.com/support/products/mac/",
    lastUpdated: "July 2026",
    intro: [
      "Unlike phones, laptops don't get replaced every year for most people — a MacBook is often a 3-to-5-year purchase. That changes the math on AppleCare+ considerably in its favor.",
      "The flat $99 accidental damage deductible is the number to anchor on: a cracked screen or spilled coffee that fries the logic board can otherwise run $500–$1,300 in Apple's own repair pricing.",
    ],
    body: [
      "AppleCare+ for Mac covers three years from your original purchase date, not two like the iPhone plan, which better matches how long people actually keep a laptop. Pricing scales with the machine: it starts near $3.49/month on a Mac mini and climbs toward $14.99/month on a high-end MacBook Pro, reflecting how much more expensive those repairs are.",
      "The single biggest argument for buying it is the accidental damage deductible. Apple's own out-of-warranty pricing for a MacBook Pro screen or top case replacement regularly exceeds the entire two-year cost of AppleCare+. If you've ever spilled a drink near a laptop or watched it get knocked off a desk, you already know the risk isn't hypothetical.",
      "Where it's a genuinely close call: a MacBook Air used carefully at a desk, rarely traveling, with a household that has no history of laptop mishaps. In that scenario the expected cost of an incident is low enough that self-insuring (skipping the plan and budgeting for a repair if it happens) can be the more rational choice.",
      "AppleCare One, Apple's 2026 multi-device subscription at $19.99/month for up to three products, is worth comparing if you're also insuring an iPhone or iPad — it can beat buying AppleCare+ separately for each device.",
      "Battery service is a piece of this that people underweight. Once a MacBook's battery health drops below 80%, Apple replaces it under AppleCare+ at no extra charge, where an out-of-warranty battery swap runs $129–$199 depending on the model. For a machine you keep three-plus years, that alone can be worth a meaningful fraction of the plan's total cost.",
      "If you work off a laptop for a living — freelancers, students mid-semester, remote employees — the real cost of a broken MacBook isn't just the repair bill, it's the days without a working machine. AppleCare+ doesn't eliminate that downtime, but Apple's own repair network is typically faster than third-party shops for logic-board-level issues, since parts and diagnostics are standardized.",
    ],
    faq: [
      {
        question: "Does AppleCare+ cover a MacBook that gets stolen?",
        answer:
          "No — unlike iPhone, AppleCare+ for Mac does not include theft and loss coverage. If theft is a real concern, that's typically handled through homeowners, renters, or a separate gadget insurance policy instead.",
      },
      {
        question: "Can I buy AppleCare+ for a MacBook I bought used?",
        answer:
          "Only if the MacBook is still within its original one-year limited warranty period and hasn't already had AppleCare+ purchased and then transferred. Apple support can check eligibility by serial number.",
      },
      {
        question: "Is AppleCare+ worth it on a MacBook Air specifically?",
        answer:
          "It's the closest call of the MacBook lineup — Air repairs are cheaper than Pro repairs, so the deductible savings are smaller in absolute terms. It still tends to make sense if the machine travels a lot or is used around kids or pets.",
      },
    ],
  },
  {
    slug: "applecare-plus-ipad",
    brand: "Apple",
    device: "iPad",
    category: "tablet",
    title: "Is AppleCare+ for iPad worth it?",
    metaDescription:
      "AppleCare+ for iPad starts around $3.49/month. Here's whether it's worth adding, especially for kids' tablets and travel use.",
    verdict: "depends",
    verdictSummary:
      "Worth it for kids' iPads and travel use where drops are common. Skip it for a mostly-at-home iPad with a good case.",
    priceRange: "$3.49–$8.99/month, or $34.99–$99.99/year depending on model",
    deductible: "$49 accidental damage, $29 for Apple Pencil or Apple-branded keyboard",
    enrollmentWindow: "Within 60 days of purchase",
    coverageLength: "2 years from activation",
    whatItCovers: [
      "Two incidents of accidental damage per 12-month period",
      "Battery service below 80% health",
      "Apple Pencil and Apple-branded keyboard accessories",
      "Priority technical support",
    ],
    whatItDoesntCover: [
      "A third damage incident in the same year",
      "Third-party cases, styluses, or keyboards",
      "Loss or theft",
    ],
    bestFor: [
      "Kids' or students' iPads that get handled roughly or shared",
      "Travel and outdoor use where the tablet leaves a protective case regularly",
      "Anyone using an iPad Pro, where screen replacement costs are highest",
    ],
    skipIfYou: [
      "The iPad mostly stays at home in a rugged case and never travels",
      "You're buying a budget iPad where the repair cost is already close to the deductible",
    ],
    repairCostWithout: "$249–$599 for screen repair depending on iPad model",
    costWithoutNumeric: 400,
    costWithNumeric: 49,
    alternatives: [
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
    ],
    officialUrl: "https://www.apple.com/support/products/ipad/",
    lastUpdated: "July 2026",
    intro: [
      "iPads sit in an odd middle ground: cheap enough that some people self-insure, expensive enough (especially the Pro line) that a screen crack really stings.",
      "The deciding factor is usage pattern more than price — an iPad that travels or gets handed to kids behaves very differently, risk-wise, than one that lives on a desk.",
    ],
    body: [
      "AppleCare+ for iPad follows the same two-incidents-per-year structure as the Mac plan, with a lower $49 deductible reflecting the iPad's lower repair costs relative to a MacBook. Apple Pencil and Apple-branded keyboards are covered too, which matters if you've bought into the full iPad Pro accessory ecosystem.",
      "For a standard iPad used at home in a case, the base-model repair cost ($249–$349) is close enough to two years of AppleCare+ that the plan is a coin flip financially — you're mostly paying for peace of mind rather than a clear expected-value win.",
      "For an iPad Pro, or any iPad that travels, gets used outdoors, or is handled by kids, the math shifts clearly toward buying the plan. Pro-model screen repairs run up to $599, and a single incident can cover more than a year of the plan cost.",
      "Classrooms and schools are a specific use case worth calling out. If the iPad is part of a school-issued or shared-device program, ask whether the institution already carries a device protection plan or self-insures at the fleet level — sometimes AppleCare+ duplicates coverage the school already has, and other times it's the parent's responsibility entirely. It's worth a quick email to the school before assuming either way.",
      "One underrated feature: AppleCare+ for iPad covers the Apple Pencil and Apple-branded Smart Keyboard or Magic Keyboard as part of the same plan, at the same $29 accessory deductible. If you've invested in the full iPad Pro accessory setup, that coverage alone can be worth more than it looks on paper, since a replacement Apple Pencil Pro runs about $129 on its own.",
    ],
    faq: [
      {
        question: "Does AppleCare+ cover a cracked iPad Pro screen more than once?",
        answer:
          "Yes, up to two incidents of accidental damage per 12-month period, each subject to the $49 deductible. A third incident in the same year isn't covered under the plan.",
      },
      {
        question: "Is the Apple Pencil covered automatically?",
        answer:
          "Only Apple-branded Pencils and keyboards purchased and used with the covered iPad are eligible, and only under the iPad's own AppleCare+ plan — there's no separate AppleCare+ product just for the Pencil.",
      },
      {
        question: "What if my kid's iPad is used at school and at home?",
        answer:
          "AppleCare+ doesn't distinguish between use cases — it covers accidental damage regardless of where it happens. The main thing to check is whether the school's own device program already provides overlapping coverage.",
      },
    ],
  },
  {
    slug: "samsung-care-plus",
    brand: "Samsung",
    device: "Galaxy phones and tablets",
    category: "phone",
    title: "Is Samsung Care+ worth it?",
    metaDescription:
      "Samsung Care+ runs $3–$18/month depending on device and tier. Here's how the standard and Theft & Loss tiers compare and when each pays off.",
    verdict: "depends",
    verdictSummary:
      "Worth it for foldables and Ultra models, where a single screen repair can exceed $500. Skip it on budget Galaxy devices.",
    priceRange: "$3–$13/month for standard Care+, $8–$18/month for Care+ with Theft and Loss",
    deductible: "$0–$29 screen repair depending on tier, $99–$199 for other claims",
    enrollmentWindow: "Within a set window of activation, typically 30 days — check at time of purchase",
    coverageLength: "Ongoing subscription; cancel anytime",
    whatItCovers: [
      "Unlimited accidental damage from handling (drops, spills, cracked screens)",
      "Unlimited battery repair once capacity falls below 79%",
      "Mechanical and electrical breakdown after the manufacturer warranty ends",
      "Theft and loss on the higher tier (up to 3 claims per 12 months, unavailable in New York)",
    ],
    whatItDoesntCover: [
      "Intentional damage or loss without a police report where required",
      "Cosmetic damage that doesn't affect function",
      "More than 3 theft/loss claims per year on the Theft and Loss tier",
    ],
    bestFor: [
      "Galaxy Z Fold and Z Flip owners — foldable screens are the most expensive repair in the Samsung lineup",
      "Galaxy S Ultra owners who drop or travel with their phone often",
      "Anyone who wants theft coverage, since standard warranties never include it",
    ],
    skipIfYou: [
      "Own a budget or mid-range Galaxy A-series device where repairs are already inexpensive",
      "Have carrier insurance or a credit card benefit that already covers the phone",
    ],
    repairCostWithout: "$500+ for a foldable screen, $200–$379 for an S-series or Ultra screen",
    costWithoutNumeric: 380,
    costWithNumeric: 29,
    alternatives: [
      { name: "Asurion (via carrier)", slug: "asurion" },
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
    ],
    officialUrl: "https://www.samsung.com/us/support/samsung-care-plus/",
    lastUpdated: "July 2026",
    intro: [
      "Samsung Care+ comes in two flavors: a standard accidental-damage plan, and a pricier Theft & Loss tier that also replaces a lost or stolen phone as soon as the next business day.",
      "Where this plan earns its cost fastest is on foldables. A Z Fold or Z Flip screen isn't a simple glass swap — repair estimates regularly run $500 or more, several times the annual cost of Care+.",
    ],
    body: [
      "Samsung's own pricing puts standard Care+ between $3 and $13 a month depending on the device, with a $99–$199 deductible per claim (screen repairs cost $29 on the standard tier). The Theft and Loss tier costs more per month but now includes unlimited free screen and back glass replacements — no $29 charge per incident — which changes the math if you expect to file more than one claim a year.",
      "For a foldable, the case for Care+ is close to open-and-shut: the devices are genuinely more fragile at the hinge and screen, and out-of-warranty repair quotes routinely exceed what two years of coverage would cost.",
      "For a budget Galaxy A-series phone, the opposite is often true — the phone itself may cost less than a year of a premium protection plan, so self-insuring (setting aside the cost of a screen protector and a case, and budgeting for a rare repair) is usually the better bet.",
      "If you're weighing Samsung Care+ against your carrier's insurance (often Asurion-administered), compare the actual per-claim deductible, not just the monthly price — Samsung's own plan is frequently cheaper per month but the two plans structure the theft/loss deductible differently.",
      "Samsung also sells Care+ through its own app and website rather than only at the point of sale, and enrollment windows can vary by device and by whether you bought through Samsung directly, a carrier, or a retailer like Best Buy. If you didn't get a clear answer on the enrollment deadline at checkout, it's worth confirming directly in the Samsung Members app rather than assuming a standard 30-day window applies.",
      "For hinge-specific damage on the Z Fold and Z Flip line — dust ingress, screen creasing, or a hinge that no longer holds its angle — Samsung Care+ treats these as covered mechanical issues rather than cosmetic wear, which matters because these are exactly the failure modes owners report most often once a foldable is a year or two old.",
    ],
    faq: [
      {
        question: "Can I switch from standard Care+ to the Theft and Loss tier later?",
        answer:
          "Generally no — the tier you choose at enrollment is the one you keep for that coverage period. If theft protection matters, it's worth choosing the higher tier upfront rather than planning to upgrade later.",
      },
      {
        question: "Does Samsung Care+ cover water damage?",
        answer:
          "Yes, accidental water and liquid damage is covered as a form of accidental damage under both tiers, subject to the standard deductible.",
      },
      {
        question: "Is Samsung Care+ available on unlocked phones bought directly from Samsung.com?",
        answer:
          "Yes, and in many cases enrollment is offered automatically at checkout when buying directly from Samsung, which is often the most reliable way to make sure you don't miss the enrollment window.",
      },
    ],
  },
  {
    slug: "geek-squad-protection",
    brand: "Best Buy",
    device: "Electronics and appliances (Geek Squad Protection)",
    category: "appliance",
    title: "Is Geek Squad Protection worth it?",
    metaDescription:
      "Best Buy's Geek Squad Protection plans run roughly $130–$230 for 1–3 years on most electronics. Here's when the no-deductible structure pays off.",
    verdict: "depends",
    verdictSummary:
      "Worth it on big-ticket items like TVs and major appliances, where in-home repair is included. Weak value on cheap accessories.",
    priceRange: "$129.99 (1 year), $189.99 (2 years), or $229.99 (3 years) on most laptops/electronics; TV and appliance pricing scales with product price",
    deductible: "No deductible on most standard plans, though mobile phone claims carry a service fee",
    enrollmentWindow: "At time of purchase, or within a return-window-adjacent period afterward",
    coverageLength: "1, 2, or 3 years, layered on top of the manufacturer warranty",
    whatItCovers: [
      "Accidental damage, parts, and labor for hardware issues",
      "In-home repair for TVs 42\" and larger and major appliances",
      "Battery and hard drive replacement on eligible devices",
      "Repairs that begin after the manufacturer's warranty ends, and some gaps during it (like power surge damage)",
    ],
    whatItDoesntCover: [
      "Cosmetic damage that doesn't affect function",
      "Loss or theft",
      "Repeat identical issues beyond the plan's lemon-policy threshold",
    ],
    bestFor: [
      "Large TVs and major appliances, where in-home service avoids costly shipping or technician call-out fees",
      "Shoppers who value having Best Buy/Geek Squad as a single point of contact for support",
      "Anyone comparing against a Totaltech membership ($199.99/year) if they buy several Best Buy products a year",
    ],
    skipIfYou: [
      "Buying a low-cost accessory where the plan cost approaches the item's replacement price",
      "The manufacturer already includes 2+ years of warranty (some TVs and appliances do)",
      "You'd rather compare a per-item Geek Squad plan against a flat-rate multi-device plan like SquareTrade",
    ],
    repairCostWithout: "Varies widely by product; a mid-range laptop repair often runs $150–$400, a TV panel repair can exceed the TV's replacement cost",
    costWithoutNumeric: 275,
    costWithNumeric: 0,
    alternatives: [
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
      { name: "Manufacturer extended warranty" },
    ],
    officialUrl: "https://www.bestbuy.com/site/geek-squad/geek-squad-protection/pcmcat159800050001.c",
    lastUpdated: "July 2026",
    intro: [
      "Geek Squad Protection is Best Buy's in-house extended warranty, sold at checkout on almost everything the store carries — laptops, TVs, appliances, and small electronics alike.",
      "Its biggest practical advantage over manufacturer warranties is in-home service: for TVs 42 inches and larger and for major appliances, a technician comes to you rather than requiring you to ship the item away.",
    ],
    body: [
      "Pricing scales by product category and purchase price rather than a flat fee. For a typical laptop or mid-range electronic, expect $129.99 for one year up to $229.99 for three years. TV and large appliance plans are priced as a percentage of the item's cost, shown at checkout when you add the product to your cart.",
      "The value case is strongest for products where a repair would otherwise be genuinely disruptive or expensive to arrange — a large TV that needs a panel replaced, or a washing machine that needs an in-home technician visit rather than a trip to a repair shop.",
      "For cheaper accessories and lower-cost electronics, the plan cost as a fraction of the item's price gets harder to justify. A $40 protection plan on a $150 item is a much tougher sell than the same plan on a $1,500 TV.",
      "If you shop at Best Buy frequently, it's worth pricing out a Totaltech membership ($199.99/year) against buying individual Geek Squad plans — Totaltech bundles protection with tech support and delivery perks across everything you own, not just what you bought at Best Buy.",
      "One structural difference worth knowing: Geek Squad Protection plans layer on top of, rather than replace, the manufacturer's warranty — so during year one, you're often paying for a plan that mostly duplicates coverage you already have for free, with the real value kicking in once the manufacturer warranty expires. That's worth keeping in mind when comparing the sticker price against what you're actually gaining in year one.",
      "For appliances specifically, the in-home service piece is less about convenience and more about practicality — a washing machine or refrigerator can't be shipped to a repair shop, so any protection plan on a major appliance needs an in-home service component to be useful at all. Confirm that's included before assuming a plan covers your specific appliance the way it covers electronics.",
    ],
    faq: [
      {
        question: "Can I cancel Geek Squad Protection for a refund?",
        answer:
          "Yes, Best Buy generally allows cancellation for a prorated refund of the unused portion, similar to most protection plans — check the receipt or My Best Buy account for the specific cancellation process.",
      },
      {
        question: "Does Geek Squad Protection cover battery degradation on laptops?",
        answer:
          "On eligible plans, battery replacement is covered once capacity drops below a usable threshold, similar to how manufacturer plans handle battery service — confirm this is included for your specific product category at checkout.",
      },
      {
        question: "Is there a limit on how many repairs I can make?",
        answer:
          "Most plans don't cap the number of repairs, but do apply a 'lemon' policy — if the same issue recurs a set number of times without a permanent fix, Best Buy typically replaces the item outright rather than repairing it again.",
      },
    ],
  },
  {
    slug: "dell-premium-support",
    brand: "Dell",
    device: "Dell laptops and desktops",
    category: "laptop",
    title: "Is Dell Premium Support worth it?",
    metaDescription:
      "Dell Premium Support and Premium Support Plus start around $4.99/month. Here's when the accidental damage coverage and priority repairs earn their cost.",
    verdict: "depends",
    verdictSummary:
      "Worth it for business-critical laptops or anyone who can't tolerate downtime. Weaker value on a budget home PC with light use.",
    priceRange: "Starting around $4.99/month, or bundled at $50–$300+ upfront depending on the plan tier and system value",
    deductible: "Varies by plan tier; Premium Support Plus includes accidental damage coverage for drops, spills, and surges",
    enrollmentWindow: "At time of purchase, or added later while still under standard warranty",
    coverageLength: "Length of the support term purchased (commonly 1–4 years), or month-to-month subscription",
    whatItCovers: [
      "24/7 priority technical support with direct access to Dell experts",
      "Next-business-day onsite repair after remote diagnosis (availability varies)",
      "Automated issue detection via SupportAssist",
      "Accidental damage from drops, spills, and electrical surges (Premium Support Plus only)",
    ],
    whatItDoesntCover: [
      "Software issues unrelated to the covered hardware, in some cases",
      "Cosmetic damage that doesn't affect function",
      "Systems running Linux/Ubuntu on certain plan tiers (Premium Support Plus is not sold on these configurations)",
    ],
    bestFor: [
      "Business users who lose money for every hour their machine is down",
      "Owners of expensive or hard-to-replace-quickly systems",
      "Frequent travelers who need onsite or expedited repair wherever they are",
    ],
    skipIfYou: [
      "Use the PC for light, low-stakes home tasks and can tolerate a repair delay",
      "Bought a lower-cost system where a full replacement isn't far off the support plan's cost",
    ],
    repairCostWithout: "Standard Dell out-of-warranty repairs commonly run $150–$400+ depending on the component",
    costWithoutNumeric: 275,
    costWithNumeric: 0,
    alternatives: [
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
      { name: "Manufacturer standard warranty" },
    ],
    officialUrl: "https://www.dell.com/en-us/lp/Premium-Support-Deals",
    lastUpdated: "July 2026",
    intro: [
      "Dell splits its extended coverage into tiers — Premium Support adds priority technical help and faster repair paths, while Premium Support Plus layers in accidental damage coverage on top.",
      "The clearest signal for whether it's worth it isn't the device price, it's how much downtime actually costs you if the machine breaks.",
    ],
    body: [
      "Dell's monthly subscription support starts around $4.99, with no long-term commitment, and can be cancelled at any time from the Dell Digital Locker. Multi-year upfront plans are also available, generally priced against the value and specification of the system, with three-year Premium Support Plus plans commonly landing in the low hundreds of dollars for mainstream laptops.",
      "For business use, the case is strong: next-business-day onsite repair after remote diagnosis means a broken laptop is rarely more than a day away from being fixed, which matters far more than the plan's sticker price for anyone whose income depends on the machine.",
      "For a home PC used for browsing, schoolwork, or light productivity, the calculation is softer. Dell's standard one-year hardware warranty already covers manufacturing defects, and if the household has no history of spills or drops near the laptop, the accidental damage piece of Premium Support Plus may go unused.",
      "User reviews of Dell's support are genuinely mixed — some report fast, satisfying repairs, others report frustrating phone queues. It's worth checking recent reviews for your specific region before buying, since experience seems to vary by support center and season.",
      "SupportAssist, Dell's built-in diagnostic software, is a quieter benefit that's easy to overlook when comparing plans. It proactively flags failing components — a hard drive nearing end-of-life, a battery losing capacity — before they cause a hard failure, which means some repairs under Premium Support happen before you'd have even noticed a problem manually.",
      "For gaming or workstation-class Dell systems (Alienware, Precision), the accidental damage coverage under Premium Support Plus is worth scrutinizing closely, since those machines carry the highest repair costs in Dell's lineup and the plan's flat monthly price looks proportionally better the more expensive the hardware.",
    ],
    faq: [
      {
        question: "Can I buy Dell Premium Support after my computer's standard warranty has started?",
        answer:
          "Yes, in most cases you can upgrade coverage while still within the original warranty period, through Dell's Digital Locker or by contacting support directly.",
      },
      {
        question: "Does Premium Support include software troubleshooting?",
        answer:
          "Yes, priority technical support covers software issues on top of hardware repairs, which is one of the differentiators versus a pure accidental-damage warranty like SquareTrade.",
      },
      {
        question: "Is onsite repair available outside the US?",
        answer:
          "Availability varies significantly by country and region — next-business-day onsite service is strongest in major markets and less consistent elsewhere, so it's worth checking coverage specifics for your location before relying on it.",
      },
    ],
  },
  {
    slug: "asurion",
    brand: "Asurion",
    device: "Phones and home tech",
    category: "phone",
    title: "Is Asurion worth it?",
    metaDescription:
      "Asurion, the company behind most carrier phone insurance, charges $12–$50+/month with $29–$275 deductibles. Here's when it beats the alternatives.",
    verdict: "depends",
    verdictSummary:
      "Worth it if you want same-day repairs through uBreakiFix and don't mind a higher deductible. Often beaten on price by AppleCare+ or Samsung Care+ if your phone is a current model.",
    priceRange: "$12–$15/month for a single phone through carrier plans, up to $45+/month for multi-device coverage; $24.99/month flat for unlimited home tech",
    deductible: "$29–$275 depending on device value and claim type",
    enrollmentWindow: "Typically within 30–60 days of activating a new phone with your carrier",
    coverageLength: "Ongoing monthly subscription tied to your carrier account",
    whatItCovers: [
      "Cracked screens and physical damage",
      "Mechanical and electrical failure after the manufacturer warranty",
      "Loss and theft (on applicable plans)",
      "Same-day repair or replacement in many markets via uBreakiFix by Asurion",
    ],
    whatItDoesntCover: [
      "Cosmetic wear and tear",
      "Devices reported lost or stolen with obviously false claims",
      "Unlimited claims — most plans cap the number of claims per 12-month period",
    ],
    bestFor: [
      "Carrier customers who want phone insurance bundled onto one bill",
      "Anyone who values a same-day physical repair option in their area",
      "Multi-device households comparing Asurion's Home+ plan against buying separate device-specific plans",
    ],
    skipIfYou: [
      "Own a current iPhone or Galaxy, where the manufacturer's own plan often has a lower deductible for the same coverage",
      "Rarely file claims and have gone years without needing a repair",
    ],
    repairCostWithout: "Varies by device; flagship phone screen repairs commonly run $200–$400 out of pocket",
    costWithoutNumeric: 300,
    costWithNumeric: 99,
    alternatives: [
      { name: "AppleCare+", slug: "applecare-plus-iphone" },
      { name: "Samsung Care+", slug: "samsung-care-plus" },
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
    ],
    officialUrl: "https://www.asurion.com/",
    lastUpdated: "July 2026",
    intro: [
      "Asurion is the company behind most major US carriers' phone insurance — when you see 'Verizon Mobile Protect' or 'AT&T Protect Advantage,' Asurion is usually the underwriter and claims handler behind the scenes.",
      "Its main edge is repair logistics: through the uBreakiFix by Asurion network, many claims get resolved same-day in person rather than by mail-in repair.",
    ],
    body: [
      "Pricing runs higher than manufacturer-specific plans in many cases — carrier plans through Asurion commonly land at $12–$15/month for a single phone, with deductibles ranging from $29 for minor screen damage up to $275 for full device replacement or high-value theft claims. Asurion's Home+ plan takes a different approach: $24.99/month covers an unlimited number of home electronics and appliances, which can be a good value for a household with a lot of aging gadgets.",
      "Where Asurion tends to lose the price comparison is against manufacturer-specific plans on current-generation phones. If you own a recent iPhone or Galaxy flagship, AppleCare+ or Samsung Care+ frequently offer a lower deductible for a similar or lower monthly cost, since those plans are subsidized by the manufacturer's own repair infrastructure.",
      "Where Asurion tends to win is flexibility and coverage breadth — it covers phones from any manufacturer under one carrier bill, and the Home+ plan extends to devices that don't have their own manufacturer protection plan at all, like older TVs, gaming consoles, or smart home gear.",
      "If you're comparing Asurion against a manufacturer plan for the same phone, put the actual deductible next to the actual monthly cost for a full year — the carrier convenience is real, but it isn't free.",
      "Same-day repair through uBreakiFix is Asurion's strongest practical advantage, but it depends entirely on having a location nearby. Before enrolling, it's worth checking uBreakiFix's store locator for your zip code — in dense urban areas the same-day promise usually holds, in smaller towns you may end up on the same mail-in timeline as any other plan.",
      "Asurion Home+ deserves a closer look for households with a mix of older, unprotected electronics — a five-year-old TV, a gaming console, a smart speaker system. Since none of those typically have a manufacturer plan still active, the $24.99/month unlimited-device structure can end up covering more total value than insuring a single new phone would.",
    ],
    faq: [
      {
        question: "How many claims can I file per year with Asurion?",
        answer:
          "Most carrier plans cap claims at a set number per 12-month period (commonly two or three), after which further claims aren't covered until the period resets. Check your specific plan's claim limit before assuming it's unlimited.",
      },
      {
        question: "Does Asurion use genuine manufacturer parts?",
        answer:
          "It varies by device and repair type — some repairs use OEM parts, others use high-quality third-party equivalents. If genuine parts matter to you specifically, a manufacturer plan like AppleCare+ guarantees them in a way Asurion doesn't always.",
      },
      {
        question: "Can I keep Asurion Home+ if I switch carriers?",
        answer:
          "Asurion Home+ is typically sold independent of a specific carrier relationship, but confirm current enrollment terms directly, since bundled promotional pricing can be tied to a specific carrier account.",
      },
    ],
  },
  {
    slug: "squaretrade",
    brand: "Allstate (SquareTrade)",
    device: "Phones, laptops, TVs, and appliances",
    category: "phone",
    title: "Is SquareTrade (Allstate) worth it?",
    metaDescription:
      "SquareTrade, now part of Allstate, sells flat-fee protection plans from about $129 for two years on phones. Here's how it compares to manufacturer plans.",
    verdict: "worth-it",
    verdictSummary:
      "Generally a strong value for the price — flat upfront cost, no monthly billing to forget about, and coverage that works across brands.",
    priceRange: "Around $129 for a 2-year phone plan, $30 more for 3 years; laptop and appliance pricing scales with item value",
    deductible: "Commonly $99–$149 per claim on mobile plans; varies by product category",
    enrollmentWindow: "Typically within 30 days of purchase, though some retailers allow enrollment any time via app-based diagnostics",
    coverageLength: "Fixed term purchased upfront (commonly 2 or 3 years), with an optional low-cost annual renewal after that",
    whatItCovers: [
      "Accidental damage from drops, spills, and cracks",
      "Mechanical and electrical failure",
      "Cross-brand coverage — one plan structure works whether you own an iPhone, a Samsung, or a Dell",
    ],
    whatItDoesntCover: [
      "Loss or theft on most standard plans (this is a common point of confusion — check before assuming you're covered)",
      "Pre-existing damage present before the plan was purchased",
    ],
    bestFor: [
      "Anyone who prefers paying once upfront over a recurring monthly charge",
      "Households with mixed-brand devices who want one consistent plan structure",
      "Buyers comparing against a carrier or manufacturer plan primarily on flat cost",
    ],
    skipIfYou: [
      "Specifically need theft and loss coverage, which most SquareTrade plans exclude",
      "Already have a manufacturer plan with a lower deductible for the same device",
    ],
    repairCostWithout: "Varies by device category; the flat plan price is usually well below a single major out-of-warranty repair",
    costWithoutNumeric: 300,
    costWithNumeric: 124,
    alternatives: [
      { name: "AppleCare+", slug: "applecare-plus-iphone" },
      { name: "Asurion", slug: "asurion" },
    ],
    officialUrl: "https://www.squaretrade.com/",
    lastUpdated: "July 2026",
    intro: [
      "SquareTrade was acquired by Allstate in 2017, and the plans are now often labeled 'Allstate Protection Plans' depending on where you buy them — Amazon, Costco, and other retailers each sell slightly different versions.",
      "Its core appeal is simplicity: pay once upfront for a fixed term, with no monthly billing to track or accidentally forget to cancel.",
    ],
    body: [
      "A typical 2-year phone plan runs around $129, with a 3-year option about $30 more — well below what many carrier or manufacturer plans cost over the same period when you add up monthly payments. The deductible on most mobile plans is $99–$149 per claim, higher than AppleCare+'s $29 screen fee, but the flat upfront price often still wins out for people who rarely file claims.",
      "The most common point of confusion with SquareTrade/Allstate plans is theft and loss — most of these plans only cover accidental damage and mechanical failure, not a lost or stolen device. If theft protection matters to you, check the specific plan terms carefully or look at AppleCare+, Samsung Care+, or a carrier plan instead.",
      "For laptops, TVs, and appliances, SquareTrade plans scale with the item's purchase price and are frequently offered as an add-on at checkout on Amazon and other retailers. They're a reasonable default when you want protection but don't want to manage a manufacturer-specific plan or a monthly subscription.",
      "Because SquareTrade covers any brand under one consistent plan design, it's a natural fit for households with a mix of Apple, Samsung, and other devices who'd rather learn one plan's rules than juggle several manufacturer-specific ones.",
      "Claims filing is handled through SquareTrade's own app or website rather than in person, which is a meaningfully different experience from Asurion's uBreakiFix network or an AppleCare+ Genius Bar appointment. For many claims — a cracked screen, a spilled drink — this mail-in or ship-to-repair process is fine, but if you specifically want same-day, in-person repair, that's a point in Asurion's favor instead.",
      "One thing that's easy to miss when shopping around: SquareTrade plans sold through Amazon, Costco, and other retailers aren't always identical to the plans sold directly on squaretrade.com — deductibles, coverage length, and even underwriting can differ slightly by retail channel. It's worth reading the specific plan documents at the point of purchase rather than assuming all SquareTrade plans are the same.",
    ],
    faq: [
      {
        question: "Does SquareTrade cover pre-owned or refurbished devices?",
        answer:
          "Yes, in most cases, as long as the device is in working condition at the time of purchase and enrollment happens within the plan's window — this makes SquareTrade a common choice for protecting refurbished electronics.",
      },
      {
        question: "How do I file a SquareTrade claim?",
        answer:
          "Claims are filed through the SquareTrade website or app, where you describe the issue and, for many mobile claims, can get a repair or replacement shipped without visiting a store.",
      },
      {
        question: "Can I add theft coverage to a SquareTrade plan?",
        answer:
          "Generally no — most SquareTrade/Allstate plans don't offer a theft and loss add-on. If you need that coverage, a manufacturer plan or carrier insurance is usually the better fit.",
      },
    ],
  },
  {
    slug: "walmart-protection-plan",
    brand: "Walmart (Allstate)",
    device: "Electronics and appliances bought at Walmart",
    category: "appliance",
    title: "Is the Walmart Protection Plan worth it?",
    metaDescription:
      "Walmart's Protection Plans, underwritten by Allstate, add 1–3 years of accidental damage coverage at checkout. Here's when they're worth the add-on price.",
    verdict: "depends",
    verdictSummary:
      "Worth it on higher-priced electronics and appliances bought at Walmart, where the flat add-on cost is small relative to the item. Skip it on inexpensive items.",
    priceRange: "Typically $5–$60 depending on item price and plan length, added at checkout",
    deductible: "No deductible on most standard Walmart Protection Plans",
    enrollmentWindow: "At time of purchase, in-store or online",
    coverageLength: "1, 2, or 3 years, starting after the manufacturer's warranty ends",
    whatItCovers: [
      "Mechanical and electrical failure after the manufacturer warranty",
      "Accidental damage from handling on plans that include it (check the specific plan, as coverage varies by product category)",
      "Replacement or repair with no deductible on most plans",
    ],
    whatItDoesntCover: [
      "Loss or theft",
      "Cosmetic damage that doesn't affect function",
      "Pre-existing issues present before purchase",
    ],
    bestFor: [
      "Mid-to-high-value electronics and appliances where the no-deductible structure is attractive",
      "Shoppers who want protection without shopping around separately for a third-party plan",
    ],
    skipIfYou: [
      "Buying a low-cost item where the plan price is disproportionate to the item's value",
      "Already comparing SquareTrade or a manufacturer plan with better terms for the same item",
    ],
    repairCostWithout: "Varies significantly by product category — check the specific appliance or electronics repair cost before deciding",
    costWithoutNumeric: 250,
    costWithNumeric: 0,
    alternatives: [
      { name: "SquareTrade / Allstate", slug: "squaretrade" },
      { name: "Manufacturer extended warranty" },
    ],
    officialUrl: "https://www.walmart.com/cp/protection-plans/1096423",
    lastUpdated: "July 2026",
    intro: [
      "Walmart's Protection Plans are underwritten by Allstate and sold as an add-on at checkout, both online and in-store, on most electronics and appliances above a certain price.",
      "The no-deductible structure on most plans is the headline feature — repairs and replacements typically don't require an out-of-pocket payment beyond the plan cost itself.",
    ],
    body: [
      "Pricing scales with the item and plan length, generally landing between $5 and $60 for consumer electronics and mid-range appliances. Because there's usually no deductible, the plan's total cost is the total cost — there's no surprise bill if you do need to file a claim, which is a meaningful difference from plans like Asurion or SquareTrade that charge per incident.",
      "The plan is easiest to justify on higher-priced items, where the add-on cost is a small percentage of the purchase price and a single repair would otherwise be expensive. On lower-cost items, the plan price can start to look disproportionate to what you're actually protecting.",
      "As with most retailer-branded plans, it's worth reading exactly what's covered for your specific product category before buying — accidental damage coverage isn't universal across every plan Walmart sells, and appliance plans in particular sometimes differ from electronics plans in what counts as a covered failure.",
      "Because Allstate underwrites both Walmart's and SquareTrade's protection plans, the underlying claims process and network are often similar even though the branding differs at checkout — worth knowing if you're comparing the two and finding the fine print reads almost identically.",
      "For big-box appliance purchases specifically, ask about service turnaround before buying — some plans route through third-party regional repair networks, and turnaround time for an in-home appliance technician can range from a couple of days to over a week depending on where you live.",
    ],
    faq: [
      {
        question: "Can I buy a Walmart Protection Plan after the item's return window has closed?",
        answer:
          "In most cases, yes — Walmart Protection Plans can typically be added within a set window after purchase, separate from the standard product return period, though the exact window varies by product category.",
      },
      {
        question: "Does the plan cover items bought online and shipped to home?",
        answer:
          "Yes, Walmart Protection Plans are available at checkout for online purchases in addition to in-store ones, and the coverage terms are the same regardless of purchase channel.",
      },
      {
        question: "What happens if Walmart can't repair my item?",
        answer:
          "If a covered item can't be repaired, most plans provide a replacement or reimbursement instead — check the specific plan's replacement policy, since the process can differ between electronics and appliances.",
      },
    ],
  },
  {
    slug: "verizon-mobile-protect",
    brand: "Verizon",
    device: "Verizon phones and tablets",
    category: "phone",
    title: "Is Verizon Mobile Protect worth it?",
    metaDescription:
      "Verizon Mobile Protect bundles Asurion-backed device protection with cloud backup and tech support for around $17–$19/month. Here's the real value breakdown.",
    verdict: "depends",
    verdictSummary:
      "Worth it if you value having device protection, cloud backup, and tech support bundled on your phone bill. Often pricier over time than a standalone manufacturer plan.",
    priceRange: "Around $17–$19/month for a single line, with multi-line discounts available",
    deductible: "$29–$249 depending on device value and claim type",
    enrollmentWindow: "At the time of activating a new line or device, or during open enrollment periods",
    coverageLength: "Ongoing monthly subscription tied to your Verizon account",
    whatItCovers: [
      "Cracked screen repair, often same-day via uBreakiFix by Asurion",
      "Loss, theft, and mechanical/electrical failure",
      "Cloud backup for photos and contacts",
      "Unlimited tech support for your connected devices",
    ],
    whatItDoesntCover: [
      "Cosmetic wear and tear",
      "Unlimited claims — plans cap claims per 12-month period",
      "Devices not registered on the covered line",
    ],
    bestFor: [
      "Verizon customers who want device protection, backup, and support bundled on one bill",
      "Households insuring multiple lines, where multi-line pricing improves the value",
    ],
    skipIfYou: [
      "Own a current iPhone or Galaxy already covered by a cheaper, lower-deductible manufacturer plan",
      "Don't need the cloud backup or tech support features and just want damage coverage",
    ],
    repairCostWithout: "Flagship phone screen repairs typically run $200–$400 out of pocket",
    costWithoutNumeric: 300,
    costWithNumeric: 79,
    alternatives: [
      { name: "AppleCare+", slug: "applecare-plus-iphone" },
      { name: "Samsung Care+", slug: "samsung-care-plus" },
      { name: "Asurion", slug: "asurion" },
    ],
    officialUrl: "https://www.verizon.com/support/verizon-protect-faqs/",
    lastUpdated: "July 2026",
    intro: [
      "Verizon Mobile Protect is Verizon's bundled device protection plan, built on Asurion's claims and repair network but packaged with extras like cloud backup and general tech support.",
      "The bundling is the main value proposition here — you're not just buying damage coverage, you're buying a support subscription that happens to include it.",
    ],
    body: [
      "At roughly $17–$19/month per line, Verizon Mobile Protect costs more over a year than most manufacturer-specific plans for a comparable phone. What you get in exchange is broader support: unlimited tech support calls, cloud backup for photos and contacts, and the same uBreakiFix repair network Asurion uses for its carrier plans elsewhere.",
      "For a household insuring several lines, the per-line discount narrows the price gap against buying individual manufacturer plans, and having one bill and one claims process for every phone on the account has real convenience value.",
      "If you already back up your phone another way (iCloud, Google Photos) and don't need the extra tech support, you're effectively paying for features you won't use, and a manufacturer-specific plan on a current iPhone or Galaxy will usually beat it on pure device-protection cost.",
      "The multi-line discount is worth actually calculating rather than assuming — Verizon prices Mobile Protect per line, and the per-line rate drops as you add more covered lines to the same account. For a family of four phones, the effective monthly cost per device can end up closer to a mid-tier manufacturer plan than the sticker price for a single line suggests.",
      "Verizon Mobile Protect also bundles in a tech support tier that covers help with any device connected to your home network, not just the enrolled phone — router troubleshooting, smart home device setup, that kind of thing. It's a soft benefit that doesn't show up in a pure cost-of-repair comparison but is worth factoring in if you'd otherwise pay for a separate tech support service.",
    ],
    faq: [
      {
        question: "Can I enroll in Verizon Mobile Protect after buying my phone?",
        answer:
          "There's typically an enrollment window after activating a new line or device, and open enrollment periods happen periodically for existing lines — check your My Verizon account for current eligibility.",
      },
      {
        question: "Does Verizon Mobile Protect cover tablets and smartwatches?",
        answer:
          "Yes, in most cases the plan can be applied to eligible tablets and connected wearables on your account, each enrolled and billed as its own covered line.",
      },
      {
        question: "What's the difference between Mobile Protect and Mobile Protect Multi-Device?",
        answer:
          "The multi-device version extends protection to additional eligible devices under one plan and price, which can be more efficient than enrolling several devices individually — worth comparing the total cost both ways for your specific device count.",
      },
    ],
  },
];

export function getPlanBySlug(slug: string): Plan | undefined {
  return plans.find((p) => p.slug === slug);
}

export function getAllPlanSlugs(): string[] {
  return plans.map((p) => p.slug);
}
