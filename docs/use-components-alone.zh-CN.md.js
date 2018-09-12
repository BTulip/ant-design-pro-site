webpackJsonp([44],{1843:function(n,s){n.exports={content:["article",["p","Ant Design Pro \u811a\u624b\u67b6\u5185\u63d0\u4f9b\u4e86\u4e00\u5957\u9ed8\u8ba4",["a",{title:null,href:"http://pro.ant.design/components"},"\u4e1a\u52a1\u7ec4\u4ef6"],"\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u62bd\u8c61\u4e86\u63a7\u5236\u53f0\u4e1a\u52a1\u4e2d\u7684\u4e00\u4e9b\u5e38\u89c1\u533a\u5757\u3002\u6211\u4eec\u5c06\u6301\u7eed\u7ef4\u62a4\u548c\u8fed\u4ee3\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u4e3a\u4e2d\u540e\u53f0\u4e1a\u52a1\u63d0\u4f9b\u6bd4 Ant Design \u57fa\u7840\u7ec4\u4ef6\u66f4\u9ad8\u7ea7\u522b\u7684\u62bd\u8c61\u3002"],["h2","\u5982\u4f55\u4f7f\u7528"],["p","Ant Design Pro \u811a\u624b\u67b6\u5185\u7528\u5230\u7684\u7ec4\u4ef6\u5206\u4e3a\u4e24\u79cd\uff1a"],["ul",["li",["p","antd \u7ec4\u4ef6\uff1a",["a",{title:null,href:"https://ant.design/docs/react/introduce-cn"},"https://ant.design/docs/react/introduce-cn"]]],["li",["p","pro \u81ea\u5e26\u7ec4\u4ef6\uff1a",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/tree/master/src/components"},"https://github.com/ant-design/ant-design-pro/tree/master/src/components"]]]],["p","\u5bf9\u4e8e\u811a\u624b\u67b6\u7684\u7528\u6237\uff0c\u4f60\u53ef\u4ee5\u5728\u811a\u624b\u67b6\u4e2d\u76f4\u63a5\u5f15\u7528/\u65b0\u589e/\u6539\u9020 pro \u7684\u81ea\u5e26\u7ec4\u4ef6\uff0c\u5177\u4f53\u65b9\u5f0f\u53ef\u53c2\u8003 ",["a",{title:null,href:"/docs/new-component"},"\u65b0\u589e\u7ec4\u4ef6"],"\u3002"],["p","\u5bf9\u4e8e\u6ca1\u6709\u4f7f\u7528\u8fd9\u5957\u811a\u624b\u67b6\u7684\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u5f0f\u6765\u8c03\u7528\u8fd9\u5957\u5185\u5efa\u7ec4\u4ef6\u3002"],["blockquote",["p","\u9ed8\u8ba4\u4e1a\u52a1\u7ec4\u4ef6\u4f1a\u53d1\u5e03\u5230 npm \u7684 ",["a",{title:null,href:"http://npmjs.com/ant-design-pro"},"ant-design-pro"]," \u4e0a\u3002"]],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> ant-design-pro@1.x --save'},["code","$ npm install ant-design-pro@1.x --save"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'ant-design-pro/dist/ant-design-pro.css\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u7edf\u4e00\u5f15\u5165\u6837\u5f0f</span>'},["code","import 'ant-design-pro/dist/ant-design-pro.css'; // \u7edf\u4e00\u5f15\u5165\u6837\u5f0f"]],["p","\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u50cf\u4f7f\u7528 Ant Design \u7ec4\u4ef6\u4e00\u6837\u8c03\u7528 pro \u7ec4\u4ef6\u4e86\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Result <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/Result\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import Result from 'ant-design-pro/lib/Result';\n\nReactDOM.render(<Result type=\"success\" />, mountNode);"]],["blockquote",["p","\u6ce8\u610f\uff0cpro \u7ec4\u4ef6\u9ed8\u8ba4\u4f9d\u8d56\u4e8e antd@3.0\uff0c\u9700\u8981\u4fdd\u8bc1 antd \u7248\u672c\u7684\u4e00\u81f4\u6027\u3002"]],["h3","\u6309\u9700\u52a0\u8f7d"],["p","\u53ef\u4ee5\u4f7f\u7528 babel-plugin-import \u6765\u8fdb\u884c\u6309\u9700\u52a0\u8f7d\uff0c\u52a0\u5165\u8fd9\u4e2a\u63d2\u4ef6\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd9\u4e48\u5199"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Result <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ant-design-pro\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Result type<span class="token operator">=</span><span class="token string">"success"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Result } from 'ant-design-pro';\n\nReactDOM.render(<Result type=\"success\" />, mountNode);"]],["p","\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"],["p","babel-plugin-import \u914d\u7f6e\u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:' <span class="token punctuation">{</span>\n    libraryName<span class="token punctuation">:</span> <span class="token string">\'ant-design-pro\'</span><span class="token punctuation">,</span>\n    libraryDirectory<span class="token punctuation">:</span> <span class="token string">\'lib\'</span><span class="token punctuation">,</span>\n    style<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    camel2DashComponentName<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code"," {\n    libraryName: 'ant-design-pro',\n    libraryDirectory: 'lib',\n    style: true,\n    camel2DashComponentName: false,\n}"]],["h2","\u6587\u6863\u548c\u53cd\u9988"],["p","\u4f60\u53ef\u4ee5\u5728 ",["a",{title:null,href:"http://pro.ant.design/components"},"\u7ec4\u4ef6\u9875\u9762"]," \u627e\u5230\u6240\u6709\u7684\u4e1a\u52a1\u7ec4\u4ef6\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u6f14\u793a\u548c API \u6587\u6863\u3002"],["p","\u7ec4\u4ef6\u4f1a\u968f\u7740\u811a\u624b\u67b6\u7684\u66f4\u65b0\u800c\u4e0d\u65ad\u8fed\u4ee3\uff0c\u6709\u4efb\u4f55\u95ee\u9898\u548c\u9700\u6c42\u53ef\u4ee5\u53cd\u9988\u5230 ",["a",{title:null,href:"http://github.com/ant-design/ant-design-pro/issues"},"\u8fd9\u91cc"],"\u3002"],["ul",["li",["p","\u6700\u65b0\u7248\u672c\uff1a",["a",{title:null,href:"http://npmjs.com/ant-design-pro"},["img",{title:null,src:"https://img.shields.io/npm/v/ant-design-pro.svg?style=flat-square",alt:"ant-design-pro"}]]]],["li",["p",["a",{title:null,href:"/docs/changelog"},"\u66f4\u65b0\u65e5\u5fd7"]]]]],meta:{order:16,title:"\u72ec\u7acb\u4f7f\u7528 Pro \u7ec4\u4ef6",type:"\u8fdb\u9636",filename:"docs/use-components-alone.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5982\u4f55\u4f7f\u7528",title:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6587\u6863\u548c\u53cd\u9988",title:"\u6587\u6863\u548c\u53cd\u9988"},"\u6587\u6863\u548c\u53cd\u9988"]]]}}});