import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
import environment from '../config/environment';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models['Role']);
      User.hasOne(models['RefreshToken']);
    }

    static async hashPassword(password) {
      return bcrypt.hash(password, environment.saltRounds);
    }

    static async comparePassword(password, hashedPassword) {
      return bcrypt.compare(password, hashedPassword);
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Not a vslid email address',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(50),
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING(50),
        validate: {
          len: {
            args: [0, 50],
            msg: 'firstname has too many characters',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING(50),
        validate: {
          len: {
            args: [0, 50],
            msg: 'lastname has too many characters',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      indexes: [{ unique: true, fields: ['email'] }],
    }
  );

  User.beforeSave(async (user, options) => {
    const hashedPassword = await User.hashPassword(user.password);
    user.password = hashedPassword;
  });

  return User;
};
