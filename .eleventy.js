module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("uploads");
  
  // این خطوط برای کپی شدن عکس‌ها در سایت نهایی اضافه می‌شوند
  eleventyConfig.addPassthroughCopy("profile.jpg");
  eleventyConfig.addPassthroughCopy("avatar.png");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
