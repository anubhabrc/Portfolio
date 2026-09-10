import Link from "next/link";
import { site } from "@/data/site";
import { SocialIcon } from "./icons";

const nav = [
  ["Home", "/"],
  ["Work", "/work"],
  ["Blog", "/blog"],
  ["Resume", "/resume"],
  //['Projects', '/work'],
  // ['Gears', '/#development'],
  // ['Setup', '/#development'],
  // ['Notes', '/#development'],
  // ['Books', '/#personal'],
  // ['Movies', '/#personal'],
  // ['RSS FEED', '#'],
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <section>
            <p className="footer-label">NAVIGATE</p>
            <div className="footer-nav">
              {nav.map(([label, href]) => (
                <Link key={label} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          </section>
          <section className="footer-connect">
            <p className="footer-label">CONNECT</p>
            <div className="footer-socials">
              {site.socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="social-square"
                  style={{ color: item.color }}
                >
                  <SocialIcon name={item.icon} />
                </a>
              ))}
            </div>
          </section>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
