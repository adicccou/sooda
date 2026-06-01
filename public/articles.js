(function () {
  const API_BASE = "https://articles-dashboard.adilet-melisov.workers.dev";
  const SITE_SLUG = "sooda";
  const PLACEHOLDER_IMAGE = "/sooda-link-banner.png";

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const stripHtml = (value) => String(value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  const formatDate = (value) => {
    if (!value) return "Sooda";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Sooda";
    return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
  };

  const articleUrl = (article) => `/article.html?slug=${encodeURIComponent(article.slug)}`;

  const imageUrl = (article) => article.cover_image || article.og_image || article.seo?.og_image || PLACEHOLDER_IMAGE;

  async function fetchArticles() {
    const response = await fetch(`${API_BASE}/api/public/articles?site=${encodeURIComponent(SITE_SLUG)}`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`Articles request failed: ${response.status}`);
    const payload = await response.json();
    return Array.isArray(payload.data) ? payload.data : [];
  }

  async function fetchArticle(slug) {
    const response = await fetch(`${API_BASE}/api/public/articles/${encodeURIComponent(slug)}?site=${encodeURIComponent(SITE_SLUG)}`, {
      headers: { Accept: "application/json" },
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`Article request failed: ${response.status}`);
    const payload = await response.json();
    return payload.data || null;
  }

  function renderCard(article) {
    const title = escapeHtml(article.title || "Untitled article");
    const excerpt = escapeHtml(article.excerpt || stripHtml(article.content).slice(0, 150));
    const date = escapeHtml(formatDate(article.published_at));
    const src = escapeHtml(imageUrl(article));
    return `
      <a class="article-card" href="${articleUrl(article)}">
        <div class="article-card__media"><img src="${src}" alt="${title}" loading="lazy"></div>
        <div class="article-card__body">
          <span class="article-card__date">${date}</span>
          <h3>${title}</h3>
          <p>${excerpt}</p>
          <span class="article-card__link">Read article</span>
        </div>
      </a>
    `;
  }

  async function renderArticleList() {
    const list = document.querySelector("[data-articles-list]");
    if (!list) return;
    const empty = document.querySelector("[data-articles-empty]");
    const limit = Number(list.dataset.articlesLimit || "0");

    try {
      const articles = await fetchArticles();
      const visibleArticles = limit > 0 ? articles.slice(0, limit) : articles;
      list.innerHTML = visibleArticles.map(renderCard).join("");
      if (empty) empty.hidden = visibleArticles.length > 0;
    } catch (error) {
      console.error(error);
      list.innerHTML = "";
      if (empty) {
        empty.hidden = false;
        empty.textContent = "Articles are unavailable right now.";
      }
    }
  }

  function setMeta(selector, value) {
    const node = document.querySelector(selector);
    if (node && value) node.setAttribute("content", value);
  }

  async function renderArticleDetail() {
    const detail = document.querySelector("[data-article-detail]");
    if (!detail) return;
    const empty = document.querySelector("[data-article-empty]");
    const slug = new URLSearchParams(window.location.search).get("slug");
    if (!slug) {
      detail.innerHTML = "";
      if (empty) {
        empty.hidden = false;
        empty.textContent = "Choose an article from the articles page.";
      }
      return;
    }

    try {
      const article = await fetchArticle(slug);
      if (!article) {
        detail.innerHTML = "";
        if (empty) {
          empty.hidden = false;
          empty.textContent = "Article not found.";
        }
        return;
      }

      const title = article.seo?.meta_title || article.meta_title || article.title || "Sooda article";
      const description = article.seo?.meta_description || article.meta_description || article.excerpt || stripHtml(article.content).slice(0, 155);
      const image = imageUrl(article);
      document.title = `${title} | Sooda`;
      setMeta('meta[name="description"]', description);
      setMeta('meta[property="og:title"]', title);
      setMeta('meta[property="og:description"]', description);
      setMeta('meta[property="og:image"]', image.startsWith("http") ? image : `https://sooda.app${image}`);
      setMeta('meta[name="twitter:title"]', title);
      setMeta('meta[name="twitter:description"]', description);
      setMeta('meta[name="twitter:image"]', image.startsWith("http") ? image : `https://sooda.app${image}`);

      detail.innerHTML = `
        <a class="article-back" href="/articles.html">Back to articles</a>
        <article class="article-detail-card">
          <header class="article-detail-head">
            <span class="article-card__date">${escapeHtml(formatDate(article.published_at))}</span>
            <h1>${escapeHtml(article.title)}</h1>
            ${article.excerpt ? `<p>${escapeHtml(article.excerpt)}</p>` : ""}
          </header>
          <div class="article-detail-media"><img src="${escapeHtml(image)}" alt="${escapeHtml(article.title)}"></div>
          <div class="article-content">${article.content || ""}</div>
        </article>
      `;
      if (empty) empty.hidden = true;
    } catch (error) {
      console.error(error);
      detail.innerHTML = "";
      if (empty) {
        empty.hidden = false;
        empty.textContent = "Article is unavailable right now.";
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderArticleList();
    renderArticleDetail();
  });
})();
