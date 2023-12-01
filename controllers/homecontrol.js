export const homepage = (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
};

export const aboutpage = (req, res) => {
  res.render("about");
};
