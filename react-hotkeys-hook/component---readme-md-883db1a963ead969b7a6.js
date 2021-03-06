(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7OsV":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("Fcif"),o=n("+I+c"),i=(n("mXGw"),n("/FXl")),l=n("TjRS"),r=(n("aD51"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});var b={_frontmatter:r},s=l.a;function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"react-hotkeys-hook"},"react-hotkeys-hook"),Object(i.b)("p",null,"React hook for using keyboard shortcuts in components.\nThis is a hook version for the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jaywcjlove/hotkeys"},"hotkeys")," package."),Object(i.b)("h3",{id:"documentation-and-live-example"},"Documentation and live example"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://johannesklauss.github.io/react-hotkeys-hook/"},"https://johannesklauss.github.io/react-hotkeys-hook/")),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install react-hotkeys-hook\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn add react-hotkeys-hook\n")),Object(i.b)("p",null,"Make sure that you have at least version 16.8 of ",Object(i.b)("inlineCode",{parentName:"p"},"react")," and ",Object(i.b)("inlineCode",{parentName:"p"},"react-dom")," installed, or otherwise hooks won't work for you."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"export const ExampleComponent = () => {\n  const [count, setCount] = useState(0);\n  useHotkeys('ctrl+k', () => setCount(prevCount => prevCount + 1));\n    \n  return (\n    <p>\n      Pressed {count} times.\n    </p>\n  );\n};\n")),Object(i.b)("p",null,"The hook takes care of all the binding and unbinding for you.\nAs soon as the component mounts into the DOM, the key stroke will be\nlistened to. When the component unmounts it will stop listening."),Object(i.b)("h3",{id:"call-signature"},"Call Signature"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"useHotkeys(keys: string, callback: (event: KeyboardEvent, handler: HotkeysEvent) => void, options: Options = {}, deps: any[] = [])\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keys: string"),": Here you can set the key strokes you want the hook to listen to. You can use single or multiple keys,\nmodifier combination, etc. See ",Object(i.b)("a",{parentName:"li",href:"https://github.com/jaywcjlove/hotkeys/#defining-shortcuts"},"this"),"\nsection on the hotkeys documentation for more info."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"callback: (event: KeyboardEvent, handler: HotkeysEvent) => void"),": Gets executed when the defined keystroke\ngets hit by the user. ",Object(i.b)("strong",{parentName:"li"},"Important:")," Since version 1.5.0 this callback gets memoised inside the hook. So you don't have\nto do this anymore by yourself."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options: Options = {}"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filter: (event: KeyboardEvent): boolean")," is used to filter if a callback gets triggered depending on the keyboard event.\n",Object(i.b)("strong",{parentName:"li"},"Breaking Change in ",Object(i.b)("inlineCode",{parentName:"strong"},"3.0.0"),"!")," Prior to version ",Object(i.b)("inlineCode",{parentName:"li"},"3.0.0")," the filter settings was one global setting that applied to every\nhook. Since ",Object(i.b)("inlineCode",{parentName:"li"},"3.0.0")," this behavior changed. The ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," option is now locally scoped to each call of ",Object(i.b)("inlineCode",{parentName:"li"},"useHotkeys"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filterPreventDefault: boolean")," is used to prevent/allow the default browser behavior for the keystroke when the filter return false (default value: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enableOnTags: string[]")," is used to enable listening to hotkeys in form fields. Available values are ",Object(i.b)("inlineCode",{parentName:"li"},"INPUT"),", ",Object(i.b)("inlineCode",{parentName:"li"},"TEXTAREA")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SELECT"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"splitKey: string")," is used to change the splitting character inside the keys argument. Default is ",Object(i.b)("inlineCode",{parentName:"li"},"+"),", but if you want\nto listen to the ",Object(i.b)("inlineCode",{parentName:"li"},"+")," character, you can set ",Object(i.b)("inlineCode",{parentName:"li"},"splitKey")," to i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"-")," and listen for ",Object(i.b)("inlineCode",{parentName:"li"},"ctrl-+")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyup: boolean")," Determine if you want to listen on the keyup event"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keydown: boolean")," Determine if want to listen on the keydown event"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enabled: boolean")," is used to prevent installation of the hotkey when set to false (default value: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deps: any[] = []"),": The dependency array that gets appended to the memoisation of the callback. Here you define the inner\ndependencies of your callback. If for example your callback actions depend on a referentially unstable value or a value\nthat will change over time, you should add this value to your deps array. Since most of the time your callback won't\ndepend on any unstable callbacks or changing values over time you can leave this value alone since it will be set to an\nempty array by default. See the ",Object(i.b)("a",{parentName:"li",href:"#memoisation"},"Memoisation")," section to\nlearn more and see an example where you have to set this array.")),Object(i.b)("h3",{id:"useishotkeypressed-hook"},Object(i.b)("inlineCode",{parentName:"h3"},"useIsHotkeyPressed")," hook"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"useIsHotkeyPressed")," hook just returns the ",Object(i.b)("inlineCode",{parentName:"p"},"hotkeys.isPressed")," function and works exactly the same."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const isPressed = useIsHotkeyPressed();\n\nisPressed('return'); // Returns true if Return key is pressed down.\n")),Object(i.b)("h3",{id:"found-an-issue-or-have-a-feature-request"},"Found an issue or have a feature request?"),Object(i.b)("p",null,"Open up an issue or pull request and participate."),Object(i.b)("h3",{id:"local-development"},"Local Development"),Object(i.b)("p",null,"Checkout this repo, run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm i")," and then run the ",Object(i.b)("inlineCode",{parentName:"p"},"docz:dev")," script.\nYou can use the ",Object(i.b)("inlineCode",{parentName:"p"},"docs/useHotkeys.mdx")," to test the behavior of the hook. It directly imports the\n",Object(i.b)("inlineCode",{parentName:"p"},"src/index.ts")," file and transpiles it automatically. So you don't have to worry about. For more info\non .mdx files, check out the docz documentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.docz.site/docs/writing-mdx"},"https://www.docz.site/docs/writing-mdx")),Object(i.b)("h3",{id:"authors"},"Authors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Johannes Klauss")),Object(i.b)("h3",{id:"contributors"},"Contributors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/bernatmv"},"bernatmv")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wheeler"},"wheeler")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/louisrli"},"louisrli")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/jameschao"},"jameschao")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hmafzal"},"hmafzal")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/godspeedelbow"},"godspeedelbow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/JoshuaKGoldberg"},"JoshuaKGoldberg")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ggascoigne"},"ggascoigne"))),Object(i.b)("hr",null),Object(i.b)("p",null,"MIT License."),Object(i.b)("hr",null))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-883db1a963ead969b7a6.js.map