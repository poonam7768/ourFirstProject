import { Ibook, Icourse, Icustomer, Imovie, Iorder, Iproduct, Istd, Iteacher, Ivehicle } from "../modules/student";


export let stdArr :Istd[] = [
  { empId: 201,empName: 'Aditya Jain',designation: 'Software Engineer',department: 'IT',salary: 52000,isPermanent: true,email: 'aditya.jain@example.com',contact: 9876501234},
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
  { prodId: 301,prodName: 'Laptop', category: 'Electronics', price: 60000,stock: 25,isAvailable: true,brand: 'Dell'},
  { prodId: 302, prodName: 'Smartphone', category: 'Electronics', price: 35000, stock: 40, isAvailable: true, brand: 'Samsung' },
  { prodId: 303, prodName: 'Headphones', category: 'Accessories', price: 2500, stock: 100, isAvailable: true, brand: 'Sony' },
  { prodId: 304, prodName: 'Watch', category: 'Fashion', price: 5000, stock: 15, isAvailable: false, brand: 'Fossil' },
  { prodId: 305, prodName: 'Keyboard', category: 'Computers', price: 1200, stock: 60, isAvailable: true, brand: 'Logitech' },
  { prodId: 306, prodName: 'Shoes', category: 'Footwear', price: 2500, stock: 30, isAvailable: true, brand: 'Nike' },
  { prodId: 307, prodName: 'Book', category: 'Stationery', price: 300, stock: 200, isAvailable: true, brand: 'Penguin' },
  { prodId: 308, prodName: 'Bag', category: 'Accessories', price: 1500, stock: 50, isAvailable: true, brand: 'Skybags' }
];

 export let courseArr:Icourse[] = [
  {courseId: 101,courseName: 'Web Development',duration: '6 Months',fees: 15000,mode: 'Online',isActive: true,trainer: 'Mr. Ramesh'},
  { courseId: 102, courseName: 'Data Science', duration: '8 Months', fees: 25000, mode: 'Offline', isActive: true, trainer: 'Ms. Anjali' },
  { courseId: 103, courseName: 'UI/UX Design', duration: '4 Months', fees: 12000, mode: 'Online', isActive: true, trainer: 'Mr. Vivek' },
  { courseId: 104, courseName: 'Python Programming', duration: '5 Months', fees: 14000, mode: 'Offline', isActive: true, trainer: 'Ms. Kavya' },
  { courseId: 105, courseName: 'Cloud Computing', duration: '6 Months', fees: 20000, mode: 'Online', isActive: false, trainer: 'Mr. Rahul' },
  { courseId: 106, courseName: 'Machine Learning', duration: '8 Months', fees: 27000, mode: 'Online', isActive: true, trainer: 'Dr. Sneha' },
  { courseId: 107, courseName: 'Ethical Hacking', duration: '3 Months', fees: 10000, mode: 'Offline', isActive: true, trainer: 'Mr. Deepak' },
  { courseId: 108, courseName: 'Digital Marketing', duration: '5 Months', fees: 13000, mode: 'Online', isActive: true, trainer: 'Ms. Neha' }
];

export let  bookArr :Ibook[]  = [
  { bookId: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 499, pages: 208, isAvailable: true, genre: 'Fiction' },
  { bookId: 2, title: 'Atomic Habits', author: 'James Clear', price: 599, pages: 320, isAvailable: true, genre: 'Self Help' },
  { bookId: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 450, pages: 280, isAvailable: false, genre: 'Finance' },
  { bookId: 4, title: 'Deep Work', author: 'Cal Newport', price: 550, pages: 304, isAvailable: true, genre: 'Productivity' },
  { bookId: 5, title: 'Clean Code', author: 'Robert C. Martin', price: 899, pages: 464, isAvailable: true, genre: 'Programming' },
  { bookId: 6, title: 'You Can Win', author: 'Shiv Khera', price: 399, pages: 280, isAvailable: true, genre: 'Motivation' },
  { bookId: 7, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', price: 350, pages: 220, isAvailable: true, genre: 'Biography' },
  { bookId: 8, title: 'Think and Grow Rich', author: 'Napoleon Hill', price: 499, pages: 320, isAvailable: false, genre: 'Success' }
];





  export let customerArr:Icustomer[] = [
  { custId: 1, name: 'Rahul Sharma', city: 'Delhi', age: 29, email: 'rahul@gmail.com', isPrime: true, contact: 9876501234 },
  { custId: 2, name: 'Sneha Joshi', city: 'Mumbai', age: 24, email: 'sneha@gmail.com', isPrime: true, contact: 9765432189 },
  { custId: 3, name: 'Amit Patil', city: 'Pune', age: 31, email: 'amit@gmail.com', isPrime: false, contact: 9812345670 },
  { custId: 4, name: 'Divya Rao', city: 'Hyderabad', age: 27, email: 'divya@gmail.com', isPrime: true, contact: 9823456701 },
  { custId: 5, name: 'Karan Mehta', city: 'Bangalore', age: 35, email: 'karan@gmail.com', isPrime: false, contact: 9871234567 },
  { custId: 6, name: 'Nisha Verma', city: 'Jaipur', age: 23, email: 'nisha@gmail.com', isPrime: true, contact: 9955667788 },
  { custId: 7, name: 'Saurabh Jain', city: 'Kolkata', age: 28, email: 'saurabh@gmail.com', isPrime: false, contact: 9876655443 },
  { custId: 8, name: 'Tina Kapoor', city: 'Chennai', age: 30, email: 'tina@gmail.com', isPrime: true, contact: 9900123456 }
];




  export let orderArr:Iorder[] = [
  { orderId: 501, customerName: 'Rahul Sharma', product: 'Laptop', amount: 60000, status: 'Delivered', date: '2025-10-15' },
  { orderId: 502, customerName: 'Sneha Joshi', product: 'Mobile', amount: 30000, status: 'Pending', date: '2025-10-18' },
  { orderId: 503, customerName: 'Amit Patil', product: 'Shoes', amount: 2500, status: 'Delivered', date: '2025-09-29' },
  { orderId: 504, customerName: 'Divya Rao', product: 'Headphones', amount: 2000, status: 'Cancelled', date: '2025-09-22' },
  { orderId: 505, customerName: 'Karan Mehta', product: 'Keyboard', amount: 1500, status: 'Delivered', date: '2025-10-02' },
  { orderId: 506, customerName: 'Nisha Verma', product: 'Watch', amount: 5000, status: 'Pending', date: '2025-10-05' },
  { orderId: 507, customerName: 'Saurabh Jain', product: 'Mouse', amount: 800, status: 'Delivered', date: '2025-09-15' },
  { orderId: 508, customerName: 'Tina Kapoor', product: 'Bag', amount: 1800, status: 'Delivered', date: '2025-10-01' }
];


 export let movieArr :Imovie[]= [
  { movieId: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8, releaseYear: 2010, isHit: true, language: 'English' },
  { movieId: 2, title: '3 Idiots', genre: 'Comedy', rating: 8.4, releaseYear: 2009, isHit: true, language: 'Hindi' },
  { movieId: 3, title: 'Dangal', genre: 'Drama', rating: 8.5, releaseYear: 2016, isHit: true, language: 'Hindi' },
  { movieId: 4, title: 'Avatar', genre: 'Fantasy', rating: 7.8, releaseYear: 2009, isHit: true, language: 'English' },
  { movieId: 5, title: 'KGF', genre: 'Action', rating: 8.2, releaseYear: 2018, isHit: true, language: 'Kannada' },
  { movieId: 6, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6, releaseYear: 2014, isHit: true, language: 'English' },
  { movieId: 7, title: 'Pathaan', genre: 'Action', rating: 7.1, releaseYear: 2023, isHit: false, language: 'Hindi' },
  { movieId: 8, title: 'Pushpa', genre: 'Action', rating: 7.6, releaseYear: 2021, isHit: true, language: 'Telugu' }
];



  export let teacherArr : Iteacher[] = [
  { teacherId: 11, name: 'Ramesh Kumar', subject: 'Maths', experience: 10, salary: 55000, isFullTime: true, email: 'ramesh@school.com' },
  { teacherId: 12, name: 'Seema Gupta', subject: 'English', experience: 8, salary: 50000, isFullTime: true, email: 'seema@school.com' },
  { teacherId: 13, name: 'Anil Mehta', subject: 'Physics', experience: 12, salary: 60000, isFullTime: true, email: 'anil@school.com' },
  { teacherId: 14, name: 'Kavita Rani', subject: 'Chemistry', experience: 6, salary: 45000, isFullTime: false, email: 'kavita@school.com' },
  { teacherId: 15, name: 'Vivek Sharma', subject: 'Biology', experience: 7, salary: 47000, isFullTime: true, email: 'vivek@school.com' },
  { teacherId: 16, name: 'Nisha Jain', subject: 'Computer', experience: 9, salary: 52000, isFullTime: true, email: 'nisha@school.com' },
  { teacherId: 17, name: 'Arjun Das', subject: 'History', experience: 11, salary: 48000, isFullTime: false, email: 'arjun@school.com' },
  { teacherId: 18, name: 'Sneha Rao', subject: 'Economics', experience: 5, salary: 43000, isFullTime: true, email: 'sneha@school.com' }
];



 export let vehicleArr : Ivehicle[] = [
  { vehicleId: 1, brand: 'Honda', model: 'City', type: 'Car', price: 1200000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 2, brand: 'Hero', model: 'Splendor', type: 'Bike', price: 85000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 3, brand: 'Tata', model: 'Nexon', type: 'SUV', price: 1400000, isAvailable: true, fuel: 'Diesel' },
  { vehicleId: 4, brand: 'Hyundai', model: 'i20', type: 'Car', price: 1000000, isAvailable: false, fuel: 'Petrol' },
  { vehicleId: 5, brand: 'TVS', model: 'Jupiter', type: 'Scooter', price: 90000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 6, brand: 'Bajaj', model: 'Pulsar', type: 'Bike', price: 110000, isAvailable: true, fuel: 'Petrol' },
  { vehicleId: 7, brand: 'Kia', model: 'Seltos', type: 'SUV', price: 1600000, isAvailable: true, fuel: 'Diesel' },
  { vehicleId: 8, brand: 'Suzuki', model: 'Access', type: 'Scooter', price: 95000, isAvailable: true, fuel: 'Petrol' }
];