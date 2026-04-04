// ─── Types ────────────────────────────────────────────────────────────────────

import { GoStarFill } from "react-icons/go";

interface TestimonialData {
  name: string;
  handle: string;
  avatarSeed: string;
  text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ROW_ONE_TESTIMONIALS: TestimonialData[] = [
  {
    name: "Sarah Kim",
    handle: "@sarahkimdesigns",
    avatarSeed: "sarah",
    text: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    name: "Emma Johnson",
    handle: "@emmajcreative",
    avatarSeed: "emma",
    text: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
  },
  {
    name: "Olivia Parker",
    handle: "@oliviaparkerux",
    avatarSeed: "olivia",
    text: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    name: "Nina Taylor",
    handle: "@ninataylorart",
    avatarSeed: "nina",
    text: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
];

const ROW_TWO_TESTIMONIALS: TestimonialData[] = [
  {
    name: "Marcus Rodriguez",
    handle: "@marcus_rodriguez",
    avatarSeed: "marcus",
    text: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
  },
  {
    name: "Alex Liu",
    handle: "@alexliuart",
    avatarSeed: "alex",
    text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    name: "James Chen",
    handle: "@jameschenphoto",
    avatarSeed: "james",
    text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    name: "David Wilson",
    handle: "@davidwilsondesign",
    avatarSeed: "david",
    text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TestimonialCard({ name, handle, avatarSeed, text }: TestimonialData) {
  return (
    <div className="testimonial-card-testimonials-t31tducit">
      <div className="testimonial-header-testimonials-t31tducit">
        <img
          src={`https://i.pravatar.cc/150?u=${avatarSeed}`}
          alt={name}
          className="avatar-testimonials-t31tducit"
        />
        <div className="author-meta-testimonials-t31tducit">
          <p className="author-name-testimonials-t31tducit">{name}</p>
          <p className="author-handle-testimonials-t31tducit">{handle}</p>
          <div className="flex items-center gap-1 pt-1 ">
            {Array.from({ length: 5 }, (v, i) => (
              <GoStarFill key={i} className="text-yellow-500 rate" />
            ))}
          </div>
        </div>
      </div>
      <p className="testimonial-text-testimonials-t31tducit">{text}</p>
    </div>
  );
}

// Duplicated scroll-content blocks create the seamless infinite-scroll illusion
function ScrollContent({ testimonials }: { testimonials: TestimonialData[] }) {
  return (
    <div className="scroll-content-testimonials-t31tducit">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} />
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Testimonial() {
  return (
    <div className="testimonial-wall-testimonials-t31tducit">
      {/* Row 1 — scrolls left */}
      <div
        className="scroll-row-testimonials-t31tducit scroll-left-testimonials-t31tducit"
        style={{ animationDuration: "100s" }}
      >
        {/* Duplicated for seamless loop */}
        <ScrollContent testimonials={ROW_ONE_TESTIMONIALS} />
        <ScrollContent testimonials={ROW_ONE_TESTIMONIALS} />
        <ScrollContent testimonials={ROW_ONE_TESTIMONIALS} />
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="scroll-row-testimonials-t31tducit scroll-right-testimonials-t31tducit"
        style={{ animationDuration: "100s" }}
      >
        {/* Duplicated for seamless loop */}
        <ScrollContent testimonials={ROW_TWO_TESTIMONIALS} />
        <ScrollContent testimonials={ROW_TWO_TESTIMONIALS} />
        <ScrollContent testimonials={ROW_TWO_TESTIMONIALS} />
      </div>
    </div>
  );
}
