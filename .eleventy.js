module.exports = function(eleventyConfig) {
  // این خطوط باعث می‌شوند پوشه پنل ادمین و فایل‌های موزیک مستقیماً در سایت نهایی کپی شوند
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("uploads");
  
  // مهم: اگر فایل استایل (CSS) یا پوشه عکس دارید، نام آن‌ها را مانند الگوهای زیر اضافه کنید:
  // eleventyConfig.addPassthroughCopy("style.css");
  // eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
