import { Schema, model } from 'mongoose';
import { IAdmin } from './admin.interface';
import { Role } from './admin.constant';

const AdminSchema = new Schema<IAdmin>(
    {
        _id: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true,
        },
        role: {
            type: String,
            enum: Role
        },
        password:{
            type:String,
            required:true 
        },
        name: {
            type: {
                firstName: {
                    type: String,
                    required: true,
                },
                lastName: {
                    type: String,
                    required: true,
                }
            },
            required: true,
        },
        address: {
            type: String,
            required: true,
        }

    },
    {
        timestamps: true,
    }
);

export const Admin = model<IAdmin>('Admin', AdminSchema);
