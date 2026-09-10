import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { ArrowRightIcon, CalendarIcon, SocialIcon } from "./icons";
import CopyEmail from "./copy-email";

export default function Home() {
  return (
    <div className="content-column home-page">
      <section className="hero" aria-labelledby="profile-heading">
        <div className="hero-row">
          <Image
            src={site.avatar}
            alt={`${site.name} pixel avatar`}
            width={104}
            height={104}
            priority
            className="avatar"
          />
          <div className="hero-copy">
            <h1 id="profile-heading">{site.name}</h1>
            <p className="hero-meta">
              {site.headline} <span className="dot">·</span>{" "}
              <a href={`mailto:${site.email}`}>Email</a>
              <CopyEmail email={site.email} />
            </p>
          </div>
        </div>

        <p className="bio">{site.bio}</p>

        <div className="social-row" aria-label="Social links">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              title={social.label}
              style={{ color: social.color }}
            >
              <SocialIcon name={social.icon} />
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="section-block">
        <h2>Experience</h2>
        <div className="experience-list">
          {site.experience.map((item) => (
            <article
              className="experience-row"
              key={`${item.company}-${item.role}`}
            >
              <div>
                <div className="experience-title-line">
                  <h3>{item.company}</h3>
                  {item.current && (
                    <span className="working-pill">
                      <i />
                      Working
                    </span>
                  )}
                </div>
                <p>{item.role}</p>
              </div>
              <div className="experience-time">
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Link className="outline-button" href="/work">
            Show all work experiences
          </Link>
        </div>
      </section>

      <section className="section-block blog-section">
        <h2>Blog</h2>
        <div className="blog-list">
          {site.blogs.map((post) => (
            <article className="blog-row" key={post.title}>
              <div className="blog-main">
                <h3>
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <div className="blog-date">
                  <CalendarIcon />
                  <span>{post.date}</span>
                </div>
              </div>
              <Link className="read-more" href={post.href}>
                Read more <ArrowRightIcon />
              </Link>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Link className="outline-button" href="/blog">
            Show all blogs
          </Link>
        </div>
      </section>

      <section id="development" className="section-block cards-section">
        <h2>Development</h2>
        <div className="resource-list">
          {site.development.map((card) => (
            <a className="resource-card" key={card.title} href={card.href}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section
        id="personal"
        className="section-block cards-section personal-section"
      >
        <h2>Personal</h2>
        <div className="resource-list">
          {site.personal.map((card) => (
            <a className="resource-card" key={card.title} href={card.href}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </a>
          ))}
        </div>
      </section>

      <blockquote className="quote-card">
        <span className="quote-mark">“</span>
        <p>“{site.quote.text}”</p>
        <cite>– {site.quote.source}</cite>
      </blockquote>
    </div>
  );
}
