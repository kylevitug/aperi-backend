const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachments', {
    attachment_ftp_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    attachment_orig_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    attachment_reference_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attachment_reference_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_hidden: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'attachments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attachment_ftp_name" },
        ]
      },
      {
        name: "attachment_reference_id",
        using: "BTREE",
        fields: [
          { name: "attachment_reference_id" },
        ]
      },
      {
        name: "attachment_reference_type",
        using: "BTREE",
        fields: [
          { name: "attachment_reference_type" },
        ]
      },
      {
        name: "attachment_orig_name",
        using: "BTREE",
        fields: [
          { name: "attachment_orig_name" },
        ]
      },
      {
        name: "is_hidden",
        using: "BTREE",
        fields: [
          { name: "is_hidden" },
        ]
      },
    ]
  });
};
