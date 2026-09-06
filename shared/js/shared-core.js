/**
 * Shared Core Utility Module - COSYlanguages Monorepo Shared Workspace
 * Outlines cross-application relative depth path resolvers and global constants.
 */

export const SHARED_SWITCHER_GROUPS = {
    wonder: {
        en: [
            "do-insects-hide-from-rain",
            "is-bad-weather-gods-anger",
            "always-watched-in-a-crowd",
            "why-is-everyone-copying-me",
            "whether-raindrops-select-where-to-fall",
            "i-have-no-time-for-it"
        ],
        fr: [
            "les-insectes-se-cachent-ils-de-la-pluie",
            "la-mauvaise-meteo-colere-des-dieux",
            "toujours-observe-dans-la-foule",
            "pourquoi-tout-le-monde-me-copie",
            "gouttes-de-pluie-choisissent-elles-ou-tomber",
            "je-n-ai-pas-le-temps-pour-ca"
        ]
    },
    science: {
        en: [
            "neuroplasticity",
            "evolutionary-biology",
            "biotechnology",
            "climate-environment",
            "sensory-systems"
        ]
    }
};

/**
 * Calculates correct relative depth prefix to find root asset directory from nested sub-pages.
 * @param {string} pathname - window.location.pathname or path string
 * @returns {string} Relative path prefix (e.g., "../../../../")
 */
export function getRelativeDepthPrefix(pathname) {
    const cleanPath = pathname.replace(/^\//, "").replace(/\/$/, "");
    const segments = cleanPath.split("/").length;
    if (segments <= 1) return "./";
    return "../".repeat(segments - 1);
}