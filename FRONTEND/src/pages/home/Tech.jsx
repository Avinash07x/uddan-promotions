import React from "react";

export default function Tech() {
    return (
                <section className="py-12 border-y border-border/60 bg-card/30 backdrop-blur overflow-hidden">
                  <div className="container mx-auto px-5 md:px-10 mb-6 flex items-center gap-3">
                    <span className="h-px flex-1 bg-border/60"/>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
                      Engineered with a battle-tested stack
                    </span>
                    <span className="h-px flex-1 bg-border/60"/>
                  </div>
                  <div className="marquee-pause relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"/>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"/>
                    <div className="marquee-track flex gap-3 whitespace-nowrap w-max">
                      {[...techStack, ...techStack].map((t, i) => (<span key={`${t}-${i}`} className="inline-flex items-center px-4 py-2 rounded-full border border-border/60 text-sm text-muted-foreground bg-card/60 hover:bg-card hover:text-foreground hover:border-[hsl(var(--cyan))]/40 hover:-translate-y-0.5 transition-all cursor-default">
                          {t}
                        </span>))}
                    </div>
                  </div>
                </section>
    );
}