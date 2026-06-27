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
