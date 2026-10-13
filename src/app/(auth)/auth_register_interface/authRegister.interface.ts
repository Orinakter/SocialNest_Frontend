export interface RegisterState {
    success: boolean;
  message: string;
  statusCode: number;

  data: {
    id: string;
    name: string;
    email: string;
    activeStatus: string;
    role: string;
    createdAt: number;
    updatedAt: number;
  } | null;
}
