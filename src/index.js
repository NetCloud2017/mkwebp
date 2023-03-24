import "./css/public.css";
import "./css/index.css";

import "jquery";
import "./js/public";
import "./js/nav";
import "./js/jquery.flexslider-min";

import _ from "lodash-es";
// treeshaking触发条件：
//1.通过解构的方式获取方法，可以触发treeshaking
//2.调用的npm包必须使用ESM, 且是 函数模式， 不能是对象或类。
// 3. mode 是 production
// 4. 一定要用结构的方式来加载模块

console.log(_.get({ a: "a" }, "a"));
