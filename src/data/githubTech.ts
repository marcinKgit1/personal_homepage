const CACHE_KEY = "github-tech-cache-v1";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

interface RepoSummary {
  language: string | null;
}

interface CachedTech {
  updatedAt: number;
  technologies: string[];
}

function normalizeGitHubTech(tech: string): string {
  const map: Record<string, string> = {
    JavaScript: "JavaScript (ES6+)",
    TypeScript: "TypeScript",
    HTML: "HTML5",
    CSS: "CSS3",
    Rust: "Rust (podstawy)",
  };

  return map[tech] ?? tech;
}

function getUsernameFromGitHubUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "github.com") {
      return null;
    }

    const [username] = parsed.pathname.replace(/^\//, "").split("/");
    return username || null;
  } catch {
    return null;
  }
}

function readCache(username: string): string[] | null {
  try {
    const raw = localStorage.getItem(`${CACHE_KEY}:${username}`);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as CachedTech;
    const isFresh = Date.now() - parsed.updatedAt < CACHE_TTL_MS;
    if (!isFresh || !Array.isArray(parsed.technologies)) {
      return null;
    }

    return parsed.technologies;
  } catch {
    return null;
  }
}

function writeCache(username: string, technologies: string[]) {
  try {
    const payload: CachedTech = {
      updatedAt: Date.now(),
      technologies,
    };
    localStorage.setItem(`${CACHE_KEY}:${username}`, JSON.stringify(payload));
  } catch {
    // Ignore cache write failures (private mode or blocked storage).
  }
}

export async function fetchGitHubTechnologies(
  githubUrl: string,
): Promise<string[]> {
  const username = getUsernameFromGitHubUrl(githubUrl);
  if (!username) {
    return [];
  }

  const cached = readCache(username);
  if (cached) {
    return cached;
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
  );
  if (!response.ok) {
    return [];
  }

  const repos = (await response.json()) as RepoSummary[];
  const set = new Set<string>();

  repos.forEach((repo) => {
    if (repo.language) {
      set.add(normalizeGitHubTech(repo.language));
    }
  });

  const technologies = Array.from(set).sort((a, b) => a.localeCompare(b));
  writeCache(username, technologies);
  return technologies;
}
