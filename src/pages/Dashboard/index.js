import React from "react";
import posed from "react-pose";
import { Helmet } from "react-helmet";
import { CardExpanded } from "../../components";

const DashboardContainer = posed.div({
  enter: { staggerChildren: 50, opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
});

const AnimatedChildren = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
})

export default props => {
  localStorage.setItem('title', 'Inicio')
  return (
    <DashboardContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inicio - esa</title>
      </Helmet>
      <AnimatedChildren>
        <CardExpanded style={{ width: 430 }} />
      </AnimatedChildren>
    </DashboardContainer>
  );
};
