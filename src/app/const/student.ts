import { Iproduct, Istd } from "../modules/student";


export let stdArr :Istd[] = [
{ 
empId: 201,
empName: 'Aditya Jain',
designation: 'Software Engineer',
department: 'IT',
salary: 52000,
isPermanent: true,
email: 'aditya.jain@example.com',
contact: 9876501234
  },
  { empId: 202, empName: 'Ritika Deshmukh', designation: 'Graphic Designer', department: 'Design', salary: 41000, isPermanent: true, email: 'ritika.deshmukh@example.com', contact: 9823456780 },
  { empId: 203, empName: 'Sahil Khan', designation: 'Backend Developer', department: 'IT', salary: 49000, isPermanent: false, email: 'sahil.khan@example.com', contact: 9812309876 },
  { empId: 204, empName: 'Meena Reddy', designation: 'HR Manager', department: 'Human Resources', salary: 65000, isPermanent: true, email: 'meena.reddy@example.com', contact: 9877701122 },
  { empId: 205, empName: 'Ravi Patel', designation: 'QA Tester', department: 'Testing', salary: 42000, isPermanent: true, email: 'ravi.patel@example.com', contact: 9123401111 },
  { empId: 206, empName: 'Shruti Sharma', designation: 'Data Scientist', department: 'Analytics', salary: 72000, isPermanent: true, email: 'shruti.sharma@example.com', contact: 9890112223 },
  { empId: 207, empName: 'Nikhil Bansal', designation: 'Network Admin', department: 'Infrastructure', salary: 46000, isPermanent: false, email: 'nikhil.bansal@example.com', contact: 9811188221 },
  { empId: 208, empName: 'Simran Kaur', designation: 'Recruiter', department: 'HR', salary: 38000, isPermanent: true, email: 'simran.kaur@example.com', contact: 9755511223 },
  { empId: 209, empName: 'Arun Nair', designation: 'DevOps Engineer', department: 'IT', salary: 59000, isPermanent: true, email: 'arun.nair@example.com', contact: 9833309876 },
  { empId: 210, empName: 'Kavya Pillai', designation: 'Technical Writer', department: 'Documentation', salary: 37000, isPermanent: false, email: 'kavya.pillai@example.com', contact: 9900110099 }
   
]

  export let productArr :Iproduct[] = [
  { 
    prodId: 301,
    prodName: 'Laptop',
    category: 'Electronics',
    price: 60000,
    stock: 25,
    isAvailable: true,
    brand: 'Dell' 
  },
  { prodId: 302, prodName: 'Smartphone', category: 'Electronics', price: 35000, stock: 40, isAvailable: true, brand: 'Samsung' },
  { prodId: 303, prodName: 'Headphones', category: 'Accessories', price: 2500, stock: 100, isAvailable: true, brand: 'Sony' },
  { prodId: 304, prodName: 'Watch', category: 'Fashion', price: 5000, stock: 15, isAvailable: false, brand: 'Fossil' },
  { prodId: 305, prodName: 'Keyboard', category: 'Computers', price: 1200, stock: 60, isAvailable: true, brand: 'Logitech' },
  { prodId: 306, prodName: 'Shoes', category: 'Footwear', price: 2500, stock: 30, isAvailable: true, brand: 'Nike' },
  { prodId: 307, prodName: 'Book', category: 'Stationery', price: 300, stock: 200, isAvailable: true, brand: 'Penguin' },
  { prodId: 308, prodName: 'Bag', category: 'Accessories', price: 1500, stock: 50, isAvailable: true, brand: 'Skybags' }
];

 export let courseArr = [
  {
    courseId: 101,
    courseName: 'Web Development',
    duration: '6 Months',
    fees: 15000,
    mode: 'Online',
    isActive: true,
    trainer: 'Mr. Ramesh'
           },
  { courseId: 102, courseName: 'Data Science', duration: '8 Months', fees: 25000, mode: 'Offline', isActive: true, trainer: 'Ms. Anjali' },
  { courseId: 103, courseName: 'UI/UX Design', duration: '4 Months', fees: 12000, mode: 'Online', isActive: true, trainer: 'Mr. Vivek' },
  { courseId: 104, courseName: 'Python Programming', duration: '5 Months', fees: 14000, mode: 'Offline', isActive: true, trainer: 'Ms. Kavya' },
  { courseId: 105, courseName: 'Cloud Computing', duration: '6 Months', fees: 20000, mode: 'Online', isActive: false, trainer: 'Mr. Rahul' },
  { courseId: 106, courseName: 'Machine Learning', duration: '8 Months', fees: 27000, mode: 'Online', isActive: true, trainer: 'Dr. Sneha' },
  { courseId: 107, courseName: 'Ethical Hacking', duration: '3 Months', fees: 10000, mode: 'Offline', isActive: true, trainer: 'Mr. Deepak' },
  { courseId: 108, courseName: 'Digital Marketing', duration: '5 Months', fees: 13000, mode: 'Online', isActive: true, trainer: 'Ms. Neha' }
];