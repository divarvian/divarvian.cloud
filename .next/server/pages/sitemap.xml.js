"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 7455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7206);
/* harmony import */ var utils_slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1019);


const generateSiteMap = ({ slugs , categories , tags  })=>{
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${"divarvian.cloud"}</loc>
      </url>
      <url>
        <loc>${"divarvian.cloud"}/blog</loc>
      </url>
      <url>
        <loc>${"divarvian.cloud"}/blog/categories</loc>
      </url>
      <url>
        <loc>${"divarvian.cloud"}/blog/tags</loc>
      </url>
      ${categories.map((category)=>{
        return `
        <url>
        <loc>${"divarvian.cloud"}/blog/categories/${category}</loc>
        </url>
      `;
    }).join("")}
      ${tags.map((tag)=>{
        return `
        <url>
        <loc>${"divarvian.cloud"}/blog/tags/${tag}</loc>
        </url>
      `;
    }).join("")}
      
      ${slugs.map((slug)=>{
        return `
        <url>
        <loc>${"divarvian.cloud"}/blog/posts/${slug}</loc>
        </url>
      `;
    }).join("")}
   </urlset>
 `;
};
function SiteMap() {
// getServerSideProps will do the heavy lifting
}
const getServerSideProps = async ({ res  })=>{
    // Retrieve slugs tags and category from contents folder
    const posts = (0,utils_api__WEBPACK_IMPORTED_MODULE_0__/* .getAllPosts */ .Bd)([
        "slug",
        "tags",
        "category"
    ]);
    // Generate unique categories and store it in array
    const categories = posts.map((post)=>(0,utils_slugify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(post.category)).filter((x, i, a)=>a.indexOf(x) == i);
    // Generate unique tags and store it in array
    let tags = [];
    for (let post of posts){
        if (post.tags) tags.push(...post.tags);
    }
    tags = tags.filter((x, i, a)=>a.indexOf(x) == i);
    // Generate encoded slugs and store it in array
    const slugs = posts.map((post)=>encodeURIComponent(post.slug.trim()));
    const data = {
        slugs,
        tags,
        categories
    };
    // Generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);
    res.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [206], () => (__webpack_exec__(7455)));
module.exports = __webpack_exports__;

})();