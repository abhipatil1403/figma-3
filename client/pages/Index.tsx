import { useState } from "react";
import { Menu, X, Home, CircleHelp, Tag, Contact, Info, BriefcaseBusiness, Settings, Search } from "lucide-react";

const BLUE = "#4356d6";
const navItems = [
  { label: "Home", icon: Home },
  { label: "About Us", icon: Info },
  { label: "Our Services", icon: BriefcaseBusiness },
  { label: "Pricing", icon: Tag },
  { label: "FAQ", icon: CircleHelp },
  { label: "Contact", icon: Contact },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? "scale-[.76] origin-left" : ""} width="159" height="58" viewBox="0 0 159 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.8826 42.3953L35.7463 39.9898L31.3586 34.7666L28.4949 37.1723L32.8826 42.3953Z" fill="url(#paint0_linear_41_3977)"/>
      <path d="M44.5318 53.2261C45.9697 52.0181 46.1116 49.8557 44.8436 48.4705L35.0912 38.3467L31.3792 41.4649L39.7941 52.7125C40.9393 54.2004 43.094 54.4341 44.5318 53.2261Z" fill="url(#paint1_linear_41_3977)"/>
      <path d="M38.2098 25.996C37.5535 30.4937 35.3131 34.7749 31.5673 37.9216C23.4563 44.7347 11.3153 43.6788 4.50235 35.5682C1.20216 31.6391 -0.370474 26.6599 0.0739241 21.5481C0.519281 16.4271 2.92732 11.803 6.85556 8.50324C10.7843 5.20252 15.7634 3.62963 20.8752 4.07427C25.9872 4.51915 30.6201 6.92771 33.9205 10.8565C37.5868 15.2213 38.9746 20.7548 38.2098 25.996ZM4.12523 20.9902C4.0819 21.2878 4.04693 21.5885 4.0206 21.8912C3.66766 25.9495 4.9161 29.9013 7.53604 33.0202C10.1557 36.139 13.833 38.0509 17.8908 38.4036C21.9486 38.7566 25.9008 37.5084 29.0197 34.8881C35.4575 29.4801 36.2946 19.8425 30.8873 13.4046C28.2676 10.2859 24.5901 8.37346 20.5321 8.02076C16.4743 7.66806 12.5224 8.91676 9.40366 11.5367C6.51747 13.9611 4.66493 17.2915 4.12523 20.9902Z" fill="#4356D6"/>
      <path d="M11.5092 21.0352V34.8743C13.4249 36.0001 15.6512 36.6924 18.0241 36.8703C18.2489 36.887 18.4733 36.899 18.6971 36.9064V21.0352H11.5092Z" fill="url(#paint2_linear_41_3977)"/>
      <path d="M19.902 16.2027V36.8994C22.487 36.7916 24.9632 36.058 27.0899 34.7647V16.2027H19.902Z" fill="#4356D6"/>
      <path d="M28.0265 33.7056C33.8123 28.8451 34.5646 20.1837 29.705 14.3976C29.1763 13.7681 28.5971 13.1963 27.9793 12.6799V33.7431C27.9949 33.7305 28.0112 33.7187 28.0265 33.7056Z" fill="url(#paint3_linear_41_3977)"/>
      <path d="M5.59763 24.7749C5.89621 27.4277 6.96195 29.9361 8.71847 32.0269C9.24452 32.653 9.82037 33.2219 10.4345 33.7362V24.7749H5.59763Z" fill="url(#paint4_linear_41_3977)"/>
      <text fill="black" style={{ whiteSpace: "pre" }} xmlSpace="preserve" fontFamily="Roboto" fontSize="43" fontWeight="bold" letterSpacing="0em"><tspan x="61.7095" y="43.6973">Logo</tspan></text>
      <defs>
        <linearGradient id="paint0_linear_41_3977" x1="32.4281" y1="22.2322" x2="31.9598" y2="47.132" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2945A8"/><stop offset="0.1945" stopColor="#25409B"/><stop offset="0.5538" stopColor="#1B3179"/><stop offset="0.9534" stopColor="#0D1E4C"/>
        </linearGradient>
        <linearGradient id="paint1_linear_41_3977" x1="38.5618" y1="46.2369" x2="33.5818" y2="64.6761" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2945A8"/><stop offset="0.1945" stopColor="#25409B"/><stop offset="0.5538" stopColor="#1B3179"/><stop offset="0.9534" stopColor="#0D1E4C"/>
        </linearGradient>
        <linearGradient id="paint2_linear_41_3977" x1="14.3999" y1="11.4286" x2="16.2364" y2="54.5857" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2945A8"/><stop offset="0.1945" stopColor="#25409B"/><stop offset="0.5538" stopColor="#1B3179"/><stop offset="0.9534" stopColor="#0D1E4C"/>
        </linearGradient>
        <linearGradient id="paint3_linear_41_3977" x1="29.5136" y1="6.44645" x2="31.6379" y2="56.3679" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2945A8"/><stop offset="0.1945" stopColor="#25409B"/><stop offset="0.5538" stopColor="#1B3179"/><stop offset="0.9534" stopColor="#0D1E4C"/>
        </linearGradient>
        <linearGradient id="paint4_linear_41_3977" x1="7.38695" y1="9.99101" x2="9.33334" y2="55.7311" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2945A8"/><stop offset="0.1945" stopColor="#25409B"/><stop offset="0.5538" stopColor="#1B3179"/><stop offset="0.9534" stopColor="#0D1E4C"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="site-header">
      <Logo />
      <nav className="desktop-nav">
        {navItems.map(({ label }, index) => <a key={label} className={index === 0 ? "active" : ""} href={index === 0 ? "#home" : `#${label.toLowerCase().replace(/ /g, "-")}`}>{label}</a>)}
      </nav>
      <button className="contact-button header-contact" type="button">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4941 16.6938L16.9881 16.2031L15.8409 15.0504L15.349 15.5412L16.4941 16.6938ZM18.6445 15.9973L20.7148 17.1228L21.4894 15.695L19.4202 14.5705L18.6445 15.9973ZM21.1124 19.3588L19.574 20.8896L20.7191 22.0412L22.2574 20.5115L21.1124 19.3588ZM18.6359 21.3814C17.065 21.5288 13.0025 21.3977 8.60202 17.0232L7.45586 18.1748C12.2572 22.949 16.8278 23.183 18.7875 22.9999L18.6359 21.3814ZM8.60202 17.0232C4.40844 12.8523 3.71294 9.34559 3.62627 7.82351L2.00344 7.91559C2.11177 9.83093 2.97302 13.7179 7.45586 18.1748L8.60202 17.0232ZM10.0916 10.3282L10.4025 10.0183L9.25852 8.86676L8.94761 9.17551L10.0916 10.3282ZM10.6495 6.08043L9.28452 4.25609L7.98344 5.23109L9.34844 7.05434L10.6495 6.08043ZM4.6901 3.85851L2.98927 5.54851L4.13544 6.70118L5.83519 5.01118L4.6901 3.85851ZM9.51961 9.75184C8.94544 9.17551 8.94544 9.17551 8.94544 9.17768H8.94327L8.94002 9.18201C8.88854 9.23392 8.84244 9.2909 8.80244 9.35209C8.74394 9.43876 8.68002 9.55251 8.62585 9.69659C8.49399 10.0685 8.46113 10.4684 8.53052 10.8568C8.67569 11.7939 9.32136 13.0322 10.9745 14.6767L12.1207 13.524C10.5726 11.9857 10.2043 11.0497 10.136 10.6077C10.1035 10.3975 10.1371 10.2935 10.1469 10.2697C10.1534 10.2552 10.1534 10.2531 10.1469 10.2632C10.1372 10.2781 10.1263 10.2923 10.1144 10.3054L10.1035 10.3163L10.0927 10.326L9.51961 9.75184ZM10.9745 14.6767C12.6288 16.3212 13.8735 16.9625 14.8117 17.1055C15.2916 17.1792 15.6784 17.1207 15.9719 17.0113C16.1364 16.9511 16.29 16.8648 16.4269 16.7556L16.4811 16.7068L16.4887 16.7003L16.4919 16.6971L16.493 16.6949C16.493 16.6949 16.4941 16.6938 15.921 16.1175C15.3469 15.5412 15.3501 15.5401 15.3501 15.5401L15.3523 15.5379L15.3544 15.5358L15.3609 15.5303L15.3718 15.5195L15.4129 15.487C15.423 15.4805 15.4205 15.4812 15.4054 15.4892C15.3783 15.4989 15.2721 15.5325 15.0587 15.5C14.6102 15.4307 13.6677 15.0623 12.1207 13.524L10.9745 14.6767ZM9.28452 4.25501C8.17952 2.78168 6.00852 2.54768 4.6901 3.85851L5.83519 5.01118C6.41152 4.43809 7.43419 4.49768 7.98344 5.23109L9.28452 4.25501ZM3.62735 7.82459C3.60569 7.44976 3.77794 7.05759 4.13544 6.70226L2.98819 5.54959C2.40644 6.12809 1.94819 6.94709 2.00344 7.91559L3.62735 7.82459ZM19.574 20.8896C19.2772 21.1864 18.9565 21.3533 18.6369 21.3825L18.7875 22.9999C19.5838 22.9252 20.2349 22.5243 20.7202 22.0423L19.574 20.8896ZM10.4025 10.0183C11.4696 8.95776 11.5487 7.28184 10.6506 6.08151L9.34952 7.05543C9.78611 7.63934 9.72111 8.40526 9.25744 8.86784L10.4025 10.0183ZM20.7159 17.1239C21.6009 17.6049 21.7385 18.7381 21.1134 19.3599L22.2596 20.5115C23.7113 19.0674 23.2639 16.6592 21.4904 15.6961L20.7159 17.1239ZM16.9881 16.2042C17.4041 15.7903 18.0736 15.6885 18.6456 15.9983L19.4213 14.5716C18.2469 13.9324 16.7909 14.109 15.8419 15.0515L16.9881 16.2042Z" fill="white"/></svg>
        Contact Us
      </button>
      <button className="menu-button" aria-label="Open menu" onClick={onMenu}><Menu size={31} /></button>
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return <div className="drawer-overlay" onClick={onClose}>
    <aside className="mobile-drawer" onClick={(event) => event.stopPropagation()}>
      <div className="drawer-top"><Logo compact /><button aria-label="Close menu" onClick={onClose}><X size={30} /></button></div>
      <nav className="drawer-nav">
        {navItems.map(({ label, icon: Icon }, index) => <a key={label} className={index === 0 ? "active" : ""} href={index === 0 ? "#home" : `#${label.toLowerCase().replace(/ /g, "-")}`} onClick={onClose}><Icon size={24} color={index === 0 ? BLUE : "currentColor"} />{label}</a>)}
      </nav>
      <button className="contact-button drawer-contact" type="button" onClick={onClose}>Contact Us</button>
    </aside>
  </div>;
}

const checks = ["End-to-end compliance support", "Regulatory filings made simple", "Tailored solutions for independent analysts & firms"];

function CheckIcon() {
  return (
    <svg className="check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="12" fill="#4356D6"/>
      <path d="M18 7.5L9.23438 16.5L5.25 12.4091" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-copy">
      <h1>
        Simplifying <span>Compliance</span> for Research Analysts
        <svg className="scribble" aria-hidden="true" width="350" height="41" viewBox="0 0 350 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M170.569 18.299C110.619 17.2754 51.6977 17.4618 10.5979 19.5305C7.62384 19.7469 2.99571 18.4913 1.15507 17.139C-0.676474 15.7883 0.264661 14.358 2.86422 14.2547C45.3718 12.1149 107.748 12.6609 170.8 14.5936L170.569 18.299ZM170.926 12.5588C106.775 10.4971 44.0798 9.87986 2.33326 11.7496C0.464193 11.8512 0.560313 13.0016 2.66772 12.9455C43.5461 10.8906 106.348 11.3137 170.883 13.2526L170.926 12.5588ZM339.074 24.4741C293.626 21.6342 231.564 19.3404 170.569 18.299L170.8 14.5936C232.185 16.4755 294.21 19.6719 339.167 22.9869C340.09 23.0557 340.177 23.433 340.15 23.8025C340.12 24.1704 339.976 24.5302 339.074 24.4741ZM170.883 13.2526C234.866 15.1747 300.55 18.5873 348.25 22.5536C349.688 22.6716 349.957 22.1791 348.46 22.0569C300.877 18.1388 235.171 14.6243 170.926 12.5588L170.883 13.2526Z" fill="#4356D6"/>
        </svg>
      </h1>
      <p>Stay focused on your insights—we’ll handle the compliance. Our expert solutions ensure your research practices meet every regulatory requirement with confidence and ease</p>
      <ul>{checks.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
      <div className="hero-actions"><button className="primary-button">Get Started</button><button className="secondary-button">Book a Consultation</button></div>
    </div>
    <div className="hero-art-wrap">
      <img className="hero-blob" aria-hidden="true" src="https://api.builder.io/api/v1/image/assets/TEMP/9a0b4bbb0983aad9d080d5c97b1a3f0235f3f5bd?width=1948" alt="" />
      <img className="hero-art" src="https://api.builder.io/api/v1/image/assets/TEMP/dd0dafd5dadf571af6d14eadcb6f33b4da0e6046?width=1478" alt="Research compliance professional" />
    </div>
  </section>;
}

const benefits = [
  { title: "Regulatory Clarity", text: "We decode complex compliance rules into simple, actionable steps.", icon: Search, round: true },
  { title: "Hassle-Free Filings Clarity", text: "From registration to ongoing reporting—we manage it end-to-end.", icon: Info, round: false },
  { title: "Risk Protection", text: "Stay ahead of audits, inspections, and compliance gaps with proactive support.", icon: Settings, round: false },
];

function BenefitCard({ title, text, icon: Icon, round }: (typeof benefits)[number]) {
  return <article className="benefit-card">
    <span className={`benefit-icon-wrap${round ? " round" : ""}`}><Icon size={20} color="#fff" /></span>
    <div><h3>{title}</h3><p>{text}</p></div>
  </article>;
}

function WhyCompliance() {
  return <section id="about-us" className="why-section">
    <div className="why-intro">
      <div className="why-title">
        <h2>Why <span>Compliance Matters</span> for Research Analysts</h2>
        <svg className="why-squiggle" aria-hidden="true" width="103" height="89" viewBox="0 0 103 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.6 0.5C74 12 82.5 26 82.5 44.5c0 15-6.5 27-16 34.5" stroke="#B2C0FE" strokeWidth="6" strokeLinecap="round" fill="none"/>
          <path d="M52 68l14 11 11-15" stroke="#B2C0FE" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
      <p>In today’s regulatory environment, even a small oversight can lead to penalties, reputational risks, and loss of client trust. We help Research Analysts and firms navigate complex compliance requirements so they can focus on delivering high-quality research without worry.</p>
    </div>
    <div className="why-content"><img className="why-art" src="https://api.builder.io/api/v1/image/assets/TEMP/995a3c722f98afe98ea5145aa77c354118009ae7?width=1188" alt="Analyst reviewing a compliance dashboard" /><div className="benefits">{benefits.map((benefit) => <BenefitCard key={benefit.title} {...benefit} />)}</div></div>
    <svg className="why-arrows" aria-hidden="true" width="137" height="34" viewBox="0 0 137 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 22, 44, 66, 88, 110].map((x) => <path key={x} d={`M${x} 4l13 13-13 13`} stroke="#B2C0FE" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>)}
    </svg>
  </section>;
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main><Header onMenu={() => setMenuOpen(true)} /><Hero /><WhyCompliance />{menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}</main>;
}
