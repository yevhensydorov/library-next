const Knex = require("knex");
const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Resources extends Model {
  static get tableName() {
    return "resources";
  }

  static get relationMappings() {
    return {
      categories: {
        relation: Model.ManyToManyRelation,
        modelClass: Categories,
        join: {
          from: "resources.id",
          through: {
            from: "resources_categories.resource_id",
            to: "resources_categories.category_id",
          },
          to: "categories.id",
        },
      },
    };
  }
}

class Categories extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    return {
      resources_categories: {
        relation: Model.BelongsToOneRelation,
        modelClass: ResourcesCategories,
        join: {
          from: "categories.id",
          to: "resources_categories.category_id",
        },
      },
    };
  }
}

class ResourcesCategories extends Model {
  static get tableName() {
    return "resources_categories";
  }

  static get relationMappings() {
    return {
      resources: {
        relation: Model.HasOne,
        modelClass: Resources,
        join: {
          from: "resources_categories.resource_id",
          to: "resources.id",
        },
      },
      categories: {
        relation: Model.HasOne,
        modelClass: Categories,
        join: {
          from: "resources_categories.category_id",
          to: "categories.id",
        },
      },
    };
  }
}

class CategoriesWithResourcesList extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    return {
      resources: {
        relation: Model.ManyToManyRelation,
        modelClass: Resources,
        join: {
          from: "categories.id",
          through: {
            from: "resources_categories.category_id",
            to: "resources_categories.resource_id",
          },
          to: "resources.id",
        },
      },
    };
  }
}

module.exports = {
  Resources,
  Categories,
  ResourcesCategories,
  CategoriesWithResourcesList,
};
