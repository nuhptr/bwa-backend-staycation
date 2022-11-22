const Category = require("../models/Category");

module.exports = {
  // Category
  viewCategory: async (req, res) => {
    const category = await Category.find();
    // console.log(category);
    res.render("admin/category/view_category", { category });
  },

  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      // console.log(name);
      await Category.create({ name });
      res.redirect("/admin/category");
    } catch (error) {
      res.redirect("/admin/category");
    }
  },

  editCategory: async (req, res) => {
    try {
      const { id, name } = req.body;
      // console.log(id);
      const category = await Category.findOne({ _id: id });
      // console.log(category);
      category.name = name;
      await category.save();
      res.redirect("/admin/category");
    } catch (error) {
      res.redirect("/admin/category");
    }
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    await category.remove();
    res.redirect("/admin/category");
  },
};
