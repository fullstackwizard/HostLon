import "./assets/globalcss/App.css";

function App() {
  return (
    <>
      <div>
        <div
          className="fixed appearance-none text-black accent-auto items-end aspect-auto box-decoration-slice shadow-none box-content break-after-auto break-before-auto break-inside-auto caption-top caret-black clear-none cursor-auto flex fill-black flex-col flex-nowrap float-none h-0 hyphens-manual isolation-auto max-h-none max-w-none min-h-0 min-w-0 object-fill object-[50%_50%] opacity-100 order-none outline-offset-0 pointer-events-auto resize-none scroll-auto snap-align-none snap-none stroke-none stroke-[1px] table-auto text-start indent-[0] text-clip normal-case underline-offset-auto touch-auto origin-[0px_0px] select-auto align-baseline visible w-0 will-change-auto z-[9999] border-separate left-[1346px] right-5 top-5 bottom-[587px] [forced-color-adjust:auto] [math-depth:0] [position-anchor:auto] [text-size-adjust:auto] [inset-area:none] [position-area:none] [text-orientation:mixed] [text-rendering:auto] [-webkit-font-smoothing:auto] [-webkit-locale:auto] [-webkit-text-orientation:vertical-right] [-webkit-writing-mode:horizontal-tb] [writing-mode:horizontal-tb] [zoom:1] [alignment-baseline:auto] [anchor-name:none] [animation-composition:replace] [app-region:none] [backdrop-filter:none] [backface-visibility:visible] [baseline-shift:0px] [baseline-source:auto] [block-size:0px] [border-end-end-radius:0px] [border-end-start-radius:0px] [border-start-end-radius:0px] [border-start-start-radius:0px] [buffered-rendering:auto] [clip:auto] [clip-path:none] [clip-rule:nonzero] [color-interpolation:srgb] [color-interpolation-filters:linearrgb] [color-rendering:auto] [column-fill:balance] [column-span:none] [contain:none] [contain-intrinsic-block-size:none] [contain-intrinsic-inline-size:none] [content-visibility:visible] [counter-increment:none] [counter-reset:none] [counter-set:none] [cx:0px] [cy:0px] [d:none] [dominant-baseline:auto] [empty-cells:show] [field-sizing:fixed] [fill-opacity:1] [fill-rule:nonzero] [filter:none] [flood-color:rgb(0,0,0)] [flood-opacity:1] [hyphenate-character:auto] [hyphenate-limit-chars:auto] [image-orientation:from-image] [image-rendering:auto] [inline-size:0px] [interpolate-size:numeric-only] [lighting-color:rgb(255,255,255)] [line-break:auto] [mask-type:luminance] [max-block-size:none] [max-inline-size:none] [min-block-size:0px] [min-inline-size:0px] [object-view-box:none] [orphans:2] [overflow-anchor:auto] [overflow-clip-margin:0px] [overlay:none] [overscroll-behavior-block:auto] [overscroll-behavior-inline:auto] [page:auto] [perspective:none] [perspective-origin:0px 0px] [position-visibility:always] [quotes:auto] [r:0px] [rotate:none] [ruby-align:space-around] [ruby-position:over] [rx:auto] [ry:auto] [scale:none] [scrollbar-color:auto] [scrollbar-gutter:auto] [scrollbar-width:auto] [shape-image-threshold:0] [shape-margin:0px] [shape-outside:none] [shape-rendering:auto] [stop-color:rgb(0,0,0)] [stop-opacity:1] [stroke-dasharray:none] [stroke-dashoffset:0px] [stroke-linecap:butt] [stroke-linejoin:miter] [stroke-miterlimit:4] [stroke-opacity:1] [tab-size:8] [text-align-last:auto] [text-anchor:start] [text-combine-upright:none] [text-decoration-skip-ink:auto] [text-emphasis-position:over] [text-shadow:none] [text-underline-position:auto] [timeline-scope:none] [transform:none] [transform-box:view-box] [transform-style:flat] [translate:none] [vector-effect:none] [view-transition-class:none] [view-transition-name:none] [-webkit-box-align:stretch] [-webkit-box-decoration-break:slice] [-webkit-box-flex:0] [-webkit-box-ordinal-group:1] [-webkit-box-orient:horizontal] [-webkit-box-pack:start] [-webkit-box-reflect:none] [-webkit-line-break:auto] [-webkit-line-clamp:none] [-webkit-print-color-adjust:economy] [-webkit-rtl-ordering:logical] [-webkit-ruby-position:before] [-webkit-tap-highlight-color:rgba(0,0,0,0.18)] [-webkit-text-combine:none] [-webkit-text-decorations-in-effect:none] [-webkit-text-fill-color:rgb(0,0,0)] [-webkit-text-security:none] [-webkit-user-drag:auto] [white-space-collapse:collapse] [widows:2] [word-spacing:0px] [x:0px] [y:0px]"
          id="toast-container"
        />
        <header className="w-full flex items-center justify-between gap-10 mx-auto px-8 py-4 hWEHCJ">
          <a href="#" className="flex cursor-pointer items-center gap-3">
            <svg
              viewBox="0 0 238 238"
              fill="none"
              className="size-6 text-primary"
            >
              <path
                fill="currentColor"
                d="M236.738 121.995C236.743 125.448 236.415 128.865 235.749 132.25C235.077 135.635 234.082 138.922 232.764 142.109C231.441 145.297 229.822 148.328 227.9 151.193C225.978 154.063 223.796 156.708 221.348 159.146L162.816 217.651C161.816 216.88 160.874 216.052 159.978 215.161C159.249 214.432 158.556 213.667 157.905 212.87C157.254 212.073 156.639 211.245 156.066 210.385C155.493 209.531 154.967 208.646 154.478 207.74C153.993 206.828 153.556 205.896 153.16 204.943C152.764 203.995 152.421 203.021 152.124 202.036C151.822 201.052 151.572 200.052 151.374 199.042C151.171 198.031 151.02 197.01 150.921 195.984C150.816 194.958 150.77 193.932 150.77 192.901C150.77 191.87 150.816 190.844 150.921 189.818C151.02 188.792 151.171 187.771 151.374 186.76C151.572 185.75 151.822 184.75 152.124 183.766C152.421 182.776 152.764 181.807 153.16 180.854C153.556 179.906 153.993 178.974 154.478 178.063C154.967 177.156 155.493 176.271 156.066 175.417C156.639 174.557 157.254 173.729 157.905 172.932C158.556 172.135 159.249 171.37 159.978 170.641L211.41 119.203L159.988 67.7656C159.27 67.0417 158.582 66.2865 157.931 65.4948C157.285 64.7031 156.676 63.8854 156.103 63.0313C155.535 62.1823 155.009 61.3073 154.525 60.4063C154.04 59.5052 153.603 58.5833 153.212 57.6406C152.816 56.6979 152.467 55.7396 152.171 54.7604C151.868 53.7813 151.613 52.7917 151.41 51.7917C151.207 50.7865 151.051 49.7813 150.947 48.7604C150.842 47.7448 150.785 46.724 150.78 45.7031C150.775 44.6771 150.816 43.6615 150.91 42.6406C151.004 41.625 151.145 40.6094 151.337 39.6094C151.53 38.6042 151.77 37.6094 152.056 36.6302C152.348 35.6458 152.681 34.6823 153.066 33.7344C153.447 32.7865 153.874 31.8594 154.348 30.9531C154.822 30.0469 155.337 29.1615 155.895 28.3073C156.452 27.4479 157.051 26.625 157.691 25.8229C158.332 25.026 159.004 24.2604 159.717 23.5312C160.712 24.3125 161.655 25.151 162.546 26.0469L221.348 84.849C223.796 87.2813 225.983 89.9323 227.905 92.7969C229.827 95.6667 231.447 98.6927 232.764 101.88C234.087 105.068 235.082 108.354 235.749 111.74C236.421 115.125 236.749 118.542 236.738 121.995Z"
                className
              />
              <path
                fill="currentColor"
                d="M2.13501 116.621C2.12459 113.173 2.45271 109.751 3.12459 106.366C3.79126 102.98 4.78605 99.694 6.10896 96.5065C7.42667 93.319 9.05167 90.293 10.9683 87.4232C12.8902 84.5586 15.0777 81.9076 17.5204 79.4753L76.0517 20.9648C77.0517 21.7357 77.9996 22.569 78.8954 23.4596C79.6194 24.1888 80.3121 24.9492 80.9683 25.7461C81.6194 26.543 82.234 27.3711 82.8017 28.2305C83.3746 29.0846 83.9058 29.9701 84.3902 30.8815C84.8746 31.7878 85.3173 32.7201 85.7079 33.6732C86.1038 34.6263 86.4527 35.5951 86.7496 36.5794C87.0465 37.569 87.2965 38.5638 87.4996 39.5742C87.6975 40.5898 87.8486 41.6055 87.9527 42.6315C88.0517 43.6576 88.1038 44.6836 88.1038 45.7148C88.1038 46.7461 88.0517 47.7773 87.9527 48.8034C87.8486 49.8242 87.6975 50.8451 87.4996 51.8555C87.2965 52.8659 87.0465 53.8659 86.7496 54.8503C86.4527 55.8398 86.1038 56.8086 85.7079 57.7617C85.3173 58.7148 84.8746 59.6419 84.3902 60.5534C83.9058 61.4596 83.3746 62.3451 82.8017 63.2044C82.234 64.0586 81.6194 64.8867 80.9683 65.6836C80.3121 66.4805 79.6194 67.2461 78.8954 67.9753L27.4631 119.418L78.8798 170.855C79.6038 171.574 80.2913 172.335 80.9371 173.121C81.5881 173.913 82.1975 174.736 82.7652 175.585C83.3329 176.434 83.859 177.309 84.3433 178.21C84.8277 179.111 85.2652 180.033 85.661 180.975C86.0569 181.918 86.4006 182.882 86.7027 183.855C87.0048 184.835 87.2548 185.824 87.4579 186.829C87.661 187.829 87.8173 188.84 87.9215 189.855C88.0308 190.871 88.0829 191.892 88.0933 192.913C88.0986 193.939 88.0517 194.96 87.9579 195.975C87.8694 196.996 87.7236 198.007 87.5308 199.012C87.3433 200.017 87.1038 201.007 86.8121 201.991C86.5256 202.97 86.1871 203.934 85.8069 204.882C85.4267 205.829 84.9944 206.757 84.5256 207.668C84.0517 208.574 83.536 209.454 82.9788 210.309C82.4163 211.168 81.8173 211.996 81.1819 212.793C80.5413 213.59 79.8642 214.355 79.1506 215.09C78.1558 214.309 77.2131 213.47 76.3225 212.574L17.5204 153.767C15.0725 151.335 12.8902 148.684 10.9683 145.819C9.04646 142.954 7.42667 139.923 6.10376 136.736C4.78084 133.548 3.78605 130.262 3.11938 126.876C2.45271 123.491 2.12459 120.074 2.13501 116.621Z"
                className
              />
            </svg>
            <span className="text-xl leading-7 font-bold">Reweb</span>
          </a>
          <div className="flex items-center gap-10">
            <nav className="hidden items-center justify-end gap-10 md:flex">
              <a
                href="#"
                className="flex cursor-pointer items-center text-lg leading-7 font-medium text-[#788287] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration sm:text-sm sm:leading-5"
              >
                About
              </a>
              <a
                href="#"
                className="flex cursor-pointer items-center text-lg leading-7 font-medium text-[#788287] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration sm:text-sm sm:leading-5"
              >
                Docs
              </a>
              <a
                href="#"
                className="flex cursor-pointer items-center text-lg leading-7 font-medium text-[#788287] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration sm:text-sm sm:leading-5"
              >
                Blog
              </a>
              <a
                href="#"
                className="flex cursor-pointer items-center text-lg leading-7 font-medium text-[#788287] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration sm:text-sm sm:leading-5"
              >
                Pricing
              </a>
            </nav>
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="#"
                className="inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap bg-[#7358f9] text-sm leading-5 font-medium text-slate-50 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration px-4 py-2 rounded-[10px]"
              >
                Get Started
              </a>
            </div>
          </div>
          <button className="text-[100%] normal-case bg-transparent bg-none cursor-pointer m-0 p-0 md:hidden [appearance:button]">
            <svg
              className="lucide lucide-menu"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y2={12} y1={12} x2={20} x1={4} />
              <line y2={6} y1={6} x2={20} x1={4} />
              <line y2={18} y1={18} x2={20} x1={4} />
            </svg>
          </button>
        </header>
        <section className="w-full flex flex-col items-center gap-8 mx-auto pt-20 pb-28 px-8 sm:gap-10 jgJlIx">
          <div className="flex cursor-pointer items-center gap-1 border bg-[#f0f0ff] px-3 py-0.5 rounded-full">
            <span className="text-sm leading-5 text-neutral-900">
              Announcing our seed round
            </span>
            <svg
              className="lucide lucide-arrow-right"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={16}
              width={16}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
          <h1 className="max-w-2xl text-center text-4xl leading-10 font-semibold -tracking-wide m-0 sm:text-5xl sm:leading-none">
            Build beautiful landing pages in minutes with Reweb
          </h1>
          <p className="max-w-lg text-center text-lg leading-7 text-[#788287] m-0 sm:text-xl sm:leading-7">
            Build at the speed of no-code. Export to Next.js &amp; Tailwind code
            and customize without limits.
          </p>
          <div className="grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-3">
            <a
              href="#"
              className="inline-flex h-11 cursor-pointer items-center justify-center whitespace-nowrap border bg-white text-sm leading-5 font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration px-8 rounded-[10px] border-[#e6e6e6]"
            >
              Learn More
            </a>
            <a
              href="#"
              className="inline-flex h-11 cursor-pointer items-center justify-center whitespace-nowrap bg-[#7358f9] text-sm leading-5 font-medium text-slate-50 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration px-8 rounded-[10px]"
            >
              Get Started
            </a>
          </div>
          <div className="relative sm:mt-8">
            <img
              src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/dashboard.png"
              className="inline-block align-middle max-w-full h-auto border shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.1)_0_4px_6px_-4px] text-transparent rounded-xl border-[#e6e6e6]"
              data-nimg={1}
              decoding="async"
              height={698}
              width={1000}
              alt="SaaS Dashboard"
            />
            <div className="absolute -z-10 bg-[rgba(115,88,249,0.2)] blur-[180px] inset-0" />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-10 mx-auto px-8 py-24 RzbisN">
          <h2 className="text-center text-lg leading-8 font-semibold m-0">
            Trusted by the world's best companies
          </h2>
          <div className="grid w-full grid-cols-[repeat(4,minmax(0px,1fr))] gap-10 sm:grid-cols-[repeat(6,minmax(0px,1fr))] sm:gap-12 lg:grid-cols-[repeat(5,minmax(0px,1fr))]">
            <div className="relative col-[span_2/span_2] h-11 flex-1 sm:h-10 lg:col-[span_1/span_1]">
              <img
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/microsoft.webp"
                className="inline-block align-middle max-w-full h-full object-contain absolute w-full text-transparent inset-0"
                data-nimg="fill"
                decoding="async"
                loading="lazy"
                alt="Company Logo"
              />
            </div>
            <div className="relative col-[span_2/span_2] h-11 flex-1 sm:h-10 lg:col-[span_1/span_1]">
              <img
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/google.png"
                className="inline-block align-middle max-w-full h-full object-contain absolute w-full text-transparent inset-0"
                data-nimg="fill"
                decoding="async"
                loading="lazy"
                alt="Company Logo"
              />
            </div>
            <div className="relative col-[span_2/span_2] h-11 flex-1 sm:h-10 lg:col-[span_1/span_1]">
              <img
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/amazon.png"
                className="inline-block align-middle max-w-full h-full object-contain absolute w-full text-transparent inset-0"
                data-nimg="fill"
                decoding="async"
                loading="lazy"
                alt="Company Logo"
              />
            </div>
            <div className="relative col-[span_2/span_2] h-11 flex-1 sm:col-start-2 sm:h-10 lg:col-[span_1/span_1]">
              <img
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/netflix.png"
                className="inline-block align-middle max-w-full h-full object-contain absolute w-full text-transparent inset-0"
                data-nimg="fill"
                decoding="async"
                loading="lazy"
                alt="Company Logo"
              />
            </div>
            <div className="relative col-[span_2/span_2] col-start-2 h-11 flex-1 sm:col-start-auto sm:h-10 lg:col-[span_1/span_1]">
              <img
                src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/facebook.png"
                className="inline-block align-middle max-w-full h-full object-contain absolute w-full text-transparent inset-0"
                data-nimg="fill"
                decoding="async"
                loading="lazy"
                alt="Company Logo"
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6 mx-auto px-8 py-24 sm:gap-7 saOKXt">
          <div className="flex flex-col gap-3">
            <span className="text-center font-bold uppercase text-[#7358f9]">
              Features
            </span>
            <h2 className="text-balance text-center text-3xl leading-9 font-semibold -tracking-wide m-0 sm:text-4xl sm:leading-10">
              Build fast and stay flexible
            </h2>
          </div>
          <p className="max-w-xl text-balance text-center text-lg leading-7 text-[#788287] m-0">
            Reweb brings the best of two worlds together: the speed of
            development of no-code tools, and the flexibility of code.
          </p>
          <div className="relative z-10 grid max-w-screen-xl grid-cols-[repeat(1,minmax(0px,1fr))] mx-auto py-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] lg:grid-cols-[repeat(4,minmax(0px,1fr))]">
            <div className="relative flex flex-col py-10 lg:border-b lg:border-l lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(to_top,rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-frame text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y2={6} y1={6} x2={2} x1={22} />
                  <line y2={18} y1={18} x2={2} x1={22} />
                  <line y2={22} y1={2} x2={6} x1={6} />
                  <line y2={22} y1={2} x2={18} x1={18} />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">Visual Builder</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                Edit HTML, Tailwind &amp; React components visually.
              </p>
            </div>
            <div className="relative flex flex-col py-10 lg:border-b lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(to_top,rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-gauge text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 14 4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">Ease of use</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                No new mental models to learn. It feels like magic.
              </p>
            </div>
            <div className="relative flex flex-col py-10 lg:border-b lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(to_top,rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-download text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line y2={3} y1={15} x2={12} x1={12} />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">Code Export</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                Export your website to a Next.js &amp; Tailwind app.
              </p>
            </div>
            <div className="relative flex flex-col py-10 lg:border-b lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(to_top,rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-globe text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r={10} cy={12} cx={12} />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">No lock-in</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                Customize without limitations and host anywhere.
              </p>
            </div>
            <div className="relative flex flex-col py-10 lg:border-l lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-sparkles text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">Modern tech stack</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                Works with Next.js, Tailwind and Shadcn UI.
              </p>
            </div>
            <div className="relative flex flex-col py-10 lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-layout-dashboard text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect rx={1} y={3} x={3} height={9} width={7} />
                  <rect rx={1} y={3} x={14} height={5} width={7} />
                  <rect rx={1} y={12} x={14} height={9} width={7} />
                  <rect rx={1} y={16} x={3} height={5} width={7} />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">Pre-made templates</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                Get started quickly with ready templates and sections.
              </p>
            </div>
            <div className="relative flex flex-col py-10 lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-palette text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle fill="currentColor" r=".5" cy="6.5" cx="13.5" />
                  <circle fill="currentColor" r=".5" cy="10.5" cx="17.5" />
                  <circle fill="currentColor" r=".5" cy="7.5" cx="8.5" />
                  <circle fill="currentColor" r=".5" cy="12.5" cx="6.5" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">AI Theme Generation</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                Generate beautiful themes and color palettes with AI.
              </p>
            </div>
            <div className="relative flex flex-col py-10 lg:border-r">
              <div className="pointer-events-none absolute w-full h-full bg-[linear-gradient(rgba(115,88,249,0.2),rgba(0,0,0,0))] opacity-0 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter] ease-in-out duration-[0.2s] inset-0 [animation-duration:.2s]" />
              <div className="relative z-10 mb-4 px-10">
                <svg
                  className="lucide lucide-code-xml text-primary"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <div className="relative z-10 text-lg leading-7 font-bold mb-2 px-10">
                <div className="absolute h-6 w-1 origin-[center_center] bg-neutral-300 transition-all ease-in-out duration-[0.2s] rounded-tr-full rounded-br-full left-0 inset-y-0 [animation-duration:.2s]" />
                <span className="inline-block">Built for developers</span>
              </div>
              <p className="relative z-10 max-w-xs text-sm leading-5 text-[#788287] m-0 px-10">
                Reweb is built by developers for developers.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6 mx-auto px-8 py-24 sm:gap-7 TKOEUe">
          <div className="flex flex-col gap-3">
            <span className="text-center font-bold uppercase text-[#7358f9]">
              Testimonials
            </span>
            <h2 className="text-balance text-center text-3xl leading-9 font-semibold -tracking-wide m-0 sm:text-4xl sm:leading-10">
              What our users say
            </h2>
          </div>
          <p className="max-w-lg text-balance text-center text-lg leading-7 text-[#788287] m-0">
            What developers and founders of top companies around the internet
            are saying about Reweb.
          </p>
          <div className="columns-1 gap-7 md:columns-2 lg:columns-3">
            <div className="inline-block break-inside-avoid border bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.1)_0_4px_6px_-4px] mt-7 rounded-xl">
              <div className="flex flex-col items-start gap-4 p-7">
                <p className="text-[#292929] m-0">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
                </p>
                <div className="flex w-full items-center gap-4 pt-4 border-b-0 border-t">
                  <div className="relative w-10 h-10">
                    <img
                      src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-1.avif"
                      className="inline-block align-middle max-w-full h-full object-cover absolute w-full text-transparent rounded-full inset-0"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
                      alt="Picture"
                    />
                  </div>
                  <div className>
                    <p className="font-semibold leading-none text-[#292929] m-0">
                      John
                    </p>
                    <p className="leading-none text-[#788287] mt-1 mb-0 mx-0">
                      @johndoe
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block break-inside-avoid border bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.1)_0_4px_6px_-4px] mt-7 rounded-xl">
              <div className="flex flex-col items-start gap-4 p-7">
                <p className="text-[#292929] m-0">
                  "Mauris tincidunt porttitor risus, et posuere erat malesuada
                  eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci
                  ornare, imperdiet metus vel."
                </p>
                <div className="flex w-full items-center gap-4 pt-4 border-b-0 border-t">
                  <div className="relative w-10 h-10">
                    <img
                      src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-2.avif"
                      className="inline-block align-middle max-w-full h-full object-cover absolute w-full text-transparent rounded-full inset-0"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
                      alt="Picture"
                    />
                  </div>
                  <div className>
                    <p className="font-semibold leading-none text-[#292929] m-0">
                      Max
                    </p>
                    <p className="leading-none text-[#788287] mt-1 mb-0 mx-0">
                      @maxcook
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block break-inside-avoid border bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.1)_0_4px_6px_-4px] mt-7 rounded-xl">
              <div className="flex flex-col items-start gap-4 p-7">
                <p className="text-[#292929] m-0">
                  "Curabitur at quam eget eros semper euismod vitae at neque. Ut
                  ultrices ut tortor et feugiat. Etiam vitae nisi eleifend,
                  blandit ligula quis, sodales neque."
                </p>
                <div className="flex w-full items-center gap-4 pt-4 border-b-0 border-t">
                  <div className="relative w-10 h-10">
                    <img
                      src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-3.avif"
                      className="inline-block align-middle max-w-full h-full object-cover absolute w-full text-transparent rounded-full inset-0"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
                      alt="Picture"
                    />
                  </div>
                  <div className>
                    <p className="font-semibold leading-none text-[#292929] m-0">
                      Bob
                    </p>
                    <p className="leading-none text-[#788287] mt-1 mb-0 mx-0">
                      @thisisbob
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block break-inside-avoid border bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.1)_0_4px_6px_-4px] mt-7 rounded-xl">
              <div className="flex flex-col items-start gap-4 p-7">
                <p className="text-[#292929] m-0">
                  "Suspendisse a velit elit. Curabitur augue libero, vulputate
                  sed dui id, sodales venenatis sem. Suspendisse dapibus neque
                  eu justo volutpat gravida."
                </p>
                <div className="flex w-full items-center gap-4 pt-4 border-b-0 border-t">
                  <div className="relative w-10 h-10">
                    <img
                      src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-4.avif"
                      className="inline-block align-middle max-w-full h-full object-cover absolute w-full text-transparent rounded-full inset-0"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
                      alt="Picture"
                    />
                  </div>
                  <div className>
                    <p className="font-semibold leading-none text-[#292929] m-0">
                      Emily
                    </p>
                    <p className="leading-none text-[#788287] mt-1 mb-0 mx-0">
                      @emilysmith
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block break-inside-avoid border bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.1)_0_4px_6px_-4px] mt-7 rounded-xl">
              <div className="flex flex-col items-start gap-4 p-7">
                <p className="text-[#292929] m-0">
                  "Vivamus dignissim porta orci, finibus tempus risus
                  consectetur dapibus. Donec quis ornare elit. Curabitur
                  tempor."
                </p>
                <div className="flex w-full items-center gap-4 pt-4 border-b-0 border-t">
                  <div className="relative w-10 h-10">
                    <img
                      src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-5.avif"
                      className="inline-block align-middle max-w-full h-full object-cover absolute w-full text-transparent rounded-full inset-0"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
                      alt="Picture"
                    />
                  </div>
                  <div className>
                    <p className="font-semibold leading-none text-[#292929] m-0">
                      Micheal
                    </p>
                    <p className="leading-none text-[#788287] mt-1 mb-0 mx-0">
                      @michael
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block break-inside-avoid border bg-white text-neutral-950 shadow-[transparent_0_0_0_0,transparent_0_0_0_0,rgba(0,0,0,0.1)_0_10px_15px_-3px,rgba(0,0,0,0.1)_0_4px_6px_-4px] mt-7 rounded-xl">
              <div className="flex flex-col items-start gap-4 p-7">
                <p className="text-[#292929] m-0">
                  "Nullam non lorem vitae risus volutpat dictum non sed magna.
                  Aliquam in venenatis quam. Morbi feugiat tristique leo, vel
                  ultrices dolor varius non."
                </p>
                <div className="flex w-full items-center gap-4 pt-4 border-b-0 border-t">
                  <div className="relative w-10 h-10">
                    <img
                      src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-6.avif"
                      className="inline-block align-middle max-w-full h-full object-cover absolute w-full text-transparent rounded-full inset-0"
                      data-nimg="fill"
                      decoding="async"
                      loading="lazy"
                      alt="Picture"
                    />
                  </div>
                  <div className>
                    <p className="font-semibold leading-none text-[#292929] m-0">
                      Linda
                    </p>
                    <p className="leading-none text-[#788287] mt-1 mb-0 mx-0">
                      @thisislinda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6 mx-auto px-8 py-24 sm:gap-7 ncrkcy">
          <div className="flex flex-col gap-3">
            <span className="text-center font-bold uppercase text-[#7358f9]">
              Faq
            </span>
            <h2 className="text-balance text-center text-3xl leading-9 font-semibold -tracking-wide m-0 sm:text-4xl sm:leading-10">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="max-w-lg text-balance text-center text-lg leading-7 text-[#788287] m-0">
            For any other questions, please feel free to contact us.
          </p>
          <div
            data-orientation="vertical"
            className="w-full max-w-screen-md mt-6"
          >
            <div
              className="border-b-0"
              data-orientation="vertical"
              data-state="closed"
            >
              <h3
                className="flex m-0"
                data-state="closed"
                data-orientation="vertical"
              >
                <button
                  data-radix-collection-item
                  className="text-lg normal-case bg-transparent bg-none cursor-pointer flex flex-1 items-center justify-between text-left leading-7 font-medium transition-all ease-in-out duration m-0 px-0 py-6 [appearance:button]"
                  id="radix-:r0:"
                  data-orientation="vertical"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:r1:"
                  type="button"
                >
                  How is Reweb different than tools like Framer or Webflow?
                  <svg
                    className="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                className="hidden overflow-hidden text-sm leading-5 transition-all ease-in-out duration animate-[0.2s_ease-out_accordion-up]"
                data-orientation="vertical"
                aria-labelledby="radix-:r0:"
                role="region"
                hidden
                id="radix-:r1:"
                data-state="closed"
              />
            </div>
            <div
              className="border-b-0 border-t"
              data-orientation="vertical"
              data-state="closed"
            >
              <h3
                className="flex m-0"
                data-state="closed"
                data-orientation="vertical"
              >
                <button
                  data-radix-collection-item
                  className="text-lg normal-case bg-transparent bg-none cursor-pointer flex flex-1 items-center justify-between text-left leading-7 font-medium transition-all ease-in-out duration m-0 px-0 py-6 [appearance:button]"
                  id="radix-:r2:"
                  data-orientation="vertical"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:r3:"
                  type="button"
                >
                  What is the learning curve for Reweb?
                  <svg
                    className="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                className="hidden overflow-hidden text-sm leading-5 transition-all ease-in-out duration animate-[0.2s_ease-out_accordion-up]"
                data-orientation="vertical"
                aria-labelledby="radix-:r2:"
                role="region"
                hidden
                id="radix-:r3:"
                data-state="closed"
              />
            </div>
            <div
              className="border-b-0 border-t"
              data-orientation="vertical"
              data-state="closed"
            >
              <h3
                className="flex m-0"
                data-state="closed"
                data-orientation="vertical"
              >
                <button
                  data-radix-collection-item
                  className="text-lg normal-case bg-transparent bg-none cursor-pointer flex flex-1 items-center justify-between text-left leading-7 font-medium transition-all ease-in-out duration m-0 px-0 py-6 [appearance:button]"
                  id="radix-:r4:"
                  data-orientation="vertical"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:r5:"
                  type="button"
                >
                  Is the generated code high quality?
                  <svg
                    className="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                className="hidden overflow-hidden text-sm leading-5 transition-all ease-in-out duration animate-[0.2s_ease-out_accordion-up]"
                data-orientation="vertical"
                aria-labelledby="radix-:r4:"
                role="region"
                hidden
                id="radix-:r5:"
                data-state="closed"
              />
            </div>
            <div
              className="border-b-0 border-t"
              data-orientation="vertical"
              data-state="closed"
            >
              <h3
                className="flex m-0"
                data-state="closed"
                data-orientation="vertical"
              >
                <button
                  data-radix-collection-item
                  className="text-lg normal-case bg-transparent bg-none cursor-pointer flex flex-1 items-center justify-between text-left leading-7 font-medium transition-all ease-in-out duration m-0 px-0 py-6 [appearance:button]"
                  id="radix-:r6:"
                  data-orientation="vertical"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:r7:"
                  type="button"
                >
                  Do you plan to add more sections and templates?
                  <svg
                    className="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                className="hidden overflow-hidden text-sm leading-5 transition-all ease-in-out duration animate-[0.2s_ease-out_accordion-up]"
                data-orientation="vertical"
                aria-labelledby="radix-:r6:"
                role="region"
                hidden
                id="radix-:r7:"
                data-state="closed"
              />
            </div>
            <div
              className="border-b-0 border-t"
              data-orientation="vertical"
              data-state="closed"
            >
              <h3
                className="flex m-0"
                data-state="closed"
                data-orientation="vertical"
              >
                <button
                  data-radix-collection-item
                  className="text-lg normal-case bg-transparent bg-none cursor-pointer flex flex-1 items-center justify-between text-left leading-7 font-medium transition-all ease-in-out duration m-0 px-0 py-6 [appearance:button]"
                  id="radix-:r8:"
                  data-orientation="vertical"
                  data-state="closed"
                  aria-expanded="false"
                  aria-controls="radix-:r9:"
                  type="button"
                >
                  Will the exported website look exactly like the preview?
                  <svg
                    className="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                className="hidden overflow-hidden text-sm leading-5 transition-all ease-in-out duration animate-[0.2s_ease-out_accordion-up]"
                data-orientation="vertical"
                aria-labelledby="radix-:r8:"
                role="region"
                hidden
                id="radix-:r9:"
                data-state="closed"
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6 mx-auto px-8 py-24 sm:gap-10 xIUizm">
          <h2 className="max-w-xl text-balance text-center text-3xl leading-9 font-semibold -tracking-wide m-0 sm:text-4xl sm:leading-tight">
            Code at the speed of no-code
          </h2>
          <p className="max-w-lg text-balance text-center text-lg leading-7 text-[#788287] m-0">
            Build at the speed of no-code. Export to Next.js and Tailwind code.
            Customize without limits.
          </p>
          <a
            href="#"
            className="inline-flex h-11 cursor-pointer items-center justify-center whitespace-nowrap bg-[#7358f9] text-sm leading-5 font-medium text-slate-50 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color] ease-in-out duration px-8 rounded-[10px] border-[#e6e6e6]"
          >
            Get Started
          </a>
        </section>
        <footer className="w-full flex flex-wrap justify-between mt-10 mx-auto pt-10 pb-16 px-8 udiDti">
          <div className="flex basis-full justify-between gap-8 md:basis-auto md:flex-col md:justify-start">
            <a href="#" className="flex cursor-pointer items-center gap-3">
              <svg
                viewBox="0 0 238 238"
                fill="none"
                className="size-6 text-primary"
              >
                <path
                  fill="currentColor"
                  d="M236.738 121.995C236.743 125.448 236.415 128.865 235.749 132.25C235.077 135.635 234.082 138.922 232.764 142.109C231.441 145.297 229.822 148.328 227.9 151.193C225.978 154.063 223.796 156.708 221.348 159.146L162.816 217.651C161.816 216.88 160.874 216.052 159.978 215.161C159.249 214.432 158.556 213.667 157.905 212.87C157.254 212.073 156.639 211.245 156.066 210.385C155.493 209.531 154.967 208.646 154.478 207.74C153.993 206.828 153.556 205.896 153.16 204.943C152.764 203.995 152.421 203.021 152.124 202.036C151.822 201.052 151.572 200.052 151.374 199.042C151.171 198.031 151.02 197.01 150.921 195.984C150.816 194.958 150.77 193.932 150.77 192.901C150.77 191.87 150.816 190.844 150.921 189.818C151.02 188.792 151.171 187.771 151.374 186.76C151.572 185.75 151.822 184.75 152.124 183.766C152.421 182.776 152.764 181.807 153.16 180.854C153.556 179.906 153.993 178.974 154.478 178.063C154.967 177.156 155.493 176.271 156.066 175.417C156.639 174.557 157.254 173.729 157.905 172.932C158.556 172.135 159.249 171.37 159.978 170.641L211.41 119.203L159.988 67.7656C159.27 67.0417 158.582 66.2865 157.931 65.4948C157.285 64.7031 156.676 63.8854 156.103 63.0313C155.535 62.1823 155.009 61.3073 154.525 60.4063C154.04 59.5052 153.603 58.5833 153.212 57.6406C152.816 56.6979 152.467 55.7396 152.171 54.7604C151.868 53.7813 151.613 52.7917 151.41 51.7917C151.207 50.7865 151.051 49.7813 150.947 48.7604C150.842 47.7448 150.785 46.724 150.78 45.7031C150.775 44.6771 150.816 43.6615 150.91 42.6406C151.004 41.625 151.145 40.6094 151.337 39.6094C151.53 38.6042 151.77 37.6094 152.056 36.6302C152.348 35.6458 152.681 34.6823 153.066 33.7344C153.447 32.7865 153.874 31.8594 154.348 30.9531C154.822 30.0469 155.337 29.1615 155.895 28.3073C156.452 27.4479 157.051 26.625 157.691 25.8229C158.332 25.026 159.004 24.2604 159.717 23.5312C160.712 24.3125 161.655 25.151 162.546 26.0469L221.348 84.849C223.796 87.2813 225.983 89.9323 227.905 92.7969C229.827 95.6667 231.447 98.6927 232.764 101.88C234.087 105.068 235.082 108.354 235.749 111.74C236.421 115.125 236.749 118.542 236.738 121.995Z"
                  className
                />
                <path
                  fill="currentColor"
                  d="M2.13501 116.621C2.12459 113.173 2.45271 109.751 3.12459 106.366C3.79126 102.98 4.78605 99.694 6.10896 96.5065C7.42667 93.319 9.05167 90.293 10.9683 87.4232C12.8902 84.5586 15.0777 81.9076 17.5204 79.4753L76.0517 20.9648C77.0517 21.7357 77.9996 22.569 78.8954 23.4596C79.6194 24.1888 80.3121 24.9492 80.9683 25.7461C81.6194 26.543 82.234 27.3711 82.8017 28.2305C83.3746 29.0846 83.9058 29.9701 84.3902 30.8815C84.8746 31.7878 85.3173 32.7201 85.7079 33.6732C86.1038 34.6263 86.4527 35.5951 86.7496 36.5794C87.0465 37.569 87.2965 38.5638 87.4996 39.5742C87.6975 40.5898 87.8486 41.6055 87.9527 42.6315C88.0517 43.6576 88.1038 44.6836 88.1038 45.7148C88.1038 46.7461 88.0517 47.7773 87.9527 48.8034C87.8486 49.8242 87.6975 50.8451 87.4996 51.8555C87.2965 52.8659 87.0465 53.8659 86.7496 54.8503C86.4527 55.8398 86.1038 56.8086 85.7079 57.7617C85.3173 58.7148 84.8746 59.6419 84.3902 60.5534C83.9058 61.4596 83.3746 62.3451 82.8017 63.2044C82.234 64.0586 81.6194 64.8867 80.9683 65.6836C80.3121 66.4805 79.6194 67.2461 78.8954 67.9753L27.4631 119.418L78.8798 170.855C79.6038 171.574 80.2913 172.335 80.9371 173.121C81.5881 173.913 82.1975 174.736 82.7652 175.585C83.3329 176.434 83.859 177.309 84.3433 178.21C84.8277 179.111 85.2652 180.033 85.661 180.975C86.0569 181.918 86.4006 182.882 86.7027 183.855C87.0048 184.835 87.2548 185.824 87.4579 186.829C87.661 187.829 87.8173 188.84 87.9215 189.855C88.0308 190.871 88.0829 191.892 88.0933 192.913C88.0986 193.939 88.0517 194.96 87.9579 195.975C87.8694 196.996 87.7236 198.007 87.5308 199.012C87.3433 200.017 87.1038 201.007 86.8121 201.991C86.5256 202.97 86.1871 203.934 85.8069 204.882C85.4267 205.829 84.9944 206.757 84.5256 207.668C84.0517 208.574 83.536 209.454 82.9788 210.309C82.4163 211.168 81.8173 211.996 81.1819 212.793C80.5413 213.59 79.8642 214.355 79.1506 215.09C78.1558 214.309 77.2131 213.47 76.3225 212.574L17.5204 153.767C15.0725 151.335 12.8902 148.684 10.9683 145.819C9.04646 142.954 7.42667 139.923 6.10376 136.736C4.78084 133.548 3.78605 130.262 3.11938 126.876C2.45271 123.491 2.12459 120.074 2.13501 116.621Z"
                  className
                />
              </svg>
              <span className="text-xl leading-7 font-bold">Reweb</span>
            </a>
            <div className="flex items-center gap-5">
              <a href="#" className="cursor-pointer text-[#788287]">
                <svg viewBox="0 0 438.549 438.549" className="size-5">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                    className
                  />
                </svg>
              </a>
              <a href="#" className="cursor-pointer text-[#788287]">
                <svg viewBox="0 0 248 204" className="size-5">
                  <path
                    fill="currentColor"
                    d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                    className
                  />
                </svg>
              </a>
              <a href="#" className="cursor-pointer text-[#788287]">
                <svg viewBox="0 0 28.57 20" className="size-5">
                  <g className>
                    <path
                      fill="currentColor"
                      d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                      className
                    />
                    <path
                      fill="currentColor"
                      d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                      className="text-background"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex basis-6/12 flex-col gap-5 mt-10 md:basis-auto md:mt-0">
            <h3 className="font-semibold m-0">Product</h3>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Features
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Integrations
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Pricing
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Changelog
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Docs
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Download
            </a>
          </div>
          <div className="flex basis-6/12 flex-col gap-5 mt-10 md:basis-auto md:mt-0">
            <h3 className="font-semibold m-0">Company</h3>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              About us
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Blog
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Careers
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Customers
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Brand
            </a>
          </div>
          <div className="flex basis-6/12 flex-col gap-5 mt-10 md:basis-auto md:mt-0">
            <h3 className="font-semibold m-0">Resources</h3>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Startup Program
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Community
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Contact
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              DPA
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Terms of service
            </a>
          </div>
          <div className="flex basis-6/12 flex-col gap-5 mt-10 md:basis-auto md:mt-0">
            <h3 className="font-semibold m-0">Developers</h3>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              API
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Status
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              GitHub
            </a>
            <a
              href="#"
              className="cursor-pointer text-sm leading-5 text-[#788287]"
            >
              Docs
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
