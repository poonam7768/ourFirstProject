export interface Istd{
    
    empId: number;
    empName: string;
    designation: string;
    department: string;
    salary: number;
    isPermanent: boolean;
    email: string;
    contact: number;
}

export interface Iproduct{
    prodId: number;
    prodName: string;
    category: string;
    price: number;
    stock: number;
    isAvailable: boolean;
    brand: string;
}

export interface Icourse{
    courseId: number;
    courseName: string;
    duration: string;
    fees: number;
    mode: string;
    isActive: boolean;
    trainer: string;
}