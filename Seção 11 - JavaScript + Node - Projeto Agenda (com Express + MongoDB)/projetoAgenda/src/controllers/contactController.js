import { Contact } from "../models/ContactModel.js";

export function contact(req, res) {
  res.render("contact", { contact: {} });
  return;
}

export const registerContact = async (req, res) => {
  const redirectBack = () => res.redirect(req.get("Referer") || "/contact");

  try {
    const contact = new Contact(req.body);
    await contact.register();

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(redirectBack);
      return;
    }

    req.flash("success", "Contato criado com sucesso.");
    req.session.save(() => res.redirect(`/contact/${contact.contact._id}`));
    return;
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};

export const editContact = async (req, res) => {
  if (!req.params.id) return res.render("404");
  const contact = await Contact.findById(req.params.id);
  if (!contact) return res.render("404");

  res.render("contact", { contact });
};
