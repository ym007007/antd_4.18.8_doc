(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{2900:function(t,d){t.exports={content:["section",["p","\u7528\u6765\u4EE3\u8868\u7528\u6237\u6216\u4E8B\u7269\uFF0C\u652F\u6301\u56FE\u7247\u3001\u56FE\u6807\u6216\u5B57\u7B26\u5C55\u793A\u3002"],["h2","\u8BBE\u8BA1\u5E08\u4E13\u5C5E"],["p","\u5B89\u88C5 ",["a",{title:null,href:"https://kitchen.alipay.com"},"Kitchen Sketch \u63D2\u4EF6 \u{1F48E}"],"\uFF0C\u4E00\u952E\u586B\u5145\u9AD8\u903C\u683C\u5934\u50CF\u548C\u6587\u672C\u3002"]],meta:{category:"Components",subtitle:"\u5934\u50CF",type:"\u6570\u636E\u5C55\u793A",title:"Avatar",cover:"https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg",filename:"components/avatar/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u8BBE\u8BA1\u5E08\u4E13\u5C5E",title:"\u8BBE\u8BA1\u5E08\u4E13\u5C5E"},"\u8BBE\u8BA1\u5E08\u4E13\u5C5E"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Avatar"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","alt"],["td","\u56FE\u50CF\u65E0\u6CD5\u663E\u793A\u65F6\u7684\u66FF\u4EE3\u6587\u672C"],["td","string"],["td","-"],["td"]],["tr",["td","gap"],["td","\u5B57\u7B26\u7C7B\u578B\u8DDD\u79BB\u5DE6\u53F3\u4E24\u4FA7\u8FB9\u754C\u5355\u4F4D\u50CF\u7D20"],["td","number"],["td","4"],["td","4.3.0"]],["tr",["td","icon"],["td","\u8BBE\u7F6E\u5934\u50CF\u7684\u81EA\u5B9A\u4E49\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","shape"],["td","\u6307\u5B9A\u5934\u50CF\u7684\u5F62\u72B6"],["td",["code","circle"]," ","|"," ",["code","square"]],["td",["code","circle"]],["td"]],["tr",["td","size"],["td","\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F"],["td","number ","|"," ",["code","large"]," ","|"," ",["code","small"]," ","|"," ",["code","default"]," ","|"," { xs: number, sm: number, ...}"],["td",["code","default"]],["td","4.7.0"]],["tr",["td","src"],["td","\u56FE\u7247\u7C7B\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740\u6216\u8005\u56FE\u7247\u5143\u7D20"],["td","string ","|"," ReactNode"],["td","-"],["td","ReactNode: 4.8.0"]],["tr",["td","srcSet"],["td","\u8BBE\u7F6E\u56FE\u7247\u7C7B\u5934\u50CF\u54CD\u5E94\u5F0F\u8D44\u6E90\u5730\u5740"],["td","string"],["td","-"],["td"]],["tr",["td","draggable"],["td","\u56FE\u7247\u662F\u5426\u5141\u8BB8\u62D6\u52A8"],["td","boolean ","|"," ",["code","'true'"]," ","|"," ",["code","'false'"]],["td","-"],["td"]],["tr",["td","crossOrigin"],["td","CORS \u5C5E\u6027\u8BBE\u7F6E"],["td",["code","'anonymous'"]," ","|"," ",["code","'use-credentials'"]," ","|"," ",["code","''"]],["td","-"],["td","4.17.0"]],["tr",["td","onError"],["td","\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u4E8B\u4EF6\uFF0C\u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A"],["td","() => boolean"],["td","-"],["td"]]]],["blockquote",["p","Tip\uFF1A\u4F60\u53EF\u4EE5\u8BBE\u7F6E ",["code","icon"]," \u6216 ",["code","children"]," \u4F5C\u4E3A\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u9ED8\u8BA4 fallback \u884C\u4E3A\uFF0C\u4F18\u5148\u7EA7\u4E3A ",["code","icon"]," > ",["code","children"]]],["h3","Avatar.Group (4.5.0+)"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","maxCount"],["td","\u663E\u793A\u7684\u6700\u5927\u5934\u50CF\u4E2A\u6570"],["td","number"],["td","-"],["td"]],["tr",["td","maxPopoverPlacement"],["td","\u591A\u4F59\u5934\u50CF\u6C14\u6CE1\u5F39\u51FA\u4F4D\u7F6E"],["td",["code","top"]," ","|"," ",["code","bottom"]],["td",["code","top"]],["td"]],["tr",["td","maxPopoverTrigger"],["td","\u8BBE\u7F6E\u591A\u4F59\u5934\u50CF Popover \u7684\u89E6\u53D1\u65B9\u5F0F"],["td",["code","hover"]," ","|"," ",["code","focus"]," ","|"," ",["code","click"]],["td",["code","hover"]],["td","4.17.0"]],["tr",["td","maxStyle"],["td","\u591A\u4F59\u5934\u50CF\u6837\u5F0F"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","size"],["td","\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F"],["td","number ","|"," ",["code","large"]," ","|"," ",["code","small"]," ","|"," ",["code","default"]," ","|"," { xs: number, sm: number, ...}"],["td",["code","default"]],["td","4.8.0"]]]]]}}}]);
