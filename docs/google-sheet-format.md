# Google Sheet Format

Create one Google Form per enquiry type, then link each form to its own Google Sheet or to a separate tab in the same spreadsheet.

## Inquiry Sheet

| Column | Purpose | Site config key |
| --- | --- | --- |
| Timestamp | Added by Google Forms automatically | Not needed |
| Full Name | Visitor name | `googleForms.inquiry.entries.name` |
| Phone Number | Visitor phone number | `googleForms.inquiry.entries.phone` |
| Email Address | Visitor email address | `googleForms.inquiry.entries.email` |
| Message | Visitor message | `googleForms.inquiry.entries.message` |
| Locale | `en` or `mr` | `googleForms.inquiry.entries.locale` |
| Submitted From | Page URL where the enquiry was submitted | `googleForms.inquiry.entries.submittedFrom` |

## Membership Sheet

| Column | Purpose | Site config key |
| --- | --- | --- |
| Timestamp | Added by Google Forms automatically | Not needed |
| Full Name | Visitor name | `googleForms.membership.entries.name` |
| Phone Number | Visitor phone number | `googleForms.membership.entries.phone` |
| Email Address | Visitor email address | `googleForms.membership.entries.email` |
| Membership Interest | Membership-specific detail | `googleForms.membership.entries.membership` |
| Message | Visitor message | `googleForms.membership.entries.message` |
| Locale | `en` or `mr` | `googleForms.membership.entries.locale` |
| Submitted From | Page URL where the enquiry was submitted | `googleForms.membership.entries.submittedFrom` |

## Hall Sheet

| Column | Purpose | Site config key |
| --- | --- | --- |
| Timestamp | Added by Google Forms automatically | Not needed |
| Full Name | Visitor name | `googleForms.hall.entries.name` |
| Phone Number | Visitor phone number | `googleForms.hall.entries.phone` |
| Email Address | Visitor email address | `googleForms.hall.entries.email` |
| Event Type | Hall enquiry event type | `googleForms.hall.entries.eventType` |
| Preferred Date | Hall enquiry date | `googleForms.hall.entries.eventDate` |
| Approx. Guests | Hall enquiry guest count | `googleForms.hall.entries.guestCount` |
| Message | Visitor message | `googleForms.hall.entries.message` |
| Locale | `en` or `mr` | `googleForms.hall.entries.locale` |
| Submitted From | Page URL where the enquiry was submitted | `googleForms.hall.entries.submittedFrom` |

## Seva Sheet

| Column | Purpose | Site config key |
| --- | --- | --- |
| Timestamp | Added by Google Forms automatically | Not needed |
| Full Name | Visitor name | `googleForms.seva.entries.name` |
| Phone Number | Visitor phone number | `googleForms.seva.entries.phone` |
| Email Address | Visitor email address | `googleForms.seva.entries.email` |
| Seva Interest | Seva-specific detail | `googleForms.seva.entries.sevaInterest` |
| Message | Visitor message | `googleForms.seva.entries.message` |
| Locale | `en` or `mr` | `googleForms.seva.entries.locale` |
| Submitted From | Page URL where the enquiry was submitted | `googleForms.seva.entries.submittedFrom` |

## Setup

1. Create a Google Form with matching questions.
2. Link the Google Form to a Google Sheet.
3. Open the published form, inspect each input, and copy each `entry.xxxxx` name.
4. Paste each form action URL and entry IDs into the matching `googleForms.inquiry`, `googleForms.membership`, `googleForms.hall`, or `googleForms.seva` section in `lib/siteConfig.ts`.

The form action URL should look like:

```text
https://docs.google.com/forms/d/e/FORM_ID/formResponse
```

Each entry key should look like:

```text
entry.123456789
```
