"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";
import { resolveIcon } from "@/lib/content";

export default function GalleryPage() {
  const { content, t } = useLocale();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = useMemo(
    () => [
      { id: "all", label: t("galleryFilterAll") },
      ...Array.from(new Set(content.gallery.map((item) => item.category))).map((category) => ({
        id: category,
        label: category
      }))
    ],
    [content.gallery, t]
  );

  const filteredItems = content.gallery.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesQuery = `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <PageHero title={t("galleryTitle")} intro={t("galleryIntro")} />
      <section className="gallery-layout">
        <aside className="gallery-sidebar">
          <label className="gallery-search">
            <span>{t("gallerySearchLabel")}</span>
            <div>
              <Search size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("gallerySearchPlaceholder")}
              />
            </div>
          </label>
          <div className="gallery-filter-group">
            <h2>{t("galleryFiltersTitle")}</h2>
            {categories.map((category) => (
              <button
                className={activeCategory === category.id ? "active" : ""}
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                type="button"
              >
                {category.label}
              </button>
            ))}
          </div>
        </aside>
        <div className="gallery-grid">
          {filteredItems.map((item) => {
            const Icon = resolveIcon(item.icon);
            return (
              <article className="gallery-card reveal" key={`${item.category}-${item.title}`}>
                <div className="gallery-placeholder">
                  <Icon size={36} />
                </div>
                <div>
                  <span>{item.category}</span>
                  <h2>{item.title}</h2>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
