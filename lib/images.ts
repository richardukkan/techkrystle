// Per-plan image overrides — takes priority over the category default below.
// Local images live in /public/images/plans/
export const PLAN_IMAGES: Record<string, string> = {
  "applecare-plus-iphone": "/images/plans/iphone.jpg",
  "applecare-plus-macbook": "/images/plans/macbook.jpg",
  "applecare-plus-ipad": "/images/plans/ipad.jpg",
  "samsung-care-plus": "/images/plans/samsung-galaxy.jpg",
  "walmart-protection-plan": "/images/plans/walmart.jpg",
  squaretrade: "/images/plans/squaretrade.jpg",
};

export function getPlanImage(slug: string, category: string): string {
  return PLAN_IMAGES[slug] ?? CATEGORY_IMAGES[category];
}

export function getPlanImageSmall(slug: string, category: string): string {
  return PLAN_IMAGES[slug] ?? CATEGORY_IMAGES_SMALL[category];
}

export const CATEGORY_IMAGES: Record<string, string> = {
  phone: "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?auto=format&fit=crop&w=1200&q=70",
  laptop: "https://images.unsplash.com/photo-1602763288580-927cfda37a72?auto=format&fit=crop&w=1200&q=70",
  tablet: "https://images.unsplash.com/photo-1746005514011-ea00280f3b6e?auto=format&fit=crop&w=1200&q=70",
  tv: "https://images.unsplash.com/photo-1738168259543-d0c58e2b91ed?auto=format&fit=crop&w=1200&q=70",
  appliance: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=70",
};

export const CATEGORY_IMAGES_SMALL: Record<string, string> = {
  phone: "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?auto=format&fit=crop&w=400&q=70",
  laptop: "https://images.unsplash.com/photo-1602763288580-927cfda37a72?auto=format&fit=crop&w=400&q=70",
  tablet: "https://images.unsplash.com/photo-1746005514011-ea00280f3b6e?auto=format&fit=crop&w=400&q=70",
  tv: "https://images.unsplash.com/photo-1738168259543-d0c58e2b91ed?auto=format&fit=crop&w=400&q=70",
  appliance: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=400&q=70",
};

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1550041473-d296a3a8a18a?auto=format&fit=crop&w=1600&q=70";
