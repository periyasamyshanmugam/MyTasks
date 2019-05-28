import { Model, PrimaryKey, BelongsTo, DataType, Table, Column, HasMany, HasOne } from 'sequelize-typescript';
import { DeletedAt, CreatedAt, UpdatedAt, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { json } from 'sequelize';
@Table({
    timestamps: true,
    paranoid: true,
})
export class users extends Model<users> {
    @PrimaryKey
    @Column({
        allowNull: false,
        type: DataType.BIGINT,
        autoIncrement: true,
    })
    public user_id: string;

    @Column({
        defaultValue: null,
        type: DataType.STRING,
    })
    public name: string;

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
}
