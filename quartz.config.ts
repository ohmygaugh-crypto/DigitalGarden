import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "💽⏏️ Click here to return home",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["**/private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f0f0f0", //(search bar and graph outline)
          gray: "#000080", //  (graph dots/lines)
          darkgray: "#000080", // (text in search bar?)
          dark: "#002255", // (graph dots/lines)
          secondary: "#000080", // (retrun home and links)
          tertiary: "#000080", // (graph dots/lines for sure + hover color)
          highlight: "rgba(248, 248, 248, 0.08)", // highlight
        },
        darkMode: {
          light: "#002255", // Ultra-deep navy, almost black
          lightgray: "#ffffff", //(search bar and graph outline)
          gray: "#f0f0f0", //(graph dots/lines)
          darkgray: "#ffffff", //(text in search bar?)
          dark: "#e6e6e6", //(graph dots/lines)
          secondary: "#ffffff", //(return home and links)
          tertiary: "#fff555", //(graph dots/lines for sure)
          highlight: "#674523", //highlights
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
