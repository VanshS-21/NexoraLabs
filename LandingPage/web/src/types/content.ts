export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ServiceLine = {
  id: string;
  name: string;
  summary: string;
  whenNeeded: string[];
  deliverables: string[];
  outcomes: string[];
};

export type ClientCategory = {
  id: string;
  label: string;
  actionFrame: string;
  examples: string[];
  trustProblem: string;
  primaryActions: string[];
};

export type EngagementPath = {
  id: string;
  label: string;
  fits: string;
  likelyServices: string[];
  qualificationPrompt: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  portrait?: MediaAsset;
  links?: LinkItem[];
  isPlaceholder?: boolean;
};

export type InquiryField = {
  id:
    | "name"
    | "email"
    | "phone"
    | "businessType"
    | "currentWebsite"
    | "serviceNeeded"
    | "primaryGoal"
    | "timeline"
    | "projectNotes";
  label: string;
  type: "text" | "email" | "tel" | "url" | "select" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};
