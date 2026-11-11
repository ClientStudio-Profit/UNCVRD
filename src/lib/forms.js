// Integration points for the contact and newsletter forms.
//
// Nothing is sent or stored yet. Each function validates its input and returns
// { ok, delivered } — `delivered` stays false until a real backend is wired in.
// To connect a service, replace the marked block with a fetch() to your API
// route or provider (e.g. /api/inquiry, Resend, Mailchimp) and return
// { ok: true, delivered: true } on success.

export const PROJECT_TYPES = ["Film Production", "Commercial", "Documentary", "Photography", "Post Production", "Other"];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isEmail = (value) => EMAIL.test(String(value || "").trim());

export function validateInquiry(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = "Please enter your full name.";
  if (!values.email?.trim()) errors.email = "Please enter your email address.";
  else if (!isEmail(values.email)) errors.email = "That email address doesn't look right.";
  if (values.phone?.trim() && !/^[+()\d\s-]{6,}$/.test(values.phone.trim())) errors.phone = "Use digits, spaces, and + ( ) - only.";
  if (!values.projectType) errors.projectType = "Please choose a project type.";
  if (!values.description?.trim()) errors.description = "Tell us a little about the project.";
  else if (values.description.trim().length < 20) errors.description = "A few more details help — at least 20 characters.";
  return errors;
}

export async function submitInquiry(values) {
  // --- INTEGRATION POINT: replace with a real request -----------------------
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { ok: true, delivered: false, values };
  // ---------------------------------------------------------------------------
}

export async function subscribeToNewsletter(email) {
  // --- INTEGRATION POINT: replace with a real request -----------------------
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { ok: true, delivered: false, email };
  // ---------------------------------------------------------------------------
}
