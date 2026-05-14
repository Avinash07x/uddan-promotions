import React, { Suspense } from "react";

const LazyHeroServices = React.lazy(() => import("../pages/services/HeroServices"));
const LazyStats = React.lazy(() => import("../pages/services/Stats"));
const LazyServicesc = React.lazy(() => import("../pages/services/Servicesc"));
const LazyWhyChoose = React.lazy(() => import("./services/WhyChoose"));
const LazyAmplifySection = React.lazy(() => import("./services/AmplifySection"));
const LazyHowWeWork = React.lazy(() => import("./services/HowWeWork"));
// const LazyLocalServicePages = React.lazy(() => import("./services/LocalServicePages"));
const LazyFAQSection = React.lazy(() => import("./home/FAQSection"));

export default function ServicesPage() {

  return (
    <>
      <LazyHeroServices />
      <LazyStats />
      <LazyServicesc />
      <LazyWhyChoose />
      <LazyAmplifySection />
      <LazyHowWeWork />
      {/* <LazyLocalServicePages /> */}
      <LazyFAQSection />
    </>
  );
}