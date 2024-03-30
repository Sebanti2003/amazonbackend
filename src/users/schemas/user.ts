/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({
        required: true
    })
    name: string;

    @Prop(
        {
            unique: true,
            required:true
        }
    )
    email: string;

    @Prop({
        required: true
    })
    password: string;

    @Prop({
        required: true
    })
    username: string;

}

export const UserSchema = SchemaFactory.createForClass(User)