window.__ModuleLoader__.load({
  id: 'dsh-aihot',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PANEL_ID = 'dsh-aihot';
    const NS = 'dsh-aihot';
    const API = 'https://aihot.news/api/v1';
    const SITE_URL = 'https://aihot.news/';
    const PAGE_SIZE = 10;
    const AUTO_REFRESH_MS = 5 * 60 * 1000;
    const REQUEST_TIMEOUT_MS = 15000;
    const TABS = ['picked', 'all', 'hot', 'daily', 'search'];
    const TAB_LABELS = {
      picked: 'tabPicked',
      all: 'tabAll',
      hot: 'tabHot',
      daily: 'tabDaily',
      search: 'tabSearch',
    };
    const CATEGORY_KEYS = ['ai-models', 'ai-products', 'industry', 'paper', 'tip', 'opinion'];
    const FILTERS = [''].concat(CATEGORY_KEYS);

    const zh = {
      nav: 'AI 热点',
      title: 'AI 热点',
      subtitle: 'AIHOT 精选 · 全球 AI 动态',
      site: 'aihot.news',
      refresh: '刷新',
      retry: '重试',
      updated: '更新于',
      loading: '加载中',
      items: '条',
      tabPicked: '精选',
      tabAll: '全部',
      tabHot: '热点',
      tabDaily: '日报',
      tabSearch: '搜索',
      listPicked: '过去 24 小时精选',
      listAll: '最近 7 天全部动态',
      listHot: '当前热点 Top 10',
      listDaily: 'AIHOT 日报',
      listSearch: '搜索「{q}」',
      hotRail: '当前热点',
      hotRailMore: '查看全部',
      hotHint: '按信源与信号热度排序',
      filterLabel: '分类',
      categoryAll: '全部',
      catModels: '模型',
      catProducts: '产品',
      catIndustry: '行业',
      catPaper: '论文',
      catTip: '教程',
      catOpinion: '观点',
      searchPlaceholder: '搜索 AI 热点，如 OpenAI、芯片',
      searchAction: '搜索',
      searchTitle: '搜索 AI 热点',
      searchHint: '输入关键词，查找最近 7 天 AIHOT 收录的相关报道。',
      searchTooShort: '请输入至少 2 个字符',
      clear: '清空',
      suggestion1: 'OpenAI',
      suggestion2: 'Anthropic',
      suggestion3: '开源模型',
      suggestion4: '芯片',
      leadLabel: '头条',
      reasonLabel: '推荐理由',
      originalLabel: '阅读原文',
      storyLabel: '事件脉络',
      aihotLabel: 'AIHOT',
      latestProgress: '最新',
      scoreLabel: '热度',
      sourcesCount: '{n} 个信源',
      signalsCount: '{n} 条信号',
      participantsCount: '{n} 个参与者',
      sourceNamesLabel: '信源',
      today: '今天',
      yesterday: '昨天',
      unknownDate: '时间未知',
      emptyTitle: '暂时没有内容',
      emptyBody: '稍后再刷新看看，或换一个分类浏览。',
      emptySearchTitle: '没有找到相关资讯',
      emptySearchBody: '换个关键词，或试试更宽泛的说法。',
      errorTitle: '无法加载资讯',
      errorNetwork: '网络连接失败，请检查网络后重试。',
      errorTimeout: '请求超时，请重试。',
      errorRate: '请求过于频繁，请稍等片刻再试。',
      errorHttp: '资讯服务暂时不可用。',
      errorRequest: '请求有误，请刷新后重试。',
      errorUnknown: '加载失败，请重试。',
      loadMore: '加载更多',
      loadingMore: '正在加载…',
      loadedAll: '已经到底了',
      loadMoreError: '加载更多失败，点击重试',
      footer: '数据来自 AIHOT · 时间为北京时间',
      disclaimer: '内容来自公开信源，仅供参考。',
      ariaTabs: '资讯分类',
      ariaFeed: 'AI 热点列表',
      ariaRefresh: '刷新资讯',
      ariaLoadMore: '加载更多资讯',
      ariaSearch: '搜索 AI 热点',
    };

    const en = {
      nav: 'AI trending',
      title: 'AI trending',
      subtitle: 'AIHOT picks · AI news at a glance',
      site: 'aihot.news',
      refresh: 'Refresh',
      retry: 'Try again',
      updated: 'Updated',
      loading: 'Loading',
      items: 'items',
      tabPicked: 'Picks',
      tabAll: 'All',
      tabHot: 'Trending',
      tabDaily: 'Daily',
      tabSearch: 'Search',
      listPicked: 'Picks from the last 24 hours',
      listAll: 'All stories from the last 7 days',
      listHot: 'Trending now · Top 10',
      listDaily: 'AIHOT daily',
      listSearch: 'Search “{q}”',
      hotRail: 'Trending now',
      hotRailMore: 'See all',
      hotHint: 'Ranked by sources and signals',
      filterLabel: 'Categories',
      categoryAll: 'All',
      catModels: 'Models',
      catProducts: 'Products',
      catIndustry: 'Industry',
      catPaper: 'Papers',
      catTip: 'Guides',
      catOpinion: 'Opinion',
      searchPlaceholder: 'Search AI news, e.g. OpenAI, chips',
      searchAction: 'Search',
      searchTitle: 'Search AI news',
      searchHint: 'Enter a keyword to search AIHOT stories from the last 7 days.',
      searchTooShort: 'Enter at least 2 characters',
      clear: 'Clear',
      suggestion1: 'OpenAI',
      suggestion2: 'Anthropic',
      suggestion3: 'open source',
      suggestion4: 'chips',
      leadLabel: 'Top story',
      reasonLabel: 'Why it matters',
      originalLabel: 'Read original',
      storyLabel: 'Story timeline',
      aihotLabel: 'AIHOT',
      latestProgress: 'Latest',
      scoreLabel: 'Score',
      sourcesCount: '{n} sources',
      signalsCount: '{n} signals',
      participantsCount: '{n} participants',
      sourceNamesLabel: 'Sources',
      today: 'Today',
      yesterday: 'Yesterday',
      unknownDate: 'Unknown date',
      emptyTitle: 'Nothing here yet',
      emptyBody: 'Refresh in a moment, or browse another category.',
      emptySearchTitle: 'No matching stories',
      emptySearchBody: 'Try another keyword or a broader phrase.',
      errorTitle: 'Could not load the news',
      errorNetwork: 'The network request failed. Check your connection and try again.',
      errorTimeout: 'The request timed out. Try again.',
      errorRate: 'Too many requests. Wait a moment and try again.',
      errorHttp: 'The news service is temporarily unavailable.',
      errorRequest: 'The request was invalid. Refresh and try again.',
      errorUnknown: 'Loading failed. Try again.',
      loadMore: 'Load more',
      loadingMore: 'Loading…',
      loadedAll: 'You have reached the end',
      loadMoreError: 'Could not load more. Tap to retry.',
      footer: 'Data from AIHOT · times are Beijing time',
      disclaimer: 'Content comes from public sources, for reference only.',
      ariaTabs: 'News sections',
      ariaFeed: 'AI news list',
      ariaRefresh: 'Refresh news',
      ariaLoadMore: 'Load more news',
      ariaSearch: 'Search AI news',
    };

    /* ------------------------------------------------------------------ */
    /* Formatting and API helpers                                          */
    /* ------------------------------------------------------------------ */

    const DATE_KEY_FMT = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const DATE_FMT = {
      zh: new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'long', day: 'numeric' }),
      en: new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Shanghai', month: 'short', day: 'numeric' }),
    };
    const TIME_FMT = {
      zh: new Intl.DateTimeFormat('zh-CN', {
        timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false,
      }),
      en: new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false,
      }),
    };

    function cleanText(value) {
      return String(value || '')
        .replace(/\*\*/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function fill(template, values) {
      return String(template || '').replace(/\{(\w+)\}/g, (match, key) => (
        values && values[key] != null ? String(values[key]) : match
      ));
    }

    function toDate(value) {
      if (value instanceof Date) return value;
      if (typeof value === 'number') return new Date(value);
      if (!value) return null;
      const date = new Date(value);
      return Number.isNaN(date.getTime()) ? null : date;
    }

    function toDateKey(value) {
      const date = toDate(value);
      if (!date) return '';
      return DATE_KEY_FMT.format(date);
    }

    function formatClock(value, lang) {
      const date = toDate(value);
      if (!date) return '';
      return TIME_FMT[lang === 'en' ? 'en' : 'zh'].format(date);
    }

    function formatStamp(value, lang) {
      const date = toDate(value);
      if (!date) return '';
      const key = DATE_KEY_FMT.format(date);
      return key.slice(5) + ' ' + formatClock(date, lang);
    }

    function dateLabel(key, lang, t) {
      if (!key || key === 'unknown') return t('unknownDate');
      const today = DATE_KEY_FMT.format(new Date());
      const yesterday = DATE_KEY_FMT.format(new Date(Date.now() - 86400000));
      const pretty = DATE_FMT[lang === 'en' ? 'en' : 'zh'].format(new Date(key + 'T12:00:00+08:00'));
      if (key === today) return t('today') + ' · ' + pretty;
      if (key === yesterday) return t('yesterday') + ' · ' + pretty;
      return pretty;
    }

    function categoryLabel(key, t) {
      if (key === 'ai-models') return t('catModels');
      if (key === 'ai-products') return t('catProducts');
      if (key === 'industry') return t('catIndustry');
      if (key === 'paper') return t('catPaper');
      if (key === 'tip') return t('catTip');
      if (key === 'opinion') return t('catOpinion');
      return '';
    }

    function categoryClass(key) {
      if (key === 'ai-models') return 'is-models';
      if (key === 'ai-products') return 'is-products';
      if (key === 'industry') return 'is-industry';
      if (key === 'paper') return 'is-paper';
      if (key === 'tip') return 'is-tip';
      if (key === 'opinion') return 'is-opinion';
      return 'is-other';
    }

    function mapApiItem(raw) {
      const links = raw.links || {};
      const published = raw.publishedAt || raw.discoveredAt || '';
      return {
        id: raw.id || links.aihot || '',
        title: cleanText(raw.title),
        summary: cleanText(raw.summary),
        reason: cleanText(raw.reason),
        source: cleanText(raw.source && raw.source.name),
        categoryKey: raw.category || '',
        publishedAt: published,
        url: links.aihot || (raw.attribution && raw.attribution.url) || '',
        originalUrl: links.original || '',
        score: typeof raw.score === 'number' ? raw.score : null,
        selected: raw.selected === true,
      };
    }

    function mapHot(raw) {
      const links = raw.links || {};
      return {
        id: raw.id || '',
        rank: raw.rank || 0,
        title: cleanText(raw.title),
        source: cleanText(raw.source && raw.source.name),
        url: links.aihot || '',
        originalUrl: links.original || '',
        storyUrl: links.story || '',
        sourceCount: raw.sourceCount || 0,
        signalCount: raw.signalCount || 0,
        participantCount: raw.participantCount || 0,
        sourceNames: Array.isArray(raw.sourceNames) ? raw.sourceNames.map(cleanText) : [],
        latestAt: raw.latestAt || '',
      };
    }

    function mapDaily(raw) {
      const report = (raw && raw.report) || {};
      const sections = Array.isArray(report.sections) ? report.sections.map((section) => ({
        label: cleanText(section.label),
        items: (Array.isArray(section.items) ? section.items : []).map((item) => ({
          title: cleanText(item.title),
          summary: cleanText(item.summary),
          source: cleanText(item.source && item.source.name),
          url: (item.links && item.links.aihot) || '',
          originalUrl: (item.links && item.links.original) || '',
        })),
      })) : [];
      const lead = report.lead || {};
      return {
        date: report.date || '',
        url: (report.links && report.links.aihot) || '',
        lead: report.lead
          ? { title: cleanText(lead.title), paragraph: cleanText(lead.leadParagraph) }
          : null,
        sections,
      };
    }

    function buildItemsUrl(params, cursor) {
      const search = new URLSearchParams();
      search.set('limit', String(PAGE_SIZE));
      search.set('by', 'timeline');
      if (params.tab === 'picked') {
        search.set('mode', 'selected');
        search.set('window', '24h');
      } else {
        search.set('mode', 'all');
        search.set('window', '7d');
      }
      if (params.tab === 'search') search.set('q', params.q || '');
      if (params.category) search.set('category', params.category);
      if (cursor) search.set('cursor', cursor);
      return API + '/items?' + search.toString();
    }

    function viewKey(tab, category, submitted) {
      if (tab === 'picked' || tab === 'all') return tab + '|' + (category || '');
      if (tab === 'search') return 'search|' + (submitted || '');
      return tab;
    }

    function listTitle(tab, submitted, t) {
      if (tab === 'picked') return t('listPicked');
      if (tab === 'all') return t('listAll');
      if (tab === 'search') return fill(t('listSearch'), { q: submitted });
      if (tab === 'hot') return t('listHot');
      if (tab === 'daily') return t('listDaily');
      return t('title');
    }

    function groupByDate(items) {
      const groups = [];
      const index = new Map();
      for (const item of items) {
        const key = toDateKey(item.publishedAt) || 'unknown';
        let group = index.get(key);
        if (!group) {
          group = { key, items: [] };
          index.set(key, group);
          groups.push(group);
        }
        group.items.push(item);
      }
      return groups;
    }

    /* ------------------------------------------------------------------ */
    /* Network                                                             */
    /* ------------------------------------------------------------------ */

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function retryDelay(response) {
      const header = response.headers.get('retry-after');
      if (header) {
        const seconds = Number(header);
        if (Number.isFinite(seconds)) return Math.min(5000, Math.max(300, seconds * 1000));
        const date = Date.parse(header);
        if (Number.isFinite(date)) return Math.min(5000, Math.max(300, date - Date.now()));
      }
      return 900;
    }

    async function requestJson(url, signal) {
      let lastError = null;
      for (let attempt = 0; attempt < 2; attempt += 1) {
        try {
          const response = await fetch(url, {
            signal,
            cache: 'no-store',
            headers: { accept: 'application/json' },
          });
          if (response.status === 429 && attempt === 0) {
            await sleep(retryDelay(response));
            continue;
          }
          if (response.status >= 500 && attempt === 0) {
            await sleep(700);
            continue;
          }
          if (!response.ok) {
            const error = new Error('HTTP ' + response.status);
            error.status = response.status;
            throw error;
          }
          return await response.json();
        } catch (error) {
          if (signal && signal.aborted) throw error;
          if (error && typeof error.status === 'number' && error.status < 500) throw error;
          lastError = error;
          if (attempt === 0) await sleep(600);
        }
      }
      throw lastError || new Error('request failed');
    }

    function errorKey(error, timedOut) {
      if (timedOut) return 'errorTimeout';
      if (error && error.status === 429) return 'errorRate';
      if (error && error.status === 400) return 'errorRequest';
      if (error && typeof error.status === 'number') return 'errorHttp';
      if (error && error.name === 'AbortError') return 'errorTimeout';
      if (error instanceof TypeError) return 'errorNetwork';
      return 'errorUnknown';
    }

    /* ------------------------------------------------------------------ */
    /* Icons                                                               */
    /* ------------------------------------------------------------------ */

    function SidebarIcon({ size = 16 }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.3,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        focusable: 'false',
      },
        h('path', {
          d: 'M8.25 2.75c.25 2.1 2.75 3.1 2.75 5.75a3 3 0 1 1-6 0c0-1.4.75-2.5 1.6-3.25.25 1 .75 1.5 1.4 1.9 0-1.6-.5-2.9.25-4.4Z',
        }));
    }

    function FlameGlyph({ size = 20 }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 128 128',
        fill: 'currentColor',
        'aria-hidden': 'true',
        focusable: 'false',
      },
        h('path', {
          d: 'M66 22c2 17 22 25 22 46a24 24 0 1 1-48 0c0-11 6-20 13-26 2 8 6 12 11 15 0-13-4-23 2-35Z',
        }),
        h('path', {
          d: 'M65 60c1 8 8 11 8 19a9 9 0 0 1-18 0c0-5 2-8 5-11 1 4 3 6 5 7 0-6-2-9 0-15Z',
          fill: 'var(--dsw-alias-bg-base)',
          fillOpacity: 0.55,
        }));
    }

    function RefreshIcon() {
      return h('svg', {
        width: 15, height: 15, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round',
        'aria-hidden': 'true', focusable: 'false',
      },
        h('path', { d: 'M13.5 8a5.5 5.5 0 1 1-1.6-3.9' }),
        h('path', { d: 'M13.5 2.5V5H11' }));
    }

    function SearchIcon() {
      return h('svg', {
        width: 15, height: 15, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round',
        'aria-hidden': 'true', focusable: 'false',
      },
        h('circle', { cx: 7, cy: 7, r: 4.5 }),
        h('path', { d: 'm10.4 10.4 3.1 3.1' }));
    }

    function ExternalIcon() {
      return h('svg', {
        width: 11, height: 11, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round',
        'aria-hidden': 'true', focusable: 'false',
      },
        h('path', { d: 'M6 3h7v7' }),
        h('path', { d: 'm13 3-6.5 6.5' }),
        h('path', { d: 'M12 9.5V13H3V4h3.5' }));
    }

    function ArrowIcon() {
      return h('svg', {
        width: 12, height: 12, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round',
        'aria-hidden': 'true', focusable: 'false',
      },
        h('path', { d: 'M3 8h10' }),
        h('path', { d: 'm9 4 4 4-4 4' }));
    }

    function ErrorGlyph() {
      return h('svg', {
        width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
        'aria-hidden': 'true', focusable: 'false',
      },
        h('path', { d: 'M12 3.5 21 20H3L12 3.5Z' }),
        h('path', { d: 'M12 9v5' }),
        h('path', { d: 'M12 17.2v.1' }));
    }

    /* ------------------------------------------------------------------ */
    /* Styles                                                              */
    /* ------------------------------------------------------------------ */

    const STYLES = `
.dsh-aihot-page, .dsh-aihot-page * { box-sizing: border-box; }
.dsh-aihot-page {
  --ah-accent: var(--dsw-alias-brand-primary);
  --ah-warm: var(--dsw-alias-state-warn-primary);
  --ah-hot: var(--dsw-alias-state-error-primary);
  --ah-muted: var(--dsw-alias-label-secondary);
  --ah-line: var(--dsw-alias-border-l1);
  --ah-line-strong: var(--dsw-alias-border-l2);
  --ah-card: var(--dsw-alias-bg-layer-1);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  background:
    radial-gradient(1000px 420px at 90% -180px, color-mix(in srgb, var(--ah-warm) 9%, transparent), transparent 70%),
    radial-gradient(820px 380px at -8% -160px, color-mix(in srgb, var(--ah-accent) 9%, transparent), transparent 72%),
    var(--dsw-alias-bg-base);
  font-family: inherit;
  font-size: 13px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.dsh-aihot-page a { color: inherit; }
.dsh-aihot-hero {
  position: relative;
  z-index: 2;
  flex: none;
  border-bottom: 1px solid var(--ah-line);
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 86%, transparent);
  backdrop-filter: blur(14px);
}
.dsh-aihot-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(620px 200px at 14% -90%, color-mix(in srgb, var(--ah-accent) 11%, transparent), transparent 70%),
    radial-gradient(460px 180px at 88% -100%, color-mix(in srgb, var(--ah-warm) 12%, transparent), transparent 70%);
}
.dsh-aihot-hero-inner {
  position: relative;
  max-width: 940px;
  margin: 0 auto;
  padding: 18px clamp(16px, 4vw, 36px) 0;
}
.dsh-aihot-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
.dsh-aihot-brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
.dsh-aihot-mark {
  flex: none;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid color-mix(in srgb, var(--ah-warm) 28%, var(--ah-line));
  border-radius: 14px;
  color: color-mix(in srgb, var(--ah-warm) 80%, var(--ah-hot));
  background:
    linear-gradient(145deg,
      color-mix(in srgb, var(--ah-warm) 20%, var(--ah-card)),
      color-mix(in srgb, var(--ah-accent) 14%, var(--ah-card)));
  box-shadow:
    0 10px 24px -16px color-mix(in srgb, var(--ah-warm) 75%, transparent),
    inset 0 1px 0 color-mix(in srgb, var(--dsw-alias-bg-base) 40%, transparent);
}
.dsh-aihot-mark svg { filter: drop-shadow(0 2px 4px color-mix(in srgb, var(--ah-hot) 28%, transparent)); }
.dsh-aihot-brandcopy { min-width: 0; }
.dsh-aihot-titlerow { display: flex; align-items: center; gap: 8px; }
.dsh-aihot-title { margin: 0; font-size: 20px; line-height: 1.2; font-weight: 700; letter-spacing: -0.015em; }
.dsh-aihot-live {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 7px;
  border: 1px solid color-mix(in srgb, var(--ah-warm) 30%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--ah-warm) 11%, transparent);
  color: var(--ah-warm);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: .08em;
  line-height: 1.5;
}
.dsh-aihot-livedot {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 0 2px color-mix(in srgb, currentColor 18%, transparent);
  animation: dsh-aihot-pulse 2.4s ease-in-out infinite;
}
.dsh-aihot-subtitle { margin: 4px 0 0; font-size: 12px; color: var(--ah-muted); }
.dsh-aihot-actions { display: flex; align-items: center; gap: 6px; flex: none; padding-top: 3px; }
.dsh-aihot-updated { font-size: 11px; color: var(--ah-muted); white-space: nowrap; margin-right: 2px; }
.dsh-aihot-iconbtn {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--ah-line);
  border-radius: 9px;
  background: var(--ah-card);
  color: var(--ah-muted);
  cursor: pointer;
  transition: color .15s ease, border-color .15s ease, background .15s ease;
}
.dsh-aihot-iconbtn:hover:not(:disabled) {
  color: var(--ah-accent);
  border-color: color-mix(in srgb, var(--ah-accent) 40%, var(--ah-line));
  background: color-mix(in srgb, var(--ah-accent) 6%, var(--ah-card));
}
.dsh-aihot-iconbtn:disabled { opacity: .55; cursor: default; }
.dsh-aihot-iconbtn.is-loading svg { animation: dsh-aihot-spin .9s linear infinite; }
.dsh-aihot-site {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: var(--ah-muted);
  text-decoration: none;
  transition: color .15s ease, background .15s ease;
}
.dsh-aihot-site:hover { color: var(--ah-accent); background: color-mix(in srgb, var(--ah-accent) 8%, transparent); }
.dsh-aihot-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 15px;
  padding-bottom: 11px;
  overflow-x: auto;
  scrollbar-width: none;
}
.dsh-aihot-tabs::-webkit-scrollbar { display: none; }
.dsh-aihot-tab {
  position: relative;
  flex: none;
  padding: 7px 14px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: var(--ah-muted);
  font: inherit;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: color .15s ease, background .15s ease, border-color .15s ease;
}
.dsh-aihot-tab:hover {
  color: var(--dsw-alias-label-primary);
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent);
}
.dsh-aihot-tab[aria-selected='true'] {
  color: var(--ah-accent);
  border-color: color-mix(in srgb, var(--ah-accent) 26%, transparent);
  background: color-mix(in srgb, var(--ah-accent) 11%, transparent);
  font-weight: 650;
}
.dsh-aihot-search { display: flex; align-items: center; gap: 8px; padding: 0 0 14px; }
.dsh-aihot-field {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 11px;
  border: 1px solid var(--ah-line);
  border-radius: 11px;
  background: var(--ah-card);
  color: var(--ah-muted);
  transition: border-color .15s ease, box-shadow .15s ease;
}
.dsh-aihot-field:focus-within {
  border-color: color-mix(in srgb, var(--ah-accent) 70%, var(--ah-line));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ah-accent) 14%, transparent);
}
.dsh-aihot-input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
}
.dsh-aihot-input::placeholder { color: var(--ah-muted); opacity: .8; }
.dsh-aihot-clear {
  flex: none;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 9%, transparent);
  color: var(--ah-muted);
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
}
.dsh-aihot-clear:hover { color: var(--dsw-alias-label-primary); }
.dsh-aihot-submit {
  flex: none;
  height: 38px;
  padding: 0 18px;
  border: 1px solid color-mix(in srgb, var(--ah-accent) 34%, transparent);
  border-radius: 11px;
  background: color-mix(in srgb, var(--ah-accent) 12%, transparent);
  color: var(--ah-accent);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background .15s ease;
}
.dsh-aihot-submit:hover:not(:disabled) { background: color-mix(in srgb, var(--ah-accent) 19%, transparent); }
.dsh-aihot-submit:disabled { opacity: .5; cursor: default; }
.dsh-aihot-searchhint { margin: -7px 0 11px; font-size: 11px; color: var(--ah-hot); }
.dsh-aihot-progress { position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; overflow: hidden; }
.dsh-aihot-progress::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 34%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--ah-accent), var(--ah-warm));
  animation: dsh-aihot-slide 1.15s ease-in-out infinite;
}
.dsh-aihot-feed { flex: 1; min-height: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; }
.dsh-aihot-feed-inner { max-width: 940px; margin: 0 auto; padding: 15px clamp(16px, 4vw, 36px) 34px; }
.dsh-aihot-filters {
  display: flex;
  gap: 6px;
  padding: 2px 0 12px;
  overflow-x: auto;
  scrollbar-width: none;
}
.dsh-aihot-filters::-webkit-scrollbar { display: none; }
.dsh-aihot-filter {
  flex: none;
  padding: 4px 11px;
  border: 1px solid var(--ah-line);
  border-radius: 999px;
  background: var(--ah-card);
  color: var(--ah-muted);
  font: inherit;
  font-size: 11.5px;
  cursor: pointer;
  transition: color .15s ease, border-color .15s ease, background .15s ease;
}
.dsh-aihot-filter:hover { color: var(--dsw-alias-label-primary); border-color: var(--ah-line-strong); }
.dsh-aihot-filter.is-active {
  color: var(--ah-accent);
  border-color: color-mix(in srgb, var(--ah-accent) 35%, transparent);
  background: color-mix(in srgb, var(--ah-accent) 11%, transparent);
  font-weight: 600;
}
.dsh-aihot-listhead {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 2px 2px 10px;
  font-size: 12px;
  color: var(--ah-muted);
}
.dsh-aihot-listtitle { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; color: var(--dsw-alias-label-primary); }
.dsh-aihot-listcount { flex: none; font-variant-numeric: tabular-nums; }
.dsh-aihot-hint { padding: 0 2px 10px; font-size: 11px; color: var(--ah-muted); }
.dsh-aihot-rail {
  margin: 2px 0 16px;
  padding: 13px 14px 14px;
  border: 1px solid color-mix(in srgb, var(--ah-warm) 22%, var(--ah-line));
  border-radius: 16px;
  background:
    linear-gradient(120deg,
      color-mix(in srgb, var(--ah-warm) 8%, transparent),
      color-mix(in srgb, var(--ah-accent) 5%, transparent) 46%,
      transparent 80%),
    var(--ah-card);
}
.dsh-aihot-railhead { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.dsh-aihot-railkick {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--ah-warm);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: .02em;
}
.dsh-aihot-railmore {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 0;
  background: transparent;
  color: var(--ah-muted);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}
.dsh-aihot-railmore:hover { color: var(--ah-accent); }
.dsh-aihot-railgrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 10px; }
.dsh-aihot-railcard {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
  padding: 10px 11px;
  border: 1px solid var(--ah-line);
  border-radius: 11px;
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 55%, var(--ah-card));
  text-decoration: none;
  transition: border-color .16s ease, transform .16s ease;
}
.dsh-aihot-railcard:hover {
  border-color: color-mix(in srgb, var(--ah-warm) 40%, var(--ah-line));
  transform: translateY(-1px);
}
.dsh-aihot-railrank {
  color: var(--ah-warm);
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: .06em;
  font-variant-numeric: tabular-nums;
}
.dsh-aihot-railtitle {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.45;
}
.dsh-aihot-railmeta { margin-top: auto; color: var(--ah-muted); font-size: 10.5px; }
.dsh-aihot-datehead {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 2px 0 8px;
  padding: 9px 2px 7px;
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 90%, transparent);
  backdrop-filter: blur(8px);
  font-size: 11px;
  color: var(--ah-muted);
}
.dsh-aihot-datehead::before {
  content: '';
  width: 16px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--ah-accent), var(--ah-warm));
}
.dsh-aihot-datehead strong { color: var(--dsw-alias-label-primary); font-weight: 650; }
.dsh-aihot-datecount {
  margin-left: auto;
  padding: 0 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 7%, transparent);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
}
.dsh-aihot-card {
  position: relative;
  display: flex;
  gap: 13px;
  margin-bottom: 10px;
  padding: 15px 17px;
  border: 1px solid var(--ah-line);
  border-radius: 14px;
  background: var(--ah-card);
  box-shadow: 0 1px 2px color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);
  transition: border-color .16s ease, transform .16s ease, box-shadow .16s ease;
}
@media (hover: hover) {
  .dsh-aihot-card:hover {
    border-color: color-mix(in srgb, var(--ah-accent) 32%, var(--ah-line));
    transform: translateY(-1px);
    box-shadow: 0 10px 26px -20px color-mix(in srgb, var(--ah-accent) 70%, transparent);
  }
}
.dsh-aihot-index {
  flex: none;
  width: 22px;
  padding-top: 2px;
  color: var(--ah-accent);
  font-size: 11px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: .04em;
}
.dsh-aihot-cardbody { flex: 1; min-width: 0; }
.dsh-aihot-cardtop { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
.dsh-aihot-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  min-width: 0;
  font-size: 11.5px;
  color: var(--ah-muted);
}
.dsh-aihot-cat {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 650;
  white-space: nowrap;
}
.dsh-aihot-cat::before { content: ''; width: 5px; height: 5px; border-radius: 999px; background: currentColor; }
.dsh-aihot-cat.is-models { color: var(--ah-accent); background: color-mix(in srgb, var(--ah-accent) 11%, transparent); }
.dsh-aihot-cat.is-products { color: var(--ah-warm); background: color-mix(in srgb, var(--ah-warm) 13%, transparent); }
.dsh-aihot-cat.is-industry { color: var(--ah-hot); background: color-mix(in srgb, var(--ah-hot) 10%, transparent); }
.dsh-aihot-cat.is-paper { color: color-mix(in srgb, var(--dsw-alias-label-primary) 80%, var(--ah-accent)); background: color-mix(in srgb, var(--dsw-alias-label-primary) 7%, transparent); }
.dsh-aihot-cat.is-tip { color: color-mix(in srgb, var(--ah-muted) 88%, var(--ah-accent)); background: color-mix(in srgb, var(--ah-muted) 9%, transparent); }
.dsh-aihot-cat.is-opinion { color: color-mix(in srgb, var(--ah-accent) 55%, var(--ah-warm)); background: color-mix(in srgb, var(--ah-accent) 7%, var(--ah-warm) 5%, transparent); }
.dsh-aihot-cat.is-other { color: var(--ah-muted); background: color-mix(in srgb, var(--ah-muted) 9%, transparent); }
.dsh-aihot-source { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 46%; }
.dsh-aihot-sep { width: 3px; height: 3px; border-radius: 999px; background: currentColor; opacity: .45; flex: none; }
.dsh-aihot-score {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  border: 1px solid color-mix(in srgb, var(--ah-warm) 25%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--ah-warm) 9%, transparent);
  color: var(--ah-warm);
  font-size: 10.5px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
.dsh-aihot-card-title { margin: 8px 0 0; font-size: 15px; line-height: 1.45; font-weight: 600; letter-spacing: -0.005em; }
.dsh-aihot-card-title a { text-decoration: none; }
.dsh-aihot-card-title a:hover { color: var(--ah-accent); }
.dsh-aihot-summary {
  margin: 7px 0 0;
  color: color-mix(in srgb, var(--dsw-alias-label-primary) 76%, transparent);
  font-size: 12.8px;
  line-height: 1.68;
}
.dsh-aihot-reason {
  margin-top: 10px;
  padding: 8px 11px;
  border-left: 2px solid color-mix(in srgb, var(--ah-accent) 62%, transparent);
  border-radius: 0 8px 8px 0;
  background: color-mix(in srgb, var(--ah-accent) 6%, transparent);
}
.dsh-aihot-reason-label {
  display: block;
  margin-bottom: 2px;
  color: var(--ah-accent);
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: .02em;
}
.dsh-aihot-reason p { margin: 0; font-size: 12px; line-height: 1.62; color: color-mix(in srgb, var(--dsw-alias-label-primary) 72%, transparent); }
.dsh-aihot-links { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 10px; font-size: 11.5px; }
.dsh-aihot-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--ah-muted);
  text-decoration: none;
  transition: color .15s ease;
}
.dsh-aihot-link:hover { color: var(--ah-accent); }
.dsh-aihot-link.is-primary { color: var(--ah-accent); }
.dsh-aihot-hotcard {
  display: flex;
  gap: 13px;
  margin-bottom: 10px;
  padding: 15px 17px;
  border: 1px solid var(--ah-line);
  border-radius: 14px;
  background: var(--ah-card);
  transition: border-color .16s ease, transform .16s ease;
}
.dsh-aihot-hotcard:hover {
  border-color: color-mix(in srgb, var(--ah-warm) 35%, var(--ah-line));
  transform: translateY(-1px);
}
.dsh-aihot-rank {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid var(--ah-line);
  border-radius: 13px;
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.04em;
}
.dsh-aihot-rank.is-gold {
  color: var(--ah-warm);
  border-color: color-mix(in srgb, var(--ah-warm) 38%, transparent);
  background: linear-gradient(145deg, color-mix(in srgb, var(--ah-warm) 24%, transparent), color-mix(in srgb, var(--ah-warm) 7%, transparent));
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--dsw-alias-bg-base) 35%, transparent);
}
.dsh-aihot-rank.is-silver {
  color: color-mix(in srgb, var(--dsw-alias-label-primary) 55%, var(--ah-muted));
  border-color: color-mix(in srgb, var(--dsw-alias-label-primary) 20%, transparent);
  background: linear-gradient(145deg, color-mix(in srgb, var(--dsw-alias-label-primary) 12%, transparent), color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent));
}
.dsh-aihot-rank.is-bronze {
  color: var(--ah-hot);
  border-color: color-mix(in srgb, var(--ah-hot) 32%, transparent);
  background: linear-gradient(145deg, color-mix(in srgb, var(--ah-hot) 16%, transparent), color-mix(in srgb, var(--ah-hot) 5%, transparent));
}
.dsh-aihot-rank.is-rest {
  color: var(--ah-muted);
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent);
}
.dsh-aihot-hotbody { flex: 1; min-width: 0; }
.dsh-aihot-hotstats { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 7px; font-size: 11px; color: var(--ah-muted); }
.dsh-aihot-hotstats b { color: var(--dsw-alias-label-primary); font-weight: 650; font-variant-numeric: tabular-nums; }
.dsh-aihot-names { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
.dsh-aihot-name {
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1.5px 7px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent);
  color: var(--ah-muted);
  font-size: 10.5px;
}
.dsh-aihot-leadcard {
  margin: 2px 0 16px;
  padding: 17px 19px;
  border: 1px solid color-mix(in srgb, var(--ah-accent) 22%, var(--ah-line));
  border-radius: 16px;
  background:
    linear-gradient(135deg,
      color-mix(in srgb, var(--ah-accent) 10%, transparent),
      color-mix(in srgb, var(--ah-warm) 6%, transparent) 58%,
      transparent 85%),
    var(--ah-card);
}
.dsh-aihot-leadbadge {
  display: inline-flex;
  padding: 2px 8px;
  border: 1px solid color-mix(in srgb, var(--ah-warm) 30%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--ah-warm) 12%, transparent);
  color: var(--ah-warm);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .04em;
}
.dsh-aihot-leadtitle { margin: 9px 0 0; font-size: 17px; line-height: 1.45; font-weight: 700; letter-spacing: -0.01em; }
.dsh-aihot-leadtitle a { text-decoration: none; }
.dsh-aihot-leadtitle a:hover { color: var(--ah-accent); }
.dsh-aihot-leadpara { margin: 7px 0 0; font-size: 12.8px; line-height: 1.7; color: color-mix(in srgb, var(--dsw-alias-label-primary) 74%, transparent); }
.dsh-aihot-leadlinks { display: flex; gap: 14px; margin-top: 10px; }
.dsh-aihot-section { --ah-sec: var(--ah-accent); }
.dsh-aihot-section.sec-1 { --ah-sec: var(--ah-warm); }
.dsh-aihot-section.sec-2 { --ah-sec: var(--ah-hot); }
.dsh-aihot-section.sec-3 { --ah-sec: color-mix(in srgb, var(--dsw-alias-label-primary) 62%, var(--ah-accent)); }
.dsh-aihot-section.sec-4 { --ah-sec: color-mix(in srgb, var(--ah-accent) 58%, var(--ah-warm)); }
.dsh-aihot-sectionhead {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 17px 0 8px;
}
.dsh-aihot-sectionhead:first-child { margin-top: 2px; }
.dsh-aihot-sectiondot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--ah-sec);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ah-sec) 14%, transparent);
}
.dsh-aihot-sectionhead h2 { margin: 0; font-size: 12.5px; font-weight: 700; }
.dsh-aihot-sectioncount {
  padding: 0 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--ah-sec) 11%, transparent);
  color: var(--ah-sec);
  font-size: 10px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.dsh-aihot-card.is-daily { border-left: 2px solid color-mix(in srgb, var(--ah-sec) 55%, var(--ah-line)); }
.dsh-aihot-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 460px;
  margin: 9vh auto 0;
  padding: 0 8px;
}
.dsh-aihot-state-icon {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  margin-bottom: 14px;
  border-radius: 17px;
  background: linear-gradient(145deg, color-mix(in srgb, var(--ah-accent) 14%, transparent), color-mix(in srgb, var(--ah-warm) 10%, transparent));
  color: var(--ah-accent);
}
.dsh-aihot-state.is-error .dsh-aihot-state-icon {
  background: color-mix(in srgb, var(--ah-hot) 11%, transparent);
  color: var(--ah-hot);
}
.dsh-aihot-state-title { margin: 0; font-size: 15px; font-weight: 600; }
.dsh-aihot-state-body { margin: 6px 0 0; font-size: 12.5px; line-height: 1.6; color: var(--ah-muted); }
.dsh-aihot-retry {
  margin-top: 16px;
  height: 34px;
  padding: 0 18px;
  border: 1px solid var(--ah-line);
  border-radius: 9px;
  background: var(--ah-card);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
}
.dsh-aihot-retry:hover { border-color: var(--ah-line-strong); background: var(--dsw-alias-bg-layer-2); }
.dsh-aihot-intro { display: flex; flex-direction: column; align-items: center; max-width: 540px; margin: 8vh auto 0; text-align: center; }
.dsh-aihot-intro-icon {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  border-radius: 20px;
  background:
    linear-gradient(145deg,
      color-mix(in srgb, var(--ah-accent) 13%, transparent),
      color-mix(in srgb, var(--ah-warm) 9%, transparent));
  color: var(--ah-accent);
}
.dsh-aihot-intro h2 { margin: 0; font-size: 17px; font-weight: 700; }
.dsh-aihot-intro p { margin: 6px 0 0; font-size: 12.5px; line-height: 1.6; color: var(--ah-muted); }
.dsh-aihot-suggestions { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; margin-top: 16px; }
.dsh-aihot-suggestion {
  padding: 5px 12px;
  border: 1px solid var(--ah-line);
  border-radius: 999px;
  background: var(--ah-card);
  color: var(--ah-muted);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: color .15s ease, border-color .15s ease;
}
.dsh-aihot-suggestion:hover { border-color: color-mix(in srgb, var(--ah-accent) 40%, var(--ah-line)); color: var(--ah-accent); }
.dsh-aihot-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  padding: 9px 12px;
  border: 1px solid color-mix(in srgb, var(--ah-warm) 35%, var(--ah-line));
  border-radius: 10px;
  background: color-mix(in srgb, var(--ah-warm) 8%, transparent);
  font-size: 12px;
  color: var(--ah-muted);
}
.dsh-aihot-banner button {
  flex: none;
  border: 0;
  background: transparent;
  color: var(--ah-accent);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.dsh-aihot-skeleton { margin-bottom: 10px; padding: 17px; border: 1px solid var(--ah-line); border-radius: 14px; background: var(--ah-card); }
.dsh-aihot-sk {
  border-radius: 6px;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 8%, transparent);
  animation: dsh-aihot-pulse 1.5s ease-in-out infinite;
}
.dsh-aihot-sk-meta { width: 32%; height: 9px; margin-bottom: 11px; }
.dsh-aihot-sk-title { width: 88%; height: 15px; margin-bottom: 8px; }
.dsh-aihot-sk-title.short { width: 62%; }
.dsh-aihot-sk-line { width: 100%; height: 10px; margin-top: 7px; }
.dsh-aihot-sk-line.short { width: 72%; }
.dsh-aihot-railskeleton { margin: 2px 0 16px; padding: 14px; border: 1px solid var(--ah-line); border-radius: 16px; background: var(--ah-card); }
.dsh-aihot-railskgrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 10px; }
.dsh-aihot-railsk { height: 72px; border-radius: 11px; background: color-mix(in srgb, var(--dsw-alias-label-primary) 7%, transparent); animation: dsh-aihot-pulse 1.5s ease-in-out infinite; }
.dsh-aihot-more { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 18px 0 6px; }
.dsh-aihot-morebtn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 0 17px;
  border: 1px solid color-mix(in srgb, var(--ah-accent) 30%, var(--ah-line));
  border-radius: 999px;
  background: color-mix(in srgb, var(--ah-accent) 7%, var(--ah-card));
  color: var(--ah-accent);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.dsh-aihot-morebtn:hover { background: color-mix(in srgb, var(--ah-accent) 13%, var(--ah-card)); }
.dsh-aihot-morebtn:disabled { opacity: .6; cursor: default; }
.dsh-aihot-spinner {
  width: 15px;
  height: 15px;
  border: 2px solid color-mix(in srgb, var(--ah-accent) 22%, transparent);
  border-top-color: var(--ah-accent);
  border-radius: 999px;
  animation: dsh-aihot-spin .8s linear infinite;
}
.dsh-aihot-moretext { display: inline-flex; align-items: center; gap: 7px; color: var(--ah-muted); font-size: 11.5px; }
.dsh-aihot-end {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0 4px;
  color: var(--ah-muted);
  font-size: 11px;
  white-space: nowrap;
}
.dsh-aihot-end::before, .dsh-aihot-end::after { content: ''; flex: 1; height: 1px; background: var(--ah-line); }
.dsh-aihot-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 24px 0 4px;
  font-size: 11px;
  color: var(--ah-muted);
  text-align: center;
}
.dsh-aihot-footer a { color: var(--ah-muted); text-decoration: none; }
.dsh-aihot-footer a:hover { color: var(--ah-accent); }
.dsh-aihot-sentinel { width: 100%; height: 1px; }
.dsh-aihot-sr { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
.dsh-aihot-page :focus-visible { outline: 2px solid color-mix(in srgb, var(--ah-accent) 70%, transparent); outline-offset: 2px; }
@keyframes dsh-aihot-spin { to { transform: rotate(360deg); } }
@keyframes dsh-aihot-slide { 0% { transform: translateX(-110%); } 100% { transform: translateX(400%); } }
@keyframes dsh-aihot-pulse { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }
@media (max-width: 720px) {
  .dsh-aihot-hero-inner { padding-top: 14px; }
  .dsh-aihot-title { font-size: 18px; }
  .dsh-aihot-live { display: none; }
  .dsh-aihot-updated { display: none; }
  .dsh-aihot-mark { width: 38px; height: 38px; border-radius: 12px; }
  .dsh-aihot-site span { display: none; }
  .dsh-aihot-card { padding: 13px 14px; gap: 10px; }
  .dsh-aihot-hotcard { padding: 13px 14px; gap: 10px; }
  .dsh-aihot-rank { width: 38px; height: 38px; border-radius: 11px; font-size: 17px; }
  .dsh-aihot-source { max-width: 100%; }
  .dsh-aihot-feed-inner { padding-bottom: 24px; }
  .dsh-aihot-railgrid { grid-template-columns: repeat(3, 210px); overflow-x: auto; padding-bottom: 2px; }
  .dsh-aihot-railskgrid { grid-template-columns: repeat(3, 210px); overflow: hidden; }
  .dsh-aihot-railcard { scroll-snap-align: start; }
}
@media (max-width: 480px) {
  .dsh-aihot-tab { padding: 6px 11px; font-size: 12px; }
  .dsh-aihot-actions { gap: 3px; }
  .dsh-aihot-card-title { font-size: 14.5px; }
  .dsh-aihot-score { display: none; }
  .dsh-aihot-leadtitle { font-size: 15.5px; }
}
@media (prefers-reduced-motion: reduce) {
  .dsh-aihot-page *, .dsh-aihot-page *::before, .dsh-aihot-page *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
`;

    /* ------------------------------------------------------------------ */
    /* Components                                                          */
    /* ------------------------------------------------------------------ */

    function MetaLine({ item, t, lang }) {
      const label = categoryLabel(item.categoryKey, t);
      const parts = [];
      if (label) {
        parts.push(h('span', {
          className: 'dsh-aihot-cat ' + categoryClass(item.categoryKey),
          key: 'cat',
        }, label));
      }
      if (item.source) parts.push(h('span', { className: 'dsh-aihot-source', key: 'source', title: item.source }, item.source));
      if (item.publishedAt) {
        parts.push(h('span', { className: 'dsh-aihot-sep', key: 'sep', 'aria-hidden': 'true' }));
        parts.push(h('span', { key: 'time' }, formatClock(item.publishedAt, lang)));
      }
      if (!parts.length) return null;
      return h('div', { className: 'dsh-aihot-meta' }, parts);
    }

    function ScoreChip({ score, t, lang }) {
      if (typeof score !== 'number' || score <= 0) return null;
      return h('span', {
        className: 'dsh-aihot-score',
        title: t('scoreLabel') + ' ' + score,
      }, h(FlameGlyph, { size: 10 }), String(score));
    }

    function StoryCard({ item, t, lang, index, daily, sectionIndex }) {
      const links = [];
      if (item.originalUrl) links.push({ href: item.originalUrl, label: t('originalLabel'), primary: true });
      if (item.url && !links.some((link) => link.href === item.url)) {
        links.push({ href: item.url, label: t('aihotLabel'), primary: links.length === 0 });
      }

      return h('article', {
        className: 'dsh-aihot-card' + (daily ? ' is-daily' : ''),
      },
        daily && typeof index === 'number'
          ? h('div', { className: 'dsh-aihot-index', 'aria-hidden': 'true' }, String(index).padStart(2, '0'))
          : null,
        h('div', { className: 'dsh-aihot-cardbody' },
          h('div', { className: 'dsh-aihot-cardtop' },
            h(MetaLine, { item, t, lang }),
            h(ScoreChip, { score: item.score, t, lang })),
          h('h3', { className: 'dsh-aihot-card-title' },
            h('a', { href: item.url || item.originalUrl, target: '_blank', rel: 'noopener noreferrer' }, item.title)),
          item.summary ? h('p', { className: 'dsh-aihot-summary' }, item.summary) : null,
          item.reason
            ? h('div', { className: 'dsh-aihot-reason' },
                h('span', { className: 'dsh-aihot-reason-label' }, t('reasonLabel')),
                h('p', null, item.reason))
            : null,
          links.length
            ? h('div', { className: 'dsh-aihot-links' },
                links.map((link) => h('a', {
                  key: link.href,
                  className: 'dsh-aihot-link' + (link.primary ? ' is-primary' : ''),
                  href: link.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }, link.label, h(ExternalIcon))))
            : null));
    }

    function HotCard({ item, t, lang }) {
      const rankClass = item.rank === 1 ? 'is-gold' : item.rank === 2 ? 'is-silver' : item.rank === 3 ? 'is-bronze' : 'is-rest';
      const links = [];
      const seenLinks = new Set();
      const addLink = (href, label, primary) => {
        if (!href || seenLinks.has(href)) return;
        seenLinks.add(href);
        links.push({ href, label, primary });
      };
      addLink(item.storyUrl, t('storyLabel'), true);
      addLink(item.originalUrl, t('originalLabel'), links.length === 0);
      addLink(item.url, t('aihotLabel'), links.length === 0);
      const names = item.sourceNames.slice(0, 4);
      const extra = item.sourceNames.length - names.length;

      return h('article', { className: 'dsh-aihot-hotcard' },
        h('div', {
          className: 'dsh-aihot-rank ' + rankClass,
          'aria-label': 'No. ' + item.rank,
        }, String(item.rank)),
        h('div', { className: 'dsh-aihot-hotbody' },
          h('h3', { className: 'dsh-aihot-card-title' },
            h('a', { href: item.url || item.originalUrl, target: '_blank', rel: 'noopener noreferrer' }, item.title)),
          h('div', { className: 'dsh-aihot-hotstats' },
            item.source ? h('span', { className: 'dsh-aihot-source', title: item.source }, item.source) : null,
            item.sourceCount ? h('span', null, h('b', null, item.sourceCount), ' ' + fill(t('sourcesCount'), { n: item.sourceCount }).replace(/^\d+\s*/, '')) : null,
            item.signalCount ? h('span', null, h('b', null, item.signalCount), ' ' + fill(t('signalsCount'), { n: item.signalCount }).replace(/^\d+\s*/, '')) : null,
            item.latestAt ? h('span', null, t('latestProgress') + ' ' + formatStamp(item.latestAt, lang)) : null),
          names.length
            ? h('div', { className: 'dsh-aihot-names' },
                names.map((name) => h('span', { className: 'dsh-aihot-name', key: name, title: name }, name)),
                extra > 0 ? h('span', { className: 'dsh-aihot-name' }, '+' + extra) : null)
            : null,
          links.length
            ? h('div', { className: 'dsh-aihot-links' },
                links.map((link) => h('a', {
                  key: link.href,
                  className: 'dsh-aihot-link' + (link.primary ? ' is-primary' : ''),
                  href: link.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }, link.label, h(ExternalIcon))))
            : null));
    }

    function HotRail({ items, t, onMore }) {
      if (!items.length) return null;
      return h('section', { className: 'dsh-aihot-rail', 'aria-label': t('hotRail') },
        h('div', { className: 'dsh-aihot-railhead' },
          h('span', { className: 'dsh-aihot-railkick' }, h(FlameGlyph, { size: 12 }), t('hotRail')),
          h('button', { type: 'button', className: 'dsh-aihot-railmore', onClick: onMore },
            t('hotRailMore'), h(ArrowIcon))),
        h('div', { className: 'dsh-aihot-railgrid' },
          items.slice(0, 3).map((item) => h('a', {
            key: item.id,
            className: 'dsh-aihot-railcard',
            href: item.url || item.originalUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
          },
            h('span', { className: 'dsh-aihot-railrank' }, '#' + item.rank),
            h('span', { className: 'dsh-aihot-railtitle' }, item.title),
            h('span', { className: 'dsh-aihot-railmeta' }, fill(t('sourcesCount'), { n: item.sourceCount }))))));
    }

    function RailSkeleton() {
      return h('div', { className: 'dsh-aihot-railskeleton', 'aria-hidden': 'true' },
        h('div', { className: 'dsh-aihot-sk', style: { width: '24%', height: 10 } }),
        h('div', { className: 'dsh-aihot-railskgrid' },
          [0, 1, 2].map((index) => h('div', { className: 'dsh-aihot-railsk', key: index }))));
    }

    function DateHead({ group, t, lang }) {
      return h('div', { className: 'dsh-aihot-datehead' },
        h('strong', null, dateLabel(group.key, lang, t)),
        h('span', { className: 'dsh-aihot-datecount' }, group.items.length + ' ' + t('items')));
    }

    function Skeleton() {
      return h('div', { 'aria-hidden': 'true' },
        [0, 1, 2, 3].map((index) => h('div', { className: 'dsh-aihot-skeleton', key: index },
          h('div', { className: 'dsh-aihot-sk dsh-aihot-sk-meta' }),
          h('div', { className: 'dsh-aihot-sk dsh-aihot-sk-title' + (index % 2 === 1 ? ' short' : '') }),
          h('div', { className: 'dsh-aihot-sk dsh-aihot-sk-line' }),
          h('div', { className: 'dsh-aihot-sk dsh-aihot-sk-line short' }))));
    }

    function ErrorState({ message, onRetry, t }) {
      return h('div', { className: 'dsh-aihot-state is-error' },
        h('div', { className: 'dsh-aihot-state-icon' }, h(ErrorGlyph)),
        h('h2', { className: 'dsh-aihot-state-title' }, t('errorTitle')),
        h('p', { className: 'dsh-aihot-state-body' }, message),
        h('button', { type: 'button', className: 'dsh-aihot-retry', onClick: onRetry }, t('retry')));
    }

    function EmptyState({ t, search }) {
      return h('div', { className: 'dsh-aihot-state' },
        h('div', { className: 'dsh-aihot-state-icon' }, h(FlameGlyph, { size: 24 })),
        h('h2', { className: 'dsh-aihot-state-title' }, t(search ? 'emptySearchTitle' : 'emptyTitle')),
        h('p', { className: 'dsh-aihot-state-body' }, t(search ? 'emptySearchBody' : 'emptyBody')));
    }

    function SearchIntro({ t, onSearch }) {
      const suggestions = [t('suggestion1'), t('suggestion2'), t('suggestion3'), t('suggestion4')];
      return h('div', { className: 'dsh-aihot-intro' },
        h('div', { className: 'dsh-aihot-intro-icon' }, h(SearchIcon)),
        h('h2', null, t('searchTitle')),
        h('p', null, t('searchHint')),
        h('div', { className: 'dsh-aihot-suggestions' },
          suggestions.map((suggestion) => h('button', {
            type: 'button',
            className: 'dsh-aihot-suggestion',
            key: suggestion,
            onClick: () => onSearch(suggestion),
          }, suggestion))));
    }

    function Filters({ value, onChange, t }) {
      return h('div', { className: 'dsh-aihot-filters', role: 'group', 'aria-label': t('filterLabel') },
        FILTERS.map((key) => h('button', {
          key: key || 'all',
          type: 'button',
          className: 'dsh-aihot-filter' + (value === key ? ' is-active' : ''),
          'aria-pressed': value === key,
          onClick: () => onChange(key),
        }, key ? categoryLabel(key, t) : t('categoryAll'))));
    }

    function ListHead({ title, count, t }) {
      return h('div', { className: 'dsh-aihot-listhead' },
        h('span', { className: 'dsh-aihot-listtitle' }, title),
        h('span', { className: 'dsh-aihot-listcount' }, count + ' ' + t('items')));
    }

    function LoadArea({ list, onLoadMore, onRetry, t }) {
      if (list.loadingMore) {
        return h('div', { className: 'dsh-aihot-more' },
          h('span', { className: 'dsh-aihot-moretext' }, h('span', { className: 'dsh-aihot-spinner' }), t('loadingMore')));
      }
      if (list.error && list.items.length) {
        return h('div', { className: 'dsh-aihot-more' },
          h('button', { type: 'button', className: 'dsh-aihot-morebtn', onClick: onRetry }, t('loadMoreError')));
      }
      if (list.hasMore) {
        return h('div', { className: 'dsh-aihot-more' },
          h('button', { type: 'button', className: 'dsh-aihot-morebtn', onClick: onLoadMore },
            t('loadMore'), h(ArrowIcon)));
      }
      if (list.items.length >= PAGE_SIZE) {
        return h('div', { className: 'dsh-aihot-end' }, t('loadedAll'));
      }
      return null;
    }

    /* ------------------------------------------------------------------ */
    /* Page                                                                */
    /* ------------------------------------------------------------------ */

    function AihotPage({ t, lang }) {
      const [tab, setTab] = React.useState('picked');
      const [category, setCategory] = React.useState('');
      const [query, setQuery] = React.useState('');
      const [submitted, setSubmitted] = React.useState('');
      const [searchTouched, setSearchTouched] = React.useState(false);
      const [refreshTick, setRefreshTick] = React.useState(0);
      const [updatedAt, setUpdatedAt] = React.useState(null);

      const [list, setList] = React.useState({
        key: '',
        params: null,
        items: [],
        cursor: null,
        hasMore: false,
        loading: true,
        loadingMore: false,
        error: null,
      });
      const [hot, setHot] = React.useState({ items: [], loading: false, error: null });
      const [daily, setDaily] = React.useState({ report: null, loading: false, error: null });

      const feedRef = React.useRef(null);
      const sentinelRef = React.useRef(null);
      const searchRef = React.useRef(null);
      const listSeq = React.useRef(0);
      const listAbortRef = React.useRef(null);

      const listMode = tab === 'picked' || tab === 'all' || tab === 'search';
      const showIntro = tab === 'search' && !submitted;

      /* First page for the current list view. */
      React.useEffect(() => {
        if (!listMode) return undefined;
        if (showIntro) {
          setList((prev) => (prev.loading ? { ...prev, loading: false } : prev));
          return undefined;
        }

        const params = {
          tab,
          category: tab === 'search' ? '' : category,
          q: tab === 'search' ? submitted : '',
        };
        const key = viewKey(tab, params.category, submitted);
        const seq = listSeq.current + 1;
        listSeq.current = seq;
        if (listAbortRef.current) listAbortRef.current.abort();
        const controller = new AbortController();
        listAbortRef.current = controller;
        let timedOut = false;
        const timer = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, REQUEST_TIMEOUT_MS);

        setList((prev) => (prev.key === key
          ? { ...prev, loading: true, error: null }
          : {
              key,
              params,
              items: [],
              cursor: null,
              hasMore: false,
              loading: true,
              loadingMore: false,
              error: null,
            }));

        requestJson(buildItemsUrl(params), controller.signal)
          .then((json) => {
            if (seq !== listSeq.current) return;
            const items = (Array.isArray(json.items) ? json.items : [])
              .map(mapApiItem)
              .filter((item) => item.title && item.url);
            setList({
              key,
              params,
              items,
              cursor: (json.page && json.page.nextCursor) || null,
              hasMore: !!(json.page && json.page.hasMore),
              loading: false,
              loadingMore: false,
              error: null,
            });
            setUpdatedAt(Date.now());
          })
          .catch((error) => {
            if (seq !== listSeq.current) return;
            if (controller.signal.aborted && !timedOut) return;
            setList((prev) => (prev.key === key
              ? { ...prev, loading: false, error: errorKey(error, timedOut) }
              : prev));
          })
          .finally(() => clearTimeout(timer));

        return () => {
          clearTimeout(timer);
          controller.abort();
        };
      }, [tab, category, submitted, refreshTick, listMode, showIntro]);

      /* Trending, also used for the strip above Picks. */
      React.useEffect(() => {
        let cancelled = false;
        const controller = new AbortController();
        let timedOut = false;
        const timer = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, REQUEST_TIMEOUT_MS);

        setHot((prev) => ({ ...prev, loading: true, error: null }));
        requestJson(API + '/hot-topics', controller.signal)
          .then((json) => {
            if (cancelled) return;
            setHot({
              items: (Array.isArray(json.items) ? json.items : []).map(mapHot).filter((item) => item.title),
              loading: false,
              error: null,
            });
            setUpdatedAt(Date.now());
          })
          .catch((error) => {
            if (cancelled) return;
            setHot((prev) => ({ ...prev, loading: false, error: errorKey(error, timedOut) }));
          })
          .finally(() => clearTimeout(timer));

        return () => {
          cancelled = true;
          clearTimeout(timer);
          controller.abort();
        };
      }, [refreshTick]);

      /* Daily report, loaded whenever the tab is opened. */
      React.useEffect(() => {
        if (tab !== 'daily') return undefined;
        let cancelled = false;
        const controller = new AbortController();
        let timedOut = false;
        const timer = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, REQUEST_TIMEOUT_MS);

        setDaily((prev) => ({ ...prev, loading: true, error: null }));
        requestJson(API + '/dailies/latest', controller.signal)
          .then((json) => {
            if (cancelled) return;
            setDaily({ report: mapDaily(json), loading: false, error: null });
            setUpdatedAt(Date.now());
          })
          .catch((error) => {
            if (cancelled) return;
            setDaily((prev) => ({ ...prev, loading: false, error: errorKey(error, timedOut) }));
          })
          .finally(() => clearTimeout(timer));

        return () => {
          cancelled = true;
          clearTimeout(timer);
          controller.abort();
        };
      }, [tab, refreshTick]);

      /* Scroll to the top when the view changes. */
      React.useEffect(() => {
        const node = feedRef.current;
        if (node) node.scrollTop = 0;
      }, [tab, category, submitted]);

      /* Keyboard navigation between tabs. */
      const onTabKeyDown = (event) => {
        const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!delta) return;
        event.preventDefault();
        const nextIndex = (TABS.indexOf(tab) + delta + TABS.length) % TABS.length;
        setTab(TABS[nextIndex]);
        const listNode = event.currentTarget.parentElement;
        if (listNode) {
          const buttons = listNode.querySelectorAll('[role="tab"]');
          if (buttons[nextIndex]) buttons[nextIndex].focus();
        }
      };

      /* Auto refresh only when the reader is near the top. */
      React.useEffect(() => {
        const id = setInterval(() => {
          if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
          const node = feedRef.current;
          if (node && node.scrollTop > 160) return;
          setRefreshTick((value) => value + 1);
        }, AUTO_REFRESH_MS);
        return () => clearInterval(id);
      }, []);

      const refresh = () => {
        if (feedRef.current) feedRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        setRefreshTick((value) => value + 1);
      };

      const loadMore = () => {
        if (!list.hasMore || !list.cursor || list.loading || list.loadingMore) return;
        const key = list.key;
        const params = list.params;
        const cursor = list.cursor;
        if (!params) return;
        const seq = listSeq.current;
        const controller = new AbortController();
        let timedOut = false;
        const timer = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, REQUEST_TIMEOUT_MS);

        setList((prev) => (prev.key === key ? { ...prev, loadingMore: true, error: null } : prev));
        requestJson(buildItemsUrl(params, cursor), controller.signal)
          .then((json) => {
            if (seq !== listSeq.current) return;
            const next = (Array.isArray(json.items) ? json.items : [])
              .map(mapApiItem)
              .filter((item) => item.title && item.url);
            setList((prev) => {
              if (prev.key !== key) return prev;
              const seen = new Set(prev.items.map((item) => item.id));
              const merged = prev.items.concat(next.filter((item) => !seen.has(item.id)));
              return {
                ...prev,
                items: merged,
                cursor: (json.page && json.page.nextCursor) || null,
                hasMore: !!(json.page && json.page.hasMore),
                loadingMore: false,
              };
            });
            setUpdatedAt(Date.now());
          })
          .catch((error) => {
            if (seq !== listSeq.current) return;
            if (error && error.status === 400) {
              refresh();
              return;
            }
            setList((prev) => (prev.key === key
              ? { ...prev, loadingMore: false, error: errorKey(error, timedOut) }
              : prev));
          })
          .finally(() => clearTimeout(timer));
      };

      /* Infinite scroll sentinel. */
      React.useEffect(() => {
        const node = sentinelRef.current;
        const root = feedRef.current;
        if (!node || !root || !listMode || !list.hasMore || list.loading || list.loadingMore) return undefined;
        const observer = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) loadMore();
        }, { root, rootMargin: '320px 0px' });
        observer.observe(node);
        return () => observer.disconnect();
      }, [listMode, list.hasMore, list.loading, list.loadingMore, list.key, list.cursor]);

      React.useEffect(() => {
        if (tab === 'search') searchRef.current?.focus();
      }, [tab]);

      const submitSearch = (event) => {
        event?.preventDefault();
        const next = query.trim();
        if (next.length < 2) {
          setSearchTouched(true);
          return;
        }
        setSearchTouched(false);
        if (next === submitted) refresh();
        else setSubmitted(next);
      };

      const runSuggestion = (value) => {
        setQuery(value);
        setSearchTouched(false);
        if (value === submitted) refresh();
        else setSubmitted(value);
      };

      const clearSearch = () => {
        setQuery('');
        setSubmitted('');
        setSearchTouched(false);
        searchRef.current?.focus();
      };

      const busy = tab === 'hot' ? hot.loading : tab === 'daily' ? daily.loading : list.loading;
      const hasContent = tab === 'hot'
        ? hot.items.length > 0
        : tab === 'daily'
          ? !!daily.report
          : list.items.length > 0;
      const canRefresh = !busy && !showIntro;
      const activeError = tab === 'hot' ? hot.error : tab === 'daily' ? daily.error : list.error;
      const searchTooShort = searchTouched && query.trim().length > 0 && query.trim().length < 2;

      let content;
      if (tab === 'hot') {
        if (hot.error && !hot.items.length) {
          content = h(ErrorState, { message: t(hot.error), onRetry: refresh, t });
        } else if (!hot.items.length && hot.loading) {
          content = h(Skeleton);
        } else if (!hot.items.length) {
          content = h(EmptyState, { t });
        } else {
          content = h(React.Fragment, null,
            h(ListHead, { title: t('listHot'), count: hot.items.length, t }),
            h('div', { className: 'dsh-aihot-hint' }, t('hotHint')),
            hot.items.map((item) => h(HotCard, { key: item.id || String(item.rank), item, t, lang })));
        }
      } else if (tab === 'daily') {
        if (daily.error && !daily.report) {
          content = h(ErrorState, { message: t(daily.error), onRetry: refresh, t });
        } else if (!daily.report && daily.loading) {
          content = h(Skeleton);
        } else if (!daily.report) {
          content = h(EmptyState, { t });
        } else {
          const report = daily.report;
          content = h(React.Fragment, null,
            h(ListHead, {
              title: report.date ? t('listDaily') + ' · ' + report.date : t('listDaily'),
              count: report.sections.reduce((sum, section) => sum + section.items.length, 0),
              t,
            }),
            report.lead
              ? h('section', { className: 'dsh-aihot-leadcard' },
                  h('span', { className: 'dsh-aihot-leadbadge' }, t('leadLabel')),
                  h('h2', { className: 'dsh-aihot-leadtitle' },
                    h('a', { href: report.url || SITE_URL, target: '_blank', rel: 'noopener noreferrer' }, report.lead.title)),
                  report.lead.paragraph ? h('p', { className: 'dsh-aihot-leadpara' }, report.lead.paragraph) : null,
                  report.url
                    ? h('div', { className: 'dsh-aihot-leadlinks' },
                        h('a', { className: 'dsh-aihot-link is-primary', href: report.url, target: '_blank', rel: 'noopener noreferrer' },
                          t('aihotLabel'), h(ExternalIcon)))
                    : null)
              : null,
            report.sections.map((section, sectionIndex) => h('section', {
              className: 'dsh-aihot-section sec-' + (sectionIndex % 5),
              key: section.label + ':' + sectionIndex,
            },
              h('div', { className: 'dsh-aihot-sectionhead' },
                h('span', { className: 'dsh-aihot-sectiondot', 'aria-hidden': 'true' }),
                h('h2', null, section.label),
                h('span', { className: 'dsh-aihot-sectioncount' }, section.items.length)),
              section.items.map((item, index) => h(StoryCard, {
                key: (item.url || '') + ':' + index,
                item,
                t,
                lang,
                index: index + 1,
                daily: true,
                sectionIndex,
              })))));
        }
      } else if (showIntro) {
        content = h(SearchIntro, { t, onSearch: runSuggestion });
      } else if (list.error && !list.items.length) {
        content = h(ErrorState, { message: t(list.error), onRetry: refresh, t });
      } else if (!list.items.length && list.loading) {
        content = h(Skeleton);
      } else if (!list.items.length) {
        content = h(EmptyState, { t, search: tab === 'search' });
      } else {
        const groups = groupByDate(list.items);
        content = h(React.Fragment, null,
          tab === 'picked'
            ? (hot.items.length
                ? h(HotRail, { items: hot.items, t, onMore: () => setTab('hot') })
                : hot.loading ? h(RailSkeleton) : null)
            : null,
          h(ListHead, { title: listTitle(tab, submitted, t), count: list.items.length, t }),
          groups.map((group) => h('section', { key: group.key },
            h(DateHead, { group, t, lang }),
            group.items.map((item, index) => h(StoryCard, {
              key: (item.id || item.url || '') + ':' + index,
              item,
              t,
              lang,
            })))),
          list.hasMore ? h('div', { className: 'dsh-aihot-sentinel', ref: sentinelRef, 'aria-hidden': 'true' }) : null,
          h(LoadArea, { list, onLoadMore: loadMore, onRetry: loadMore, t }));
      }

      return h('section', { className: 'dsh-aihot-page', 'aria-label': t('title') },
        h('style', null, STYLES),
        h('header', { className: 'dsh-aihot-hero' },
          h('div', { className: 'dsh-aihot-hero-inner' },
            h('div', { className: 'dsh-aihot-top' },
              h('div', { className: 'dsh-aihot-brand' },
                h('div', { className: 'dsh-aihot-mark', 'aria-hidden': 'true' }, h(FlameGlyph, { size: 24 })),
                h('div', { className: 'dsh-aihot-brandcopy' },
                  h('div', { className: 'dsh-aihot-titlerow' },
                    h('h1', { className: 'dsh-aihot-title' }, t('title')),
                    h('span', { className: 'dsh-aihot-live' },
                      h('span', { className: 'dsh-aihot-livedot', 'aria-hidden': 'true' }), 'AIHOT')),
                  h('p', { className: 'dsh-aihot-subtitle' }, t('subtitle')))),
              h('div', { className: 'dsh-aihot-actions' },
                updatedAt
                  ? h('span', { className: 'dsh-aihot-updated' },
                      t('updated') + ' ' + formatClock(updatedAt, lang))
                  : null,
                h('button', {
                  type: 'button',
                  className: 'dsh-aihot-iconbtn' + (busy ? ' is-loading' : ''),
                  onClick: refresh,
                  disabled: !canRefresh,
                  title: t('ariaRefresh'),
                  'aria-label': t('ariaRefresh'),
                }, h(RefreshIcon)),
                h('a', {
                  className: 'dsh-aihot-site',
                  href: SITE_URL,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }, h('span', null, t('site')), h(ExternalIcon)))),
            h('div', {
              className: 'dsh-aihot-tabs',
              role: 'tablist',
              'aria-label': t('ariaTabs'),
            }, TABS.map((id) => h('button', {
              key: id,
              type: 'button',
              role: 'tab',
              id: 'dsh-aihot-tab-' + id,
              className: 'dsh-aihot-tab',
              'aria-selected': tab === id,
              'aria-controls': 'dsh-aihot-feed',
              tabIndex: tab === id ? 0 : -1,
              onClick: () => setTab(id),
              onKeyDown: onTabKeyDown,
            }, t(TAB_LABELS[id])))),
            tab === 'search'
              ? h('form', {
                  className: 'dsh-aihot-search',
                  role: 'search',
                  onSubmit: submitSearch,
                },
                  h('div', { className: 'dsh-aihot-field' },
                    h(SearchIcon),
                    h('input', {
                      ref: searchRef,
                      className: 'dsh-aihot-input',
                      type: 'text',
                      value: query,
                      onChange: (event) => {
                        setQuery(event.target.value);
                        setSearchTouched(false);
                      },
                      placeholder: t('searchPlaceholder'),
                      'aria-label': t('ariaSearch'),
                      autoComplete: 'off',
                      spellCheck: false,
                      enterKeyHint: 'search',
                    }),
                    query
                      ? h('button', {
                          type: 'button',
                          className: 'dsh-aihot-clear',
                          onClick: clearSearch,
                          'aria-label': t('clear'),
                        }, '×')
                      : null),
                  h('button', {
                    type: 'submit',
                    className: 'dsh-aihot-submit',
                    disabled: query.trim().length < 2,
                  }, t('searchAction')))
              : null,
            searchTooShort ? h('div', { className: 'dsh-aihot-searchhint' }, t('searchTooShort')) : null,
            busy && hasContent ? h('div', { className: 'dsh-aihot-progress', 'aria-hidden': 'true' }) : null)),
        h('main', {
          className: 'dsh-aihot-feed',
          ref: feedRef,
          id: 'dsh-aihot-feed',
          role: 'tabpanel',
          'aria-labelledby': 'dsh-aihot-tab-' + tab,
          'aria-busy': busy,
          'aria-label': t('ariaFeed'),
        },
          h('div', { className: 'dsh-aihot-feed-inner' },
            h('span', { className: 'dsh-aihot-sr', role: 'status', 'aria-live': 'polite' },
              busy ? t('loading') : contentCount(tab, list, hot, daily) + ' ' + t('items')),
            activeError && hasContent
              ? h('div', { className: 'dsh-aihot-banner' },
                  h('span', null, t(activeError)),
                  h('button', { type: 'button', onClick: refresh }, t('retry')))
              : null,
            (tab === 'picked' || tab === 'all') && !showIntro
              ? h(Filters, { value: category, onChange: setCategory, t })
              : null,
            content,
            h('footer', { className: 'dsh-aihot-footer' },
              h('span', null, t('footer')),
              h('span', { className: 'dsh-aihot-sep', 'aria-hidden': 'true' }),
              h('a', { href: SITE_URL, target: '_blank', rel: 'noopener noreferrer' }, 'aihot.news'),
              h('span', { className: 'dsh-aihot-sep', 'aria-hidden': 'true' }),
              h('span', null, t('disclaimer'))))));
    }

    function contentCount(tab, list, hot, daily) {
      if (tab === 'hot') return hot.items.length;
      if (tab === 'daily') {
        if (!daily.report) return 0;
        return daily.report.sections.reduce((sum, section) => sum + section.items.length, 0);
      }
      return list.items.length;
    }

    /* ------------------------------------------------------------------ */
    /* Plugin                                                              */
    /* ------------------------------------------------------------------ */

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(
          () => ctx.locale.register(NS, { zh, en }),
          'dsh-aihot: bilingual dictionaries',
        );

        const t = ctx.locale.bind(NS);
        const subscribeLocale = (listener) => (typeof ctx.on === 'function'
          ? ctx.on('locale/change', listener)
          : () => {});
        const readLocale = () => ctx.locale.getLocale?.()?.active ?? '';

        function AihotPanel() {
          const active = React.useSyncExternalStore(subscribeLocale, readLocale, readLocale);
          const lang = /^en/i.test(String(active || '')) ? 'en' : 'zh';
          return h(AihotPage, { t, lang });
        }

        ctx.slots.inject('main', () => {
          const stopPanel = ctx.slots.register({
            name: 'main',
            key: PANEL_ID,
            locale: NS,
          }, AihotPanel);

          const stopRow = ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
            name: 'sidebar.panellist',
            id: PANEL_ID,
            order: 12,
            label: () => t('nav'),
            locale: NS,
          }, SidebarIcon));

          return () => {
            stopRow();
            stopPanel();
          };
        });
      },
    };
  },
});
