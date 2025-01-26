import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🏝️ Click here to return home",
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
          light: "#ffffff", // Pure white background
          lightgray: "#e6f3ff", // Light blue-white
          gray: "#5394ec", // Bright PowerShell blue
          darkgray: "#1760b3", // Deep blue
          dark: "#003366", // Dark navy blue
          secondary: "#0078D7", // Windows blue accent
          tertiary: "#b8d0ff", // Soft blue
          highlight: "rgba(83, 148, 236, 0.15)", // Blue highlight
        },
        darkMode: {
          light: "#000080", // Deep navy blue (classic CLI background)
          lightgray: "#5394ec", // Bright blue
          gray: "#f0f0f0", // Off-white text
          darkgray: "#ffffff", // White highlights
          dark: "#e6e6e6", // Light gray-white
          secondary: "#87cefa", // Light blue accent
          tertiary: "#add8e6", // Light blue
          highlight: "rgba(255, 255, 255, 0.15)", // White highlight
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
