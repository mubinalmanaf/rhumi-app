# Waitlist → Google Sheet (Apps Script)

Signups from the site append rows to a Google Sheet you own. Free, unlimited.

## 1. Create the Sheet + script
1. New Google Sheet (any name).
2. **Extensions → Apps Script**. Delete the sample code, paste this, and **Save**:

```javascript
const SHEET_NAME = 'Signups';

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); }
      catch (_) { data = (e && e.parameter) || {}; }
    } else {
      data = (e && e.parameter) || {};
    }
    var email = (data.email || '').toString().trim();
    if (!email) return json({ result: 'error', message: 'no email' });
    var source = (data.source || 'website').toString();

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp', 'Email', 'Source']);
    sheet.appendRow([new Date(), email, source]);

    return json({ result: 'ok' });
  } catch (err) {
    return json({ result: 'error', message: String(err) });
  }
}

function doGet() {
  return json({ result: 'ok', service: 'rhumi-waitlist' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 2. Deploy as a Web App
1. **Deploy → New deployment**. Click the gear → **Web app**.
2. Settings:
   - **Execute as:** Me
   - **Who has access:** **Anyone**
3. **Deploy**, then **Authorize access** (pick your Google account → Advanced → "Go to … (unsafe)" → Allow — this is your own script).
4. Copy the **Web app URL** — it ends in `/exec`.

## 3. Hand it off
Paste that `/exec` URL as `endpoint` in `lib/waitlist.ts` and rebuild, then the live
form writes straight to the Sheet's **Signups** tab (Timestamp · Email · Source).

> Re-deploying the script later: use **Deploy → Manage deployments → edit (pencil) →
> Version: New version** so the URL stays the same.
