import { Contact } from "../models/ContactModel.js";

export async function homePage(req, res) {
  const contacts = await Contact.findContacts()
  res.render(`index`, { contacts });
  return;
}

// export function postForm(req, res) {
//   res.send(req.body);
//   return;
// }