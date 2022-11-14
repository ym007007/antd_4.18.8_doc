(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{3024:function(t,e){t.exports={content:["section",["p","\u4E0B\u62C9\u9009\u62E9\u5668\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["ul",["li",["p","\u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4EE3\u66FF\u539F\u751F\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u9700\u8981\u4E00\u4E2A\u66F4\u4F18\u96C5\u7684\u591A\u9009\u5668\u65F6\u3002"]],["li",["p","\u5F53\u9009\u9879\u5C11\u65F6\uFF08\u5C11\u4E8E 5 \u9879\uFF09\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 ",["a",{title:null,href:"/components/radio/"},"Radio"]," \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002"]]]],meta:{category:"Components",subtitle:"\u9009\u62E9\u5668",type:"\u6570\u636E\u5F55\u5165",title:"Select",cover:"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg",filename:"components/select/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>`},["code",`<Select>
  <Option value="lucy">lucy</Option>
</Select>`]],["h3","Select props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","allowClear"],["td","\u652F\u6301\u6E05\u9664"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoClearSearchValue"],["td","\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 ",["code","mode"]," \u4E3A ",["code","multiple"]," \u6216 ",["code","tags"]," \u65F6\u6709\u6548"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","\u662F\u5426\u6709\u8FB9\u6846"],["td","boolean"],["td","true"],["td"]],["tr",["td","clearIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultOpen"],["td","\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355"],["td","boolean"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE"],["td","string ","|"," string","[","]",["br"],"number ","|"," number","[","]",["br"],"LabeledValue ","|"," LabeledValue","[","]"],["td","-"],["td"]],["tr",["td","disabled"],["td","\u662F\u5426\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownClassName"],["td","\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E ",["code","min-width"],"\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean ","|"," number"],["td","true"],["td"]],["tr",["td","dropdownRender"],["td","\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9"],["td","(originNode: ReactNode) => ReactNode"],["td","-"],["td"]],["tr",["td","dropdownStyle"],["td","\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","fieldNames"],["td","\u81EA\u5B9A\u4E49\u8282\u70B9 label\u3001value\u3001options \u7684\u5B57\u6BB5"],["td","object"],["td","{ label: ",["code","label"],", value: ",["code","value"],", options: ",["code","options"]," }"],["td","4.17.0"]],["tr",["td","filterOption"],["td","\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 ",["code","inputValue"]," ",["code","option"]," \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 ",["code","option"]," \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false"],["td","boolean ","|"," function(inputValue, option)"],["td","true"],["td"]],["tr",["td","filterSort"],["td","\u641C\u7D22\u65F6\u5BF9\u7B5B\u9009\u7ED3\u679C\u9879\u7684\u6392\u5E8F\u51FD\u6570, \u7C7B\u4F3C",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"],"\u91CC\u7684 compareFunction"],["td","(optionA: Option, optionB: Option) => number"],["td","-"],["td","4.9.0"]],["tr",["td","getPopupContainer"],["td","\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"\u793A\u4F8B"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","labelInValue"],["td","\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE ",["code","string"]," \u53D8\u4E3A { value: string, label: ReactNode } \u7684\u683C\u5F0F"],["td","boolean"],["td","false"],["td"]],["tr",["td","listHeight"],["td","\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6"],["td","number"],["td","256"],["td"]],["tr",["td","loading"],["td","\u52A0\u8F7D\u4E2D\u72B6\u6001"],["td","boolean"],["td","false"],["td"]],["tr",["td","maxTagCount"],["td","\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017"],["td","number ","|"," ",["code","responsive"]],["td","-"],["td","responsive: 4.10"]],["tr",["td","maxTagPlaceholder"],["td","\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode ","|"," function(omittedValues)"],["td","-"],["td"]],["tr",["td","maxTagTextLength"],["td","\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6"],["td","number"],["td","-"],["td"]],["tr",["td","menuItemSelectedIcon"],["td","\u81EA\u5B9A\u4E49\u591A\u9009\u65F6\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","mode"],["td","\u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E"],["td",["code","multiple"]," ","|"," ",["code","tags"]],["td","-"],["td"]],["tr",["td","notFoundContent"],["td","\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode"],["td",["code","Not Found"]],["td"]],["tr",["td","open"],["td","\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355"],["td","boolean"],["td","-"],["td"]],["tr",["td","optionFilterProp"],["td","\u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 ",["code","option"]," \u5C5E\u6027\uFF0C\u5982\u8BBE\u7F6E\u4E3A ",["code","children"]," \u8868\u793A\u5BF9\u5185\u5D4C\u5185\u5BB9\u8FDB\u884C\u641C\u7D22\u3002\u82E5\u901A\u8FC7 ",["code","options"]," \u5C5E\u6027\u914D\u7F6E\u9009\u9879\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E ",["code",'optionFilterProp="label"']," \u6765\u5BF9\u5185\u5BB9\u8FDB\u884C\u641C\u7D22\u3002"],["td","string"],["td",["code","value"]],["td"]],["tr",["td","optionLabelProp"],["td","\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A ",["code","value"],"\u3002",["a",{title:null,href:"https://codesandbox.io/s/antd-reproduction-template-tk678"},"\u793A\u4F8B"]],["td","string"],["td",["code","children"]],["td"]],["tr",["td","options"],["td","\u6570\u636E\u5316\u914D\u7F6E\u9009\u9879\u5185\u5BB9\uFF0C\u76F8\u6BD4 jsx \u5B9A\u4E49\u4F1A\u83B7\u5F97\u66F4\u597D\u7684\u6E32\u67D3\u6027\u80FD"],["td","{ label, value }","[","]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u672C"],["td","string"],["td","-"],["td"]],["tr",["td","removeIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","searchValue"],["td","\u63A7\u5236\u641C\u7D22\u6587\u672C"],["td","string"],["td","-"],["td"]],["tr",["td","showArrow"],["td","\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934"],["td","boolean"],["td","\u5355\u9009\u4E3A true\uFF0C\u591A\u9009\u4E3A false"],["td"]],["tr",["td","showSearch"],["td","\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22"],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td","\u9009\u62E9\u6846\u5927\u5C0F"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td",["code","middle"]],["td"]],["tr",["td","suffixIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","tagRender"],["td","\u81EA\u5B9A\u4E49 tag \u5185\u5BB9 render\uFF0C\u4EC5\u5728 ",["code","mode"]," \u4E3A ",["code","multiple"]," \u6216 ",["code","tags"]," \u65F6\u751F\u6548"],["td","(props) => ReactNode"],["td","-"],["td"]],["tr",["td","tokenSeparators"],["td","\u5728 ",["code","tags"]," \u548C ",["code","multiple"]," \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","value"],["td","\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\uFF0C\u591A\u9009\u65F6\u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002\uFF08value \u6570\u7EC4\u5F15\u7528\u672A\u53D8\u5316\u65F6\uFF0CSelect \u4E0D\u4F1A\u66F4\u65B0\uFF09"],["td","string ","|"," string","[","]",["br"],"number ","|"," number","[","]",["br"],"LabeledValue ","|"," LabeledValue","[","]"],["td","-"],["td"]],["tr",["td","virtual"],["td","\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean"],["td","true"],["td","4.1.0"]],["tr",["td","onBlur"],["td","\u5931\u53BB\u7126\u70B9\u65F6\u56DE\u8C03"],["td","function"],["td","-"],["td"]],["tr",["td","onChange"],["td","\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570"],["td","function(value, option:Option ","|"," Array","<","Option>)"],["td","-"],["td"]],["tr",["td","onClear"],["td","\u6E05\u9664\u5185\u5BB9\u65F6\u56DE\u8C03"],["td","function"],["td","-"],["td","4.6.0"]],["tr",["td","onDeselect"],["td","\u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 ",["code","multiple"]," \u6216 ",["code","tags"]," \u6A21\u5F0F\u4E0B\u751F\u6548"],["td","function(string ","|"," number ","|"," LabeledValue)"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","\u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03"],["td","function"],["td","-"],["td"]],["tr",["td","onInputKeyDown"],["td","\u6309\u952E\u6309\u4E0B\u65F6\u56DE\u8C03"],["td","function"],["td","-"],["td"]],["tr",["td","onMouseEnter"],["td","\u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03"],["td","function"],["td","-"],["td"]],["tr",["td","onMouseLeave"],["td","\u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03"],["td","function"],["td","-"],["td"]],["tr",["td","onPopupScroll"],["td","\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03"],["td","function"],["td","-"],["td"]],["tr",["td","onSearch"],["td","\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03"],["td","function(value: string)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C"],["td","function(string ","|"," number ","|"," LabeledValue, option: Option)"],["td","-"],["td"]]]],["blockquote",["p","\u6CE8\u610F\uFF0C\u5982\u679C\u53D1\u73B0\u4E0B\u62C9\u83DC\u5355\u8DDF\u968F\u9875\u9762\u6EDA\u52A8\uFF0C\u6216\u8005\u9700\u8981\u5728\u5176\u4ED6\u5F39\u5C42\u4E2D\u89E6\u53D1 Select\uFF0C\u8BF7\u5C1D\u8BD5\u4F7F\u7528 ",["code","getPopupContainer={triggerNode => triggerNode.parentElement}"]," \u5C06\u4E0B\u62C9\u5F39\u5C42\u6E32\u67D3\u8282\u70B9\u56FA\u5B9A\u5728\u89E6\u53D1\u5668\u7684\u7236\u5143\u7D20\u4E2D\u3002"]],["h3","Select Methods"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u8BF4\u660E"],["th","\u7248\u672C"]]],["tbody",["tr",["td","blur()"],["td","\u53D6\u6D88\u7126\u70B9"],["td"]],["tr",["td","focus()"],["td","\u83B7\u53D6\u7126\u70B9"],["td"]]]],["h3","Option props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","className"],["td","Option \u5668\u7C7B\u540D"],["td","string"],["td","-"],["td"]],["tr",["td","disabled"],["td","\u662F\u5426\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","title"],["td","\u9009\u9879\u4E0A\u7684\u539F\u751F title \u63D0\u793A"],["td","string"],["td","-"],["td"]],["tr",["td","value"],["td","\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009"],["td","string ","|"," number"],["td","-"],["td"]]]],["h3","OptGroup props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","key"],["td","Key"],["td","string"],["td","-"],["td"]],["tr",["td","label"],["td","\u7EC4\u540D"],["td","string ","|"," React.Element"],["td","-"],["td"]]]],["h2","FAQ"],["h3",["code","tag"]," \u6A21\u5F0F\u4E0B\u4E3A\u4F55\u641C\u7D22\u6709\u65F6\u4F1A\u51FA\u73B0\u4E24\u4E2A\u76F8\u540C\u9009\u9879\uFF1F"],["p","\u8FD9\u4E00\u822C\u662F ",["code","options"]," \u4E2D\u7684 ",["code","label"]," \u548C ",["code","value"]," \u4E0D\u540C\u5BFC\u81F4\u7684\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",["code",'optionFilterProp="label"']," \u5C06\u8FC7\u6EE4\u8BBE\u7F6E\u4E3A\u5C55\u793A\u503C\u4EE5\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u3002"],["h3","\u70B9\u51FB ",["code","dropdownRender"]," \u91CC\u7684\u5185\u5BB9\u6D6E\u5C42\u5173\u95ED\u600E\u4E48\u529E\uFF1F"],["p","\u770B\u4E0B ",["a",{title:null,href:"#components-select-demo-custom-dropdown-menu"},"dropdownRender \u4F8B\u5B50"]," \u91CC\u7684\u8BF4\u660E\u3002"],["h3","\u81EA\u5B9A\u4E49 Option \u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E\uFF1F"],["p","\u8FD9\u662F\u7531\u4E8E\u865A\u62DF\u6EDA\u52A8\u9ED8\u8BA4\u9009\u9879\u9AD8\u5EA6\u4E3A ",["code","32px"],"\uFF0C\u5982\u679C\u4F60\u7684\u9009\u9879\u9AD8\u5EA6\u5C0F\u4E8E\u8BE5\u503C\u5219\u9700\u8981\u901A\u8FC7 ",["code","listItemHeight"]," \u5C5E\u6027\u8C03\u6574\uFF0C\u800C ",["code","listHeight"]," \u7528\u4E8E\u8BBE\u7F6E\u6EDA\u52A8\u5BB9\u5668\u9AD8\u5EA6\uFF1A"],["pre",{lang:"tsx",highlighted:'<span class="token operator">&lt;</span><span class="token keyword">Select</span> listItemHeight<span class="token operator">=</span>{<span class="token number">10</span>} listHeight<span class="token operator">=</span>{<span class="token number">250</span>} <span class="token operator">/</span><span class="token operator">></span>'},["code","<Select listItemHeight={10} listHeight={250} />"]],["p","\u6CE8\u610F\uFF1A",["code","listItemHeight"]," \u548C ",["code","listHeight"]," \u4E3A\u5185\u90E8\u5C5E\u6027\uFF0C\u5982\u65E0\u5FC5\u8981\uFF0C\u8BF7\u52FF\u4FEE\u6539\u8BE5\u503C\u3002"],["h3","\u4E3A\u4F55\u65E0\u969C\u788D\u6D4B\u8BD5\u4F1A\u62A5\u7F3A\u5931 ",["code","aria-"]," \u5C5E\u6027\uFF1F"],["p","Select \u65E0\u969C\u788D\u8F85\u52A9\u5143\u7D20\u4EC5\u5728\u5F39\u7A97\u5C55\u5F00\u65F6\u521B\u5EFA\uFF0C\u56E0\u800C\u5F53\u4F60\u5728\u8FDB\u884C\u65E0\u969C\u788D\u68C0\u6D4B\u65F6\u8BF7\u5148\u6253\u5F00\u4E0B\u62C9\u540E\u518D\u8FDB\u884C\u6D4B\u8BD5\u3002\u5BF9\u4E8E ",["code","aria-label"]," \u4E0E ",["code","aria-labelledby"]," \u5C5E\u6027\u7F3A\u5931\u8B66\u544A\uFF0C\u8BF7\u81EA\u884C\u4E3A Select \u7EC4\u4EF6\u6DFB\u52A0\u76F8\u5E94\u65E0\u969C\u788D\u5C5E\u6027\u3002"]]}}}]);
