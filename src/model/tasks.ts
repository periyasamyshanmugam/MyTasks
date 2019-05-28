import { Model, PrimaryKey, BelongsTo, DataType, Table, Column, HasMany, HasOne } from 'sequelize-typescript';
import { DeletedAt, CreatedAt, UpdatedAt, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import { json } from 'sequelize';
import { users } from './users';

@Table({
    timestamps: true,
    paranoid: true,
})
export class tasks extends Model<tasks> {
    @PrimaryKey
    @Column({
        allowNull: false,
        type: DataType.BIGINT,
        autoIncrement: true,
    })
    public task_id: string;

    @ForeignKey(() => users)
    @Column({
        allowNull: false,
        type: DataType.BIGINT,
    })
    public user_id: string;

    @Column({
        defaultValue: null,
        type: DataType.STRING,
    })
    public name: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    public schedule_date: Date; 

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: 0,
    })
    public isCompleted: boolean;

    @Column({
        allowNull: true,
        type: DataType.TEXT('medium'),
    })
    public details: string;

    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;

    @BelongsTo(() => users)
    public users: users;
}
