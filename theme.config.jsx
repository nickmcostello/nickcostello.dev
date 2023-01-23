import { useConfig } from "nextra-theme-docs";

export default {
  editLink: {
    text: "",
  },
  favicon: "./public/favicon.ico",
  feedback: {
    content: "Provide me feedback →",
    useLink: () => "https://twitter.com/intent/tweet?text=@nickmcostello",
  },
  footer: {
    text: <span>© Copyright {new Date().getFullYear()} Nick Costello</span>,
  },
  logo: (
    <span>
      <b>Nick Costello</b>
    </span>
  ),
  project: {
    link: "https://github.com/nickmcostello",
  },
  search: {
    placeholder: "Search for something",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
};
