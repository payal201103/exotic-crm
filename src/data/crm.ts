export type DashboardStatTone = "blue" | "cyan" | "red" | "amber" | "emerald";

export type DashboardStatIcon =
  | "calendar"
  | "wrench"
  | "ban"
  | "video"
  | "check"
  | "edit"
  | "share";

export type JobCardStatus = "Open" | "Closed";
export type UserRole =
  | "Admin"
  | "Manager"
  | "Accountant"
  | "Videographer"
  | "Video Editor"
  | "Social Media Poster"
  | "Staff";
export type VideoWorkflowStage =
  | "Recording Pending"
  | "Recording"
  | "Pending Edit"
  | "Editing"
  | "Ready To Post"
  | "Posted";
export type VideoWorkflowType = "Reel" | "YouTube" | "Walkaround";
export type VideoWorkflowRole = "videographer" | "editor" | "poster";

export type JobCard = {
  id: number;
  customerName: string;
  mobile: string;
  carBrand: string;
  carModel: string;
  carColor: string;
  carNumber: string;
  vehicle: string;
  bookingDate: string;
  bookingDateTime: string;
  deliveryDate: string;
  deliveryDateTime: string;
  services: string[];
  note: string;
  status: JobCardStatus;
  workflowStatus:
    | "Recording Pending"
    | "Recording Completed"
    | "Editing Pending"
    | "Editing Completed"
    | "Posting Pending"
    | "Posting Completed";
};

export type CrmUser = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  contact: string;
  email: string;
  role: UserRole;
};

export type Customer = {
  id: number;
  name: string;
  mobile: string;
  email: string;
  gstNo: string;
};

export type Company = {
  id: number;
  name: string;
  contactNo: string;
  gstin: string;
  address: string;
};

export type CarModel = {
  id: number;
  brandName: string;
  modelName: string;
};

export type CarBrand = {
  id: number;
  name: string;
};

export type TaxSlab = {
  id: number;
  name: string;
  rate: string;
};

export type Product = {
  id: number;
  name: string;
  taxSlab: string;
  hsnCode: string;
  unit: string;
  price: string;
};

export const userRoleOptions: UserRole[] = [
  "Admin",
  "Manager",
  "Accountant",
  "Videographer",
  "Video Editor",
  "Social Media Poster",
  "Staff",
];

export const users: CrmUser[] = [
  {
    id: 1,
    firstName: "Exotic",
    lastName: "",
    username: "exotic",
    contact: "",
    email: "",
    role: "Admin",
  },
  {
    id: 2,
    firstName: "Dhrumil",
    lastName: "",
    username: "dhrumil",
    contact: "",
    email: "",
    role: "Admin",
  },
  {
    id: 3,
    firstName: "Bhavin",
    lastName: "",
    username: "bhavin",
    contact: "",
    email: "",
    role: "Admin",
  },
  {
    id: 4,
    firstName: "Exotic",
    lastName: "Thapa",
    username: "exotic_manager",
    contact: "",
    email: "",
    role: "Manager",
  },
  {
    id: 5,
    firstName: "Vaijul",
    lastName: "Bhai",
    username: "vaijul",
    contact: "",
    email: "",
    role: "Manager",
  },
  {
    id: 6,
    firstName: "Dhaval",
    lastName: "Editor",
    username: "dhaval",
    contact: "",
    email: "",
    role: "Video Editor",
  },
  {
    id: 7,
    firstName: "Jignesh",
    lastName: "Videographer",
    username: "jignesh",
    contact: "",
    email: "",
    role: "Videographer",
  },
  {
    id: 8,
    firstName: "Harsh",
    lastName: "Surela",
    username: "harshh",
    contact: "08511827943",
    email: "harshsurela8@gmail.com",
    role: "Admin",
  },
];

export const customers: Customer[] = [
  {
    id: 1,
    name: "HAINIK BHAI",
    mobile: "84017 95115",
    email: "",
    gstNo: "",
  },
  {
    id: 2,
    name: "M N AUTO (MAKSUD BHAI)",
    mobile: "9978699177",
    email: "",
    gstNo: "",
  },
  {
    id: 3,
    name: "SAGAR SHAH VBN",
    mobile: "7359792219",
    email: "",
    gstNo: "",
  },
  {
    id: 4,
    name: "Jayesh Bhai Baroda",
    mobile: "9537570707",
    email: "",
    gstNo: "",
  },
];

export const companies: Company[] = [
  {
    id: 1,
    name: "Exotic Cars",
    contactNo: "",
    gstin: "",
    address: "",
  },
];

export const carModels: CarModel[] = [
  { id: 1, brandName: "Audi", modelName: "A3" },
  { id: 2, brandName: "Audi", modelName: "A4" },
  { id: 3, brandName: "Audi", modelName: "A5" },
  { id: 4, brandName: "Audi", modelName: "A6" },
  { id: 5, brandName: "Audi", modelName: "A7" },
  { id: 6, brandName: "Audi", modelName: "A8" },
  { id: 7, brandName: "Audi", modelName: "A8 L" },
  { id: 8, brandName: "Audi", modelName: "Q2" },
];

export const carBrands: CarBrand[] = [
  { id: 1, name: "Aston Martin" },
  { id: 2, name: "Audi" },
  { id: 3, name: "Bentley" },
  { id: 4, name: "BMW" },
  { id: 5, name: "Byd" },
  { id: 6, name: "Chevrolet" },
  { id: 7, name: "Citroen" },
  { id: 8, name: "Datsun" },
  { id: 9, name: "Ferrari" },
  { id: 10, name: "Fiat" },
  { id: 11, name: "Force" },
  { id: 12, name: "Ford" },
  { id: 13, name: "Hindustan Motors" },
  { id: 14, name: "Honda" },
  { id: 15, name: "Hyundai" },
  { id: 16, name: "Isuzu" },
  { id: 17, name: "Jaguar" },
  { id: 18, name: "Jeep" },
  { id: 19, name: "Kia" },
  { id: 20, name: "Lamborghini" },
  { id: 21, name: "Land Rover" },
  { id: 22, name: "Lexus" },
  { id: 23, name: "Mahindra" },
  { id: 24, name: "Maruti Suzuki" },
  { id: 25, name: "Maserati" },
  { id: 26, name: "Mercedes" },
  { id: 27, name: "MG" },
  { id: 28, name: "MG (Morris Garages)" },
  { id: 29, name: "Mini" },
  { id: 30, name: "Mitsubishi" },
  { id: 31, name: "Nissan" },
  { id: 32, name: "Opel" },
  { id: 33, name: "Porsche" },
  { id: 34, name: "Renault" },
  { id: 35, name: "Rolls Royce" },
  { id: 36, name: "Skoda" },
  { id: 37, name: "Tata" },
  { id: 38, name: "Toyota" },
  { id: 39, name: "VinFast" },
  { id: 40, name: "Volkswagen" },
  { id: 41, name: "Volvo" },
];

export const carBrandMasterOptions = carBrands.map((brand) => brand.name);

export const taxSlabs: TaxSlab[] = [
  { id: 1, name: "EXEMPTED", rate: "0" },
  { id: 2, name: "GST@18%", rate: "18" },
  { id: 3, name: "NONE", rate: "0" },
];

export const products: Product[] = [];

const videographers = ["Jignesh Videographer", "Nirav Videographer"];
const videoEditors = ["Dhaval Editor", "Mitesh Editor"];
const socialPosters = ["Riya Poster", "Karan Poster"];

const videoTypeByService: Record<string, VideoWorkflowType> = {
  "Delivery Reel": "Reel",
  "Walkaround Video": "Walkaround",
  "Posting Package": "YouTube",
  "GRAPHENE COATING": "Reel",
};

const stageByWorkflowStatus: Record<JobCard["workflowStatus"], VideoWorkflowStage> = {
  "Recording Pending": "Recording",
  "Recording Completed": "Pending Edit",
  "Editing Pending": "Pending Edit",
  "Editing Completed": "Ready To Post",
  "Posting Pending": "Editing",
  "Posting Completed": "Posted",
};

function parseCrmDate(value: string) {
  const [day, month, year] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function isSameDate(left: Date, right: Date) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function isSameMonth(left: Date, right: Date) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth()
  );
}

export const jobCards: JobCard[] = [
  {
    id: 693,
    customerName: "HAINIK BHAI",
    mobile: "84017 95115",
    carBrand: "Hyundai",
    carModel: "i20",
    carColor: "BLUE",
    carNumber: "GJ01WF3493",
    vehicle: "Hyundai i20",
    bookingDate: "25-06-2026",
    bookingDateTime: "25 Jun 2026, 18:11",
    deliveryDate: "25-06-2026",
    deliveryDateTime: "25 Jun 2026",
    services: ["GRAPHENE COATING"],
    note: "GRAPHENE COATING 3 YEARS , DEEP CLEANINNG , NUMBER PLATE FITTING",
    status: "Open",
    workflowStatus: "Recording Pending",
  },
  {
    id: 691,
    customerName: "M N AUTO (MAKSUD BHAI)",
    mobile: "9978699177",
    carBrand: "Mercedes",
    carModel: "ML 250 CDI",
    carColor: "WHITE",
    carNumber: "GJ01AB6910",
    vehicle: "Mercedes ML 250 CDI",
    bookingDate: "25-06-2026",
    bookingDateTime: "25 Jun 2026, 15:45",
    deliveryDate: "25-06-2026",
    deliveryDateTime: "25 Jun 2026",
    services: ["Walkaround Video"],
    note: "Delivery reel and interior cleaning highlights.",
    status: "Open",
    workflowStatus: "Recording Pending",
  },
  {
    id: 690,
    customerName: "SAGAR SHAH VBN",
    mobile: "7359792219",
    carBrand: "Hyundai",
    carModel: "Verna",
    carColor: "BLACK",
    carNumber: "GJ01CD6900",
    vehicle: "Hyundai Verna",
    bookingDate: "25-06-2026",
    bookingDateTime: "25 Jun 2026, 14:20",
    deliveryDate: "25-06-2026",
    deliveryDateTime: "25 Jun 2026",
    services: ["Delivery Reel"],
    note: "Capture exterior handover and dashboard feature shots.",
    status: "Open",
    workflowStatus: "Editing Pending",
  },
  {
    id: 689,
    customerName: "Jayesh Bhai Baroda",
    mobile: "9537570707",
    carBrand: "Audi",
    carModel: "A4",
    carColor: "GREY",
    carNumber: "GJ06EF6890",
    vehicle: "Audi A4",
    bookingDate: "24-06-2026",
    bookingDateTime: "24 Jun 2026, 12:10",
    deliveryDate: "24-06-2026",
    deliveryDateTime: "24 Jun 2026",
    services: ["Posting Package"],
    note: "Post edited reel after final customer approval.",
    status: "Open",
    workflowStatus: "Editing Pending",
  },
  {
    id: 666,
    customerName: "HARSHIT BHAI (BABAJI)",
    mobile: "8000688777",
    carBrand: "Audi",
    carModel: "A6",
    carColor: "WHITE",
    carNumber: "GJ01GH6660",
    vehicle: "Audi A6",
    bookingDate: "17-06-2026",
    bookingDateTime: "17 Jun 2026, 18:00",
    deliveryDate: "18-06-2026",
    deliveryDateTime: "18 Jun 2026",
    services: ["GRAPHENE COATING"],
    note: "Shoot coating finish and delivery walkthrough.",
    status: "Open",
    workflowStatus: "Posting Pending",
  },
  {
    id: 664,
    customerName: "Kitchen Express",
    mobile: "9913342624",
    carBrand: "Land Rover",
    carModel: "Range Rover Sport",
    carColor: "BLACK",
    carNumber: "GJ01IJ6640",
    vehicle: "Land Rover Range Rover Sport",
    bookingDate: "17-06-2026",
    bookingDateTime: "17 Jun 2026, 11:30",
    deliveryDate: "18-06-2026",
    deliveryDateTime: "18 Jun 2026",
    services: ["Walkaround Video"],
    note: "Highlight front grille, cabin, and final delivery visuals.",
    status: "Open",
    workflowStatus: "Posting Pending",
  },
  {
    id: 663,
    customerName: "CHIRAGBHAI PATEL",
    mobile: "9898143300",
    carBrand: "Honda",
    carModel: "Brio",
    carColor: "RED",
    carNumber: "GJ01KL6630",
    vehicle: "Honda Brio",
    bookingDate: "16-06-2026",
    bookingDateTime: "16 Jun 2026, 10:15",
    deliveryDate: "18-06-2026",
    deliveryDateTime: "18 Jun 2026",
    services: ["Delivery Reel"],
    note: "Short social edit with customer handover.",
    status: "Open",
    workflowStatus: "Editing Pending",
  },
  {
    id: 460,
    customerName: "HIREN BHAI",
    mobile: "98795 12332",
    carBrand: "Honda",
    carModel: "Accord",
    carColor: "SILVER",
    carNumber: "GJ01MN4600",
    vehicle: "Honda Accord",
    bookingDate: "03-04-2026",
    bookingDateTime: "03 Apr 2026, 09:45",
    deliveryDate: "03-04-2026",
    deliveryDateTime: "03 Apr 2026",
    services: ["Walkaround Video"],
    note: "Classic delivery shoot and dashboard closeups.",
    status: "Open",
    workflowStatus: "Recording Pending",
  },
  {
    id: 343,
    customerName: "Jogesh Bhai",
    mobile: "7305148525",
    carBrand: "Mercedes",
    carModel: "C63 AMG",
    carColor: "BLACK",
    carNumber: "GJ01OP3430",
    vehicle: "Mercedes C63 AMG",
    bookingDate: "13-02-2026",
    bookingDateTime: "13 Feb 2026, 17:15",
    deliveryDate: "28-02-2026",
    deliveryDateTime: "28 Feb 2026",
    services: ["Posting Package"],
    note: "Performance-focused reel with exhaust and interior details.",
    status: "Open",
    workflowStatus: "Recording Pending",
  },
];

export const dashboardStats = [
  {
    key: "total",
    label: "Total Job Cards",
    value: 667,
    icon: "calendar",
    tone: "blue",
    detail: "42 created this month",
    href: "/job-card",
  },
  {
    key: "open",
    label: "Open Job Cards",
    value: jobCards.filter((jobCard) => jobCard.status === "Open").length,
    icon: "wrench",
    tone: "cyan",
    detail: "Ready for follow-up",
  },
  {
    key: "rejected-video-requests",
    label: "Rejected Video Requests",
    value: 58,
    icon: "ban",
    tone: "red",
    detail: "Review queue updated today",
  },
  {
    key: "recording-pending",
    label: "Video Recording: Pending",
    value: 8,
    icon: "video",
    tone: "amber",
    detail: "2 due before evening",
  },
  {
    key: "recording-completed",
    label: "Video Recording: Completed",
    value: 102,
    icon: "check",
    tone: "emerald",
    detail: "86% completion rate",
  },
  {
    key: "editing-pending",
    label: "Video Editing: Pending",
    value: 67,
    icon: "edit",
    tone: "amber",
    detail: "12 marked priority",
  },
  {
    key: "editing-completed",
    label: "Video Editing: Completed",
    value: 35,
    icon: "check",
    tone: "emerald",
    detail: "7 delivered today",
  },
  {
    key: "posting-pending",
    label: "Video Posting: Pending",
    value: 35,
    icon: "share",
    tone: "amber",
    detail: "Across 5 platforms",
  },
  {
    key: "posting-completed",
    label: "Video Posting: Completed",
    value: 0,
    icon: "check",
    tone: "emerald",
    detail: "No posts published yet",
  },
] satisfies Array<{
  key: string;
  label: string;
  value: number;
  icon: DashboardStatIcon;
  tone: DashboardStatTone;
  detail: string;
  href?: string;
}>;

export const videoWorkflowTasks = jobCards.map((jobCard, index) => {
  const stage = stageByWorkflowStatus[jobCard.workflowStatus];
  const videoType =
    jobCard.services.map((service) => videoTypeByService[service]).find(Boolean) ??
    "Reel";
  const videographer = videographers[index % videographers.length];
  const editor =
    stage === "Recording" ? undefined : videoEditors[index % videoEditors.length];
  const poster =
    stage === "Posted" || stage === "Ready To Post"
      ? socialPosters[index % socialPosters.length]
      : undefined;

  return {
    jobCardId: jobCard.id,
    customer: jobCard.customerName,
    carDetails: jobCard.vehicle,
    carNumber: jobCard.carNumber,
    videoType,
    stage,
    assignedTo: [
      { role: "videographer" as const, name: videographer },
      ...(editor ? [{ role: "editor" as const, name: editor }] : []),
      ...(poster ? [{ role: "poster" as const, name: poster }] : []),
    ],
    dueDate: jobCard.deliveryDate,
    isOverdue: jobCard.status === "Open" && stage !== "Posted",
  };
});

export const videoWorkflowStats = [
  {
    key: "pending-acceptance",
    label: "Pending Acceptance",
    value: videoWorkflowTasks.filter((task) => task.stage === "Recording").length,
    icon: "acceptance",
    tone: "amber",
  },
  {
    key: "in-progress",
    label: "In Progress",
    value: videoWorkflowTasks.filter((task) =>
      ["Recording", "Pending Edit", "Editing", "Ready To Post"].includes(task.stage)
    ).length,
    icon: "video",
    tone: "blue",
  },
  {
    key: "completed-today",
    label: "Completed Today",
    value: videoWorkflowTasks.filter(
      (task) => task.stage === "Posted" && isSameDate(parseCrmDate(task.dueDate), new Date())
    ).length,
    icon: "check",
    tone: "emerald",
  },
  {
    key: "completed-this-month",
    label: "Completed This Month",
    value: videoWorkflowTasks.filter(
      (task) =>
        task.stage === "Posted" && isSameMonth(parseCrmDate(task.dueDate), new Date())
    ).length,
    icon: "calendar",
    tone: "cyan",
  },
] satisfies Array<{
  key: string;
  label: string;
  value: number;
  icon: "acceptance" | "video" | "check" | "calendar";
  tone: DashboardStatTone;
}>;

export const videoWorkflowPeople = [
  {
    key: "videographers",
    title: "Videographers",
    role: "videographer",
    tone: "blue",
    people: videographers.map((name) => ({
      name,
      active: videoWorkflowTasks.filter((task) =>
        task.assignedTo.some(
          (assignee) => assignee.role === "videographer" && assignee.name === name
        )
      ).length,
      done: videoWorkflowTasks.filter(
        (task) =>
          task.stage !== "Recording" &&
          task.assignedTo.some(
            (assignee) =>
              assignee.role === "videographer" && assignee.name === name
          )
      ).length,
    })),
  },
  {
    key: "editors",
    title: "Video Editors",
    role: "editor",
    tone: "emerald",
    people: videoEditors.map((name) => ({
      name,
      active: videoWorkflowTasks.filter((task) =>
        task.assignedTo.some(
          (assignee) => assignee.role === "editor" && assignee.name === name
        )
      ).length,
      done: videoWorkflowTasks.filter(
        (task) =>
          ["Ready To Post", "Posted"].includes(task.stage) &&
          task.assignedTo.some(
            (assignee) => assignee.role === "editor" && assignee.name === name
          )
      ).length,
    })),
  },
  {
    key: "posters",
    title: "Social Media Posters",
    role: "poster",
    tone: "cyan",
    people: socialPosters.map((name) => ({
      name,
      active: videoWorkflowTasks.filter((task) =>
        task.assignedTo.some(
          (assignee) => assignee.role === "poster" && assignee.name === name
        )
      ).length,
      done: videoWorkflowTasks.filter(
        (task) =>
          task.stage === "Posted" &&
          task.assignedTo.some(
            (assignee) => assignee.role === "poster" && assignee.name === name
          )
      ).length,
    })),
  },
] satisfies Array<{
  key: string;
  title: string;
  role: VideoWorkflowRole;
  tone: "blue" | "emerald" | "cyan";
  people: Array<{ name: string; active: number; done: number }>;
}>;

export const todaysJobCards = jobCards.slice(0, 4).map((jobCard) => ({
  jobNo: `#${jobCard.id}`,
  customer: jobCard.customerName,
  car: jobCard.vehicle,
  service: jobCard.workflowStatus,
  status: jobCard.status,
  due: jobCard.deliveryDate,
}));

export const workflowPulse = [
  { label: "Recording", value: "74%", colorClass: "bg-[#22b8cf]" },
  { label: "Editing", value: "41%", colorClass: "bg-[#315cc7]" },
  { label: "Posting", value: "18%", colorClass: "bg-[#f2b72f]" },
];

export const upcomingTasks = [
  { label: "Confirm shoot bay", time: "1:00 PM" },
  { label: "Assign editor", time: "2:00 PM" },
  { label: "Client approval call", time: "3:00 PM" },
];

export const customerOptions = [
  { value: "hainik-bhai", label: "HAINIK BHAI" },
  { value: "mn-auto", label: "M N AUTO (MAKSUD BHAI)" },
  { value: "sagar-shah", label: "SAGAR SHAH VBN" },
  { value: "jayesh-bhai", label: "Jayesh Bhai Baroda" },
];

export const carBrandOptions = [
  { value: "hyundai", label: "Hyundai" },
  { value: "mercedes", label: "Mercedes-Benz" },
  { value: "audi", label: "Audi" },
  { value: "honda", label: "Honda" },
  { value: "land-rover", label: "Land Rover" },
];

export const carModelOptions = [
  { value: "hyundai-i20", label: "i20" },
  { value: "mercedes-ml-250", label: "ML 250 CDI" },
  { value: "hyundai-verna", label: "Verna" },
  { value: "audi-a4", label: "A4" },
  { value: "honda-accord", label: "Accord" },
];

export const serviceOptions = [
  { value: "walkaround", label: "Walkaround Video" },
  { value: "delivery", label: "Delivery Reel" },
  { value: "posting", label: "Posting Package" },
  { value: "graphene-coating", label: "GRAPHENE COATING" },
];

export function getJobCardById(id: number) {
  return jobCards.find((jobCard) => jobCard.id === id);
}
