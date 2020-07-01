(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_2-use-typescript-to-develop-the-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-use-typescript-to-develop-the-plugin"}},[e._v("#")]),e._v(" 2. Use typescript to develop the plugin")]),e._v(" "),s("p",[e._v("Date: 2020-06-01")]),e._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),s("p",[e._v("Accepted")]),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("Javascript, while being a very powerful language, gives room for human developer\nerrors due to its loose static typing. A developer would need to continuously\nkeep in their head the types and the types of the properties of the data structures\nthey handle, to account for special handling of them when doing other calculations.\nAs the codebase grows, this becomes increasingly difficult and less productive.\nWhile the IDE is helpful, it can only help up to a certain extend, which is\nagain limitted by the loose static typing nature of the language.")]),e._v(" "),s("p",[e._v("Typescript, as a superset of Javascript and by now the default language in the most\nfamous frontend frameworks (React, Angular), solves the above problems and greatly\nincreases productivity by allowing the automation tooling to identify errors the\ndeveloper would otherwise need to run the code to encounter them, but also\nallows for less code to write "),s("em",[e._v("less code == less bugs")]),e._v(", using its code generation ability.")]),e._v(" "),s("h2",{attrs:{id:"decision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),s("p",[e._v("We will use "),s("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript"),s("OutboundLink")],1),e._v(" to develop this plugin.")]),e._v(" "),s("h2",{attrs:{id:"consequences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),s("p",[e._v("Understand that a compilation step is now included in the process. The target\nfiles would now be in the "),s("a",{attrs:{href:"../../../../dist"}},[e._v("dist")]),e._v(" folder")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Install the typescript compiler globally")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  npm install -g typescript\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Generate a "),s("code",[e._v("tsconfig.json")]),e._v(" file")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  tsc --init\n")])])]),s("p",[e._v("Adjust the options accordingly and ensure the highest level of strictness and\nerror checking.")])]),e._v(" "),s("li",[s("p",[e._v("From now on use "),s("code",[e._v("*.ts")]),e._v(" files for the source code (vanilla javascript is also supported\nin those files)")])]),e._v(" "),s("li",[s("p",[e._v("Use the compiler to generate the target files. To build the files use:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  tsc\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  npm run build\n")])])]),s("p",[e._v("To watch the files for changes and automatically rebuild them use")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  tsc -w\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  npm run dev\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);