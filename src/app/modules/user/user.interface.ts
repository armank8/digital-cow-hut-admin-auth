type Role = "seller" | "buyer";

export type IUser = {
  id:string,
  password: string;
  role: Role;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};
