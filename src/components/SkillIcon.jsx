const iconConfig = {
  HTML: {
    glow: "group-hover:border-orange-400/50 group-hover:shadow-orange-500/20",
    render: () => (
      <svg viewBox="0 0 128 128" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        />
        <path
          fill="#F16529"
          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        />
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        />
        <path
          fill="#FFFFFF"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        />
      </svg>
    ),
  },
  CSS: {
    glow: "group-hover:border-sky-400/50 group-hover:shadow-sky-500/20",
    render: () => (
      <svg viewBox="0 0 128 128" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#1572B6"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        />
        <path
          fill="#33A9DC"
          d="M64 116.8l36.378-10.086 8.559-95.878H64z"
        />
        <path
          fill="#EBEBEB"
          d="M64 52.455H34.72l1.236 13.763H64zm0-27.856H32.248l1.236 13.762H64zm0 63.599l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        />
        <path
          fill="#FFFFFF"
          d="M64 24.599v13.762h19.35L82.1 52.455H64v13.763h16.9l-1.598 17.849L64 88.21v14.319l28.167-7.82 2.433-28.491 3.877-41.619z"
        />
      </svg>
    ),
  },
  JavaScript: {
    glow: "group-hover:border-yellow-400/50 group-hover:shadow-yellow-500/20",
    render: () => (
      <svg viewBox="0 0 128 128" className="h-9 w-9" aria-hidden="true">
        <rect x="10" y="10" width="108" height="108" rx="16" fill="#F7DF1E" />
        <path
          fill="#111827"
          d="M69 64h-9.5v29.5c0 4.2-1.7 5.5-4.4 5.5-2.8 0-4.3-1.5-5.7-4l-7.5 4.5c2.2 4.7 6.5 8 13.4 8 8.3 0 13.7-4.4 13.7-13.7V64zm22.8-.7c-8.2 0-13.4 4.3-13.4 10.6 0 6.7 4.7 9.6 11.7 12.1l2.4.8c4.3 1.5 6 2.6 6 5.1 0 2.6-2.4 4.3-6.4 4.3-4.6 0-7.5-2-9.5-5l-7.4 4.4c2.8 5.2 8.2 8.6 17 8.6 9.4 0 15.6-4.7 15.6-11.9 0-6.8-4.3-9.7-12.1-12.5l-2.4-.9c-4-1.4-5.5-2.3-5.5-4.5 0-2 1.8-3.4 4.7-3.4 3.3 0 5.5 1.3 7.3 4l7.2-4.6c-2.6-4.5-6.9-7.1-13-7.1z"
        />
      </svg>
    ),
  },
  "React.js": {
    glow: "group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/20",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
        <g fill="none" stroke="#61DAFB" strokeWidth="1.35">
          <ellipse cx="12" cy="12" rx="10" ry="4.1" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.1"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.1"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
  "Tailwind CSS": {
    glow: "group-hover:border-sky-400/50 group-hover:shadow-sky-500/20",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#38BDF8"
          d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.742 1.907 1.353C13.389 10.85 14.525 12 17 12c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.742-1.907-1.353C15.611 7.15 14.475 6 12 6zM7 12c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.761.19 1.305.742 1.907 1.353C8.389 16.85 9.525 18 12 18c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.761-.19-1.305-.742-1.907-1.353C10.611 13.15 9.475 12 7 12z"
        />
      </svg>
    ),
  },
  Bootstrap: {
    glow: "group-hover:border-violet-400/50 group-hover:shadow-violet-500/20",
    render: () => (
      <svg viewBox="0 0 16 16" className="h-8 w-8" aria-hidden="true">
        <rect x="4" y="2.5" width="8" height="11" rx="1" fill="#FFFFFF" />
        <path
          fill="#7952B3"
          d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"
        />
        <path
          fill="#7952B3"
          d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"
        />
      </svg>
    ),
  },
  "Node.js": {
    glow: "group-hover:border-green-400/50 group-hover:shadow-green-500/20",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#5FA04E"
          d="M12 1.8a1.4 1.4 0 0 0-.7.19L3.2 6.66a1.4 1.4 0 0 0-.7 1.21v9.36a1.4 1.4 0 0 0 .7 1.21l8.1 4.67a1.4 1.4 0 0 0 1.4 0l8.1-4.67a1.4 1.4 0 0 0 .7-1.21V7.87a1.4 1.4 0 0 0-.7-1.21L12.7 1.99a1.4 1.4 0 0 0-.7-.19z"
        />
        <path
          fill="#FFFFFF"
          d="M10.9 8.2v6.05c0 .95-.46 1.35-1.25 1.35-.66 0-1.08-.34-1.36-.95l-1.5.9c.52 1.13 1.48 1.8 2.95 1.8 1.9 0 3.06-1.03 3.06-3.05V8.2H10.9zm4.72-.12c-1.78 0-2.85.94-2.85 2.34 0 1.45 1.04 2.13 2.57 2.66l.55.19c.95.33 1.33.58 1.33 1.15 0 .6-.55 1.01-1.42 1.01-1.02 0-1.66-.47-2.08-1.15l-1.49.94c.64 1.15 1.83 1.93 3.63 1.93 2.02 0 3.31-1.03 3.31-2.64 0-1.47-.96-2.13-2.66-2.71l-.55-.19c-.87-.3-1.22-.52-1.22-1.01 0-.45.41-.78 1.08-.78.73 0 1.22.3 1.62.9l1.46-.98c-.56-.98-1.5-1.56-2.88-1.56z"
        />
      </svg>
    ),
  },
  "Express.js": {
    glow: "group-hover:border-gray-300/50 group-hover:shadow-gray-300/15",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.4 14.9a4.1 4.1 0 0 1-3.65 1.85A4.25 4.25 0 0 1 2.5 12.5a4.25 4.25 0 0 1 4.25-4.25c2.25 0 3.85 1.55 3.95 4.1H2.6m11.1-4.1l6.8 8.5m0-8.5l-6.8 8.5"
        />
      </svg>
    ),
  },
  MongoDB: {
    glow: "group-hover:border-green-500/50 group-hover:shadow-green-500/20",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#3FA037"
          d="M12 2.2C9.1 5.9 7 9.4 7 13.4c0 3.6 2 6.1 4.5 7.2l.5 1.6V2.2z"
        />
        <path
          fill="#58B947"
          d="M12 2.2v20l.5-1.6c2.5-1.1 4.5-3.6 4.5-7.2 0-4-2.1-7.5-5-11.2z"
        />
        <path fill="#C4D3C2" d="M11.65 13.2h.7v8.9h-.7z" />
      </svg>
    ),
  },
  Git: {
    glow: "group-hover:border-orange-500/50 group-hover:shadow-orange-500/20",
    render: () => (
      <svg viewBox="0 0 16 16" className="h-8 w-8" aria-hidden="true">
        <path
          fill="#F05032"
          d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"
        />
      </svg>
    ),
  },
  GitHub: {
    glow: "group-hover:border-purple-300/50 group-hover:shadow-purple-400/20",
    render: () => (
      <svg viewBox="0 0 16 16" className="h-8 w-8" aria-hidden="true">
        <path
          fill="#F8FAFC"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
        />
      </svg>
    ),
  },
  Postman: {
    glow: "group-hover:border-orange-400/50 group-hover:shadow-orange-500/20",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <g transform="rotate(-35 12 12)">
          <path
            fill="#FFFFFF"
            d="M12 5.2c-2.6 0-4.5 1.9-4.5 4.5v5.1l2-1.4 2.5 1.8 2.5-1.8 2 1.4V9.7c0-2.6-1.9-4.5-4.5-4.5z"
          />
          <circle cx="12" cy="9.6" r="1.65" fill="#FF6C37" />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            d="M6.2 14.8c3.6 1.3 8 1.3 11.6 0"
          />
        </g>
      </svg>
    ),
  },
  Vercel: {
    glow: "group-hover:border-white/50 group-hover:shadow-white/15",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path fill="#FFFFFF" d="M12 3.5L21.5 20H2.5L12 3.5z" />
      </svg>
    ),
  },
  Netlify: {
    glow: "group-hover:border-teal-300/50 group-hover:shadow-teal-400/20",
    render: () => (
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          fill="#00C7B7"
          d="M12 2L22 12 12 22 2 12 12 2z"
        />
        <path
          fill="none"
          stroke="#080b1c"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M7 12h10M12 7v10M8.5 8.5l7 7M8.5 15.5l7-7"
        />
        <path
          fill="#FFFFFF"
          d="M12 9.4L14.6 12 12 14.6 9.4 12 12 9.4z"
        />
      </svg>
    ),
  },
};

function SkillIcon({ skill }) {
  const config = iconConfig[skill];

  return (
    <div
      className={`skill-mark mb-4 border-white/15 bg-white/[0.04] shadow-lg ${
        config?.glow || "group-hover:border-purple-400/50"
      }`}
    >
      {config ? (
        config.render()
      ) : (
        <span className="font-mono text-sm font-bold text-purple-400">
          {skill.slice(0, 2)}
        </span>
      )}
    </div>
  );
}

export default SkillIcon;
