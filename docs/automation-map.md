# Tawaret Hippo Herbals Automation Map

Last reviewed: 2026-07-13

This document records the approved operating system, what is live, what is manual, and what still requires connection.

## System layers

| Layer | Tools | Purpose |
|---|---|---|
| Attention and trust | Instagram, TikTok, WhatsApp Status | Consistent content, visibility, education, and calls to action. |
| Information and capture | GitHub Pages website, Find Your Match Google Form | Product information, basic inquiry routing, and lead capture. |
| Conversion | Business WhatsApp, +1-868-264-5784 | Orders, reorders, consultation conversion, payment instructions, and pickup arrangements. |
| Operations | Google Sheets, Google Drive, Google Calendar | Lead, order, consultation, follow-up, content, document, and booking records. |
| Automation | Make.com under `tawarethippo35@gmail.com` | Move approved data between forms, sheets, AI steps, and review queues. |
| AI assistance | ChatGPT and Gemini | Drafting, classification, organization, repurposing, and reviewable replies. |

## Active website components

| Component | Location | Status | Data flow |
|---|---|---|---|
| Public website | `https://tawarethippo35-lab.github.io/tawaret-hippo-herbals/` | Live | Visitor → product or information page → WhatsApp or form. |
| Find Your Match | `/find-your-match/` with embedded Google Form | Live | Visitor → form → Google Form responses → manual review and WhatsApp follow-up. |
| Guided assistant | Floating “Need help?” website control | Live | Visitor choice → relevant page, form, WhatsApp, or consultation path. |
| Internal Sales Assistant | `/sales-assistant/` | Built, human-review only | Inquiry pasted manually → local classification and draft → copy or open WhatsApp. No external logging is connected. |

## Sales Assistant classification

The internal assistant classifies inquiries as:

- Order
- Re-order
- Pickup
- Product Recommendation
- General Question
- Paid Consultation

All prepared replies require human review. The tool must not automatically send WhatsApp messages or expose customer information.

## Lead tracking

### Existing outreach workbook

- File: `tawaret-whatsapp-lead-tracker.xlsx`
- Tabs: Daily Sends, Message Templates, How To Use
- Capacity: 200 pre-wired click-to-send rows
- Operating target: 20–30 messages per day
- Status: Built and formula-tested; real contacts must be added in the Tawaret Google account.

### Intended sales lead flow

1. A lead arrives from WhatsApp, the website, Find Your Match, Instagram, TikTok, WhatsApp Status, a referral, or another approved source.
2. The inquiry is classified.
3. A response is drafted for Nyla's review.
4. The lead is logged in Google Sheets.
5. Status and follow-up date are updated.
6. Nyla reviews and sends the WhatsApp reply.

A dedicated `Sales Leads` tab was created in `tawaret-whatsapp-lead-tracker` on 2026-07-13 with 14 mapped fields, validation, filtering, a frozen header, and Trinidad timezone. A fake lead passed the Sheet write/read test and was deleted afterward. The Make.com webhook and website submission connection are not yet configured, so automatic lead logging is not live.

## Consultation flow

- Consultation price: TT$250.
- Current flow: payment → intake → booking within 24–48 hours.
- Google Calendar is the approved booking system.
- Female consultation booking and tracking were previously configured.
- Any Make.com calendar-to-sheet scenario must be re-inspected in the Tawaret account before being described as active.
- Lymphatic drainage massage is paused and must not be routed or automated.

## Payment flow

- Current reliable process: customer requests order → Nyla confirms availability and total → bank transfer → payment screenshot → pickup time arranged.
- WiPay is intended for Tawaret, but a reusable website payment link has not been confirmed.
- Do not add a fake WiPay URL or advertise instant website checkout.
- The safe website option is a WiPay inquiry/request button followed by an invoice or payment link created for the customer when the process is confirmed.

## Content workflow target

1. Capture one approved content idea in a Google Sheet or content database.
2. Generate reviewable versions for TikTok, Instagram, and WhatsApp Status.
3. Save approved copy and assets in the Tawaret Google Drive.
4. Add the approved publication date and status.
5. Publish manually until platform connections and safeguards are tested.
6. Record inquiries and sales that result from the content.

No automatic social publishing workflow should be marked active until it has been built, tested, and explicitly approved.

## Make.com controls

- Use the Tawaret Make.com account under `tawarethippo35@gmail.com` only.
- Never use the BTSY Make.com account or connections.
- Keep scenarios off during setup and controlled testing.
- Use fake or test leads first.
- Test no more data than needed to prove the flow.
- Check duplicate prevention, required-field handling, error logging, and human-review routing.
- Do not send live customer messages or activate a schedule without explicit approval.

## Next implementation sequence

1. Live website customer-journey audit: completed 2026-07-13.
2. Priority conversion and accessibility corrections: completed and published 2026-07-13.
3. Internal Sales Assistant review, human-review correction, and approval: completed 2026-07-13.
4. Sales Leads destination tab and fake-row Sheet test: completed 2026-07-13. Make.com webhook connection remains pending.
5. Test lead creation, duplicate handling, status, and follow-up fields with fake data.
6. Build the content organization and repurposing workflow.
7. Add publishing assistance only after the manual review flow is reliable.

## Required documentation after each automation test

- Scenario name
- Account used
- Trigger
- Modules and connections
- Input fields
- Output destination
- Test data used
- Result
- Duplicate and error behavior
- Whether the scenario was left on or off
- Remaining manual step
