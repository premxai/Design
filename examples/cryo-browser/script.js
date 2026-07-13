const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}

const records = [
  { type: 'archive', title: 'World Wide Web Project', url: 'info.cern.ch/hypertext/WWW/TheProject.html', text: 'A preserved overview of the first public web project: hypertext, servers, and open linking.', year: '1991 / CERN' },
  { type: 'protocol', title: 'RFC 1866 — Hypertext Markup Language', url: 'ietf.org/rfc/rfc1866.txt', text: 'A historical HTML specification from the open standards trail.', year: '1995 / IETF' },
  { type: 'people', title: 'The web’s original proposal', url: 'w3.org/History/1989/proposal.html', text: 'Tim Berners-Lee’s proposal for information management and linked documents.', year: '1989 / W3C' },
  { type: 'archive', title: 'Early web archive index', url: 'archive.org/details/earlyweb', text: 'Snapshots of sites, tools, and documents from the web before feeds.', year: '1994—2001 / ARCHIVE' },
  { type: 'protocol', title: 'The HTTP working group', url: 'www.ietf.org/wg/http', text: 'The standards body that keeps the web’s transfer layer public and inspectable.', year: 'ACTIVE / IETF' },
  { type: 'people', title: 'Community memory: web makers', url: 'webhistory.example/makers', text: 'An oral history index of people who built the early open web.', year: '1993—1999 / ORAL HISTORY' }
];

const resultContainer = document.querySelector('[data-search-results]');
const resultCount = document.querySelector('[data-result-count]');
const searchInput = document.querySelector('[data-search-input]');
const searchForm = document.querySelector('[data-search-form]');
let activeFilter = 'all';

function renderResults() {
  if (!resultContainer || !searchInput) return;
  const query = searchInput.value.trim().toLowerCase();
  const matched = records.filter((record) => {
    const text = `${record.title} ${record.url} ${record.text} ${record.year}`.toLowerCase();
    return (activeFilter === 'all' || record.type === activeFilter) && (!query || text.includes(query));
  });
  resultCount.textContent = `${matched.length} record${matched.length === 1 ? '' : 's'} / profile-free index`;
  resultContainer.innerHTML = matched.length
    ? matched.map((record, index) => `<article class="result"><span class="result-index">${String(index + 1).padStart(2, '0')}</span><div><a href="#">${record.title}</a><p>${record.text}</p><span class="result-meta">${record.url} / ${record.year} / ${record.type}</span></div></article>`).join('')
    : '<p class="empty-state">No archive record matched that query. Try “web”, “open”, or “history”.</p>';
}

if (searchForm) {
  searchForm.addEventListener('submit', (event) => { event.preventDefault(); renderResults(); });
  searchInput.addEventListener('input', renderResults);
  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach((item) => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      renderResults();
    });
  });
  renderResults();
}

const snippets = {
  javascript: `import { Cryo } from "@cryo/browser";\n\nconst cryo = new Cryo({\n  permissions: ["read:public", "follow:links"]\n});\n\nconst trail = await cryo.browse({\n  url: "https://info.cern.ch/",\n  include: ["visibleText", "sourceLedger"]\n});\n\nconsole.log(trail.sources);`,
  curl: `curl https://api.cryo.dev/v1/browse \\\n+  -H "Authorization: Bearer $CRYO_TOKEN" \\\n+  -H "Content-Type: application/json" \\\n+  -d '{\n    "url": "https://info.cern.ch/",\n    "permissions": ["read:public", "follow:links"],\n    "include": ["visibleText", "sourceLedger"]\n  }'`,
  mcp: `{\n  "mcpServers": {\n    "cryo": {\n      "command": "npx",\n      "args": ["-y", "@cryo/mcp-server"],\n      "env": {\n        "CRYO_PERMISSIONS": "read:public,follow:links"\n      }\n    }\n  }\n}`
};
const captions = { javascript: 'Browse with an explicit permission envelope.', curl: 'Call the browser layer directly and inspect the returned trace.', mcp: 'Expose a constrained, source-first browser surface to an agent.' };
const codeOutput = document.querySelector('[data-code-output] code');
const codeLanguage = document.querySelector('[data-code-language]');
const codeCaption = document.querySelector('[data-code-caption]');
let selectedCode = 'javascript';

function setSnippet(language) {
  if (!codeOutput) return;
  selectedCode = language;
  codeOutput.textContent = snippets[language];
  codeLanguage.textContent = language === 'javascript' ? 'JAVASCRIPT SDK' : language.toUpperCase();
  codeCaption.textContent = captions[language];
}

document.querySelectorAll('[data-code-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-code-tab]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    setSnippet(button.dataset.codeTab);
  });
});
if (codeOutput) setSnippet(selectedCode);

const copyButton = document.querySelector('[data-copy-code]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(snippets[selectedCode]); } catch { /* Keep the demo functional where clipboard access is unavailable. */ }
    copyButton.textContent = 'Copied to buffer';
    window.setTimeout(() => { copyButton.textContent = 'Copy snippet'; }, 1500);
  });
}

const agentForm = document.querySelector('[data-agent-form]');
if (agentForm) {
  const sources = document.querySelector('[data-agent-sources]');
  const log = document.querySelector('[data-agent-log]');
  const status = document.querySelector('[data-agent-status]');
  const count = document.querySelector('[data-trace-count]');
  agentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = document.querySelector('[data-agent-task]').value.trim() || 'the requested topic';
    const trace = [
      ['01', 'info.cern.ch/hypertext/WWW/TheProject.html'],
      ['02', 'w3.org/History/1989/proposal.html'],
      ['03', 'ietf.org/rfc/rfc1866.txt']
    ];
    status.textContent = 'COMPLETE / 3 SOURCES';
    count.textContent = '3 RECORDS';
    sources.innerHTML = trace.map(([id, url]) => `<li><span>${id}</span>${url} <b>✓</b></li>`).join('');
    log.innerHTML = `<p>&gt; TASK: ${task.replace(/[<>]/g, '')}</p><p>&gt; PERMISSION: read public pages / follow cited links</p><p>&gt; 03 primary sources added to ledger.</p><p>&gt; No forms submitted. No data written.</p><p>&gt; TASK COMPLETE. Operator retains control.</p>`;
  });
}
