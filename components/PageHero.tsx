type PageHeroProps = {
  title: string;
  intro: string;
  eyebrow?: string;
};

export function PageHero({ title, intro, eyebrow }: PageHeroProps) {
  return (
    <section className="page-hero reveal">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}
