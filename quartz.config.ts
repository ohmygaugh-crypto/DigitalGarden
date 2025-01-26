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
          lightgray: "#000080", //(search bar)
          gray: "#000080", //  (graph dots/lines)
          darkgray: "#f0f0f0", // (text in search bar?)
          dark: "#002255", // (graph dots/lines)
          secondary: "#1E4E8C", // (retrun hom and links)
          tertiary: "#674523", // Soft muted blue (tags?)
          highlight: "rgba(0, 0, 128, 0.15)", // Blue highlight
        },
        darkMode: {
          light: "#002255", // Ultra-deep navy, almost black
          lightgray: "#ffffff", // Graph outline
          gray: "#f0f0f0",
          darkgray: "#ffffff",
          dark: "#e6e6e6",
          secondary: "#6699CC", // Classic blue-gray
          tertiary: "#3366AA", // Deep blue accent
          highlight: "#ffffff", //graph icon?
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
