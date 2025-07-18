"use strict";
(self.webpackChunkcultandrain = self.webpackChunkcultandrain || []).push([
  [678],
  {
    9618: function (e, t, n) {
      (n.r(t),
        n.d(t, {
          default: function () {
            return ae;
          },
        }));
      var r = {};
      (n.r(r),
        n.d(r, {
          Pd: function () {
            return f;
          },
          BZ: function () {
            return j;
          },
          BK: function () {
            return C;
          },
          O1: function () {
            return T;
          },
          PK: function () {
            return k;
          },
          pZ: function () {
            return U;
          },
          m8: function () {
            return W;
          },
          qE: function () {
            return D;
          },
          Ss: function () {
            return L;
          },
          JG: function () {
            return h;
          },
          JP: function () {
            return V;
          },
          xO: function () {
            return G;
          },
          Np: function () {
            return M;
          },
          ME: function () {
            return A;
          },
          h2: function () {
            return E;
          },
          h3: function () {
            return u;
          },
          Fs: function () {
            return w;
          },
          mf: function () {
            return s;
          },
          t$: function () {
            return R;
          },
          jr: function () {
            return O;
          },
          st: function () {
            return v;
          },
          si: function () {
            return b;
          },
          eC: function () {
            return Y;
          },
          ay: function () {
            return m;
          },
          F2: function () {
            return d;
          },
          o2: function () {
            return N;
          },
          cG: function () {
            return I;
          },
          e7: function () {
            return y;
          },
          fK: function () {
            return p;
          },
          n4: function () {
            return S;
          },
          Rk: function () {
            return g;
          },
          YS: function () {
            return Z;
          },
        }));
      var l = n(67294),
        a = n(35414),
        i = n(39957),
        c = n(52001),
        o = n(38211),
        s = (n.p, "styles-module--intro--6bgus"),
        u = "styles-module--h3--vp6F6",
        m = "styles-module--reveal--TOXP+",
        d = "styles-module--right--9-RcH",
        E = "styles-module--h2--CbHcz",
        p = "styles-module--strong--GfwAm",
        h = "styles-module--copy--BxXqc",
        g = "styles-module--video--lQ9hR",
        f = "styles-module--access--wXvg-",
        y = "styles-module--spaceship--GaC8t",
        R = "styles-module--left--HF3Fc",
        A = "styles-module--cultr--UWVYj",
        v = "styles-module--nfc--qLU1o",
        I = "styles-module--section_right--sKUNj",
        N = "styles-module--section_left--k+FFp",
        w = "styles-module--header--FKJOa",
        b = "styles-module--nft--xOBML",
        Z = "styles-module--wrapper--j0QcS",
        G = "styles-module--copy-left--ZJwxq",
        M = "styles-module--copy-right--5gCZs",
        S = "styles-module--vid--vJpoQ",
        V = "styles-module--copy-absolute--I2OOn",
        O = "styles-module--next-arrow--T3XXf",
        Y = "styles-module--prev-arrow--oXWa7",
        D = "styles-module--boxContainer--9a2Q9",
        L = "styles-module--boxContainerActive--bwoCr",
        j = "styles-module--box--TFP15",
        C = "styles-module--box1--am0Ty",
        T = "styles-module--box2--2U4I6",
        k = "styles-module--box3--n9hAs",
        U = "styles-module--box4--uwpHB",
        W = "styles-module--box5--RnVS5",
        x = n(47640),
        F = function (e) {
          var t = l.useRef(null),
            n = l.useRef(null),
            r = l.useState(!1),
            a =
              (r[0],
              r[1],
              [
                {
                  start: e.start,
                  end: e.start + 2 * e.height,
                  properties: [
                    {
                      startValue: "portrait" == e.orientation ? 30 : 20,
                      endValue: (e.orientation, 0),
                      property: "top",
                      unit: "%",
                    },
                  ],
                },
              ]),
            i = [
              {
                animateWhenNotInViewport: !0,
                start: e.start,
                end: e.start + 2 * e.height,
                properties: [
                  {
                    startValue: 0,
                    endValue: "portrait" == e.orientation ? 70 : 30,
                    property: "top",
                    unit: "%",
                  },
                ],
              },
            ],
            c = [
              {
                start: e.start,
                end: e.start + 2 * e.height,
                properties: [
                  {
                    startValue: "portrait" == e.orientation ? 20 : 10,
                    endValue: "portrait" == e.orientation ? 40 : 30,
                    property: "top",
                    unit: "%",
                  },
                ],
              },
            ],
            o = [
              {
                start:
                  e.start + e.height * ("portrait" == e.orientation ? 1 : 2),
                end: e.start + e.height * ("portrait" == e.orientation ? 2 : 4),
                properties: [
                  {
                    startValue: 30,
                    endValue: 100,
                    property: "width",
                    unit: "%",
                  },
                ],
              },
              {
                start:
                  e.start + e.height * ("portrait" == e.orientation ? 1 : 2),
                end: e.start + e.height * ("portrait" == e.orientation ? 2 : 4),
                properties: [
                  {
                    startValue: "portrait" == e.orientation ? 5 : 20,
                    endValue: 0,
                    property: "right",
                    unit: "%",
                  },
                ],
              },
              {
                start:
                  e.start + e.height * ("portrait" == e.orientation ? 1 : 2),
                end: e.start + e.height * ("portrait" == e.orientation ? 2 : 4),
                properties: [
                  {
                    startValue: 45,
                    endValue: 0,
                    property: "bottom",
                    unit: "%",
                  },
                ],
              },
            ];
          return (
            l.useEffect(function () {
              return (
                e.total(t.current ? t.current.clientHeight : 0),
                n.current && n.current.element,
                function () {}
              );
            }),
            l.createElement(
              "div",
              { ref: t, className: s },
              l.createElement(
                x.ZP,
                {
                  tagName: "video",
                  parallaxData: o,
                  playsInline: !0,
                  loop: !0,
                  className: "" + g,
                  muted: !0,
                  autoPlay: !0,
                  ref: n,
                },
                l.createElement("source", {
                  src: "https://cdn.cultandrain.com/drop002/mini_trailer.mp4",
                  type: "video/mp4",
                }),
              ),
              l.createElement(
                x.ZP,
                { tagName: "h3", parallaxData: a, className: u + " " + d },
                "DROP ",
                l.createElement("span", null, "002"),
              ),
              l.createElement(
                x.ZP,
                { tagName: "h3", parallaxData: i, className: "" + u },
                "002",
              ),
              l.createElement(
                x.ZP,
                { parallaxData: c, className: "" + h },
                l.createElement(
                  "h2",
                  { className: "" + E },
                  "VIRGO",
                  l.createElement("strong", { className: "" + p }, "HOODIE"),
                ),
                l.createElement(
                  "p",
                  null,
                  "Our latest phygital collection introduces an entirely new frontier in fashion with exclusive luxury physicals tied to digital assets living on the blockchain.",
                ),
                l.createElement(
                  "p",
                  null,
                  l.createElement("strong", null, "209 3D animated NFTs"),
                  " matched with ",
                  l.createElement(
                    "strong",
                    null,
                    "209 luxury NFC-chipped physical sweatshirts",
                  ),
                  " that expands the CULT&RAIN wardrobe.",
                ),
                l.createElement(
                  "p",
                  null,
                  l.createElement("strong", null, "Cutting-Edge Innovation"),
                  l.createElement("br", null),
                  "DROP 002 brings together three novel pillars of technology – ",
                  l.createElement("strong", null, "AI"),
                  " (artificial intelligence), ",
                  l.createElement("strong", null, "AR"),
                  " (augmented reality), and ",
                  l.createElement("strong", null, "NFC"),
                  " (near-field communication).",
                ),
                l.createElement(
                  "p",
                  null,
                  l.createElement("strong", null, "Limited DROP 002 Edition"),
                  l.createElement("br", null),
                  "1 sweatshirt style",
                  l.createElement("br", null),
                  "4 unique colorways",
                  l.createElement("br", null),
                  "4 AI-generated print designs",
                  l.createElement("br", null),
                  "4 core logo print designs",
                  l.createElement("br", null),
                  "4 radical AR wearables",
                ),
                l.createElement(
                  "p",
                  null,
                  l.createElement("strong", null, "Highest Quality"),
                  l.createElement("br", null),
                  "“MADE IN LA” luxury, sourcing the finest materials and fabrication through our coveted supply chains in the USA.",
                ),
              ),
            )
          );
        },
        Q = function (e) {
          var t = l.useRef(null);
          l.useEffect(function () {
            return (
              e.total(t.current ? t.current.clientHeight : 0),
              function () {}
            );
          });
          (e.start, e.start, e.height);
          return l.createElement(
            "div",
            { ref: t, className: "" + m },
            l.createElement(
              "div",
              { className: "" + I },
              l.createElement(
                "video",
                { playsInline: !0, loop: !0, muted: !0, autoPlay: !0 },
                l.createElement("source", {
                  src: "https://cdn.cultandrain.com/drop002/hoodie_generic.mp4",
                  type: "video/mp4",
                }),
              ),
              l.createElement("h2", { className: "" + w }, "VIRGO #01"),
            ),
            l.createElement(
              "div",
              { className: "" + N },
              l.createElement(
                "video",
                { playsInline: !0, loop: !0, muted: !0, autoPlay: !0 },
                l.createElement("source", {
                  src: "https://cdn.cultandrain.com/drop002/hoodie_bianco.mp4",
                  type: "video/mp4",
                }),
              ),
              l.createElement("h2", { className: "" + w }, "VIRGO #02"),
            ),
            l.createElement(
              "div",
              { className: "" + I },
              l.createElement(
                "video",
                { playsInline: !0, loop: !0, muted: !0, autoPlay: !0 },
                l.createElement("source", {
                  src: "https://cdn.cultandrain.com/drop002/DOUBLE_PINK.mp4",
                  type: "video/mp4",
                }),
              ),
              l.createElement("h2", { className: "" + w }, "VIRGO #03"),
            ),
            l.createElement(
              "div",
              { className: "" + N },
              l.createElement(
                "video",
                { playsInline: !0, loop: !0, muted: !0, autoPlay: !0 },
                l.createElement("source", {
                  src: "https://cdn.cultandrain.com/drop002/DOUBLE_AZZURRO.mp4",
                  type: "video/mp4",
                }),
              ),
              l.createElement("h2", { className: "" + w }, "VIRGO #04"),
            ),
            l.createElement("h3", { className: "" + u }, "002"),
          );
        },
        B = n.p + "static/dressx-bf84b6701f230afe9aedd0c9ecd441eb.png",
        z = function (e) {
          var t = l.useRef(null);
          return (
            l.useEffect(function () {
              return (
                e.total(t.current ? t.current.clientHeight : 0),
                function () {}
              );
            }),
            l.createElement(
              "div",
              { ref: t, className: "" + v },
              l.createElement(
                "div",
                { className: "" + h },
                l.createElement(
                  "div",
                  { className: "" + R },
                  l.createElement("img", {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABWCAYAAADxPNkkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI3RjdBMDNBMTlGMTFFREE5NENBQUM2Q0M1MEY2REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI3RjdBMDRBMTlGMTFFREE5NENBQUM2Q0M1MEY2REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQjdGN0EwMUExOUYxMUVEQTk0Q0FBQzZDQzUwRjZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQjdGN0EwMkExOUYxMUVEQTk0Q0FBQzZDQzUwRjZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiamRvcAABQKSURBVHja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",
                    className: "" + r.chip,
                  }),
                  l.createElement("h2", null, "EMBEDDED NFC CHIP"),
                  l.createElement(
                    "h5",
                    null,
                    "MERGING THE PHYSICAL AND NFT INTO ONE",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "CULT&RAIN has joined forces with ",
                    l.createElement("strong", null, "LTD.INC"),
                    " to power its NFC chip technology.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "Each DROP 002 hoodie will be embedded with an NFC chip that is paired one-to-one with the NFT –- creating one phygital asset that truly pushes the boundaries of fashion.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "The chip will provide authenticity, proof of ownership, provenance history, and enable access to additional features like exclusive video content, behind-the-scenes production, brand updates, rewards, token-gated access, and much more.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "Soon enough, the CULT&RAIN community will be able to safely buy, sell, and trade phygital wearables through a secure transfer of both the NFT and physical ownership at once.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "Phygital marketplace coming soon... a total ",
                    l.createElement("strong", null, "GAME CHANGER"),
                    ".",
                  ),
                  l.createElement(
                    "p",
                    null,
                    l.createElement(
                      "a",
                      { href: "https://ltd.inc/", target: "_blank" },
                      l.createElement("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAA4CAIAAADvpITaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODk2QkEyNzhBMUEwMTFFREE5NENBQUM2Q0M1MEY2REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODk2QkEyNzlBMUEwMTFFREE5NENBQUM2Q0M1MEY2REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQjdGN0EwOUExOUYxMUVEQTk0Q0FBQzZDQzUwRjZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQjdGN0EwQUExOUYxMUVEQTk0Q0FBQzZDQzUwRjZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptj5NqMAAAccSURBVHja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",
                        alt: "LTD Inc",
                        height: "28",
                        border: "0",
                      }),
                    ),
                  ),
                ),
                l.createElement(
                  "div",
                  { className: "" + d },
                  l.createElement(
                    "div",
                    null,
                    l.createElement("img", {
                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAIAAAAl7d1hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI3RjdBMDdBMTlGMTFFREE5NENBQUM2Q0M1MEY2REUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI3RjdBMDhBMTlGMTFFREE5NENBQUM2Q0M1MEY2REUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQjdGN0EwNUExOUYxMUVEQTk0Q0FBQzZDQzUwRjZERSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQjdGN0EwNkExOUYxMUVEQTk0Q0FBQzZDQzUwRjZERSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsmSoPIAAAZvSURBVHja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",
                      className: "" + r.ar,
                    }),
                  ),
                  l.createElement("h2", null, "AR WEARABLES"),
                  l.createElement(
                    "h5",
                    null,
                    "RADICALLY ANIMATED VIRTUAL HOODIES",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "CULT&RAIN has also partnered with the largest digital-only fashion platform, DRESSX.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "All DROP 002 holders will be gifted an additional NFT consisting of a 3D AR wearable that breaks the standards of conventional fashion.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "Holders will have the opportunity to try on, style, and trade an animated AR hoodie through a revolutionary virtual experience on DRESSX’s platform.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    l.createElement(
                      "a",
                      { href: "https://dressx.com/", target: "_blank" },
                      l.createElement("img", {
                        src: B,
                        alt: "Dressx",
                        height: "18",
                        border: "0",
                      }),
                    ),
                  ),
                ),
              ),
            )
          );
        },
        H = n(56381),
        J = "undefined" != typeof window,
        P = function (e) {
          var t = l.useRef(null),
            n = l.useRef(null),
            a = l.useRef(null),
            i = l.useRef(null),
            c = l.useRef(null),
            o = l.useRef(null),
            s = l.useRef(null),
            u = l.useRef(null),
            m = l.useRef(null),
            d = l.useRef(null),
            E = l.useRef(null),
            p = l.useState(!1),
            h = p[0],
            g = p[1],
            f = l.useState(!0),
            y = f[0],
            R = f[1],
            A = l.useState(!1),
            v = A[0],
            I = A[1],
            N = l.useState(0),
            w = N[0],
            x = N[1],
            F = new IntersectionObserver(function (e) {
              var t = e[0];
              return I(t.isIntersecting);
            }),
            Q = function () {
              t.current &&
                (v
                  ? (h ||
                      (a.current.play(),
                      i.current.play(),
                      c.current.play(),
                      o.current.play(),
                      s.current.play(),
                      u.current.play(),
                      m.current.play(),
                      d.current.play(),
                      E.current.play()),
                    g(!0))
                  : (a.current.pause(),
                    i.current.pause(),
                    c.current.pause(),
                    o.current.pause(),
                    s.current.pause(),
                    u.current.pause(),
                    m.current.pause(),
                    d.current.pause(),
                    E.current.pause(),
                    g(!1)));
            };
          l.useEffect(function () {
            return (
              J && window.addEventListener("scroll", Q),
              t.current && F.observe(t.current),
              e.total(t.current ? t.current.clientHeight : 0),
              function () {
                J && window.removeEventListener("scroll", Q);
              }
            );
          });
          var B = {
            autoplay: !1,
            indicators: !1,
            transitionDuration: 0,
            onChange: function (e, t) {
              x(t);
            },
            cssClass: "" + Z,
            prevArrow: l.createElement(
              "div",
              { className: "" + Y },
              l.createElement(
                "svg",
                {
                  width: "100",
                  height: "100",
                  viewBox: "0 0 100 100",
                  fill: "none",
                },
                l.createElement("path", {
                  d: "M34 25L61.5 49.5L38 74",
                  stroke: "white",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                }),
              ),
            ),
            nextArrow: l.createElement(
              "div",
              { className: "" + O },
              l.createElement(
                "svg",
                {
                  width: "100",
                  height: "100",
                  viewBox: "0 0 100 100",
                  fill: "none",
                },
                l.createElement("path", {
                  d: "M38 25L61.5 49.5L38 74",
                  stroke: "white",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                }),
              ),
            ),
          };
          return l.createElement(
            "div",
            { ref: t, className: "" + b },
            l.createElement(
              "div",
              { className: "" + G },
              l.createElement(
                "div",
                { className: "" + V },
                l.createElement("h2", null, "3D NFTs"),
                l.createElement(
                  "p",
                  { style: { opacity: 0 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 01"),
                  l.createElement("br", null),
                  "Opal Rarity",
                  l.createElement("br", null),
                  "Limited Edition 001/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 1 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 01"),
                  l.createElement("br", null),
                  "Sapphire Rarity",
                  l.createElement("br", null),
                  "Limited Edition 036/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 2 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 02"),
                  l.createElement("br", null),
                  "Opal Rarity",
                  l.createElement("br", null),
                  "Limited Edition 001/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 3 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 02"),
                  l.createElement("br", null),
                  "Sapphire Rarity",
                  l.createElement("br", null),
                  "Limited Edition 036/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 4 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 03"),
                  l.createElement("br", null),
                  "Opal Rarity",
                  l.createElement("br", null),
                  "Limited Edition 001/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 5 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 03"),
                  l.createElement("br", null),
                  "Sapphire Rarity",
                  l.createElement("br", null),
                  "Limited Edition 036/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 6 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 04"),
                  l.createElement("br", null),
                  "Opal Rarity",
                  l.createElement("br", null),
                  "Limited Edition 001/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 7 == w ? 1 : 0 } },
                  l.createElement("strong", null, "VIRGO 04"),
                  l.createElement("br", null),
                  "Sapphire Rarity",
                  l.createElement("br", null),
                  "Limited Edition 036/52",
                ),
                l.createElement(
                  "p",
                  { style: { opacity: 8 == w ? 1 : 0 } },
                  l.createElement("strong", null, "THE ONE"),
                  l.createElement("br", null),
                  "Opal Rarity",
                  l.createElement("br", null),
                  "Limited Edition 001/1",
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: "" + S },
              l.createElement(
                "a",
                {
                  ref: n,
                  className: D + (y ? "" : " " + L),
                  onClick: function () {
                    R(!y);
                  },
                },
                l.createElement("div", { className: j + " " + C }),
                l.createElement("div", { className: j + " " + T }),
                l.createElement("div", { className: j + " " + k }),
                l.createElement("div", { className: j + " " + U }),
                l.createElement("div", { className: j + " " + W }),
              ),
              l.createElement(
                H.Fade,
                B,
                l.createElement(
                  "video",
                  { ref: a, playsInline: !0, loop: !0, muted: 0 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/black_opal_01.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: i, playsInline: !0, loop: !0, muted: 1 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/black_sapphire_36.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: c, playsInline: !0, loop: !0, muted: 2 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/bianca_opal.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: o, playsInline: !0, loop: !0, muted: 3 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/bianca_sapphire.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: s, playsInline: !0, loop: !0, muted: 4 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/VIRGO_03_PINK_OPAL_001.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: u, playsInline: !0, loop: !0, muted: 5 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/VIRGO_03_PINK_SAPPHIRE_036.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: m, playsInline: !0, loop: !0, muted: 6 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/VIRGO_04_BLUE_OPAL_001.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: d, playsInline: !0, loop: !0, muted: 7 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/VIRGO_04_BLUE_SAPPHIRE_036.mp4",
                    type: "video/mp4",
                  }),
                ),
                l.createElement(
                  "video",
                  { ref: E, playsInline: !0, loop: !0, muted: 8 != w || y },
                  l.createElement("source", {
                    src: "https://cdn.cultandrain.com/drop002/THE_ONE.mp4",
                    type: "video/mp4",
                  }),
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: M + " " + r.hideMobile },
              l.createElement(
                "div",
                { className: "" + V },
                l.createElement(
                  "h2",
                  null,
                  "FULLY",
                  l.createElement("br", null),
                  "ANIMATED",
                ),
              ),
            ),
          );
        },
        X = function (e) {
          var t = l.useRef(null);
          return (
            l.useEffect(function () {
              return (
                e.total(t.current ? t.current.clientHeight : 0),
                function () {}
              );
            }),
            l.createElement(
              "div",
              { ref: t, className: "" + A },
              l.createElement("img", {
                src: "https://cdn.cultandrain.com/drop002_character_1800.jpg",
              }),
              l.createElement(
                "div",
                { className: "" + h },
                l.createElement("h2", null, "UTILITIES"),
                l.createElement("h5", null, "WE VALUE COMMUNITY FIRST"),
                l.createElement(
                  "p",
                  null,
                  "Every NFT minted includes rarity attributes and one of a kind redeemables",
                  l.createElement("br", null),
                  "such as brand discounts, exclusive airdrops, and VIP access into the",
                  l.createElement("br", null),
                  "CULT&RAIN ecosystem.",
                ),
                l.createElement(
                  "h3",
                  null,
                  "INTRODUCING THE",
                  l.createElement("br", null),
                  "ULTIMATE",
                  l.createElement("br", null),
                  l.createElement("strong", null, "RARITY SCALE"),
                ),
                l.createElement(
                  "p",
                  null,
                  "To learn more about our DROP 002 UTILITIES please click below.",
                ),
                l.createElement("p", null, " "),
                l.createElement(
                  "p",
                  null,
                  l.createElement(
                    "a",
                    { href: "/cultr-pass-drop002" },
                    "LEARN MORE",
                  ),
                ),
              ),
            )
          );
        },
        K = function (e) {
          var t = l.useRef(null);
          return (
            l.useEffect(function () {
              return (
                e.total(t.current ? t.current.clientHeight : 0),
                function () {}
              );
            }),
            l.createElement(
              "div",
              { ref: t, className: "" + f },
              l.createElement(
                "div",
                { className: "" + y },
                l.createElement("img", {
                  src: "https://cdn.cultandrain.com/drop002_spaceship_1800.jpg",
                }),
              ),
              l.createElement(
                "div",
                { className: h },
                l.createElement(
                  "div",
                  { className: d },
                  l.createElement("h2", null, "PRE-SALE ACCESS"),
                  l.createElement(
                    "p",
                    null,
                    l.createElement("strong", null, "COMMUNITY IS OUR CORE"),
                  ),
                  l.createElement(
                    "p",
                    null,
                    "CULT&RAIN holders have VIP first access to mint the DROP 002 collection.",
                  ),
                ),
                l.createElement(
                  "div",
                  { className: R },
                  l.createElement("h2", null, "PUBLIC RELEASE"),
                  l.createElement(
                    "p",
                    null,
                    l.createElement("strong", null, "BUILDING OUR FOLLOWING"),
                  ),
                  l.createElement(
                    "p",
                    null,
                    "It's time for the world to experience CULT&RAIN’s groundbreaking luxurious phygital fashion.",
                  ),
                  l.createElement(
                    "p",
                    null,
                    "Join our ",
                    l.createElement(
                      "a",
                      { href: "http://discord.gg/cultandrain" },
                      "Discord",
                    ),
                    " and follow our ",
                    l.createElement(
                      "a",
                      { href: "https://twitter.com/cultandrain" },
                      "Twitter",
                    ),
                    " for more information.",
                  ),
                ),
              ),
            )
          );
        },
        q = "undefined" != typeof window,
        _ = function (e) {
          var t = l.useState(!1),
            n = t[0],
            r = t[1],
            a = l.useRef(null),
            i = l.useRef(null),
            c = function () {
              ((q ? window.scrollY : 800) > 200 &&
                (n || (a.current.play(), r(!0))),
                e.landing &&
                  ((q ? window.scrollY : 800) > 2 * e.height - e.height / 2
                    ? ((i.current.style.position = "relative"),
                      a.current.pause())
                    : ((i.current.style.position = "fixed"),
                      a.current.play())));
            };
          return (
            l.useEffect(function () {
              return (
                q && window.addEventListener("scroll", c),
                function () {
                  q && window.removeEventListener("scroll", c);
                }
              );
            }),
            l.createElement(
              "div",
              { ref: i, className: "teaser" },
              l.createElement(
                "video",
                {
                  playsInline: !0,
                  loop: !0,
                  muted: e.muted,
                  ref: a,
                  onLoadedData: function () {
                    e.onLoadEnd();
                  },
                },
                l.createElement("source", {
                  src: e.teaserSrc,
                  type: "video/mp4",
                }),
              ),
            )
          );
        },
        $ = function (e) {
          var t = l.useRef(null);
          (e.start,
            t.current && t.current.clientHeight,
            e.start,
            t.current && t.current.clientHeight,
            t.current && t.current.clientHeight,
            e.start,
            t.current && t.current.clientHeight,
            e.start,
            t.current && t.current.clientHeight,
            t.current && t.current.clientHeight,
            e.start,
            t.current && t.current.clientHeight,
            e.start,
            t.current && t.current.clientHeight,
            t.current && t.current.clientHeight,
            e.start,
            t.current && t.current.clientHeight,
            e.start,
            t.current && t.current.clientHeight,
            t.current && t.current.clientHeight,
            e.orientation,
            e.orientation,
            e.orientation);
          return (
            l.useEffect(function () {
              return (
                e.total(t.current ? t.current.clientHeight : 0),
                function () {}
              );
            }),
            l.createElement(
              "div",
              { ref: t, className: "culturerain" },
              l.createElement("h2", null, "DISCOVER OUR NFTS"),
              l.createElement(
                "h3",
                {
                  style: {
                    top:
                      ("portrait" == e.orientation ? "48" : "26.5") +
                      ("portrait" == e.orientation ? "px" : "vh"),
                    opacity: 1,
                    left: "auto",
                    transform: "scaleY(-1)",
                  },
                },
                "DISCOVER OUR NFTS",
              ),
              l.createElement(
                "p",
                null,
                l.createElement(
                  "a",
                  { href: "https://opensea.io/collection/cultandrain-drop002" },
                  "BUY ON OPENSEA",
                ),
              ),
            )
          );
        },
        ee = n(90836),
        te = n(56042),
        ne = n(25563),
        re = n(12349).animateScroll,
        le = "undefined" != typeof window,
        ae = function () {
          var e = l.useRef(null),
            t = l.useState(!1),
            n = t[0],
            r = t[1],
            s = l.useState(!1),
            u = s[0],
            m = s[1],
            d = l.useState(!1),
            E = (d[0], d[1], l.useState(null)),
            p = E[0],
            h = E[1],
            g = l.useState("landscape"),
            f = g[0],
            y = g[1],
            R = l.useState(le ? window.innerWidth : 0),
            A = R[0],
            v = R[1],
            I = l.useState(le ? window.innerHeight : 0),
            N = I[0],
            w = I[1],
            b = l.useState(!1),
            Z = b[0],
            G = b[1],
            M = l.useState(!0),
            S = M[0],
            V = (M[1], l.useState(0)),
            O = V[0],
            Y = V[1],
            D = l.useState(0),
            L = D[0],
            j = D[1],
            C = l.useState(0),
            T = C[0],
            k = C[1],
            U = l.useState(0),
            W = U[0],
            x = U[1],
            B = l.useState(0),
            H = B[0],
            J = B[1],
            q = l.useState(0),
            ae = q[0],
            ie = q[1],
            ce = l.useState(0),
            oe = ce[0],
            se = ce[1],
            ue = l.useState(0),
            me = ue[0],
            de = ue[1],
            Ee = l.useState(0),
            pe = Ee[0],
            he = Ee[1],
            ge = l.useState(0),
            fe = ge[0],
            ye = ge[1],
            Re = l.useState(!0),
            Ae = Re[0],
            ve = Re[1],
            Ie = l.useState(!0),
            Ne = (Ie[0], Ie[1], l.useRef(null)),
            we = function () {
              (v(le ? window.innerWidth : 0),
                w(le ? window.innerHeight : 0),
                Y(1.2 * N));
            },
            be = function () {
              Ne.current &&
                ((le ? window.scrollY : 800) > 2 * N - N / 2
                  ? (Ne.current.style.display = "none")
                  : (Ne.current.style.display = "flex"));
            },
            Ze = function () {
              (window.matchMedia("(orientation: portrait)").matches &&
                y("portrait"),
                window.matchMedia("(orientation: landscape)").matches &&
                  y("landscape"));
            };
          return (
            l.useEffect(function () {
              return (
                h(
                  "https://cdn.cultandrain.com/drop002/CR_Hoodie_230418a_24mb.mp4",
                ),
                !n &&
                  e.current &&
                  (r(!0),
                  setTimeout(function () {
                    re.scrollTo(e.current.getBoundingClientRect().top - 1, {
                      duration: 7e3,
                      delay: 0,
                    });
                  }, 0)),
                Ze(),
                we(),
                le && window.addEventListener("resize", we),
                le && window.addEventListener("scroll", be),
                le && window.addEventListener("orientationchange", Ze),
                function () {
                  (le && window.removeEventListener("resize", we),
                    le && window.removeEventListener("scroll", be),
                    le && window.removeEventListener("orientationchange", Ze));
                }
              );
            }),
            l.createElement(
              "main",
              null,
              l.createElement(
                a.q,
                null,
                l.createElement("meta", { charSet: "utf-8" }),
                l.createElement("title", null, "CULT&RAIN™"),
                l.createElement("link", {
                  rel: "canonical",
                  href: "https://www.cultandrain.com/",
                }),
                l.createElement("meta", {
                  name: "description",
                  content:
                    "Luxury fashion born from Web3, merging NFTs with exclusive physical redeemables.",
                }),
              ),
              le &&
                l.createElement(
                  "div",
                  { className: "genesisPage" },
                  l.createElement(
                    "div",
                    { className: "wrapper" },
                    !u && l.createElement(i.Z, null),
                    u &&
                      l.createElement(
                        "div",
                        null,
                        l.createElement(c.Z, {
                          footerVisible: Z,
                          mintVisible: S,
                          page: "home",
                        }),
                        l.createElement(
                          "a",
                          {
                            ref: Ne,
                            className:
                              "boxContainer" +
                              (Ae ? "" : " boxContainerActive"),
                            onClick: function () {
                              ve(!Ae);
                            },
                          },
                          l.createElement("div", { className: "box box1" }),
                          l.createElement("div", { className: "box box2" }),
                          l.createElement("div", { className: "box box3" }),
                          l.createElement("div", { className: "box box4" }),
                          l.createElement("div", { className: "box box5" }),
                        ),
                      ),
                    l.createElement(o.Z, { height: N, landing: !0 }),
                    l.createElement(
                      "div",
                      { className: "page", style: { paddingTop: N + N / 2 } },
                      l.createElement(_, {
                        height: N,
                        muted: Ae,
                        teaserSrc: p,
                        landing: !0,
                        onLoadEnd: function () {
                          m(!0);
                        },
                      }),
                      l.createElement("div", { ref: e }),
                      u &&
                        l.createElement(
                          "div",
                          null,
                          l.createElement(F, {
                            start: O,
                            width: A,
                            height: N,
                            total: j,
                            orientation: f,
                          }),
                          l.createElement(Q, {
                            start: O + L,
                            height: N,
                            total: k,
                            orientation: f,
                          }),
                          l.createElement(z, {
                            start: O + L + T,
                            height: N,
                            total: x,
                            orientation: f,
                          }),
                          l.createElement($, {
                            start: O + L + T + W,
                            height: N,
                            total: de,
                          }),
                          l.createElement(P, {
                            start: O + L + T + W + me,
                            height: N,
                            total: J,
                          }),
                          l.createElement(X, {
                            start: O + L + T + W + me + H,
                            height: N,
                            total: ie,
                            orientation: f,
                          }),
                          l.createElement(ee.Z, {
                            start: O + L + T + W + me + H + ae,
                            height: N,
                            total: he,
                            orientation: f,
                          }),
                          l.createElement(K, {
                            start: O + L + T + W + me + H + ae + pe,
                            height: N,
                            total: se,
                            orientation: f,
                          }),
                          l.createElement(ne.Z, {
                            start: O + L + T + W + me + H + ae + pe + oe,
                            height: N,
                            total: ye,
                          }),
                          l.createElement(te.Z, {
                            start: O + L + T + W + me + H + ae + pe + oe + fe,
                            height: N,
                            setFooterVisible: G,
                          }),
                        ),
                    ),
                  ),
                ),
              l.createElement(
                "form",
                {
                  style: { display: "none" },
                  name: "Join",
                  method: "POST",
                  "data-netlify": "true",
                },
                l.createElement("input", { type: "email", name: "email" }),
              ),
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-c45edb4d55fade2865b6.js.map
