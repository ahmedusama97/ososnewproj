export const REQUEST_STATUS_VALUES = [
  "draft",
  "payment_pending",
  "submitted",
  "waiting_documents",
  "in_review",
  "embassy_processing",
  "ready_for_delivery",
  "issued",
  "rejected",
] as const;

export type RequestStatusValue = (typeof REQUEST_STATUS_VALUES)[number];

export const REQUEST_STATUS_LABELS: Record<RequestStatusValue, string> = {
  draft: "مسودة",
  payment_pending: "بانتظار الدفع",
  submitted: "تم التقديم",
  waiting_documents: "بانتظار مستندات",
  in_review: "قيد المراجعة",
  embassy_processing: "قيد المعالجة بالسفارة",
  ready_for_delivery: "جاهز للتسليم",
  issued: "تم الإصدار",
  rejected: "مرفوض",
};

export const REQUEST_STATUS_STYLES: Record<RequestStatusValue, string> = {
  draft: "bg-[#e8e8ea] text-[#474746]",
  payment_pending: "bg-[#fff3d1] text-[#8d5d00]",
  submitted: "bg-[#eef6d5] text-[#556500]",
  waiting_documents: "bg-[#ffe4d1] text-[#a04a00]",
  in_review: "bg-[#fef3e2] text-[#7e5700]",
  embassy_processing: "bg-[#e3efff] text-[#194a8d]",
  ready_for_delivery: "bg-[#dff7ef] text-[#0c6b46]",
  issued: "bg-[#d9f4d8] text-[#126c39]",
  rejected: "bg-[#ffdad6] text-[#ba1a1a]",
};

export const REQUEST_STATUS_OPTIONS = REQUEST_STATUS_VALUES.map((value) => ({
  value,
  label: REQUEST_STATUS_LABELS[value],
}));

export function isRequestStatus(value: unknown): value is RequestStatusValue {
  return REQUEST_STATUS_VALUES.includes(value as RequestStatusValue);
}

export function normalizeRequestStatus(
  value: unknown,
  fallback: RequestStatusValue = "submitted",
) {
  return isRequestStatus(value) ? value : fallback;
}
