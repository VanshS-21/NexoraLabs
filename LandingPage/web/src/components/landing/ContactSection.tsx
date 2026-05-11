"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { analyticsEvents } from "@/content/analytics-events";
import { contact } from "@/content/landing/contact";
import {
  inquirySchema,
  type InquiryFormInput,
  type InquiryInput,
} from "@/features/inquiry/inquiry.schema";
import { trackEvent } from "@/lib/analytics/track";
import { siteRoutes } from "@/lib/routes/site-routes";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { StatusMessage } from "@/components/ui/StatusMessage";

type ApiResponse = {
  ok: boolean;
  message?: string;
  error?: string;
};

const emptyInquiry = (): InquiryFormInput => ({
  name: "",
  email: "",
  phone: "",
  businessType: "",
  currentWebsite: "",
  serviceNeeded: "",
  primaryGoal: "",
  timeline: "",
  projectNotes: "",
  company: "",
  startedAt: Date.now(),
});

export const ContactSection = () => {
  const [status, setStatus] = useState<{ tone: "success" | "error"; message: string } | null>(null);
  const hasStarted = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormInput, unknown, InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: emptyInquiry(),
  });

  const handleFormFocus = () => {
    if (hasStarted.current) {
      return;
    }

    hasStarted.current = true;
    trackEvent(analyticsEvents.contactStarted, {
      surface: "homepage_contact",
    });
  };

  const onSubmit = async (values: InquiryInput) => {
    setStatus(null);

    try {
      const response = await fetch(siteRoutes.inquiryApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as ApiResponse;

      if (!response.ok || !result.ok) {
        const message = result.error ?? "We could not send this inquiry.";
        setError("root", { message });
        setStatus({ tone: "error", message });
        trackEvent(analyticsEvents.contactFailed, {
          reason: response.status,
        });
        return;
      }

      const message = result.message ?? "Thanks. We will review this and reply soon.";
      setStatus({ tone: "success", message });
      reset(emptyInquiry());
      hasStarted.current = false;
      trackEvent(analyticsEvents.contactSubmitted, {
        service: values.serviceNeeded,
        businessType: values.businessType,
        timeline: values.timeline,
      });
    } catch {
      const message = "We could not send this inquiry. Please email us directly.";
      setError("root", { message });
      setStatus({ tone: "error", message });
      trackEvent(analyticsEvents.contactFailed, {
        reason: "network",
      });
    }
  };

  const handleValidatedSubmit = (event: FormEvent<HTMLFormElement>) => {
    void handleSubmit(onSubmit)(event);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Start a project</p>
        <h2 id="contact-title">{contact.title}</h2>
        <p>{contact.intro}</p>
      </div>
      <form className="contact-form" noValidate onFocusCapture={handleFormFocus} onSubmit={handleValidatedSubmit}>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" {...register("company")} />
        <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
        <div className="form-grid">
          {contact.fields.map((field) => (
            <Field
              key={field.id}
              field={field}
              registerProps={register(field.id)}
              error={errors[field.id]?.message ? String(errors[field.id]?.message) : undefined}
            />
          ))}
        </div>
        {status ? <StatusMessage tone={status.tone}>{status.message}</StatusMessage> : null}
        {errors.root?.message ? <StatusMessage tone="error">{errors.root.message}</StatusMessage> : null}
        <Button disabled={isSubmitting} icon={<Send aria-hidden="true" size={18} />} type="submit">
          {isSubmitting ? "Sending" : "Send inquiry"}
        </Button>
      </form>
    </section>
  );
};
