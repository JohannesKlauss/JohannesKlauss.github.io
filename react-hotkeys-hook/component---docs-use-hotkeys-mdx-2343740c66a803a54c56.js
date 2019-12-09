(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{JLhQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var a=n("SAVP"),o=n("TjRS"),s=n("ZFoC"),r=n("mXGw"),i=n("bzer");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/useHotkeys.mdx"}});var u={_frontmatter:c},m=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(m,l({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"usehotkeys"},"useHotkeys"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useHotkeys")," hook follows the hotkeys call signature."),Object(a.b)("p",null,"The callback function takes the exact parameters as the callback function in the hotkeys package.\nSee hotkeys documentation for more info or look into the typings file."),Object(a.b)("p",null,"When the component gets mounted into the DOM, it will listen for the keystroke. When the component will unmount, it\nstops listening for the keystroke."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ts"}),"useHotkeys(keys: string, callback: (event: KeyboardEvent, handler: HotkeysEvent) => void, deps: any[] = [])\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"keys: string"),": Here you can set the key strokes you want the hook to listen to. You can use single or multiple keys,\nmodifier combination, etc. See ",Object(a.b)("a",l({parentName:"li"},{href:"https://github.com/jaywcjlove/hotkeys/#defining-shortcuts"}),"this"),"\nsection on the hotkeys documentation for more info."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"callback: (event: KeyboardEvent, handler: HotkeysEvent) => void"),": Gets executed when the defined keystroke\ngets hit by the user. ",Object(a.b)("strong",{parentName:"li"},"Important:")," Since version 1.5.0 this callback gets memoised inside the hook. So you don't have\nto do this anymore by yourself."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deps: any[] = []"),": The dependency array that gets appended to the memoisation of the callback. Here you define the inner\ndependencies of your callback. If for example your callback actions depend on a referentially unstable value or a value\nthat will change over time, you should add this value to your deps array. Since most of the time your callback won't\ndepend on any unstable callbacks or changing values over time you can leave this value alone since it will be set to an\nempty array by default. See the ",Object(a.b)("a",l({parentName:"li"},{href:"#memoisation"}),"Memoisation")," section to\nlearn more and see an example where you have to set this array.")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"This will listen to the ",Object(a.b)("inlineCode",{parentName:"p"},"ctrl+k")," keystroke. If you press it, the counter increments by one. If ",Object(a.b)("inlineCode",{parentName:"p"},"ctrl+l")," gets pressed,\nthe counter will decrement by one."),Object(a.b)("h3",{id:"important-changes-since-150"},"Important changes since 1.5.0!"),Object(a.b)("p",null,"Due to the nature of how ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," works and to prevent resetting the hotkeys handler during every render, before 1.5.0\nyou had to memoise your callback yourself. Since this is tedious work and dependency arrays are a common pattern with\nReact hooks, I decided to bring the memoisation inside the hook, so you don't have to deal with it. Please read the\n",Object(a.b)("strong",{parentName:"p"},"Memoisation")," section for more info on this."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"import { useHotkeys } from 'react-hotkeys-hook';\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"const AddToBankComponent = () => {\n  const [amount, setAmount] = useState(0);\n\n  useHotkeys('ctrl+a', () => setAmount(prevAmount => prevAmount + 100));\n  useHotkeys('ctrl+d', () => setAmount(prevAmount => prevAmount - 100));\n\n  return (\n    <div>\n      {amount >= 0 ? 'Add' : 'Remove'} {Math.abs(amount)} dollars {amount >= 0 ? 'from' : 'to'} my bank account.\n    </div>\n  );\n};\n")),Object(a.b)(s.c,{__position:0,__code:"() => {\n  const [amount, setAmount] = useState(0)\n  useHotkeys('ctrl+a', () => setAmount(prevAmount => prevAmount + 100))\n  useHotkeys('ctrl+d', () => setAmount(prevAmount => prevAmount - 100))\n  return (\n    <div>\n      {amount >= 0 ? 'Add' : 'Remove'} {Math.abs(amount)} dollars{' '}\n      {amount >= 0 ? 'from' : 'to'} my bank account.\n    </div>\n  )\n}",__scope:{props:n,DefaultLayout:o.a,Playground:s.c,useState:r.useState,useHotkeys:i.a},mdxType:"Playground"},(function(){var e=Object(r.useState)(0),t=e[0],n=e[1];return Object(i.a)("ctrl+a",(function(){return n((function(e){return e+100}))})),Object(i.a)("ctrl+d",(function(){return n((function(e){return e-100}))})),Object(a.b)("div",null,t>=0?"Add":"Remove"," ",Math.abs(t)," dollars ",t>=0?"from":"to"," my bank account.")})),Object(a.b)("h2",{id:"memoisation"},"Memoisation"),Object(a.b)("p",null,"Let's check out a slightly different example to see how memoisation effects your application."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"const AddToBankComponent = () => {\n  const [amount, setAmount] = useState(0);\n\n  // Don't use this in production, won't work as expected.\n  useHotkeys('n', () => setAmount(amount + 100), []);\n\n  return (\n    <div>\n      Add {Math.abs(amount)} dollars to my bank account.\n    </div>\n  );\n};\n")),Object(a.b)(s.c,{__position:1,__code:"() => {\n  const [amount, setAmount] = useState(0)\n  useHotkeys('n', () => setAmount(amount + 100), [])\n  return <div>Add {Math.abs(amount)} dollars to my bank account.</div>\n}",__scope:{props:n,DefaultLayout:o.a,Playground:s.c,useState:r.useState,useHotkeys:i.a},mdxType:"Playground"},(function(){var e=Object(r.useState)(0),t=e[0],n=e[1];return Object(i.a)("n",(function(){return n(t+100)}),[]),Object(a.b)("div",null,"Add ",Math.abs(t)," dollars to my bank account.")})),Object(a.b)("p",null,"You'll notice that it will work on the first key stroke you hit, but after that the value won't change anymore. This is\ncalled stale state. What happened is that we defined a callback that depends on a value which changes over time. In this\ncase it's the ",Object(a.b)("inlineCode",{parentName:"p"},"amount")," variable. Our ",Object(a.b)("inlineCode",{parentName:"p"},"() => setAmount(amount + 100)")," callback gets memoised inside the ",Object(a.b)("inlineCode",{parentName:"p"},"useHotkeys")," hook\nand since we don't define any dependencies our callback will always stay the same and reference the same value it retrieved\nthe first time it got executed. So inside the ",Object(a.b)("inlineCode",{parentName:"p"},"useHotkeys")," hook the value of ",Object(a.b)("inlineCode",{parentName:"p"},"amount")," will always be ",Object(a.b)("inlineCode",{parentName:"p"},"0"),", which is the\ninitial value. You can see that for yourself, when copying this example and changing the initial value.\nGoing a step further in our logic flow, this means that our callback will always call ",Object(a.b)("inlineCode",{parentName:"p"},"setAmount")," with the value ",Object(a.b)("inlineCode",{parentName:"p"},"100"),".\nSo our logic flow got stuck, tis not what we wanted."),Object(a.b)("p",null,"To fix this there are two approaches when using values that are retrieved by ",Object(a.b)("inlineCode",{parentName:"p"},"useState"),". You could define a dependency array as\nthe third parameter like so:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"const AddToBankComponent = () => {\n  const [amount, setAmount] = useState(0);\n\n  // Works, but has performance and binding issues.\n  useHotkeys('m', () => setAmount(amount + 100), [amount]);\n\n  return (\n    <div>\n      Add {Math.abs(amount)} dollars to my bank account.\n    </div>\n  );\n};\n")),Object(a.b)(s.c,{__position:2,__code:"() => {\n  const [amount, setAmount] = useState(0)\n  useHotkeys('m', () => setAmount(amount + 100), [amount])\n  return <div>Add {Math.abs(amount)} dollars to my bank account.</div>\n}",__scope:{props:n,DefaultLayout:o.a,Playground:s.c,useState:r.useState,useHotkeys:i.a},mdxType:"Playground"},(function(){var e=Object(r.useState)(0),t=e[0],n=e[1];return Object(i.a)("m",(function(){return n(t+100)}),[t]),Object(a.b)("div",null,"Add ",Math.abs(t)," dollars to my bank account.")})),Object(a.b)("p",null,"But if you look closely this will cause problems. ",Object(a.b)("inlineCode",{parentName:"p"},"Amount")," changes with every call, so our callback will be recreated\nevery time. Which means that hotkeys will unbind and bind our callback every time we hit the key stroke. This might\nseem okay but can cause scoping problems and mess up the internals of our application. Also, the idea behind memoisation\nis that we do not execute everything all the time but wait for changes. To fix that we just have to use the callback\napproach for ",Object(a.b)("inlineCode",{parentName:"p"},"setAmount")," like in the very first example:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"const AddToBankComponent = () => {\n  const [amount, setAmount] = useState(0);\n\n  useHotkeys('m', () => setAmount(amount => amount + 100), []);\n\n  return (\n    <div>\n      Add {Math.abs(amount)} dollars to my bank account.\n    </div>\n  );\n};\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/useHotkeys.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-use-hotkeys-mdx-2343740c66a803a54c56.js.map